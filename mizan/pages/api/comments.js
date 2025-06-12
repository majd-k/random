import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'comments.json');

export default function handler(req, res) {
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const newItem = { id: Date.now(), ...req.body };
    data.push(newItem);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.status(201).json(newItem);
  } else {
    res.status(405).end();
  }
}
