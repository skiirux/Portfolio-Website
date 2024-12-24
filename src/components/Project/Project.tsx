import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/skiirux/Hirrd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3> Job Listing & Application Platform</h3>
              <p>
                {" "}
                Developed a job listing platform with ad vanced features like
                job posting, sav ing/unsaving jobs, application submissions, and
                real-time data updates. • Optimized user experience with
                protected routes, user onboarding, and form validation using
                React Hook Form and Zod, ensuring seamless workflows. •
                Technologies Used: ReactJS, Shadcn UI, Node.js, React Hook Form,
                Supabase, Clerk, Git{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React JS</li> <li>NodeJS</li> <li>Supabase</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/RealTimeMessenger"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real-time Messaging App</h3>
              <p>
                Designed and developed a real-time messag ing application with
                one-on-one and group chat functionality using Socket.io for
                seamless communication. • Implemented secure user authentication
                and authorization with JWT and Bcrypt, ensuring password
                security and safe user login flows. • Technologies Used:
                React.js, Node.js, Express.js, MongoDB, Socket.io, JWT, Bcrypt,
                REST APIs
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>NodeJS</li>
                <li>Web Socket</li>
                <li>Restful API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/skiirux/antai"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://antai-zeta.vercel.app/"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CodeAnt AI Code Reviewer Frontend App</h3>
              <p>
                Developed a Responsive Web Application: Designed and implemented
                a user-friendly dashboard with a responsive sidebar for seamless
                navigation, ensuring adherence to the provided Figma design.
                Integrated GitHub API: Fetched and displayed real-time
                repository data with search, filter, and refresh functionality
                using React and React Router. Optimized Front-End Development:
                Utilized Tailwind CSS and Heroicons for a modern UI design,
                ensuring cross-platform compatibility and efficient rendering.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Tailwind CSS</li>
                <li>Github API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/skiirux/Password-Generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://createurpassword.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Password Generator</h3>
              <p>
                Developed a Secure Password Generator: Built a fully functional
                web application to generate secure passwords with customizable
                options, ensuring ease of use and responsiveness. Leveraged
                React Hooks: Utilized React hooks such as useState for state
                management, useRef for DOM manipulation, and useCallback to
                optimize performance. Deployed for Public Access: Hosted the
                application online for real-time usage and showcased effective
                implementation of modern React practices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>Hooks</li>
                <li>Problem Solving</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Full-Stack Blogging Platform</h3>
              <p>
                Developed a full-featured blogging website with user
                signup/signin, protected pages, and user-specific dashboards for
                personalized ex periences. • Integrated Appwrite as the backend
                to handle authentication, database interactions, and server-side
                features, ensuring scalability and seamless real-time updates. •
                Technologies Used: React Router, Redux Toolkit, Appwrite,
                Node.js, Visual Editor, Im age Upload, Cloud Storage.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux Toolkit</li>
                <li>Appwrite</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/skiirux/CurrencyConverter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://converturcurrency.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Currency Converter</h3>
              <p>
                Built a Real-Time Currency Converter: Developed a web
                application that dynamically converts currencies using a
                real-time API, eliminating the need for hardcoded values and
                ensuring accuracy. Integrated External APIs: Utilized a currency
                exchange API to fetch up-to-date conversion rates, enabling
                seamless calculations and user-friendly interactions. Optimized
                for Responsiveness and Performance: Designed with responsiveness
                in mind, ensuring compatibility across devices and optimized
                performance for efficient API requests and data rendering.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>React</li>
                <li>tailwind CSS</li>
                <li>API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
