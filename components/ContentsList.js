import Link from 'next/link';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { SelectedSubjectState } from '@/atoms';

const List = styled.ul`
  position: relative;
  height: calc(100% - 108px);
  margin: 0px;
`;

export default ({ contentsList }) => {
  const selectedSubject = useRecoilValue(SelectedSubjectState);

  if (!contentsList || contentsList.length === 0) {
    return <>목록이 없습니다!</>;
  }

  return (
    <List>
      {contentsList.map((file, index) => (
        <li key={index}>
          <Link href={`/contents/${selectedSubject}/${file.fileName}`}>{file.name}</Link>
        </li>
      ))}
    </List>
  );
};
