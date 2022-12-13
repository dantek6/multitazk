//import React from 'react';
import type { ChartData, ChartOptions } from 'chart.js';
import {Chart as ChartJS, ArcElement} from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

ChartJS.register({
    ArcElement
});

interface Props {
    data: ChartData<'pie'>;
}

export default function PieChart({data}: Props){
    return <Pie data={data}/>
}