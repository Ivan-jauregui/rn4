import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { usePlayer } from '../components/PlayerContext'; 

export default function PlayerCard({ navigation, playerId }) {
  const { players, deletePlayer } = usePlayer(); 
  const player = players.find((player) => player.id === playerId);

  return (
    <View style={styles.card}>
      {player ? (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('PlayerDetails', { playerId: player.id })}
          >
            <Text style={styles.cardText}>{player.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deletePlayer(player.id)} 
          >
            <Text style={styles.deleteButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Jugador no encontrado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  deleteButton: {
    backgroundColor: '#ed5858',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
