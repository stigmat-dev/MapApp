import React, { memo, VFC } from "react";
import { Entypo } from "@expo/vector-icons";
import { 
  View, 
  Text, 
  Pressable, 
  TouchableOpacity } from "react-native";
import styles from "./style";

interface IMarkers {
  id: number;
  title: string;
}

interface IMarkersListProps {
  deleteModalVisible: boolean;
  modalVisible: boolean;
  editModalVisible: boolean;
  markers: IMarkers[] | undefined;
  setDeleteModalVisible: (value: boolean) => void;
  markerDetails: () => void;
  editModal: () => void;
  deleteModal: () => void;
  openModal: (value: number) => void;
}

const MarkersList: VFC<IMarkersListProps> = ({
  deleteModalVisible,
  modalVisible,
  editModalVisible,
  markers,
  setDeleteModalVisible,
  markerDetails,
  editModal,
  deleteModal,
  openModal,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>
          Markers List
      </Text>
      <Pressable style={styles.menu} 
        onPress={() => setDeleteModalVisible(!deleteModalVisible)}>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </Pressable>
      {modalVisible && markerDetails()}
      {editModalVisible && editModal()}
      {deleteModalVisible && deleteModal()}
      {markers && markers?.length > 0 && markers?.map((element) => (
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => openModal(element.id)}
        >
          <View key={element.id}>
              <View>
                <Text style={styles.title}>
                  {element.title}
                </Text>
              </View>
          </View>
          </TouchableOpacity>
      )) }
      { !markers && (
        <Text>
          You don`t have markers yet...
        </Text>
      ) }
    </View>
  );
};

export default memo(MarkersList);
