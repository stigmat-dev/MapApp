import React, { memo, VFC } from "react";
import { 
  View, 
  Text, 
  Pressable, 
  Modal,
  TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./style";

interface INewMarkerProps {
  modalVisible: boolean;
  title: string;
  description: string;
  error: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  handleClick: () => void;
  setModalVisible: (value: boolean) => void;
}

const NewMarker: VFC<INewMarkerProps> = ({
  modalVisible,
  title,
  description,
  error,
  setTitle,
  setDescription,
  handleClick,
  setModalVisible
}) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
            placeholder="Add title"
          />
          <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            placeholder="Add description"
          />
          {error != null
            && <Text style={styles.errorMessage}>{error}</Text>}
          <Pressable
            style={styles.buttonOk}
            onPress={handleClick}
          >
            <Text style={styles.textStyle}>OK</Text>
          </Pressable>
          <Pressable
            style={styles.buttonCancel}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default memo(NewMarker);
