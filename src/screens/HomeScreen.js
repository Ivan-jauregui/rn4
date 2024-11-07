import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'; 

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
   
      <View style={styles.navbar}>
        <Ionicons name="settings-outline" size={24} color="black" />
        <Text style={styles.title}>Torneos</Text>
        <Ionicons name="search-outline" size={24} color="black" />
      </View>

  
      <View style={styles.iconRow}>
        <FontAwesome name="trophy" size={25} color="#f5a623" />
        
     
        <TouchableOpacity onPress={() => navigation.navigate('Equipos')}>
          <FontAwesome name="users" size={25} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Jugador')}>
        <Ionicons name="person-outline" size={25} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Partidos')}>
        <MaterialIcons name="location-on" size={25} color="black" />
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.floatingButton} onPress={openModal}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.option} onPress={closeModal}>
              <MaterialIcons name="sports-soccer" size={24} color="black" />
              <Text style={styles.optionText}>Crear nuevo torneo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={closeModal}>
              <MaterialIcons name="public" size={24} color="black" />
              <Text style={styles.optionText}>Seguir un torneo público</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  navbar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#f5a623',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
  },
});
