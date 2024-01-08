import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(url).then((response) => response.data);
};

const create = (personObj) => {
  return axios.post(url, personObj).then((response) => response.data);
};

const remove = (id) => {
  axios.delete(`${url}/${id}`);
};

const replace = (id, personObj) => {
  console.log(id, personObj);
  return axios.put(`${url}/${id}`, personObj).then((response) => response.data);
};

export default { getAll, create, remove, replace };
