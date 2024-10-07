import { api } from "./api";

export async function getGomla() {
    try {  
      let {data} = await api.get('/gomla/banner')
      return data?.data
    } catch (error) {
      console.log(error);
    }
  }
export async function getDrug() {
    try {  
      let {data} = await api.get('drug/banner')
      return data?.data
    } catch (error) {
      console.log(error);
    }
  }