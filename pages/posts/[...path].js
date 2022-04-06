import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import MarkdownTemplate from '@/components/MarkdownTemplate';

const Template = styled.div`
  position: absolute;
  padding: 0 50px 30px 50px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 30px;
  background-color: #dabfde;
`;

const Post = () => {
  const [content, setContent] = useState(null);
  const router = useRouter();

  const fetchData = async () => {
    const { path } = router.query;
    if (!path || !path[0] || !path[1]) {
      setContent(null);
      return;
    }

    try {
      const { data } = await axios.get('/api/get-content', {
        params: { filepath: `${path[0]}/${path[1]}.md` },
      });
      setContent(data);
    } catch {
      setContent(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [router]);

  return (
    content && (
      <>
        <Template>
          <MarkdownTemplate content={content.content} />
        </Template>
        <Footer />
      </>
    )
  );
};

export default Post;
