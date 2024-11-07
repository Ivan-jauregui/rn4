const express = require('express');
const sequelize = require('../config/db');
const equipoRoutes = require('../routes/equipoRoutes');
const jugadorRoutes = require('../routes/jugadorRoutes');
const partidoRoutes = require('../routes/partidoRoutes');
const estadisticaRoutes = require('../routes/estadisticaRoutes');
const usuarioRoutes = require('../routes/usuarioRoutes');

const app = express();
app.use(express.json());

app.use('/api/equipos', equipoRoutes);
app.use('/api/jugadores', jugadorRoutes);
app.use('/api/partidos', partidoRoutes);
app.use('/api/estadisticas', estadisticaRoutes);
app.use('/api/usuarios', usuarioRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server is running on port 3000'));
});
