import { ProductList } from '@/sections';


const productsList=[{
  id:1,
  title:"Paracetamole",
  description:"lorem ipsum dolor sit ",
  price:50,
},{
  id:2,
  title:"Paracetamole",
  description:"lorem ipsum dolor sit ",
  price:50,
},{
  id:3,
  title:"Paracetamole",
  description:"lorem ipsum dolor sit ",
  price:50,
},{
  id:4,
  title:"Paracetamole",
  description:"lorem ipsum dolor sit ",
  price:50,
},{
  id:5,
  title:"Paracetamole",
  description:"lorem ipsum dolor sit ",
  price:50,
},]
export default function Home() {
  return (
    <>
      <ProductList title='All Products' productList={productsList}/>
    </>
  );
}
