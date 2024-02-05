import aboutpic from './components/Access/meProfile.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://stefanoscolapasta.github.io/personal/',
  title: 'Computer Graphics',
}

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'STEFANO SCOLARI',
  role: 'Software Engineer with a keen interest in Computer Graphics',
  description: {
    miniResumeList: [
      [1, "Computer Science Master's student @KTH"],
      [2, 'Software Engineer Intern @Warner Bros. Discovery'],
    ],
  },
  resume:
    'https://drive.google.com/file/d/1T5g2tn6Hb52tRgOVu3YBEtPkQQTuK33-/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/stefano-scolari/',
    github: 'https://github.com/stefanoscolapasta',
  },
}

const education = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    university: 'KTH Royal Institute of Technology',
    level: "Master's",
    course: 'Computer Science (Visualization and Computer Graphics)',
    grade: 'Current GPA: 4.5/5',
    date: '2022-09 / current',
  },
  {
    university: 'Alma Mater Studiorum - University of Bologna',
    level: "Bachelor's",
    course: 'Engineering and Computer Science',
    grade: 'Graduation grade: 109/110',
    date: '2019-09 / 2022-07',
  },
]

const experience = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    title: 'Master Thesis Student Researcher',
    company: 'EA (Electronic Arts), EA Seed',
    skills: [
      'Gaussian Splatting',
      'Real-Time Rendering', 
      'C++',
      'Computer Graphics',
    ],
    period: ['February 2024 / present'],
    responsibility:
    "Working within EA's Research Division (EA Seed) on my Master's Thesis regarding Gaussian Splatting for Real Time rendering"
  },
  {
    title: 'XR Software Engineer Intern',
    company: 'European Space Agency',
    skills: [
      'Computer Graphics',
      'Unreal Engine 5', 
      'Software Engineering',
    ],
    period: ['October 2023 / February 2024'],
    responsibility:
    'Support the development of Argonaut and Human Inspirator VR/AR projects for future'+
    ' lunar missions in Unreal Engine 5 within the XR-Lab and managed software approaches and development'+
    ' in a small interdisciplinary team using Unreal Engine 5'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Warner Bros. Discovery',
    skills: [
      'Typescript',
      'React',
      'WebSockets',
      'Javascript',
      'Koa',
      'Testing',
      'CI/CD',
    ],
    period: ['June 2023 / August 2023'],
    responsibility:
      'Worked on a new collaborative editing feature for Studio, internal tool used to manage HBO Max and Discovery Plus.' +
      ' Handled real-time communication and updates through Websocket connections. Collaborated on the creation of an ad-hoc Backend Service for such feature.' +
      ' Developed a custom component in React, now used by Studio users.',
  },
  {
    title: 'Software Engineer',
    company: 'Bordr',
    period: ['November 2022 / April 2023'],
    skills: ['Typescript', 'WebRTC', 'CloudXR', 'VR'],
    responsibility:
      'During my stay at Bordr, I worked on the development of a VR streaming service, with the aim of enabling low-latency VR gaming streaming.',
  },
  {
    title: 'Undergraduate Student Researcher',
    company: 'Alma Mater Studiorum - University of Bologna',
    period: ['January 2022 / March 2022'],
    skills: [
      'Blender',
      'Python',
      'Computation Fluid Dynamics',
      'Computer Graphics',
    ],
    responsibility:
      'Internship focused on Computational Fluid Dynamics, under the supervision of prof. Damiana Lazzaro.' +
      ' Objective of this experience was to study the physical and mathematical principles at the basis of Computational Fluid Dynamics (CFDs),' +
      ' together with numerical algorithms and methods. Implementing a fluid simulation in Computer Graphics, using MantaFlow and Python, represented' +
      ' the final step of this internship.',
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'OpenGL experiments',
    description:
      'To further my understanding of OpenGL, I have been experimenting with with the API and its features',
    stack: ['C++, OpenGL, 3D Computer Graphics'],
    sourceCode: 'https://github.com/stefanoscolapasta/OpenGL-Experiments',
  },
  {
    name: 'Real-Time Mesh Fracturing and Destruction using Voronoi Diagrams',
    description:
      'Explored the computation of 3D Voronoi Diagrams of meshes and their accompanying Delaunay' +
      ' tetrahedralization.',
    stack: ['C++, OpenGL, Computational Geometry, 3D Computer Graphics'],
    sourceCode: 'https://github.com/stefanoscolapasta/3D-Voronoi-Fracturing',
    livePreview:
      'https://drive.google.com/file/d/1dZ3Pzlr2PvQdSETss2HvnFsm7AG1_D0-/view?usp=drive_link',
  },
  {
    name: 'Raytracer',
    description: 'Had fun creating a raytracer with no external libraries',
    stack: ['C++', 'Rendering', 'Computer Graphics'],
    sourceCode: 'https://github.com/stefanoscolapasta/Raytracer'
  },
  {
    name: 'Hermite Cubic Spline Curve Editor',
    description: 'Created an editing tool for Cubic Hermite Splines',
    stack: ['C++', 'OpenGL', 'Computational Geometry'],
    sourceCode:
      'https://github.com/stefanoscolapasta/Hermite-Cubic-Spline-Curve-Editor',
  },
  {
    name: '2D Lighting Raycast System',
    description:
      'Created a 2D lighting system based on raycasting and polygon triangulation.',
    stack: ['C++', 'SFML', 'Computer Graphics'],
    sourceCode:
      'https://github.com/stefanoscolapasta/2D_Raycast_Lighting_System',
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
  'Computer Graphics',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'stevescolari97@gmail.com',
}

export { header, about, education, projects, skills, contact, experience }
