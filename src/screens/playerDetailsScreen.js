// PlayerDetailsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { usePlayer } from '../components/PlayerContext'; 

export default function PlayerDetailsScreen({ route, navigation }) {
  const { playerId } = route.params; 
  const { players, updatePlayerName } = usePlayer(); 
  const player = players.find((player) => player.id === playerId);

  const [name, setName] = useState(player.name);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      updatePlayerName(playerId, name);
    }
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Excel_Logo_2023.svg/1024px-Excel_Logo_2023.svg.png'}} 
          style={styles.logo}
        />
        <Text style={styles.navbarText}>Detalles del Jugador</Text>
      </View>

      <View style={styles.card}>
        {isEditing ? (
          <TextInput 
            style={styles.input}
            value={name}
            onChangeText={handleNameChange}
            autoFocus
          />
        ) : (
          <Text style={styles.cardText}>{name}</Text>
        )}

        <TouchableOpacity 
          style={styles.editButton}
          onPress={toggleEdit}
        >
          <Text style={styles.editButtonText}>{isEditing ? 'Guardar' : 'Editar'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  navbarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: '80%',
    marginBottom: 10,
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
