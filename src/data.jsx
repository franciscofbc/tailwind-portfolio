import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://servidor-estaticos-rose.vercel.app/githubUser.png',
    url: 'https://fbc-githubuser.netlify.app/login',
    github: 'https://github.com/franciscofbc/starter-project-react-github-search-users-master',
    title: 'Github User',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://servidor-estaticos-rose.vercel.app/coverVanLife.png',
    url: 'https://fcc-react-router-dom.vercel.app/',
    github: 'https://github.com/franciscofbc/fcc-react-router-dom',
    title: 'Van Life APP',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://servidor-estaticos-rose.vercel.app/comfySloth.png',
    url: 'https://fbc-comfysloth.netlify.app/',
    github: 'https://github.com/franciscofbc/react-course-comfy-sloth-starter-main',
    title: 'Comfy Sloth',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://servidor-estaticos-rose.vercel.app/eplay.png',
    url: 'https://35-eplay.vercel.app/',
    github: 'https://github.com/franciscofbc/35-eplay',
    title: 'Eplay',
    text: 'React Router, React Redux, Syled Components and TypeScript',
  },
  {
    id: nanoid(),
    img: 'https://servidor-estaticos-rose.vercel.app/efood.png',
    url: 'https://35-efood-exercicio.vercel.app/',
    github: 'https://github.com/franciscofbc/35-efood-exercicio',
    title: 'Efood',
    text: 'React Router, React Redux, Syled Components and TypeScript',
  },
  {
    id: nanoid(),
    img: 'https://servidor-estaticos-rose.vercel.app/searchMovies.png',
    url: 'https://fbcmoviesdb.netlify.app/',
    github: 'https://github.com/franciscofbc/movies-db',
    title: 'Search Movies',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://servidor-estaticos-rose.vercel.app/searchPhotos.png',
    url: 'https://fbc-searchphotos.netlify.app/',
    github: 'https://github.com/franciscofbc/07-unsplash-images',
    title: 'Search Photos',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
