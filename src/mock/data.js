/* eslint-disable react/no-unescaped-entities */
import { nanoid } from 'nanoid';
import React from 'react';
// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, 👋  my name is',
  firstName: 'Samundra',
  lastName: 'Dhakal',
  subtitle: (
    <h1 className="hero-title">
      I'm a fullstack <span style={{ color: '#eece1a' }}>Developer</span>.
    </h1>
  ),
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Ambitious and highly driven fullStack developer discovering varying stacks of software development.',
  paragraphTwo:
    ' Skill set of TypeScript, React, React Native, GraphQL, Redux, ContextAPI, Material-UI, Materialize in frontend, Node, Express, MongoDB, Postgress, MySQL in backend & Dockerize, Bash Scripting, AWS & CI/CD in Devops side, Testing with Jest and Cypress with the intermediate knowledge on Java, C & C++.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'github.jpeg',
    title: (
      <h3>
        Github <span style={{ color: 'orange' }}>Finder</span>
      </h3>
    ),
    info: (
      <p>
        React application project which includes following stacks:
        <li>React</li>
        <li>Context API</li>
        <li>React Hooks</li>
        <li>Docker</li>
      </p>
    ),
    info2: (
      <p>
        This application includes above stacks which use the github user
        <a target="_blank" rel="noopener noreferrer" href="https://api.github.com/users">
          {' '}
          <span style={{ color: 'blue' }}>RestAPI</span>
        </a>
        <br />
        to fetch the user data. To access all the user data from github Api, one should need to make
        a authentication from github and use the clientId and client secret of github in the
        project.
      </p>
    ),
    url: 'https://findergithub-user.netlify.app/',
    repo: 'https://github.com/dhakalsamundra/Github-Finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'contact.jpeg',
    title: (
      <h3>
        Contact <span style={{ color: '#003699' }}>Application</span>
      </h3>
    ),
    info: (
      <p>
        React application project, implemented to save the people contact number. This project use
        following stacks:
        <li>React</li>
        <li>Node & Express</li>
        <li>Sendgrid</li>
        <li>React Hooks</li>
        <li>Context API</li>
        <li>MongoDB</li>
        <li>Authentication & Authorization</li>
      </p>
    ),
    info2: (
      <p>
        This project is the updated version of my previous
        <a target="_blank" rel="noopener noreferrer" href="https://contactentry.herokuapp.com/">
          {' '}
          <span style={{ color: '#003699' }}>Phonebook</span>
        </a>{' '}
        project where the saved number is public.
      </p>
    ),
    url: 'https://contact-dir-app.herokuapp.com/',
    repo: 'https://github.com/dhakalsamundra/Contact-Api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chat.jpeg',
    title: (
      <h3>
        Chat <span style={{ color: 'red' }}>Application</span>
      </h3>
    ),
    info: (
      <p>
        Project where one can chat with other users where project completed with following stacks:
        <li>React & Apollo Client</li>
        <li>React Bootstrap</li>
        <li>Nodejs with Apollo Server</li>
        <li>Sequelize ORM</li>
        <li>Authentication & Authorization</li>
        <li>Web Socket</li>
        Project use web socket,(Subscription), for real time data transmission for exchanging the
        message as well as reacting the message which also use the react bootstrap for wrapping the
        bootstrap in react. For the database section relational database with MYSQL and apollo
        framework in server side with Authorization and authentication has been implemented along
        with apollo client in client side to consume graphql api with react.
      </p>
    ),
    url: 'http://35.158.134.160/',
    repo: 'https://github.com/dhakalsamundra/chat-application', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nation.jpeg',
    title: (
      <h3>
        Countries <span style={{ color: 'crimson' }}>Data</span>
      </h3>
    ),
    info: (
      <p>
        A single page application to show the use of redux where the application use the following
        stacks:
        <li>TypeScript</li>
        <li>React Hooks</li>
        <li>Redux</li>
        <li>Redux thunk</li>
        <li>Redux Saga</li>
        <li>Material UI</li>
        <li>ESLint</li>
        <li>Docker</li>
      </p>
    ),
    info2: (
      <p>
        Project use the function like nation search, add/remove the nation from the cart and sorting
        the data with the help of redux in the application. One can also toggle the ui color theme
        which is implemented via ternary operator. Application talks with the{' '}
        <a target="_blank" rel="noreferrer" href="https://restcountries.eu/">
          <span style={{ color: 'crimson' }}>Rest</span>
        </a>{' '}
        <a target="_blank" rel="noreferrer" href="https://restcountries.eu/rest/v2/all">
          <span style={{ color: 'crimson' }}>Countries</span>
        </a>{' '}
        API to get and fetch the data.
      </p>
    ),
    url: 'https://nation-data.netlify.app/',
    repo: 'https://github.com/dhakalsamundra/Countries-Api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'library.jpeg',
    title: <h3>Library Application</h3>,
    info: (
      <p>
        A fullstack application where user can borrow and return the books. Application use
        following stacks:
        <li>TypeScript</li>
        <li>React Hooks</li>
        <li>Redux</li>
        <li>Redux thunk</li>
        <li>Redux Saga</li>
        <li>Material UI</li>
        <li>ESLint</li>
        <li>Jest Testing</li>
        <li>Google Authentication via passport</li>
      </p>
    ),
    info2: (
      <p>
        Application where there are 2 type of login one as a admin and another as a user. User can
        borrow and unborrow the book where admin have all access of CRUD operation of the book.
      </p>
    ),
    repo: 'https://github.com/dhakalsamundra/Library', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dhakalsamundra35@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/samundra-dhakal-85b176163/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dhakalsamundra',
    },
  ],
};
