import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

type ContentProps = {
    activePage: string;
};

const Content = ({ activePage }: ContentProps) => {
    return (
        <main className="content">
            {activePage === "about" && <About />}
            {activePage === "projects" && <Projects />}
            {activePage === "skills" && <Skills />}
            {activePage === "contact" && <Contact />}
        </main>
    );
};

export default Content;
