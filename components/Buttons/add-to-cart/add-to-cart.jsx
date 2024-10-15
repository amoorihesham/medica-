'use client';
import { addCartItem } from '@/redux/asyncs/cartAsync';
import { colors } from '@/styles';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function AddToCart({ productId, storeId, quantity }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Button
      variant='contained'
      style={{
        backgroundColor: colors.primary,
        color: colors.primaryText,
        width: '100%',
        height: '44px',
        margin: '2rem auto',
        marginLeft: '0',
      }}
      onClick={() => {
        dispatch(
          addCartItem({
            userToken: user.token,
            item_id: productId,
            store_id: storeId,
            quantity,
          })
        );
        toast.success('Item added successfully');
      }}>
      Add To Cart
    </Button>
  );
}