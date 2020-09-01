import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/">
        <img src="https://fontmeme.com/permalink/200901/4d477f96c509853c0a78e24433dee4ca.png" alt="VídeoHD" />
      </a>
      <p>
        Idealizado para vídeos do
        {' '}
        <a href="https://www.youtube.com/">
          Youtube
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
