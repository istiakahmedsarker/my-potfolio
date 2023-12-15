import React from 'react';
import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiNodejs } from 'react-icons/di';
import { SiFirebase, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const About = () => {
    return (
        <div className="bg-[#022835] text-gray-300 p-8 ">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
                <p className="text-lg mb-8 text-center">
                    Hi, I'm Istiak, a passionate web developer with a strong foundation in front-end technologies. I enjoy creating responsive and user-friendly websites that provide a seamless and enjoyable experience.
                </p>
                <p className="text-lg mb-4 text-center"><span className='text-xl font-bold' >Education:</span> I'm a student currently studying in Natore Govt Boys' High School.</p>
                <p className="text-lg mb-4 text-center"><span className='text-xl font-bold' >Experience:</span> I don't have much experience. I have just completed the Programming Hero coure</p>

                {/* Skills Section */}
                <section className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-center">Skills</h3>
                    <ul className="list-inside flex flex-wrap justify-center items-center space-x-4">
                        {[
                            { Icon: DiHtml5, color: 'orange' },
                            { Icon: DiCss3, color: 'blue' },
                            { Icon: DiJsBadge, color: 'yellow' },
                            { Icon: DiReact, color: 'teal' },
                            { Icon: SiFirebase, color: 'yellow' },
                            { Icon: SiTailwindcss, color: 'blue' },
                            { Icon: SiMongodb, color: 'green' },
                            { Icon: SiExpress, color: 'gray' },
                            { Icon: DiNodejs, color: 'gray' },
                        ].map((item, index) => (
                            <li
                                key={index}
                                className={`text-center transition-all duration-300 hover:scale-110`}
                            >
                                <item.Icon className={`text-5xl border-2 hover:border-teal-500 p-2 rounded-full`} />
                                <span className="ml-2">{item.Icon.displayName}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;
