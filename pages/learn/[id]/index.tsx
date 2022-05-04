import { useRouter } from 'next/router';
import styles from '/public/css/ShopLearn.module.css';
import { Block, Button } from 'vcc-ui';

const Learn = () => {
  const router = useRouter();
  const { id } = router.query;

    return (
      <main className={styles.learn}>
        <h1 className={styles.learn__title}>Learn</h1>
        <h2 className={styles.learn__car}>{id}</h2>
        <Block>
          <Button onClick={() => router.back()}>GO BACK</Button>
        </Block>
      </main>
    );
  };
  
  export default Learn;
  