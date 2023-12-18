import axios from 'axios';

axios.defaults.baseURL = 'https://657aef29394ca9e4af13185a.mockapi.io';

export const getRecFood = async () => {
  const response = await axios.get('/recommendedFood');
    return response.data;
    
}; 