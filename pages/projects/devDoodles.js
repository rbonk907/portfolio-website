import Image from "next/image";
import Link from "next/link";
import ProjectLayout from "../../components/projectLayout";
import devDoodleHome from "../../public/devDoodleHome.png";
import swaggerEditor from "../../resources/images/swagger-editor.png";
import dbmlDiagram from "../../resources/images/DevDoodlesDBLight.png";
import postgreLogo from "../../resources/images/postgresql-logo.png";
import devDoodleCheckout from "../../resources/images/dev-doodle-checkout.png";
import { BsChevronLeft, BsBoxArrowUpRight } from "react-icons/bs";


export default function DevDoodlesPage() {

    return (
        <ProjectLayout>
            <section className="w-full flex flex-col items-start py-8 px-6 md:px-20 bg-slate-100 shadow-lg shadow-slate-400">
                <h1 className="text-5xl font-extrabold">Dev Doodles</h1>
                <p className="text-justify max-w-4xl text-base leading-6 py-6">
                    Dev Doodles is a Full-stack E-commerce application for selling humorous software-related stickers and decals. I built this project with NextJS (React), PostgreSQL, and the Node.js web framework, Express. This project was my first attempt at a PERN app and offered many challenges including user authentication/authorization, persistent user sessions, and client routing to name a few. Building this application, was a rewarding experience and provided tremendous insight into full-stack development. I am excited to delve deeper into the technologies used here and learn the best practices for designing optimized applications.
                </p>
                <div className="flex flex-row">
                    <div className="mr-12">
                        <span className="font-bold block pb-4">Stack</span>
                        <ul>
                            <li className="pb-3">Next.js</li>
                            <li className="pb-3">PostgreSQL</li>
                            <li className="pb-3">Express</li>
                            <li className="pb-3">Node.js</li>
                        </ul>
                    </div>
                    <div>
                        <span className="block font-bold pb-4">Live</span>
                        <a href="https://frontend-dev-doodles.onrender.com/" target="_blank" className="font-bold text-blue-500 flex items-center gap-3 mb-3">
                            <span>View Site</span>
                            <BsBoxArrowUpRight className="stroke-1 w-[18px] h-[18px]" />
                        </a>
                        <a href="https://github.com/rbonk907/dev-doodles/" target="_blank" className="font-bold text-blue-500 flex items-center gap-3">
                            <span>Github Repo</span>
                            <BsBoxArrowUpRight className="stroke-1 w-[18px] h-[18px]" />
                        </a>
                    </div>
                </div>
                <div className="w-11/12 md:w-8/12 self-center">
                    <Image 
                    src={devDoodleHome} 
                    alt="Mockup image of the website displayed on a web browser and iphone"
                    className="w-auto h-full" />
                </div>
                
            </section>
            <section className="w-full flex flex-col items-start py-8 px-6 md:px-20">
                <h2 className="text-3xl font-extrabold pb-6">Project Purpose and Goal</h2>
                <div className="flex gap-x-10 flex-wrap w-full">
                    <div className="min-w-[300px] flex-1">
                        <h3 className="text-2xl font-bold">Phase 1</h3>
                        <p className="pb-8 text-justify text-base leading-6 max-w-2xl"> 
                            This project was developed in three phases following a design-first approach. Phase 1 involved designing the API for the Dev Doodles backend following the Open API  3.0 specification. This included mapping out the structure of the relational database for the project. A yaml file was produced for the API using the open-source Swagger Editor.
                        </p>
                    </div>
                    <div className="max-w-[700px] mx-auto">
                        <Image 
                            src={swaggerEditor}
                            alt="Screenshot of the Swagger API Editor showing the Dev Doodles API specification"
                            className="w-auto h-full"
                        />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mt-6">Phase 2</h3>
                <p className="pb-8 text-justify text-base leading-6 max-w-2xl">
                    In phase 2, the Dev Doodles API was implemented using Node.js and the Express framework. This also involved creating a PostgreSQL database that matched the relational database designed in phase 1 and connecting it to the Node backend. 
                </p>
                <div className="flex justify-center items-center w-full gap-8"> 
                    <div className="max-w-[600px]">
                            <Image 
                                src={dbmlDiagram}
                                alt="Screenshot of the relational database designed with dbdiagram.io"
                                className="w-auto h-full rounded-lg shadow-md shadow-slate-400"
                            />
                    </div>
                    <div className="hidden md:block h-[250px] flex-none">
                        <Image 
                            src={postgreLogo}
                            alt="PostgreSQL Logo"
                            className="w-auto h-full"
                        />
                    </div>
                </div>
                <div className="self-center mb-5">
                    <h3 className="text-2xl font-bold mt-6">Phase 3</h3>
                    <p className="text-justify text-base leading-6 max-w-2xl">
                        Lastly, phase 3 consisted of building the front-end using Next.js. The front-end displayed necessary data stored in the database to the users and handled the shopping cart user flow.
                    </p>
                </div>
                <div className="hidden md:block max-w-[800px] self-center">
                    <Image 
                        src={devDoodleCheckout}
                        alt="Checkout page on the Dev Doodles website"
                        className="w-auto h-full"
                    />
                </div>
        </section>
            <section className="w-full flex flex-col items-end py-8 px-6 md:px-20">
                <h2 className="text-3xl font-extrabold pb-6">Web Stack and Explanation</h2>
                <p className="text-justify leading-6 max-w-2xl">
                    The ultimate goal of this project was to practice PERN development, so some of the technologies used lack a greater explanation for their choice other than “it would not be a PERN app without it.” That said, this project does not use “vanilla” React, but the React framework Next.js, instead. At the time of writing this, the official React documentation recommends using a React Framework, so I chose Next.js due to having a pleasant experience with it in the past (including the development of this portfolio website). As discussed in <Link href="#lessonsLearned" className="font-bold text-blue-500 hover:underline">Lessons Learned</Link>, I&apos;m not so sure that was the best idea for this project.
                </p>
            </section>
            <section className="w-full flex flex-col items-start py-8 px-6 md:px-20">
                <h2 className="text-3xl font-extrabold pb-6">Problems and Thought Process</h2>
                <p className="text-justify leading-6 max-w-2xl">
                    This project introduced many challenges that required extra research to overcome. If I had to highlight one, it would be the implementation of user log-in with persistent sessions. A persistent user session was necessary for a pleasant shopping experience where users could add items to a cart, leave the page if needed, and return to have their items still stored in the cart (assuming their session had not expired). After researching methods for verifying users and re-establishing sessions, I implemented the user sessions using the express-session middleware, where the session is stored on the database and a signed cookie is stored on the client. The cookie is submitted with each HTTP request and upon successful verification of the signed cookie, the session is reestablished. 
                </p>
            </section>
            <section className="w-full flex flex-col items-center py-8 px-6 md:px-20">
                <h2 id="lessonsLearned" className="text-3xl font-extrabold pb-6">Lessons Learned</h2>
                <p className="text-justify leading-6 max-w-4xl">
                    This project was my first attempt at a Full-stack application, so a lot of the work involved connecting the dots on how a front-end application is meant to interact with a back-end. This resulted in design choices along the way that I am not confident about and I believe need further review and refinement. For example, Next.js is a full-stack React framework by itself, and I&apos;m uncertain whether it was the best choice for a simple project of this size. Since all server functionality is being handled by the custom Node.js + Express backend, there is little need for the dedicated server provided by the Next.js runtime. This ultimately concluded in a valuable lesson on cross-site cookies. Both the front-end and back-end are hosted on the Render Cloud platform as independent web services, which means that without purchasing a custom domain, they have separate domains, and the back-end cannot store cookies (like the persistent session ID) on the Next.js front-end. If I were to redo this project, I would opt for a React framework that builds static files (like Gatsby), and have those files served by the Express back-end. This would allow the entire application to be hosted in one domain and eliminate issues created by cross-origin requests.
                </p>
            </section>

            <section className="w-full flex flex-col items-start py-8 px-6 md:px-20">
                <h2 className="text-2xl font-extrabold pb-6">Check out my other projects</h2>
                <Link href="/projects/redditRedux" className="flex items-center gap-6 bg-slate-100 shadow-lg shadow-slate-400 w-fit py-6 px-4 pr-12">
                    <BsChevronLeft className="w-6 h-6" />
                    <div>
                        <h3 className="text-xl font-extrabold">Reddit + Redux</h3>
                        <p className="text-gray-600">Minimalistic Reddit application using React and Redux</p>
                    </div>
                    
                </Link>
            </section>
        </ProjectLayout>
    );
}