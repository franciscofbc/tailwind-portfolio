import heroImg from '../assets/hero.svg';
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-6xl font-bold capitalize tracking-wider">
            i'm francisco
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            front-end dev
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            welcome to my personal portfolio
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://www.instagram.com/franciscofbcr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://br.linkedin.com/in/francisco-berti-da-cruz-b846975a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://github.com/franciscofbc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="mailto:fbc9911@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelopeSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
