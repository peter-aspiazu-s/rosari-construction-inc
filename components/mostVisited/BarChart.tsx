import {FC, useEffect, useState} from 'react';
import { Bar } from 'react-chartjs-2';
// import { ChartOptions } from 'chart.js';


interface Props {
    responses: ResponseType;
}

type ResponseType = {
    facebook: number;
    instagram: number;
    twitter: number;
};

export const BarChart: FC<Props> = ({responses}) => {

    const [data, setData] = useState({
        labels: ['Facebook', 'Instagram', 'Twitter'],
        datasets: [
          {
            label: 'Número de votos',
            backgroundColor: ['#1877F2', '#E4405F', '#1DA1F2'],
            data: [responses.facebook, responses.instagram, responses.twitter],
          },
        ],
      });
    
      useEffect(() => {
        setData((prevData) => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: [responses.facebook, responses.instagram, responses.twitter],
            },
          ],
        }));
      }, [responses]);


    const options: any = {
        scales: {
          y: {
              ticks: {
                  font: {
                      size: 16, // Tamaño de fuente para el eje x
                  },
              },
          },
        },
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const legendPosition = 'top';

    options.plugins?.legend && (options.plugins.legend.position = legendPosition);


    return (
      <Bar 
          data={data} 
          options={options} 
        />
    )
}
