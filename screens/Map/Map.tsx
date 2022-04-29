import React, { memo, VFC } from "react";
import { 
  View, 
  Text, 
  Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { IMarker } from "../TabOneScreen/TabOneScreen";
import styles from "./style";

interface IMapRegion {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}

interface IMapProps {
  mapRegion: IMapRegion;
  markers: IMarker[];
  newMarker: () => void;
  handleMapPress: (value: any) => void;
  saveCurrentLocation: () => void;
}

const Map: VFC<IMapProps> = ({
  mapRegion,
  markers,
  newMarker,
  handleMapPress,
  saveCurrentLocation
}) => {
  return (
    <View style={styles.container}>
      {newMarker()}
      <MapView
        style={styles.map}
        region={mapRegion}
        showsMyLocationButton={false}
        showsUserLocation
        onPress={(event) => handleMapPress(event?.nativeEvent?.coordinate)}
      >
        {markers.length > 0 && markers.map((element: IMarker) => (
          <Marker
            coordinate={{
              latitude: element?.coordinate?.latitude!,
              longitude: element?.coordinate?.longitude!,
            }}
            pinColor="red"
            key={element.id}
          />
        )) }
      </MapView>
      <Pressable
        style={styles.saveCurrentLocation}
        onPress={saveCurrentLocation}
      >
        <Text
          style={styles.saveTextStyle}
        >
          Save current location
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(Map);
