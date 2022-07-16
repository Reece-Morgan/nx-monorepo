import { GameTile } from '@allus-interactive/component-library';
import { useRouter } from 'next/router';

const GamePage = () => {
    const router = useRouter();
    const { game } = router.query;

    return (
        <div>
            <p>{game} games</p>
            <GameTile />
        </div>
    )
}

export default GamePage;
