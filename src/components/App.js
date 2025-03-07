import React, { useEffect, useState } from 'react';
import '../styles.css';
import PieChartComponent from './PieChartComponent';
import IndexNavBar from './IndexNavBar';

const API_BASE_URL = 'http://azship:3001';

const cardNames = [
  "Total de TestCases",
  "Total de TestCases Manuais",
  "Total de TestCases Automatizados",
  "Total Importancia Baixa",
  "Total Importancia Média",
  "Total de Palavras Chaves",
  "Total Importancia Alta",
  "Qtd. de TestCases Status Draft",
  "Tempo Médio Exec. Manual",
  "Qtd. de TestCases Status Final",
  "Tempo Médio Exec. Automatizado",
  "Qtd. de Anexos",
  "Total de Execuções de TestCases",
  "TestCases Não Executados",
  "Quantidade de TestCases Embarcador",
  "Quantidade de TestCases Transportador"
];

function App() {
  const [testCaseCount, setTestCaseCount] = useState(0);
  const [highImportanceCount, setHighImportanceCount] = useState(0);
  const [mediumImportanceCount, setMediumImportanceCount] = useState(0);
  const [lowImportanceCount, setLowImportanceCount] = useState(0);
  const [manualDuration, setManualDuration] = useState(0);
  const [automatedDuration, setAutomatedDuration] = useState(0);
  const [testCaseManualCount, setTestCaseManualCount] = useState(0);
  const [testCaseAutomatedCount, setTestCaseAutomatedCount] = useState(0);
  const [testCaseKeywordsCount, setTestCaseKeywordsCount] = useState(0);
  const [testCaseShipperCount, setTestCaseShipperCount] = useState(0);
  const [testCaseTransporterCount, setTestCaseTransporterCount] = useState(0);
  const [testCaseDraftStatusCount, setTestCaseDraftStatusCount] = useState(0);
  const [testCaseFinalStatusCount, setTestCaseFinalStatusCount] = useState(0);
  const [projectName, setProjectName] = useState(0);
  const [attachmentsCount, setAttachmentsCount] = useState(0);
  const [totalExecutionsCount, setTotalExecutionsCount] = useState(0);
  const [totalNotExecutedCount, setTotalNotExecutedCount] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      fetch(`${API_BASE_URL}/api/project/name`)
        .then(response => response.json())
        .then(data => {
          console.log('API response:', data); // Log da resposta da API
          setProjectName(data.name);
        })
        .catch(error => console.error('Error fetching test case count:', error));

      fetch(`${API_BASE_URL}/api/testcases/count`)
        .then(response => response.json())
        .then(data => {
          console.log('API response:', data); // Log da resposta da API
          setTestCaseCount(data.count);
        })
        .catch(error => console.error('Error fetching test case count:', error));

      fetch(`${API_BASE_URL}/api/testcases/count/high-importance`)
        .then(response => response.json())
        .then(data => {
          console.log('High importance API response:', data); // Log da resposta da API
          setHighImportanceCount(data.count);
        })
        .catch(error => console.error('Error fetching high importance test case count:', error));

      fetch(`${API_BASE_URL}/api/testcases/count/medium-importance`)
        .then(response => response.json())
        .then(data => {
          console.log('Medium importance API response:', data); // Log da resposta da API
          setMediumImportanceCount(data.count);
        })
        .catch(error => console.error('Error fetching medium importance test case count:', error));

      fetch(`${API_BASE_URL}/api/testcases/count/low-importance`)
        .then(response => response.json())
        .then(data => {
          console.log('Low importance API response:', data); // Log da resposta da API
          setLowImportanceCount(data.count);
        })
        .catch(error => console.error('Error fetching low importance test case count:', error));
      
      fetch(`${API_BASE_URL}/api/testcases/duration/manual`)
        .then(response => response.json())
        .then(data => {
          console.log('Manual duration API response:', data); // Log da resposta da API
          setManualDuration(data.total_duration || 0);
        })
        .catch(error => console.error('Error fetching manual duration:', error));

      fetch(`${API_BASE_URL}/api/testcases/duration/automated`)
        .then(response => response.json())
        .then(data => {
          console.log('Automated duration API response:', data); // Log da resposta da API
          setAutomatedDuration(data.total_duration || 0);
        })
        .catch(error => console.error('Error fetching automated duration:', error));

      fetch(`${API_BASE_URL}/api/testcases/count/manual`)
        .then(response => response.json())
        .then(data => {
          console.log('Manual TestCase API response:', data); 
          setTestCaseManualCount(data.count);
        })
        .catch(error => console.error('Error fetching manual test case count:', error));

      fetch(`${API_BASE_URL}/api/testcases/count/automated`)
        .then(response => response.json())
        .then(data => {
          console.log('Automated TestCase API response:', data); 
          setTestCaseAutomatedCount(data.count);
        })
        .catch(error => console.error('Error fetching automated test case count:', error));

      fetch(`${API_BASE_URL}/api/testcases/count/keywords`)
        .then(response => response.json())
        .then(data => {
          console.log('Keywords API response:', data); 
          setTestCaseKeywordsCount(data.count);
        })
        .catch(error => console.error('Error fetching keywords count:', error));

        fetch(`${API_BASE_URL}/api/testcases/count/shipper`)
        .then(response => response.json())
        .then(data => {
          console.log('Shipper API response:', data); 
          setTestCaseShipperCount(data.count); 
        })
        .catch(error => console.error('Error fetching shipper count:', error));      

        fetch(`${API_BASE_URL}/api/testcases/count/transporter`)
        .then(response => response.json())
        .then(data => {
          console.log('Transporter API response:', data); 
          setTestCaseTransporterCount(data.count);  
        })
        .catch(error => console.error('Error fetching transporter count:', error));    

        fetch(`${API_BASE_URL}/api/testcases/count/draft_status`)
        .then(response => response.json())
        .then(data => {
          console.log('Draft Status API response:', data); 
          setTestCaseDraftStatusCount(data.count);  
        })
        .catch(error => console.error('Error fetching status draft count:', error));   

        fetch(`${API_BASE_URL}/api/testcases/count/final_status`)
        .then(response => response.json())
        .then(data => {
          console.log('Final Status API response:', data); 
          setTestCaseFinalStatusCount(data.count);  
        })
        .catch(error => console.error('Error fetching status final count:', error));  

        fetch(`${API_BASE_URL}/api/testcases/count/attachments`)
        .then(response => response.json())
        .then(data => {
          console.log('Attachments API response:', data); 
          setAttachmentsCount(data.count);  
        })
        .catch(error => console.error('Error fetching attachments count:', error));

        fetch(`${API_BASE_URL}/api/testcases/count/total_executions`)
        .then(response => response.json())
        .then(data => {
          console.log('Total Executions API response:', data); 
          setTotalExecutionsCount(data.count);  
        })
        .catch(error => console.error('Error fetching total executions count:', error));

        fetch(`${API_BASE_URL}/api/testcases/count/total_not_executed`)
        .then(response => response.json())
        .then(data => {
          console.log('Total Not Executed API response:', data); 
          setTotalNotExecutedCount(data.count);  
        })
        .catch(error => console.error('Error fetching total not executed count:', error));
    };

    fetchData(); // Fetch data initially
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const pieChartData = [
    { name: 'Alta Importância', value: highImportanceCount },
    { name: 'Média Importância', value: mediumImportanceCount },
    { name: 'Baixa Importância', value: lowImportanceCount },
    { name: 'Outros', value: testCaseCount - highImportanceCount - mediumImportanceCount - lowImportanceCount },
  ];

  return (
    <div className="app">
      <IndexNavBar projectName={projectName} />
      <div className="container">
        {cardNames.map((name, index) => (
          <div className="card" key={index}>
            <h4>{name}</h4>
            <p>
              {name === "Total de TestCases" ? `Total: ${testCaseCount}` : 
              name === "Total Importancia Baixa" ? `Total: ${lowImportanceCount}` :
              name === "Total Importancia Média" ? `Total: ${mediumImportanceCount}` :
              name === "Total Importancia Alta" ? `Total: ${highImportanceCount}` :
              name === "Tempo Médio Exec. Manual" ? `Total: ${formatDuration(manualDuration)}` :
              name === "Tempo Médio Exec. Automatizado" ? `Total: ${formatDuration(automatedDuration)}` :
              name === "Total de TestCases Manuais" ? `Total: ${testCaseManualCount}` :
              name === "Total de TestCases Automatizados" ? `Total: ${testCaseAutomatedCount}` :
              name === "Total de Palavras Chaves" ? `Total: ${testCaseKeywordsCount}` :
              name === "Quantidade de TestCases Embarcador" ? `Total: ${testCaseShipperCount}` :
              name === "Quantidade de TestCases Transportador" ? `Total: ${testCaseTransporterCount}` :
              name === "Qtd. de TestCases Status Draft" ? `Total: ${testCaseDraftStatusCount}` :
              name === "Qtd. de TestCases Status Final" ? `Total: ${testCaseFinalStatusCount}` :
              name === "Qtd. de Anexos" ? `Total: ${attachmentsCount}` :
              name === "Total de Execuções de TestCases" ? `Total: ${totalExecutionsCount}` :
              name === "TestCases Não Executados" ? `Total: ${totalNotExecutedCount}` :
              `Conteúdo do card ${index + 1}`}
            </p>
          </div>
        ))}
        <div className="pie-chart">
          <PieChartComponent data={pieChartData} />
        </div>
      </div>
    </div>
  );
}

export default App;