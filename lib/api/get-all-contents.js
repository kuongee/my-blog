import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentsDirectory = join(process.cwd(), '_contents');

export default () => {
  const directory = fs.readdirSync(contentsDirectory);

  const allContents = directory.reduce((acc, dir) => {
    const files = fs.readdirSync(join(contentsDirectory, dir));

    const getFiles = files.map(fileName => {
      const fileContents = fs.readFileSync(join(contentsDirectory, dir, fileName), 'utf8');
      const { data } = matter(fileContents);
      return { fileName, name: data.title };
    });
    return { ...acc, [`${dir}`]: getFiles };
  }, {});
  console.log(allContents);
  return { subjects: directory, contentsList: allContents };
};
