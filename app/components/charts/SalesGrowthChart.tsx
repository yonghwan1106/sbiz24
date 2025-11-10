'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { salesGrowthData } from '@/app/data/proposalData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function SalesGrowthChart() {
  const data = {
    labels: salesGrowthData.map(d => d.year),
    datasets: [
      {
        label: '총 매출',
        data: salesGrowthData.map(d => d.total),
        borderColor: '#4a2c1f', // lacquer-brown
        backgroundColor: 'rgba(74, 44, 31, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#4a2c1f',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: '온라인 매출',
        data: salesGrowthData.map(d => d.online),
        borderColor: '#8b3a3a', // lacquer-red
        backgroundColor: 'rgba(139, 58, 58, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#8b3a3a',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: '오프라인 매출',
        data: salesGrowthData.map(d => d.offline),
        borderColor: '#d4af37', // lacquer-gold
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#d4af37',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: 'B2B 매출',
        data: salesGrowthData.map(d => d.b2b),
        borderColor: '#d97706', // traditional-amber
        backgroundColor: 'rgba(217, 119, 6, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#d97706',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
            weight: 'bold' as const,
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: {
        display: true,
        text: '3년 매출 성장 시나리오 (단위: 만원)',
        font: {
          size: 20,
          weight: 'bold' as const,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
        color: '#4a2c1f',
      },
      tooltip: {
        backgroundColor: 'rgba(26, 15, 10, 0.95)',
        titleColor: '#d4af37',
        bodyColor: '#ffffff',
        borderColor: '#d4af37',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.parsed.y.toLocaleString() + '만원';
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(74, 44, 31, 0.1)',
        },
        ticks: {
          font: {
            size: 13,
            weight: 'normal' as const,
          },
          color: '#4a2c1f',
          callback: function(value: any) {
            return value.toLocaleString() + '만원';
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 13,
            weight: 'bold' as const,
          },
          color: '#4a2c1f',
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart' as const,
    }
  };

  return <Line data={data} options={options} />;
}
