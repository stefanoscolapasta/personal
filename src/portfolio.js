import aboutpic from "./components/Access/meProfile.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://stefanoscolapasta.github.io/personal/',
  title: 'Computer Graphics',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'STEFANO SCOLARI',
  role: 'Softare Engineer with a keen interest in Computer Graphics',
  description:
    "Computer Science Master's student @KTH\nSoftware Engineer Intern @Warner Bros. Discovery",
  resume: 'https://drive.google.com/file/d/1GR8_OOmip3iCjaIeDIoASROB5da3snU6/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/stefano-scolari/',
    github: 'https://github.com/stefanoscolapasta',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Real-Time Mesh Fracturing and Destruction using Voronoi Diagrams',
    description:
      'The objective of this project was to explore the computation of 3D Voronoi diagrams of meshes and their accompanying Delaunay' +
      ' tetrahedralization as a means of achieving realistic mesh destruction and fracturing in video games. The Voronoi diagram is a'+
      ' geometric representation that divides the space around each mesh vertex into regions, assigning each region to its closest vertex.',
    stack: ['C++, OpenGL, Computational Geometry, 3D Computer Graphics'],
    sourceCode: 'https://github.com/stefanoscolapasta/3D-Voronoi-Fracturing',
    livePreview: 'https://drive.google.com/file/d/1Hq9jtTxvcZ4ic6DJrsJFFkSe_KlGgnBs/view?usp=drive_link'
  },
  {
    name: 'Polywar',
    description:
      'Developed, as a two-man team, a multiplayer FPS game released on Steam',
    stack: ['Blender', 'Unity', 'C#'],
    livePreview: 'https://store.steampowered.com/app/444490/POLYWAR/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C',
  'C++',
  'OpenGL',
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'React',
  'Computer Graphics'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'stevescolari97@gmail.com',
}

export { header, about, projects, skills, contact }
