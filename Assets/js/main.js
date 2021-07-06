// Pilots Section //
const pilotsProp = {
  pilots: document.getElementById('pilots-main'),
  pilot: null,
  pilotPicture: null,
  pilotInfo: null,
  pilotName: null,
  info: null,
  teamImage: null,
  teams: {
    lamborghini: 'url(Assets/img/lamborghini.png)',
    ferrari: 'url(Assets/img/ferrari.png)',
    porsche: 'url(Assets/img/porsche.png)',
    maclaren: 'url(Assets/img/maclaren.png)',
    Aston: 'url(Assets/img/astonmartin.png)',
    Mercedes: 'url(Assets/img/mercedes.png)',
  },
  moreButton: document.getElementById('pilots-button'),
};

const pilots = [
  {
    id: 'jhonPoppins',
    name: 'Jhon Poppins',
    age: 32,
    picture: 'Assets/img/pilot lambo.png',
    team: pilotsProp.teams.lamborghini,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. <hr/> Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'davidWawas',
    name: 'David Wawas',
    age: 30,
    picture: 'Assets/img/pilot ferrari.png',
    team: pilotsProp.teams.ferrari,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. <hr/> Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'mattTruccio',
    name: 'Matt Truccio',
    age: 28,
    picture: 'Assets/img/pilot porsche.png',
    team: pilotsProp.teams.porsche,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. <hr/> Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'peterAltagama',
    name: 'Peter Altagama',
    age: 37,
    picture: 'Assets/img/pilot mclaren.png',
    team: pilotsProp.teams.maclaren,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. <hr/> Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'samuelTeteo',
    name: 'Samuel Teteo',
    age: 30,
    picture: 'Assets/img/pilot aston.png',
    team: pilotsProp.teams.Aston,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. <hr/> Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'lucasMolineo',
    name: 'Lucas Molineo',
    age: 30,
    picture: 'Assets/img/pilot mercedes.png',
    team: pilotsProp.teams.Mercedes,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. <hr/> Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
];
const pilotsMets = {
  run() {
    pilots.forEach((pilot) => {
      pilotsMets.create(pilot);
    });
  },
  create(pilot) {
    // Create Pilot Div //
    pilotsProp.pilots.appendChild(document.createElement('div')).setAttribute('id', pilot.id);
    pilotsProp.pilot = document.getElementById(pilot.id);
    pilotsProp.pilot.classList.add('col-11', 'col-md-5', 'd-flex', 'pilot');
    // Create Pilot Picture //
    pilotsProp.pilot.appendChild(document.createElement('img')).setAttribute('id', `${pilot.id}-picture`);
    pilotsProp.pilotPicture = document.getElementById(`${pilot.id}-picture`);
    pilotsProp.pilotPicture.classList.add('col-4', 'pilot-picture');
    pilotsProp.pilotPicture.setAttribute('src', pilot.picture);
    // Create Pilot info container //
    pilotsProp.pilot.appendChild(document.createElement('div')).setAttribute('id', `${pilot.id}-info`);
    pilotsProp.pilotInfo = document.getElementById(`${pilot.id}-info`);
    pilotsProp.pilotInfo.classList.add('col-8', 'pilot-info');
    // Create Pilot name //
    pilotsProp.pilotInfo.appendChild(document.createElement('h5')).setAttribute('id', `${pilot.id}-name`);
    pilotsProp.pilotName = document.getElementById(`${pilot.id}-name`);
    pilotsProp.pilotName.innerText = pilot.name;
    // Create info //
    pilotsProp.pilotInfo.appendChild(document.createElement('p')).setAttribute('id', `${pilot.id}-main-info`);
    pilotsProp.info = document.getElementById(`${pilot.id}-main-info`);
    pilotsProp.info.innerHTML = pilot.info;
    // Create Pilot Team //
    pilotsProp.pilot.style.backgroundImage = `${pilot.team}`;
    // Create Button Functionality //
    // pilotsProp.moreButton.addEventListener('click', pilotsMets.more);
  },
  more() {
  },
};
pilotsMets.run();
