import { api } from "./api";

export async function getProduct({allItems=0,hotDeal=0,topProducts=0,category_id=0,sub_category_id=0,brand_id=0}) {
    try {  
      let {data} = await api.post('/items',{allItems,hotDeal,topProducts,category_id,sub_category_id,brand_id})
      return data?.data
    } catch (error) {
      console.log(error);
    }
  }
export async function getSingleProduct({id,allItems=0,hotDeal=0,topProducts=0,category_id=0,sub_category_id=0,brand_id=0}) {
    try {  
      let {data} = await api.get(`/item/${id}`,{allItems,hotDeal,topProducts,category_id,sub_category_id,brand_id})
      return data?.data
    } catch (error) {
      console.log(error);
    }
  }