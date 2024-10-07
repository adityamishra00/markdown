import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import './PreviewText.css';

const MarkdownPreview = ({ inputText }) => {
  return (
    <div className='preview-container preview'>
        <ReactMarkdown children={ inputText } remarkPlugins={[remarkGfm]} />
    </div>
  )
}

export default MarkdownPreview;