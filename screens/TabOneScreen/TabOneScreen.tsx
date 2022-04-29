import React, {
  memo,
  useEffect,
  useState,
} from 'react';
import * as Location from 'expo-location';
import * as Haptics from 'expo-haptics';
import * as SecureStore from 'expo-secure-store';
import NewMarker from '../NewMarker/NewMarker';
import Map from '../Map/Map';

export interface IMarker {
  coordinate: {
    latitude: number;
    longitude: number;
  } | undefined,
    id: number;
    description: string;
    title: string;
  }

function TabOneScreen() {

  Location.requestForegroundPermissionsAsync();

  const mapRegion = {
    latitude: 47.216687,
    longitude: 38.918686,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [pinCoordinate, setPinCoordinate] = useState<{
    latitude: number;
    longitude: number;
  } | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, getError] = useState('');

  async function getMarkers() {
    const markersFromStore = await SecureStore.getItemAsync('markers') || '';
    try {
      if (markersFromStore) {
        setMarkers(JSON.parse(markersFromStore));
      }
    } catch (err) {
      console.log('error', err);
    }
  }

  useEffect(() => {
    (async () => {
      await Location.getCurrentPositionAsync({});
    })();
  }, []);

  useEffect(() => {
    getMarkers();
  }, [markers]);

  const handleMapPress = async (coordinate: any) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setPinCoordinate(coordinate);

    setModalVisible(!modalVisible);
  };

  function saveCurrentLocation() {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync({});
      const currentCoordinate = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setPinCoordinate(currentCoordinate);
    })();

    setModalVisible(!modalVisible);
  }

  async function saveMarkers(updated: any) {
    await SecureStore.setItemAsync('markers', JSON.stringify(updated));
    setTitle('');
    setDescription('');
    getError('');
    setPinCoordinate(undefined);
  }

  const handleClick = () => {
    if (pinCoordinate === null) {
      getError('Failed to get current location, please try again later.');
      setTimeout(() => {
        setModalVisible(!modalVisible);
        setTitle('');
        setDescription('');
        getError('');
        setPinCoordinate(undefined);
      }, 3000);
    } else if (description.trim() === '' || title.trim() === '') {
      getError('Empty values not allowed');
    } else {
      const updatedMarkers: IMarker[] = [...markers, {
        coordinate: pinCoordinate,
        title: title.trim(),
        description: description.trim(),
        id: Date.now(),
      }];

      setMarkers(updatedMarkers);
      setModalVisible(!modalVisible);

      saveMarkers(updatedMarkers);
    }
  };

  function newMarker() {
    return (
      <NewMarker 
        modalVisible={modalVisible}
        title={title}
        description={description}
        error={error}
        setTitle={setTitle}
        setDescription={setDescription}
        handleClick={handleClick}
        setModalVisible={setModalVisible}
      />
    )
  }

  return (
   <Map 
      mapRegion={mapRegion}
      markers={markers}
      newMarker={newMarker}
      handleMapPress={handleMapPress}
      saveCurrentLocation={saveCurrentLocation}
   />
  );
}

export default memo(TabOneScreen);
