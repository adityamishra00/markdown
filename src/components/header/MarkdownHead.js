import React from 'react';
import './MarkdownHead.css';
import logoImg from '../../images/markdown-icon.svg';
import saveImg from '../../images/save-icon.svg';
import FileSaver from "file-saver";

const MarkdownHead = ({ textData, setHasChanges }) => {
  function handleSaveFile() {
    setHasChanges(false);
    const markdownContent = textData;
    const blob = new Blob([markdownContent], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, 'ReadMe.md');
  }
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <div className='menu'>
          <img className='logo' src={logoImg} alt='Menu'></img>
          <p>MARKDOWN PREVIEWER</p>
        </div>
      </div>
      <div className='nav-right'>
        <div className='delete'>
          <button className='save-btn' onClick={handleSaveFile}>
            <div className='button-content'>
              <img src={saveImg} alt='save'/> 
              <span>Save</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MarkdownHead;