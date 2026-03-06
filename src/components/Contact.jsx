import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="mailto:wyatt.kaiser@outlook.com"
        className="hover:text-blue-400 transition"
      >
        <IoIosMail />
      </a>
      <a
        href="https://www.linkedin.com/in/wyatt-kaiser"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/wkaiser21"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default Contact;
