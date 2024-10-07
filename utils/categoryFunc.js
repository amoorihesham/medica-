import { api } from "./api";

export async function getCategory() {
    try {  
      let {data} = await api.get('/category')
      return data?.data
    } catch (error) {
      console.log(error);
    }
  }