import {
  Chart as ChartJS,
  ArcElement
} from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement
);

export default function CxrayDonut({labels, colors, data, center}: {labels: string[], colors: string[], data: number[], center?: JSX.Element}) {
  const allZeroCheck = data.filter((d: number) => d > 0).length > 0;
  const chartData: ChartData = {
    labels: labels,
    datasets: [
      {
        label: '',
        data: allZeroCheck ? data : data.map(() => 1),
        backgroundColor: allZeroCheck ? colors : colors.map(() => 'transparent')
      }
    ]
  };

  const options: any = {
    cutout: '80%',
    responsive: true,
    pointStyle: false,
    maintainAspectRatio: false
  };

  return (
    <div style={{width: '100%', height: '100%', aspectRatio: '1/1', position: 'relative'}}>
      <div style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {center}
      </div> 
      <Doughnut data={chartData} options={options}/>
    </div>
  );
}