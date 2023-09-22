import SectionTitle from './SectionTitle'
import aboutSvg from '../assets/about.svg'

const About = () => {
    return (
        <section className="bg-white py-20" id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SectionTitle text='about me' />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Vero, eos minus. Pariatur, sint
                        fugiat. Saepe, incidunt, mollitia dolorum quisquam sunt adipisci
                        architecto porro suscipit facere dignissimos quos, quibusdam optio
                        natus.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About