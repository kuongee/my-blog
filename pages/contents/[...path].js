import styled from 'styled-components';
import MarkdownTemplate from '@/components/MarkdownTemplate';
import getAllContents from '@/api/get-all-contents';
import getContent from '@/api/get-content';

const Template = styled.div`
  position: absolute;
  padding: 0 0 30px;
  @media only screen and (min-width: 768px) {
    width: 50vw;
    left: 50%;
    transform: translateX(-50%);
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
    max-width: calc(100% - 20px);
    padding: 0 10px 30px;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 30px;
  background-color: #dabfde;
`;

const Content = ({ content }) => {
  return (
    content && (
      <>
        <Template>
          <MarkdownTemplate content={content} />
        </Template>
        <Footer />
      </>
    )
  );
};

export default Content;

export async function getStaticPaths() {
  const { subjects, contentsList } = getAllContents();

  const paths = [];
  subjects.forEach(subject => {
    contentsList[subject].forEach(({ fileName }) => {
      paths.push({ params: { path: [subject, fileName] } });
    });
  });

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const [subject, file] = params.path;
  const { content } = getContent(subject, file);

  return {
    props: { content },
  };
}
