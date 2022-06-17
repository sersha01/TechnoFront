import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar, Line, Doughnut, Bar, Pie } from 'react-chartjs-2';
ChartJS.register(
    RadialLinearScale,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Filler,
    Tooltip,
    Legend
  );

function RadarChart({data}) {
    const datas = {
        labels: data.labels,
        datasets: [
          {
            label: data.label,
            data: data.data,
            backgroundColor: data.bgColor,
            borderColor: data.brColor,
            borderWidth: data.brWidth,
          },
        ],
      };
    return (
        <div>
        <Radar data={datas} />
        </div>
    )
}
function DoughnutChart({data}) {
    const datas = {
        labels: data.labels,
        datasets: [
          {
            label: data.label,
            data: data.data,
            backgroundColor: data.bgColor,
            borderColor: data.brColor,
            borderWidth: data.brWidth,
          },
        ],
      };
    return (
        <div>
        <Doughnut data={datas} />
        </div>
    )
}
function PieChart({data}) {
    const datas = {
        labels: data.labels,
        datasets: [
          {
            label: data.label,
            data: data.data,
            backgroundColor: data.bgColor,
            borderColor: data.brColor,
            borderWidth: data.brWidth,
          },
        ],
      };
    return (
        <div>
        <Pie data={datas} />
        </div>
    )
}
function LineChart({data}) {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: data.title,
        },
      },
    };
    const datas = {
      labels:data.labels,
      datasets: data.data
    };
    return (
        <div>
        <Line data={datas} options={options} />
        </div>
    )
}
function BarChart({data}) {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: data.title,
        },
      },
    };
    const datas = {
      labels: data.labels,
      datasets: data.data,
    };
    return (
        <div>
        <Bar data={datas} options={options} />
        </div>
    )
}
function Chart({data}) {
    return(
    data.map((item) => {
        if (item.type === 'radar') {
            return <RadarChart data={item.data} />
        } else if (item.type === 'doughnut') {
            return <DoughnutChart data={item.data} />
        } else if (item.type === 'pie') {
            return <PieChart data={item.data}/>
        } else if (item.type === 'line') {
            return <LineChart data={item.data} />
        } else if (item.type === 'bar') {
            return <BarChart data={item.data} />
        }
    }))
}

export default Chart


{/* 
<Radar data={data1} />
<Doughnut data={data2} />
<Line options={options1} data={data3} />
<Bar options={options1} data={data3} />
<Pie data={data4} /> 
*/}