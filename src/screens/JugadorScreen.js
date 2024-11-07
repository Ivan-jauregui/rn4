import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'; // Asegúrate de tener instalado 'expo/vector-icons'
import PlayerCard from '../components/PlayerCard'; // Importamos el componente PlayerCard
import { usePlayer } from '../components/PlayerContext'; // Asegúrate de que el contexto esté importado

export default function JugadorScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [playerCount, setPlayerCount] = useState(1);
  const { addPlayers, players } = usePlayer();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const increasePlayerCount = () => setPlayerCount(playerCount + 1);
  const decreasePlayerCount = () => setPlayerCount(playerCount - 1);

  const createPlayers = () => {
    addPlayers(playerCount); // Crea los jugadores
    closeModal();
  };

  const deletePlayer = (playerNumber) => {
    setPlayers(players.filter(player => player !== playerNumber)); // Eliminamos al jugador
  };

  return (
    <View style={styles.container}>
      {/* Barra de navegación superior */}
      <View style={styles.navbar}>
        <Ionicons name="settings-outline" size={24} color="black" />
        <Text style={styles.title}>Jugadores</Text>
        <Ionicons name="search-outline" size={24} color="black" />
      </View>

      {/* Sección de iconos */}
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="trophy" size={25} color="#f5a623" />
        </TouchableOpacity>

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

      <ScrollView style={styles.playersContainer}>
        {players.map((playerNumber) => (
          <PlayerCard key={playerNumber} playerNumber={playerNumber} onDelete={deletePlayer} navigation={navigation} />
        ))}
      </ScrollView>

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
            <Text style={styles.modalTitle}>Crear jugadores</Text>
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={decreasePlayerCount}>
                <Text style={styles.counterButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterText}>{playerCount}</Text>
              <TouchableOpacity onPress={increasePlayerCount}>
                <Text style={styles.counterButton}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={createPlayers}>
              <Text style={styles.modalButtonText}>OK</Text>
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
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterButton: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  counterText: {
    fontSize: 18,
    marginHorizontal: 12,
  },
  modalButton: {
    backgroundColor: '#f5a623',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playersContainer: {
    marginTop: 20,
  },
});
