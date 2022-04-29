import React, { memo, VFC } from "react";
import { 
  Modal, 
  View, 
  Text, 
  Pressable } from "react-native";
import styles from "./style";

interface IDeleteModalProps {
  deleteModalVisible: boolean;
  deleteAllMarkers: () => void;
  setDeleteModalVisible: (value: boolean) => void;
}

const DeleteModal: VFC<IDeleteModalProps> = ({
  deleteModalVisible,
  deleteAllMarkers,
  setDeleteModalVisible,
}) => {
  return (
    <Modal
    animationType="slide"
    visible={deleteModalVisible}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Delete all markers?</Text>
        <Pressable
          style={styles.buttonDeleteAll}
          onPress={deleteAllMarkers}
        >
          <Text style={styles.textStyle}>Delete</Text>
        </Pressable>
        <Pressable
          style={styles.buttonCancel}
          onPress={() => setDeleteModalVisible(false)}
        >
          <Text style={styles.textStyle}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
  )
};

export default memo(DeleteModal);
