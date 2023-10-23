import { Sequelize } from 'sequelize';

// export const sequelize = new Sequelize('');
export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.HOST_DB,
  database: process.env.DATABASE_DB,
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  dialectOptions: {
    ssl: {
      require: true, // Requerir SSL
      // Otras opciones de configuración SSL/TLS, como ca, cert, key, etc., si es necesario
    },
  }
});

// export const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: 'localhost',
//   database: 'databasesurvey',
//   username: 'root',
//   password: '',
// });

// Función para conectar a la base de datos
export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

// Función para desconectar de la base de datos
export const disconnectFromDatabase = async () => {
  try {
    await sequelize.close();
    console.log('Desconexión de la base de datos exitosa');
  } catch (error) {
    console.error('Error al desconectar de la base de datos:', error);
  }
};

// Función para sincronizar el modelo con la base de datos
export const synchronizeModel = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Modelo sincronizado con la base de datos');
  } catch (error) {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  }
};