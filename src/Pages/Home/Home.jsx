import Banner from './Banner/Banner';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { useRef } from 'react';

const Home = () => {
    return (
        <div className="bg-[#022835] text-gray-300 p-8">
            <Banner />
            <About />
            <Projects/>
            <Contact />
        </div>
    );
};

export default Home;
