import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentsDir = join(process.cwd(), '_contents');

export default (subject, fileName) => {
  const fullPath = join(contentsDir, subject, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    content,
  };
};
