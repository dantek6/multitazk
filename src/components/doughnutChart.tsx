//import React from 'react';
import type { ChartData, ChartOptions } from 'chart.js';
import {Chart as ChartJS, ArcElement} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register({
    ArcElement
});

interface Props {
    data: ChartData<'pie'>;
}

export default function DoughnutChart({data}: Props){
    return <div className="chartBox"><div className='DoughnutChart'><Doughnut data={data}/></div></div>
}