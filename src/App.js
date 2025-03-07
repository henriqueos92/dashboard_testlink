import React, { useEffect, useState } from 'react';
import '../styles.css';

const cardNames = [
  "Total Ocorrência no Mês",
  "Ocorrências Resolvidas no Prazo",
  "Tempo Médio de Resolução",
  "Tempo Médio Exec. Automatizado",
  "Transp. Ativos",
  "Total de Canhotos",
];

function App() {
  const [testCaseCount, setTestCaseCount] = useState(0);

  useEffect(() => {
    fetch('http://azship:3001/api/testcases/count')
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data); 
        setTestCaseCount(data.count);
      })
      .catch(error => console.error('Error fetching test case count:', error));
  }, []);

  return (
    <div className="container">
      {cardNames.map((name, index) => (
        <div className="card" key={index}>
          <h3>{name}</h3>
          <p>
            {
             name === "Tempo de Execução Automatizado" ? `Total: ${manualDuration} minutos` :
             `Conteúdo do card ${index + 1}`}
          </p>
        </div>
      ))}
      <div className="pie-chart">
        {/* Adicione o componente do gráfico de pizza aqui */}
        <h3>Saúde Total</h3>
      </div>
    </div>
  );
}

export default App;