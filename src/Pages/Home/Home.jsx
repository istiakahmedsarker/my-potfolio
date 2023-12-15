import Banner from './Banner/Banner';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { useEffect, useRef } from 'react';
import Footer from '../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const Navbar = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
    const scrollHandler = (ref) => {
        if (ref.current) {
            window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar fixed z-10 bg-[#022835] p-8 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#023240] rounded-box w-52">
                        <li style={{ cursor: 'pointer' }} onClick={() => scrollHandler(homeRef)} className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                            Home
                        </li>
                        <li style={{ cursor: 'pointer' }} onClick={() => scrollHandler(aboutRef)} className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                            About
                        </li>
                        <li style={{ cursor: 'pointer' }} onClick={() => scrollHandler(projectsRef)} className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                            Projects
                        </li>
                        <li style={{ cursor: 'pointer' }} onClick={() => scrollHandler(contactRef)} className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                            Contact
                        </li>
                    </ul>
                </div>
                <Link to='/' style={{ cursor: 'pointer' }} onClick={() => scrollHandler(homeRef)} className='text-5xl text-gray-300 transition-colors duration-300 flex justify-center'>
                    Portfolio
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <li style={{ cursor: 'pointer' }} onClick={() => scrollHandler(homeRef)} className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                        Home
                    </li>
                    <li style={{ cursor: 'pointer' }} onClick={() => scrollHandler(aboutRef)} className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                        About
                    </li>
                    <li style={{ cursor: 'pointer' }} onClick={() => scrollHandler(projectsRef)} className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                        Projects
                    </li>
                    <li style={{ cursor: 'pointer' }} onClick={() => scrollHandler(contactRef)} className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
};


const Home = () => {
    const homeRef = useRef();
    const aboutRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();

    return (
        <div className="bg-[#022835] text-gray-300 ">
            <div className="">
                <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
            </div>
            <div ref={homeRef} className="md:pb-[220px] pt-[300px]">
                <Banner />
            </div>
            <div ref={aboutRef} className="py-28">
                <About />
            </div>
            <div ref={projectsRef} className=" py-28">
                <Projects />
            </div>
            <div ref={contactRef} className=" py-28">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
