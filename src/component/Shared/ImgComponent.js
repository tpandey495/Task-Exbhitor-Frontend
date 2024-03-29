import React from 'react';

function ImgComponent({ src, alt, height='100px', width='100px' ,className=""}) {
  return <img src={src} alt={alt} height={height} width={width} className={className}/>;
}

export default ImgComponent;
