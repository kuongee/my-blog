import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const InlineCode = styled.code`
  background-color: #f6f8fa;
`;

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 0 1em;
  color: #8b949e;
  border-left: 0.25em solid #30363d;
`; // from Github Style

export default ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={materialDark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <InlineCode className={className} {...props}>
              {children}
            </InlineCode>
          );
        },
        blockquote: ({ node, ...props }) => <Blockquote {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    />
  );
};
