import Image from "next/image"
import redditReduxDemo from "../../public/reddit-redux.PNG";
import reactLogo from "../../public/logo192.png";
import reduxLogo from "../../public/reduxLogo192.png";
import typeSLogo from "../../public/typescript.png";
import netlifyLogo from "../../public/netlify-logo.png";
import styles from "../../styles/RedditRedux.module.css"
import ProjectLayout from "../../components/projectLayout";
import Link from "next/link";
import { BsChevronLeft, BsBoxArrowUpRight } from "react-icons/bs"

export default function RedditRedux() {
    return (
        <ProjectLayout>
            <section className="w-full flex flex-col items-start py-8 px-6 md:px-20 bg-slate-100 shadow-lg shadow-slate-400">
                <h1 className="text-5xl font-extrabold">Reddit + Redux</h1>
                <p className="text-justify max-w-4xl py-6">
                    Reddit + Redux is a React application built as a minimalistic reddit application. The project was written using React, Redux, and the Reddit JSON API.
                </p>
                <div className="flex flex-row">
                    <div className="mr-12">
                        <span className="font-bold block pb-4">Stack</span>
                        <ul>
                            <li className="pb-3">TypeScript</li>
                            <li className="pb-3">React</li>
                            <li className="pb-3">Redux</li>
                            <li className="pb-3">Netlify</li>
                        </ul>
                    </div>
                    <div>
                        <span className="block font-bold pb-4">Code</span>
                        <a href="https://github.com/rbonk907/reddit-api-project" target="_blank" rel="noreferrer" className="font-bold text-blue-500 flex items-center gap-3">
                            <span>Github Repo</span>
                            <BsBoxArrowUpRight className="stroke-1 w-[18px] h-[18px]" />
                        </a>
                    </div>
                </div>
                <div className="w-11/12 md:w-8/12 self-center">
                    <Image src={redditReduxDemo} alt="Demo photo of Reddit Redux project" className="w-auto h-full" />
                </div>
            </section>
            
            <section className="w-full flex flex-col items-end py-8 px-6 md:px-20">
                <h2 className="text-3xl font-extrabold pb-3 md:pb-6">Web Stack and Explanation</h2>
                <div className="flex gap-x-40 flex-wrap">
                    <div className="flex md:flex-col gap-8 py-4 m-auto">
                        <div className="w-10">
                            <Image src={typeSLogo} alt={"TypeScript Logo"} className="w-auto h-full" />
                        </div>
                        <div className="w-10">
                            <Image src={reactLogo} alt={"React Logo"} className="w-auto h-full" />
                        </div>
                        <div className="w-10">
                            <Image src={reduxLogo} alt={"Redux Logo"} className="w-auto h-full" />
                        </div>
                        <div className="w-10">
                            <Image src={netlifyLogo} alt={"Netlify Logo"} className="w-auto h-full" />
                        </div>
                    </div>
                    <div className="text-justify max-w-2xl flex-1 min-w-[300px]">
                        <p className="pb-8">
                            Going into this project, I knew there would be a lot of state variables related to different subreddits and posts received from the reddit JSON API, so I wanted to use Redux as a reliable state management tool. This in turn made me choose React due to the smooth workflow between Redux and the official React bindings, React-Redux.
                        </p>
                        <p className="pb-8">
                            Additionally, I chose to use TypeScript for this project, because the Reddit JSON API is poorly documented and I knew I&apos;d have trouble keeping track of the different data types received from <code>GET</code> requests. TypeScript forced me to be methodical about the data I was requesting and provided a level of sanity during debugging.
                        </p>
                        <p>
                            Netlify was chosen for hosting the application due to its seamless and reliable experience with React applications.
                        </p>
                    </div>
                </div>
                
            </section>
            
            <section className="w-full flex flex-col items-start py-8 px-6 md:px-20">
                <h2 className="text-3xl font-extrabold pb-6">Problems and Thought Process</h2>
                <div className="text-justify max-w-2xl">
                    <p className="pb-8">
                        Like all worthwhile projects, there will be challenges and hiccups along the way. Due to the project&apos;s size and amount of data provided by Reddit, I ran into difficulty keeping an organized and maintainable code structure.
                    </p>
                    <p>
                        In order to correct this, I strove to keep React components as small, simple, and reusable as possible. I also utilized Redux slices to split up the Redux store and used the power of react hooks to only select portions of the entire application state that were needed.
                    </p>
                </div>
            </section>
            
            <section className="w-full flex flex-col items-center py-8 px-6 md:px-20">
                <h2 className="text-3xl font-extrabold pb-6">Lessons Learned</h2>
                <p className="text-justify max-w-4xl">
                    Early on I decided that I would use CSS class modules for styling the website, so that I could contain CSS to individual components. I was quickly humbled by how easy it is to make chaotic and large CSS files that are difficult to debug when one small component is not positioning correctly. Writing elegant CSS is truly an art form and I would not dare say I achieved elegance with mine, but I learned a valuable lesson on trying to keep CSS files as simple as possible.
                </p>
            </section>

            <section className="w-full flex flex-col items-start py-8 px-6 md:px-20">
                <h2 className="text-2xl font-extrabold pb-6">Check out my other projects</h2>
                <Link href="/projects/devDoodles" className="flex items-center gap-6 bg-slate-100 shadow-lg shadow-slate-400 w-fit py-6 px-4 pr-12">
                    <BsChevronLeft className="w-6 h-6" />
                    <div>
                        <h3 className="text-xl font-extrabold">Dev Doodles</h3>
                        <p className="text-gray-600">Full-Stack e-commerce PERN app</p>
                    </div>
                    
                </Link>
            </section>
            
        </ProjectLayout>
    )
}