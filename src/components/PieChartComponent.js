import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#FF0000', '#FFBB28', '#00C49F'];

const PieChartComponent = ({ data }) => {
  return (
    <PieChart width={800} height={500}>
      <Pie
        data={data}
        cx={400} // Metade da largura do PieChart
        cy={250} // Metade da altura do PieChart
        labelLine={false}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        outerRadius={200} // Ajuste o raio externo conforme necessário
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;