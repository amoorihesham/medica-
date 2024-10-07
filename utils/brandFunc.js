import { api } from "./api";

export async function getBrand() {
    try {  
      let {data} = await api.get('/brand')
      return data?.data
    } catch (error) {
      console.log(error);
    }
  }