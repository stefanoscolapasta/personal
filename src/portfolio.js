import aboutpic from "./components/Access/me.jpg"

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
  resume: 'https://drive.google.com/drive/folders/12MP3uHk94Ew6_egSJqgxbvycI60gHfXA?usp=sharing',
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
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: ['C++, OpenGL, Computational Geomtry'],
    sourceCode: 'https://github.com/stefanoscolapasta/3D-Voronoi-Fracturing',
  },
  {
    name: 'Polywar',
    description:
      'Developed in a two-man team a multiplayer FPS game released on Steam',
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
