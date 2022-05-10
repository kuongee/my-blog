import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { SubjectsState, SelectedSubjectState } from '@/atoms/index.js';
import Layout from '@/components/Layout';
import ContentsList from '@/components/ContentsList';
import getAllContents from '@/api/get-all-contents';

const Index = ({ subjects, contentsList }) => {
  const setSubjects = useSetRecoilState(SubjectsState);
  const [selectedSubject, setSelectedSubject] =
    useRecoilState(SelectedSubjectState);

  useEffect(() => {
    setSubjects(subjects);

    if (subjects.length > 0) {
      setSelectedSubject(subjects[0]);
    }
  }, []);

  return (
    <Layout>
      {contentsList && (
        <ContentsList contentsList={contentsList[selectedSubject]} />
      )}
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const { subjects, contentsList } = getAllContents();

  return {
    props: { subjects, contentsList },
  };
}
