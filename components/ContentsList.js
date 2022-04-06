import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const List = styled.ul`
  position: relative;
  height: calc(100% - 108px);
  margin: 0px;
`;

export default ({ subject }) => {
  const [fileLists, setFileLists] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('/api/get-file-lists', { params: { subject } });
      setFileLists(data.fileList);
    } catch {
      setFileLists(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [subject]);

  console.log('data ', fileLists, subject);
  if (!fileLists) {
    return <>목록이 없습니다!</>
  }

  return (
    <List>
      {fileLists.map(file => (
        <li key={file.name} onClick={() => {}}>
          <Link href={`/posts/${subject}/${file.name}`}>
            <a>{file.name}</a>
          </Link>
        </li>
      ))}
    </List>
  );
};
