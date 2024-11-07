import React, { createContext, useContext, useState } from 'react';


const PlayerContext = createContext();

export const usePlayer = () => {
  return useContext(PlayerContext); 
};


export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const addPlayers = (count) => {
    const newPlayers = [];
    for (let i = 1; i <= count; i++) {
      newPlayers.push({ id: i, name: `Jugador ${i}` });
    }
    setPlayers(newPlayers);
  };

  // Función para eliminar jugadores
  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  return (
    <PlayerContext.Provider value={{ players, addPlayers, deletePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
