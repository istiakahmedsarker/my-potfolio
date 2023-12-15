import { FaGithub, FaDownload } from 'react-icons/fa';
import fileDownload from 'react-file-download';

const Banner = () => {
  const handleResumeDownload = () => {
    const resumeLink = 'https://www.dropbox.com/scl/fi/9uimavly1sj6b9wf8yocl/IstiakAhmedSarkerResume.pdf?rlkey=xdgs9f60dskn4vls8v6twsd1q&dl=0';
    
    fileDownload(resumeLink, 'IstiakAhmedSarkerResume.pdf');
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 mx-4">Welcome to My Portfolio</h2>
        <p className="text-xl mb-4 md:mx-auto mx-4">Hi!, I'm Istiak. A passionate Front-end React web developer.</p>
        <div className="text-3xl flex flex-col md:flex-row gap-4 items-center my-8">
          <a
            href="https://github.com/istiakahmedsarker"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-no-underline flex items-center gap-2 border-b-4 border-teal-700 px-2 py-1 rounded hover:border-teal-300"
          >
            <FaGithub className="text-2xl" />
            <span className="font-bold">Github</span>
          </a>
          <div
            className="custom-no-underline flex items-center gap-2 border-b-4 border-teal-700 px-2 py-1 rounded hover:border-teal-300 cursor-pointer"
            onClick={handleResumeDownload}
          >
            <FaDownload className="text-2xl text-gray-300" />
            <span className="font-bold text-gray-300">Resume</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
