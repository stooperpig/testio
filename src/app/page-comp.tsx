import { promises as fs } from 'fs';

export default async function Page() {
  const path = process.cwd() + '/files/data/games.json';
  console.log('path: ' + path);
  const file = await fs.readFile(path, 'utf8');
  const data = JSON.parse(file);

  return (
    <div>
      <h1>{data.id}</h1>
      <p>{data.count}</p>
    </div>
  );
}