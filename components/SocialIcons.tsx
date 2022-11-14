import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function SocialIcons() {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='flex text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
      <AiFillLinkedin
        className='cursor-pointer'
        onClick={() =>
          openInNewTab('https://www.linkedin.com/in/mina-fawzy-19b64987/')
        }
      />
      <AiFillGithub
        className='cursor-pointer'
        onClick={() => openInNewTab('https://github.com/minaairsupport')}
      />
    </div>
  );
}

export default SocialIcons;
