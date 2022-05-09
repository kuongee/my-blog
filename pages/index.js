import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { SubjectsState, SelectedSubjectState } from '@/atoms/index.js';
import Layout from '@/components/Layout';
import ContentsList from '@/components/ContentsList';
import getAllContents from '@/lib/api/get-all-contents';

const Index = ({ subjects, contentsList }) => {
  const setSubjects = useSetRecoilState(SubjectsState);
  const [selectedSubject, setSelectedSubject] = useRecoilState(SelectedSubjectState);

  useEffect(() => {
    setSubjects(subjects);
    
    if (subjects.length > 0) {
      setSelectedSubject(subjects[0]);
    }
  }, []);

  return <Layout>{contentsList && <ContentsList contentsList={contentsList[selectedSubject]} />}</Layout>;
};

export default Index;

export async function getStaticProps() {
  const { subjects, contentsList } = getAllContents();

  return {
    props: { subjects, contentsList },
  };
}

// https://www.color-hex.com/color-palette/1010673
// https://dkje.github.io/2020/10/13/StyledComponents/
// https://wonit.tistory.com/367
// https://heodolf.tistory.com/124

// https://tina.io/blog/simple-markdown-blog-nextjs/
