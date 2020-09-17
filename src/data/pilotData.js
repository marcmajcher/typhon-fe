export default {
  species: [
    {
      id: 1, name: 'Nahmra',
      description: 'monkeys',
      occupation: [1, 2, 3, 4, 5],
      lineage: [1, 2, 3],
      gender: [1, 2, 4],
    },
    {
      id: 2, name: 'Korazz',
      description: 'bugs',
      occupation: [6, 7, 8, 9, 10],
      lineage: [4, 5, 6],
      gender: [5, 6, 7, 8]
    },
    {
      id: 3, name: 'Runian',
      description: 'rocks',
      occupation: [11, 12, 13, 14, 15],
      lineage: [7, 8, 9],
      gender: [9]
    },
    {
      id: 4, name: 'Wyl',
      description: 'gas',
      occupation: [16, 17, 18, 19, 20],
      lineage: [10, 11, 12],
      gender: [10, 11, 12, 13, 14, 15]
    }
  ],
  occupation: [
    { id: 1, name: 'VR Promoter', attitude: 'Volatile', tactics: 'Efficient', interests: 'Social', structure: 'Stratified' },
    { id: 2, name: 'Stim Dealer', attitude: 'Disciplined', tactics: 'Detached', interests: 'Hedonic', structure: 'Autarchic' },
    { id: 3, name: 'Political Agitator', attitude: 'Adaptable', tactics: 'Intimate', interests: 'Economic', structure: 'Communal' },
    { id: 4, name: 'Bounty Hunter', attitude: 'Confident', tactics: 'Casual', interests: 'Martial', structure: 'Solitary' },
    { id: 5, name: 'Troubleshooter', attitude: 'Relentless', tactics: 'Focused', interests: 'Technical', structure: 'Bonded' },
    { id: 6, name: 'Bookie', attitude: 'Volatile', tactics: 'Detached', interests: 'Economic', structure: 'Solitary' },
    { id: 7, name: 'Mechanic', attitude: 'Disciplined', tactics: 'Casual', interests: 'Technical', structure: 'Communal' },
    { id: 8, name: 'Assassin', attitude: 'Adaptable', tactics: 'Efficient', interests: 'Martial', structure: 'Autarchic' },
    { id: 9, name: 'Socialite', attitude: 'Relentless', tactics: 'Focused', interests: 'Hedonic', structure: 'Stratified' },
    { id: 10, name: 'Personal Assistant', attitude: 'Confident', tactics: 'Intimate', interests: 'Social', structure: 'Bonded' },
    { id: 11, name: 'Implant Technician', attitude: 'Relentless', tactics: 'Efficient', interests: 'Hedonic', structure: 'Autarchic' },
    { id: 12, name: 'Gladiator', attitude: 'Volatile', tactics: 'Intimate', interests: 'Martial', structure: 'Stratified' },
    { id: 13, name: 'Cybersecurity', attitude: 'Adaptable', tactics: 'Focused', interests: 'Technical', structure: 'Solitary' },
    { id: 14, name: 'Philanthropist', attitude: 'Disciplined', tactics: 'Detached', interests: 'Economic', structure: 'Bonded' },
    { id: 15, name: 'Cult Leader', attitude: 'Confident', tactics: 'Casual', interests: 'Social', structure: 'Communal' },
    { id: 16, name: 'Bodyguard', attitude: 'Disciplined', tactics: 'Intimate', interests: 'Martial', structure: 'Autarchic' },
    { id: 17, name: 'Life Coach', attitude: 'Confident', tactics: 'Focused', interests: 'Social', structure: 'Communal' },
    { id: 18, name: 'Circus Performer', attitude: 'Volatile', tactics: 'Efficient', interests: 'Economic', structure: 'Bonded' },
    { id: 19, name: 'Military Programmer', attitude: 'Relentless', tactics: 'Detached', interests: 'Technical', structure: 'Stratified' },
    { id: 20, name: 'Confidence Artist', attitude: 'Adaptable', tactics: 'Casual', interests: 'Hedonic', structure: 'Solitary' },
  ],
  lineage: [
    { id: 1, name: 'Troop1' },
    { id: 2, name: 'Troop2' },
    { id: 3, name: 'Troop3' },
    { id: 4, name: 'Hive1' },
    { id: 5, name: 'HIve2' },
    { id: 6, name: 'Hive3' },
    { id: 7, name: 'Quarry1' },
    { id: 8, name: 'Quarry2' },
    { id: 9, name: 'Quarry3' },
    { id: 10, name: 'Cloud1' },
    { id: 11, name: 'Cloud2' },
    { id: 12, name: 'Cloud3' },
  ],
  gender: [
    { id: 1, name: 'male' },
    { id: 2, name: 'female' },
    { id: 4, name: 'agender' },
    { id: 5, name: 'worker' },
    { id: 6, name: 'soldier' },
    { id: 7, name: 'major' },
    { id: 8, name: 'minor' },
    { id: 9, name: 'crystal' },
    { id: 10, name: 'vermillion' },
    { id: 11, name: 'amber' },
    { id: 12, name: 'chartreuse' },
    { id: 13, name: 'teal' },
    { id: 14, name: 'violet' },
    { id: 15, name: 'indigo' },
  ],

  getById: function (key, id) { return this[key].find(e => e.id === parseInt(id)); },
  bySpecies: function (key, sid) {
    return sid && this[key].filter(e => this.getById('species', sid)[key].includes(e.id));
  }
};

