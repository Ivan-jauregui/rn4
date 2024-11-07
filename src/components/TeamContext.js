import React, { createContext, useState, useContext } from 'react';


const TeamContext = createContext();


export const TeamProvider = ({ children }) => {
  const [teams, setTeams] = useState([
    { id: 1, name: 'Equipo 1' },
    { id: 2, name: 'Equipo 2' },

  ]);

  const updateTeamName = (teamId, newName) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId ? { ...team, name: newName } : team
      )
    );
  };

  return (
    <TeamContext.Provider value={{ teams, updateTeamName }}>
      {children}
    </TeamContext.Provider>
  );
};


export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam debe ser usado dentro de un TeamProvider');
  }
  return context;
};
