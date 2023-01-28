import axios from "axios";

// this function will return a list of properties  taking in pincose as input
const searchProperties = async (query: any) =>
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

// this function will return a property details base on property id
const searchProperty = async (query: any) =>
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

export default { searchProperties, searchProperty };
