import { useRouter } from 'next/router';
import styles from '/public/css/ShopLearn.module.css';

const Shop = () => {
  const router = useRouter();
  const { id } = router.query;

    return (
      <main className={styles.shop}>
        <h1 className={styles.shop__title}>Shop</h1>
        <h2 className={styles.shop__car}>{id}</h2>
        <button className={styles.shop__btn} onClick={() => router.back()}>GO BACK</button>
      </main>
    );
  };
  
  export default Shop;
  