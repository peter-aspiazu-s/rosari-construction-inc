import { Response } from '../../../models/Response';
import { connectToDatabase, disconnectFromDatabase } from '../../../database/db';


interface SurveyResult {
  optionVisited: string;
  count: number;
}

const fetchSurveyResults = async (): Promise<SurveyResult[] | null> => {
    try {
      console.log({msg:'antes de la conexion'})
      await connectToDatabase(); // Conectar a la base de datos
      console.log({msg:'despues de la conexion'})
      const surveyResults = await Response.findAll();
      // await disconnectFromDatabase(); // Desconectar de la base de datos
      console.log({msg:surveyResults})
      console.log({msg:'despues de surveyResults'})
      
      // Mapear los resultados a un formato serializable
      const serializableResults: SurveyResult[] = surveyResults.map((result) => ({
        optionVisited: result.get('optionVisited') as string,
        count: result.get('count') as number,
      }));

      return serializableResults;
    } catch (error) {
      console.error('Error al obtener los resultados de la encuesta:', error);
      return null;
    }
};

export default fetchSurveyResults;