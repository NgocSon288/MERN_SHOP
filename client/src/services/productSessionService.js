import axios from "axios";
import { urlStr } from "../common/constants";

const productSessionService = {
  getAll: async () => {
    //   return    axios.get(`${urlStr}/productSessions`).then(res => res.data)
    const res = await axios.get(`${urlStr}/productSessions`);

    return res.data;
  },
  add: async (id) => { 
    const res = await axios.get(`${urlStr}/productSessions/${id}`); 

    return res.data;
  },
  delete: async (id) => {
    const res = await axios.delete(`${urlStr}/productSessions/${id}`);

    return res.success;
  },
};

export default productSessionService;
