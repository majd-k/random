import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'assessments.json');

export default function handler(req, res) {
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const newItem = { id: Date.now(), ...req.body };
    data.push(newItem);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.status(201).json(newItem);
  } else if (req.method === 'DELETE') {
    const id = Number(req.query.id);
    const idx = data.findIndex(i => i.id === id);
    if (idx !== -1) {
      data.splice(idx, 1);
      fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    }
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
