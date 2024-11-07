import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EquipoScreens from '../screens/EquiposScreen';
import JugadorScreen from '../screens/JugadorScreen';
import PartidoScreen from '../screens/PartidoScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import TeamCard from '../components/TeamCard'; 
import JugadorCard from '../components/JugadorCard'; 
import TeamDetailsScreen from '../screens/TeamDetailsScreen ';
import playerDetailsScreen from '../screens/playerDetailsScreen';
import { PlayerProvider } from '../components/PlayerContext'; 
import { TeamProvider } from '../components/TeamContext';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <PlayerProvider>
    <TeamProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Equipos" component={EquipoScreens} options={{ headerShown: false }}/>
        <Stack.Screen name="Jugador" component={JugadorScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Partidos" component={PartidoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TeamDetails" component={TeamDetailsScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="TeamCard" component={TeamCard} options={{ headerShown: false }} />
        <Stack.Screen name="JugadorCard" component={JugadorCard} options={{ headerShown: false }} />
        <Stack.Screen name="playerDetailsScreen" component={playerDetailsScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </TeamProvider>
    </PlayerProvider>
  );
}
