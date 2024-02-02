'use client'

export default function Home() {

  const doIt = () => {
    console.log("Do It!");
  }

  return (
    <main>
      <div>
          Test: <button onClick={doIt}>Do it!</button>
      </div>
    </main>
  );
}
