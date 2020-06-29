import ReactHtmlParser from 'react-html-parser';

export const highlightFor = ({ result, field }) => (
  result.highlight[field] &&
    ReactHtmlParser(result.highlight[field][0]) ||
    result[field]
);
