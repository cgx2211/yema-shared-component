
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import monokaiSublime from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai-sublime';

// README
import RadioSelectReadme from 'shared/yematech/Select/RadioSelect/README.md';

const rootEl = (props) => {
  const { value } = props;
  return (
    <SyntaxHighlighter style={monokaiSublime}>
      {value}
    </SyntaxHighlighter>
  );
};

type PathParamsType = {
  path: string;
  type: string;
  component: string;
};

interface IHomeProp extends RouteComponentProps<PathParamsType> {}

export const Home = (props: IHomeProp) => {
  const { match } = props;
  const [source, setSource] = useState('');
  useEffect(() => {
    if (match.params.path === 'yematech') {
      switch (match.params.type) {
        case 'Select':
          switch (match.params.component) {
            case 'RadioSelect':
              setSource(RadioSelectReadme);
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    }
  }, [match.params.path, match.params.type, match.params.component]);
  return (
    <div>
      <ReactMarkdown
        source={source}
        renderers={{
          code: rootEl,
        }}
      />
    </div>
  );
};

export default Home;
