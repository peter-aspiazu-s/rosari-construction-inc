import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase, disconnectFromDatabase } from '../../../database/db';
import { Response } from '../../../models/Response';


const surveyPost = async (req: NextApiRequest, res: NextApiResponse) => {
    const { optionVisited } = req.body;

    
    try {

      // No es necesario abrir la conexión aquí si ya está configurada y se mantendrá abierta.
      // await connectToDatabase();

      // Busca el registro correspondiente
      const response = await Response.findOne({
        where: { optionVisited },
      });
  
      if (response) {
        // Si el registro existe, incrementa el contador
        await response.increment('count');
      } else {
        // Si no existe, crea un nuevo registro con el contador en 1
        await Response.create({
          optionVisited,
          count: 1,
        });
      }

      // No es necesario cerrar la conexión explícitamente aquí si se mantendrá abierta.
      // await disconnectFromDatabase();

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error al incrementar el contador en la base de datos:', error);
      await disconnectFromDatabase();
      res.status(500).json({ error: 'Error en el servidor' });
    };
};

export default surveyPost;