import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 left-0 bg-gray-600 text-center text-gray-300 p-2 text-sm md:text-xl flex flex-col items-center md:flex-row md:justify-between md:px-5">
      <p className="text-sm text-gray-300">© 2025 Ar4sCode. All rights reserved.</p>
      <ul className="flex gap-2 mt-2 md:gap-4">
        <li className="md:text-2xl duration-150 hover:text-blue-300"><a href="https://github.com/ar4scode"><FaGithub /></a></li>
        <li className="md:text-2xl duration-150 hover:text-blue-300"><a href="https://www.instagram.com/arasazizi__/"><FaInstagram /></a></li>
        <li className="md:text-2xl duration-150 hover:text-blue-300"><a href="https://www.linkedin.com/in/ar4scode"><FaLinkedin /></a></li>
      </ul>
    </footer>
  )
}

export default Footer;