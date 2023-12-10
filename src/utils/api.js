import axios from "axios";

export const fetchAdverts = async (currentPage = 1, limit = 12) => {
  try {
    const response = await axios.get(
      `https://6571f0ebd61ba6fcc014072c.mockapi.io/adverts?page=${currentPage}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
