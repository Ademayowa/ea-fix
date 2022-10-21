import axios from 'axios';

const PROFILE_URL = 'https://ea-kazi.herokuapp.com/api/v1/user';

// Get trainer
const getTrainer = async (token) => {
  const config = {
    headers: {
      // This is where I think the issue is
      Authorization: `x-auth-token ${token}`,
    },
  };

  const response = await axios.get(PROFILE_URL, config);
  return response.data;
};

const trainerService = {
  getTrainer,
};

export default trainerService;
