import React from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';


export default function ProgressBar(props){
    const circleSize = 100;
    const { goal } = props;
    console.log(goal);
    const startDate = new Date(goal.startDate);
    const endDate = new Date (goal.endDate);
    const currentDate = new Date();
    const progressCount = endDate - startDate;
    console.log(progressCount);
    const data = [{
        value: progressCount && 100*Math.min(1, 1-(endDate - currentDate) / progressCount)
    }];

    
    return (
          <RadialBarChart
            width={circleSize}
            height={circleSize}
            cx={circleSize / 2}
            cy={circleSize / 2}
            innerRadius={70}
            outerRadius={40}
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
            minPointSize={3}
            barSize={10}
            clockWise
            dataKey="value"
            cornerRadius={circleSize / 2}
            fill="#CFE4F5"
            />
            <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            >
            {data[0].value.toFixed(0)}%
            </text>
          </RadialBarChart>
    )
}