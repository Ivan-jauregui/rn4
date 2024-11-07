import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function JugadorCard({ navigation, jugadorNumber, onDelete }) {

  const JugadorName = `Jugador ${jugadorNumber}`;

  return (
    <View style={styles.card}>

      <TouchableOpacity 
        onPress={() => navigation.navigate('JugadorDetails', { JugadorName: JugadorName })}
      >
        <Text style={styles.cardText}>{JugadorName}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onDelete(jugadorNumber)}
      >
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
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
