'use server'
import path from 'path';
import { readFileSync, writeFileSync, unlink } from 'fs';

export interface Games {
    id?: string
    count?: number
}

const readGame = (gameId: string): Games => {
    const file = path.join(process.cwd(), 'files/data/games.json');
    const games: Games = JSON.parse(readFileSync(file, 'utf8'));
    return games;
}

export const writeGame = (games: Games): void => {
    const file = path.join(process.cwd(), 'files/data/games.json');
    writeFileSync(file, JSON.stringify(games));
}

export async function updateGames(): Promise<Games> {
    const games = readGame("1");

    if (games.count !== undefined) {
        games.count += 1;
    } else {
        games.count = 0;
    }

    writeGame(games);

    return games;
}