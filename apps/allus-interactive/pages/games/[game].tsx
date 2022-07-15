import { useRouter } from 'next/router';

const GamePage = () => {
    const router = useRouter();
    const { game } = router.query;

    return <p>{game} games</p>
}

export default GamePage;
