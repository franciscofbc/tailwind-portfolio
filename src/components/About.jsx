import SectionTitle from './SectionTitle'
import aboutSvg from '../assets/about.svg'

const About = () => {
    // 
    return (
        <section className="bg-white py-20" id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SectionTitle text='about me' />
                    <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum modi. Odio, ea quidem explicabo quam tenetur optio sed sint repellendus quae blanditiis perspiciatis. Fuga eligendi quasi provident officia quaerat.</p>
                </article>
            </div>
        </section>
    )
}

export default About