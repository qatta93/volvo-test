import { useRouter } from 'next/router';

const Learn = () => {
  const router = useRouter();
  const { id } = router.query;

    return (
      <div>
        <h1>Learn about {id}</h1>
      </div>
    )
  }
  
  export default Learn
  