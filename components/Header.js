import styled from 'styled-components';
import { Chips, Chip } from '@mantine/core';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { subjectState } from '@/atoms/index.js';

const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  height: 50px;
  background-color: #ffdcf4;
`;

export default () => {
  const selectedSubject = useRecoilValue(subjectState);
  const setSelectedSubject = useSetRecoilState(subjectState);

  return (
    <Header>
      <Chips position='center' value={selectedSubject} onChange={setSelectedSubject}>
        {/* <Chip value=''>전체</Chip> */}
        <Chip value='frontend'>Frontend</Chip>
        <Chip value='nodejs'>NodeJS</Chip>
        <Chip value='python'>python</Chip>
        <Chip value='react'>React</Chip>
      </Chips>
    </Header>
  );
};
