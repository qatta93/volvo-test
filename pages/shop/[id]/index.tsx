import { useRouter } from 'next/router';

const Shop = () => {
  const router = useRouter();
  const { id } = router.query;

    return (
      <div>
        <h1>Shop</h1>
        <h2>{id}</h2>
      </div>
    )
  }
  
  export default Shop
  