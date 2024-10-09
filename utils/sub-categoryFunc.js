import { api } from './api';

export async function getSubCategory() {
  try {
    let { data } = await api.get('/sub-category');

    return data?.data;
  } catch (error) {
    console.log(error);
  }
}
