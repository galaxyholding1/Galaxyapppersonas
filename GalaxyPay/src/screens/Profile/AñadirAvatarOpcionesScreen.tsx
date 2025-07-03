import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Modal, FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const skinColors = ['#fbd1c7', '#f5c89d', '#deb890', '#c7956d', '#a76f47', '#8b572a', '#6b3b18', '#3a1f0f', '#fff1e0'];
const hairColors = ['#000000', '#5C4033', '#B5651D', '#D2B48C', '#FFD700', '#A9A9A9', '#FFFFFF', '#FF5733', '#C71585'];
const etniaOptions = ['Latino', 'Europeo', 'Asiática', 'Africano', 'Otro'];

export default function AvatarSetupScreen() {
  const [selectedSkin, setSelectedSkin] = useState('');
  const [selectedHair, setSelectedHair] = useState('');
  const [selectedEtnia, setSelectedEtnia] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'skin' | 'hair' | 'etnia' | null>(null);

  const openModal = (type: 'skin' | 'hair' | 'etnia') => {
    setModalType(type);
    setModalVisible(true);
  };

  const handleSelect = (value: string) => {
    if (modalType === 'skin') setSelectedSkin(value);
    else if (modalType === 'hair') setSelectedHair(value);
    else if (modalType === 'etnia') setSelectedEtnia(value);
    setModalVisible(false);
  };

  const renderModalContent = () => {
    if (modalType === 'skin' || modalType === 'hair') {
      const data = modalType === 'skin' ? skinColors : hairColors;
      return (
        <FlatList
          data={data}
          numColumns={5}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.colorCircle, { backgroundColor: item }]}
              onPress={() => handleSelect(item)}
            />
          )}
          contentContainerStyle={styles.colorGrid}
        />
      );
    }

    if (modalType === 'etnia') {
      return (
        <FlatList
          data={etniaOptions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)} style={styles.etniaOption}>
              <Text style={[styles.etniaText, item === 'Africano' && { color: '#e7458f' }]}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Añade el avatar a tu perfil</Text>

      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.avatar} />
      <Text style={styles.description}>Muestra tu personalidad con tu avatar en una pose y un fondo.</Text>

      {/* Botones de selección */}
      <TouchableOpacity style={styles.selector} onPress={() => openModal('skin')}>
        <Text style={styles.selectorText}>{selectedSkin ? 'Color de piel seleccionado' : 'Selecciona color de piel'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.selector} onPress={() => openModal('hair')}>
        <Text style={styles.selectorText}>{selectedHair ? 'Color de cabello seleccionado' : 'Selecciona color de cabello'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.selector} onPress={() => openModal('etnia')}>
        <Text style={styles.selectorText}>{selectedEtnia ? Etnia: ${selectedEtnia} : 'Selecciona etnia'}</Text>
      </TouchableOpacity>

      {/* Botones de acción */}
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.buttonText}>Guardar avatar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.skipText}>Ahora no</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              {modalType === 'skin'
                ? 'Selecciona color de piel'
                : modalType === 'hair'
                ? 'Selecciona color de cabello'
                : 'Selecciona etnia'}
            </Text>
            {renderModalContent()}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModal}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c1e', alignItems: 'center', padding: 20 },
  title: { fontSize: 16, color: '#f54690', marginVertical: 10 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginVertical: 20 },
  description: { color: '#ccc', textAlign: 'center', marginBottom: 20 },

  selector: {
    backgroundColor: '#2a2a2a',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    width: '90%',
  },
  selectorText: { color: '#fff', textAlign: 'center' },

  mainButton: {
    backgroundColor: '#f54690',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },

  skipText: { color: '#ccc', marginTop: 15 },

  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    maxHeight: '80%',
  },
  modalTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  colorGrid: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  etniaOption: {
    paddingVertical: 12,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  etniaText: {
    color: '#fff',
    textAlign: 'center',
  },
  closeModal: {
    textAlign: 'center',
    color: '#e7458f',
    marginTop: 20,
  },
});
