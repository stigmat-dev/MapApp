import React, { memo, VFC } from "react";
import { Entypo } from "@expo/vector-icons";
import { 
  View, 
  Text, 
  Pressable, 
  TouchableOpacity, 
  FlatList} from "react-native";
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
      <FlatList
        style={styles.flatList}
        data={markers}
        renderItem={({item}) => 
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => openModal(item.id)}
        >
          <View key={item.id}>
              <View>
                <Text style={styles.title}>
                  {item.title}
                </Text>
              </View>
          </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default memo(MarkersList);
