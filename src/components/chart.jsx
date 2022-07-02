import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function Chart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
    const options = {
        responsive: true,
        title:{
            display: true,
            text: 'chart',
        },
        tooltips:{
            mode: 'index',
            intersect: true,
        },
        hover: {
            mode: 'nearest',
            intersect: true,
        },
        

      };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
          {
            label: '',
            data: [8, 10, 11, 10, 11, 12, 11],
            borderColor: '#0075FF',
            backgroundColor: '#0075FF',
            tension: 0.4
          },

        ],
      };
  return <Line options={options} data={data} />;
}
