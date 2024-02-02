'use client'

import { updateGames } from "./_actions/actions";

export default function Home() {
  const doIt = async () => {
    console.log("Do It!");
    const games = await updateGames();
    console.log(JSON.stringify(games));
  }

  return (
    <main>
      <div>
          Test: <button onClick={doIt}>Do it!</button>
      </div>
    </main>
  );
}
