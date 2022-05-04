import { useRouter } from 'next/router';
import styles from '/public/css/ShopLearn.module.css';

const Learn = () => {
  const router = useRouter();
  const { id } = router.query;

    return (
      <main className={styles.learn}>
        <h1 className={styles.learn__title}>Learn</h1>
        <h2 className={styles.learn__car}>{id}</h2>
        <button className={styles.learn__btn} onClick={() => router.back()}>GO BACK</button>
      </main>
    );
  };
  
  export default Learn;
  