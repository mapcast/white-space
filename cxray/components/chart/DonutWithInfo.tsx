import {
  Chart as ChartJS,
  ArcElement
} from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement
);

export default function DonutWithInfo({labels, colors, data}: {labels: string[], colors: string[], data: number[]}) {
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
    <div style={{width:'180px', position: 'relative'}}>
      <div style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'grid', gridTemplateRows: '25px 15px', gridTemplateColumns: '25px 25px 25px', color: '#BBB'}}>
          <div style={{padding: '4px 0', textAlign: 'center', fontWeight: '800', fontSize: '17px'}}><div style={{borderRight: '1px solid #BBB'}}>{data[0]}</div></div>
          <div style={{padding: '4px 0', textAlign: 'center', fontWeight: '800', fontSize: '17px'}}><div>{data[1]}</div></div>
          <div style={{padding: '4px 0', textAlign: 'center', fontWeight: '800', fontSize: '17px'}}><div style={{borderLeft: '1px solid #BBB'}}>{data[2]}</div></div>
          <div style={{padding: '2px 0', textAlign: 'center', fontSize: '11px'}}><div style={{borderRight: '1px solid #BBB'}}>{labels[0]}</div></div>
          <div style={{padding: '2px 0', textAlign: 'center', fontSize: '11px'}}><div>{labels[1]}</div></div>
          <div style={{padding: '2px 0', textAlign: 'center', fontSize: '11px'}}><div style={{borderLeft: '1px solid #BBB'}}>{labels[2]}</div></div>
        </div>
      </div> 
      <Doughnut data={chartData} options={options}/>
    </div>
  );
}