import styled from 'styled-components';
import { Chips, Chip } from '@mantine/core';
import { useRecoilValue, useRecoilState } from 'recoil';
import { SubjectsState, SelectedSubjectState } from '@/atoms';

const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  height: 50px;
  background-color: #ffdcf4;
`;

export default () => {
  const subjects = useRecoilValue(SubjectsState);
  const [selectedSubject, setSelectedSubject] = useRecoilState(SelectedSubjectState);

  return (
    <Header>
      {subjects?.length > 0 ? (
        <Chips position='center' value={selectedSubject} onChange={setSelectedSubject}>
          {subjects.map(subject => (
            <Chip key={subject} value={subject}>
              {subject}
            </Chip>
          ))}
        </Chips>
      ) : (
        <></>
      )}
    </Header>
  );
};
