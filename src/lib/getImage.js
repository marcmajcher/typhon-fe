import React from 'react';

const images = {
  nahmra: 'mandrill-head',
  korazz: 'alien-bug',
  runian: 'ice-golem',
  wyl: 'steam',

  zithan: 'horned-reptile',
  glaber: 'rat',
  ychethi: 'fish-monster',
  medein: 'jellyfish',
  junctuarat: 'crab',
  ssvarti: 'beehive',
  haren: 'sand-castle',
  pholaren: 'armadillo',
  qillanti: 'kenku-head',
  loptrocha: 'squid-head',
  thelgen: 'grasping-slug',

  volatile: 'small-fire',
  confident: 'white-tower',
  adaptable: 'contortionist',
  disciplined: 'static-guard',
  relentless: 'minotaur',
  intimate: 'dagger-rose',
  efficient: 'spear-hook',
  detached: 'split-arrows',
  focused: 'targeted',
  casual: 'flip-flops',
  martial: 'swordswoman',
  social: 'team-upgrade',
  economic: 'take-my-money',
  hedonic: 'party-popper',
  technical: 'big-gear',
  autarchic: 'anarchy',
  communal: 'dozen',
  solitary: 'person',
  stratified: 'organigram',
  bonded: 'relationship-bounds',

  armored: 'metal-plate',
  evasive: 'slalom',
  intercept: 'arrow-scope',
  repulsor: 'magnet',
  scramble: 'radar-dish',
  plasma: 'plasma-bolt',
  kinetic: 'heavy-bullets',
  energy: 'gooey-molecule',
  atomic: 'laser-precision',
  missile: 'missile-swarm',
}

export default function getImage(key) {
  const imgPath = `/img/${images[key]}.svg`;
  return <img alt={key} src={imgPath} />
}
