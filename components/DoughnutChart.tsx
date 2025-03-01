"use client" 
import {Chart as ChartJS,ArcElement , Tooltip , Legend} from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import React from 'react'

ChartJS.register(ArcElement,Tooltip,Legend)

const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets : [
            {
                label:'Banks',
                data:[1200,1300,140],
                backgroundColor:['#0747b6','#2265d8','2f91fa']
            }
        ],
        labels:['Bak 1','Bank 2','Bank 3']        
    }

  return  <Doughnut data={data}
  options={{
    cutout:'60%',
    plugins:{
        legend:{
            display:false
        }
    }
  }} />
  
}

export default DoughnutChart
