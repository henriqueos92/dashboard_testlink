# Simple Web App

This project is a simple web application that displays real-time metrics using 16 cards and a pie chart to visualize the overall health of the data. The application fetches data from a MySQL database through an API.

## Features

- 16 real-time updating cards displaying various metrics related to the QA team.
- A pie chart in the center of the screen that visualizes the overall health of the metrics.
- Responsive design to ensure usability across different devices.

## Cards Overview

1. Total de TestCase
2. Total de TestCases Manuais
3. Total de TestCases Automatizados
4. Total Importancia Baixa
5. Total Importancia Média
6. Total de Palavras Chaves
7. Total Importancia Alta
8. Qtd. de TestCases Status Draft
9. Tempo Médio Exec. Manual
10. Qtd. de TestCases Status Final
11. Tempo Médio Exec. Automatizado
12. Qtd. de Anexos
13. Total de Execuções de TestCases
14. TestCases Não Executados
15. Quantidade de TestCases Embarcador
16. Quantidade de TestCases Transportador

## Technologies Used

- React for building the user interface.
- Axios for making API requests to the backend.
- Chart.js for rendering the pie chart.
- CSS for styling the application.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd simple-web-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## API Integration

The application interacts with a MySQL database through an API. Ensure that the API is set up and running to fetch the necessary data for the cards.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.