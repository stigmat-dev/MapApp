import React, { memo, VFC } from 'react';
import { Entypo } from '@expo/vector-icons';
import { 
  Pressable, 
  View, 
  Text } from 'react-native';
import MapView, { 
  Marker, 
  LatLng, 
  Region } from 'react-native-maps';
import styles  from './styles';

interface ICurrentMarker {
  coordinate: LatLng;
  id: number;
  description: string;
  title: string;
}

interface IMarkerDetailsProps {
  currentMarker: ICurrentMarker | undefined;
  setModalVisible: (value: boolean) => void;
  openEditModal: (value: number | undefined) => void;
  onDeletePress: (value: number | undefined) => void;
}

const MarkerDetails: VFC<IMarkerDetailsProps> = ({
  currentMarker,
  setModalVisible,
  openEditModal,
  onDeletePress,
}) => {

  const initialRegion: Region = {
    latitude: currentMarker?.coordinate?.latitude!,
    longitude: currentMarker?.coordinate?.longitude!,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  
  return (
    <View style={styles.mainView}>
      <Text style={styles.bigTitle}>
        Details of {' '}
        <Text style={styles.myTitle}>
          {currentMarker?.title}
        </Text>
      </Text>
      <View style={styles.modalView}>
        <Pressable
          style={styles.buttonBack}
          onPress={() => setModalVisible(false)}
        >
          <Entypo name="arrow-bold-left" size={24} color="black" />
        </Pressable>
        <Pressable
          style={styles.buttonEdit}
          onPress={() => openEditModal(currentMarker?.id)}
        >
          <Entypo name="pencil" size={24} color="black" />
        </Pressable>
        <Text style={styles.modalTextDescr}>{currentMarker?.description}</Text>
        <Text style={styles.modalTextCoord}>{currentMarker?.coordinate?.latitude}</Text>
        <Text style={styles.modalTextCoord}>{currentMarker?.coordinate?.longitude}</Text>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          showsMyLocationButton={false}
        >
          {Boolean(currentMarker?.coordinate) && (
            <Marker
              coordinate={currentMarker?.coordinate!}
              pinColor="red"
            />
          )}
        </MapView>
        <Pressable style={styles.buttonDelete} onPress={() => onDeletePress(currentMarker?.id)}>
          <Text style={styles.textStyle}>
          <Entypo name="trash" size={24} color="white" />
          </Text>
        </Pressable>
    </View>
    </View>
  );
};

export default memo(MarkerDetails);
