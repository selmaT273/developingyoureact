import React from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';


export default function ProgressBar(props){
    const circleSize = 50;
    const { progressBar } = props;
    const progressCount = progressBar.endDate - progressBar.startDate;
    const currentDate = new Date();
    const data = [(progressBar.endDate - currentDate) / progressCount];

    
    return (
          <RadialBarChart
            width={circleSize}
            height={circleSize}
            cx={circleSize / 2}
            cy={circleSize / 2}
            innerRadius={12}
            outerRadius={18}
            barSize={2}
            data={data}
            startAngle={90}
            endAngle={-270}
            >
            <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
            />
            <RadialBar
            background
            clockWise
            dataKey="value"
            cornerRadius={circleSize / 2}
            fill="#82ca9d"
            />
            <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            >
            {data}
            </text>
          </RadialBarChart>
    )
}