# Simple Web App

This project is a simple web application that displays real-time metrics using 16 cards and a pie chart to visualize the overall health of the data. The application fetches data from a MySQL database through an API.

## Features

- 16 real-time updating cards displaying various metrics related to freight and transportation.
- A pie chart in the center of the screen that visualizes the overall health of the metrics.
- Responsive design to ensure usability across different devices.

## Cards Overview

1. Total Fretes
2. Meta Mensal
3. Dias Sem Lançamento
4. Contratado no Prazo
5. Tempo Médio de Contratação
6. Total Ocorrências no Mês
7. Ocorrências Resolvidas no Prazo
8. Tempo Médio de Resolução
9. Transportadores Engajados
10. Transportadores Ativos
11. Total de Canhotos
12. Aprovados no Prazo
13. Tempo Médio de Aprovação
14. Fretes Rastreados
15. Entregas no Prazo
16. Coletas no Prazo

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