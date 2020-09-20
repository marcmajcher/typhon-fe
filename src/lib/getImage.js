import React from 'react';

const images = {
  nahmra: 'mandrill-head',
  korazz: 'alien-bug',
  runian: 'ice-golem',
  wyl: 'steam',
}

export default function getImage(key) {
  const imgPath = `/img/${images[key]}.svg`;
  return <img alt={key} src={imgPath} />
}
