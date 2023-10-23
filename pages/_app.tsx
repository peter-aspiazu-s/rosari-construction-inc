import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';
import 'animate.css';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend } from 'chart.js';


// Registrar las escalas y elementos necesarios
ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Configurar las opciones globales, como la posición de la leyenda
ChartJS.defaults.plugins.legend.position = 'bottom';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
  ) 
}
