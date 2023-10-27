import { FC, useState, useEffect, useReducer } from 'react';
import { BarChart } from './BarChart';
import { SpinnerLoading } from '../spinnerLoading/SpinnerLoading';

type ResponseType = {
    Facebook: number;
    Instagram: number;
    Twitter: number;
};
  
interface Props {
    initialResults: { optionVisited: string; count: number }[];
}

// Definir acciones para actualizar el estado
type Action = 
| { type: 'update', payload: { [key: string]: number } }
| { type: 'increment', network: keyof ResponseType };

// Función reductora para manejar acciones
const responseReducer = (state: ResponseType, action: Action): ResponseType => {
    switch (action.type) {
        case 'update':
            return { ...state, ...action.payload };
        case 'increment':
            const { network } = action;
            if (network === 'Facebook' || network === 'Instagram' || network === 'Twitter') {
                return { ...state, [network]: state[network] + 1 };
            }
            return state;
        default:
            return state;
    }
};

export const MostVisited: FC<Props> = ({ initialResults }) => {

  // Define el estado para rastrear las respuestas de los usuarios
  const [responses, dispatch] = useReducer(responseReducer, {
    Facebook: 0,
    Instagram: 0,
    Twitter: 0,
  });

  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
        // Procesa los valores iniciales para actualizar el estado
        if (initialResults) {
            initialResults.forEach((result) => {
            const { optionVisited, count } = result;
    
            // Crear una acción que representa la actualización del estado
            const updateAction: Action = {
                type: 'update',
                payload: {
                [optionVisited]: count,
                },
            };
    
            // Llamar a dispatch con la acción
            dispatch(updateAction);
            });
    
            setLoading(false);
        }
  }, [initialResults]);

  const handleResponse = async (option: keyof ResponseType) => {

    setLoadingButton(true);

    try {
      const response = await fetch('/api/survey/surveyPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ optionVisited: option }),
      });

      if (response.ok) {
        // Incrementar el contador localmente
        dispatch({ type: 'increment', network: option });

        // Marcar al usuario como que ya ha votado en el localStorage
        localStorage.setItem('hasVoted', 'true');
        setLoadingButton(false);
        setHasVoted(true);

      } else {
        console.error('Error al registrar la respuesta');
        setLoadingButton(false);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(() => {
    // Comprueba el localStorage para ver si el usuario ha votado
    const hasVotedFromStorage = localStorage.getItem('hasVoted');
    if (hasVotedFromStorage === 'true') {
      setHasVoted(true);
    }
  }, []);

  return (
    <div className='mostvisited'>
        <div className='mostvisited__container'>
            {
              hasVoted
              ? <div className='mostvisited__title'>Thanks for your vote!</div>
              : <div className='mostvisited__title'>How did you find us today?</div>
            }
            
            {
                loading 
                ? <SpinnerLoading /> 
                :   <div className='mostvisited__graphic-container'>
                      {
                        !hasVoted 
                        && <div className='mostvisited__button-container'>
                            {
                              loadingButton
                              ? <SpinnerLoading />
                              : <button 
                                  onClick={() => handleResponse('Facebook')}
                                  style={{backgroundColor:"#1877F2"}}  
                                >Facebook</button>
                            }
                            {
                              loadingButton
                              ? <SpinnerLoading />
                              : <button 
                                  onClick={() => handleResponse('Instagram')}
                                  style={{backgroundColor:"#E4405F"}}
                                >Instagram</button>
                            }
                            {
                              loadingButton
                              ? <SpinnerLoading />
                              : <button 
                                  onClick={() => handleResponse('Twitter')}
                                  style={{backgroundColor:"#1DA1F2"}}
                                >Twitter</button>
                            }
                           </div>
                      }
                        <div className='mostvisited__graphic'>
                            <BarChart responses={responses} />
                        </div>
                    </div>
            }
        </div>
    </div>
  );
};