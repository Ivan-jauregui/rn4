import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTeam } from './TeamContext'; 

export default function TeamCard({ navigation, teamNumber, onDelete }) {
  const { teams } = useTeam(); 
  const team = teams.find((team) => team.id === teamNumber);

  return (
    <View style={styles.card}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('TeamDetails', { teamId: team.id })}
      >
        <Text style={styles.cardText}>{team.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onDelete(teamNumber)}
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
