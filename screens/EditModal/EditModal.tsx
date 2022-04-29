import React, { memo, VFC } from "react";
import { 
  Modal, 
  View, 
  Text, 
  Pressable, 
  TextInput } from "react-native";
import styles from "./style";

interface IEditModalProps {
  editModalVisible: boolean;
  title: string;
  description: string;
  error: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  editMarker: () => void;
  setEditModalVisible: (value: boolean) => void;
}

const EditModal: VFC<IEditModalProps> = ({
  editModalVisible,
  title,
  description,
  error,
  setTitle,
  setDescription,
  editMarker,
  setEditModalVisible
}) => {
  return (
    <Modal
      animationType="slide"
      visible={editModalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Edit marker</Text>
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
            placeholder="Edit title"
          />
          <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            placeholder="Edit description"
          />
          {Error != null
            && <Text>{error}</Text>}
          <Pressable
            style={styles.buttonOk}
            onPress={editMarker}
          >
            <Text style={styles.textStyle}>OK</Text>
          </Pressable>
          <Pressable
            style={styles.buttonCancel}
            onPress={() => setEditModalVisible(false)}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
};

export default memo(EditModal);
