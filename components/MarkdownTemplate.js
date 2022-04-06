import ReactMarkdown from 'react-markdown';

export default ({ content }) => {
  return <ReactMarkdown children={content} />;
};

// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.js
