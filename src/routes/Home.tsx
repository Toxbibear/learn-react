import { useState } from 'react';
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { Product } from '../types';

function Home() {

  const [cart, setCart] = useState<Product[]>([]);

  return (
  <div>
    <Header />
    <ProductList />
  </div>
  )
}

export default Home