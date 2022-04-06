import { useRecoilValue } from 'recoil';
import Layout from '@/components/Layout';
import ContentsList from '@/components/ContentsList';
import { subjectState } from '@/atoms/index.js';

const Index = () => {
  const selectedSubject = useRecoilValue(subjectState);

  return (
    <Layout>
      <ContentsList subject={selectedSubject} />
    </Layout>
  );
};

export default Index;

// https://www.color-hex.com/color-palette/1010673
// https://dkje.github.io/2020/10/13/StyledComponents/
// https://wonit.tistory.com/367
// https://heodolf.tistory.com/124
