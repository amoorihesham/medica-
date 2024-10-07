import { api } from "./api";

export async function getBanners() {
    try {  
      let {data} = await api.get('/banners')
      return data?.data
    } catch (error) {
      console.log(error);
    }
  }