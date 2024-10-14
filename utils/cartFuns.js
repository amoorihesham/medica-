import { apiCart } from './api';
let cartData = [];
export async function getCartData(userToken) {
  try {
    const { data } = await apiCart.get('/all-item-cart', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    cartData = data?.data;
    return cartData;
  } catch (error) {
    console.log(error);
  }
}

export async function removeItem(userToken, itemId, remove) {
  try {
    const { data } = await apiCart.post(
      '/remove-item-cart',
      {
        cart_id: itemId,
        remove,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    await getCartData(userToken);
  } catch (error) {
    console.log(error);
  }
}
