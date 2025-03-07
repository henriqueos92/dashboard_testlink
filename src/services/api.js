import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Update with your actual API URL

export const fetchMetrics = async () => {
    try {
        const response = await axios.get(`${API_URL}/metrics`);
        return response.data;
    } catch (error) {
        console.error('Error fetching metrics:', error);
        throw error;
    }
};

// Additional functions for other API interactions can be added here as needed.