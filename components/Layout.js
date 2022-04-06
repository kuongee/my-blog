import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

const Main = styled.main`
  position: relative;
  min-height: calc(100vh - 80px);
  overflow-y: scroll;
`;

export default ({ children }) => {
  return (
    <Layout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  );
};
