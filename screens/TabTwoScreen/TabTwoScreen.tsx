import React, { 
  memo, 
  useEffect, 
  useState } from 'react';
import type { LatLng } from 'react-native-maps';
import * as SecureStore from 'expo-secure-store';
import MarkerDetails from '../MarkerDetails/MarkerDetails';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import MarkersList from '../MarkersList/MarkersList';

export interface IMarker {
  coordinate: LatLng;
  id: number;
  description: string;
  title: string;
}

function TabTwoScreen() {
  const [markers, setMarkers] = useState<IMarker[] | []>();
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [currentMarker, setCurrentMarker] = useState<IMarker>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, getError] = useState('');

  async function getMarkers() {
    try {
      const markersFromStore = await SecureStore.getItemAsync('markers') || '';
      if (markersFromStore) {
        setMarkers(JSON.parse(markersFromStore));
      }
    } catch (err) {
      console.log('error', err);
    }
  }

  useEffect(() => {
      getMarkers();
  }, [markers]);

  const openModal = (id: number) => {
    setModalVisible(!modalVisible);
    const marker = markers!.find((element) => element.id === id);
    setCurrentMarker(marker);
  };

  const openEditModal = (id?: number) => {
    setEditModalVisible(!editModalVisible);
    const marker: IMarker | undefined = markers?.find((element) => element.id === id);
    if (marker) {
      setCurrentMarker(marker);
      setTitle(marker.title);
      setDescription(marker.description);
    }
  };

  async function onDeletePress(id?: number) {
    const updatedMarkers = markers!.filter((element) => element.id !== id);
    setMarkers(updatedMarkers);
    setModalVisible(false);
    await SecureStore.setItemAsync('markers', JSON.stringify(updatedMarkers));
  }

  async function editMarker() {
    if (description.trim() === '' || title.trim() === '') {
      getError('Fields cannot be empty!');
    } else {
      const newUpdate = markers?.map((item) => item.id === currentMarker?.id ? ({
        ...item,
        title,
        description,
      }) : item);

      setMarkers(newUpdate);
      await SecureStore.setItemAsync('markers', JSON.stringify(newUpdate));
      setEditModalVisible(!editModalVisible);
    }
  }

  async function deleteAllMarkers() {
    await SecureStore.deleteItemAsync('markers');
    setMarkers([]);
    setDeleteModalVisible(false);
  }

  function markerDetails() {
    return (
      <MarkerDetails 
        currentMarker={currentMarker}
        setModalVisible={setModalVisible}
        openEditModal={openEditModal}
        onDeletePress={onDeletePress}
    />
    )
  }

  function deleteModal() {
    return (
      <DeleteModal 
        deleteModalVisible={deleteModalVisible}
        deleteAllMarkers={deleteAllMarkers}
        setDeleteModalVisible={setDeleteModalVisible}
      />
    )
  }

  function editModal() {
    return (
      <EditModal 
      editModalVisible={editModalVisible}
      title={title}
      description={description}
      error={error}
      setTitle={setTitle}
      setDescription={setDescription}
      editMarker={editMarker}
      setEditModalVisible={setEditModalVisible}
      />
    )
  }

  return (
    <MarkersList 
      deleteModalVisible={deleteModalVisible}
      modalVisible={modalVisible}
      editModalVisible={editModalVisible}
      markers={markers}
      setDeleteModalVisible={setDeleteModalVisible}
      markerDetails={markerDetails}
      editModal={editModal}
      deleteModal={deleteModal}
      openModal={openModal}
    />
  );
}

export default memo(TabTwoScreen);
