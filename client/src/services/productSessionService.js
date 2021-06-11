import axios from "axios";
import { urlStr } from "../common/constants";

const productSessionService = {
  getAll: async () => {
    //   return    axios.get(`${urlStr}/productSessions`).then(res => res.data)
    const res = await axios.get(`${urlStr}/productSessions`);

    return res.data;
  },
  add: async (id) => {
    console.log("vao ham add service client");
    const res = await axios.get(`${urlStr}/productSessions/${id}`);
    console.log(res);

    return res.data;
  },
  delete: async (id) => {
    const res = await axios.delete(`${urlStr}/productSessions/${id}`);

    return res.success;
  },
};

export default productSessionService;
