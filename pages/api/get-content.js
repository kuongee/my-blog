import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentsDir = join(process.cwd(), 'public/_contents');

export default (req, res) => {
  const { query } = req;
  if (!query.filepath) {
    res.status(500).json({ error: 'failed to load data' });
  }

  const fullPath = join(contentsDir, query.filepath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  res.status(200).json({
    data,
    content,
  });
};
