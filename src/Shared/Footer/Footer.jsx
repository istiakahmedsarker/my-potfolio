const Footer = () => {
  return (
    <footer className="bg-[#023240] text-white p-4 text-center">
      <p>&copy; 2023 Istiak Ahmed. All rights reserved.</p>
      <div className="mt-2">
        <a href="mailto:your.email@example.com" className="text-teal-500 hover:text-teal-300">
          Email
        </a>
        <span className="mx-2">|</span>
        <a href="https://www.linkedin.com/in/istiak-ahmed-sarker-a38b7527a" target="__blank" className="text-teal-500 hover:text-teal-300">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
