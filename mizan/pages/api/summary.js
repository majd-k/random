import fs from 'fs';
import path from 'path';

const assessmentsFile = path.join(process.cwd(), 'data', 'assessments.json');

export default function handler(req, res) {
  const assessments = JSON.parse(fs.readFileSync(assessmentsFile, 'utf8'));
  const summary = {};
  assessments.forEach(a => {
    summary[a.courseId] = (summary[a.courseId] || 0) + 1;
  });
  const result = Object.keys(summary).map(courseId => ({ courseId: Number(courseId), count: summary[courseId] }));
  res.status(200).json(result);
}
