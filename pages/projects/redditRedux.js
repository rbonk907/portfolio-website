import Image from "next/image"
import redditReduxDemo from "../../public/reddit-redux.PNG";
import reactLogo from "../../public/logo192.png";
import reduxLogo from "../../public/reduxLogo192.png";
import typeSLogo from "../../public/typescript.png";
import netlifyLogo from "../../public/netlify-logo.png";
import styles from "../../styles/RedditRedux.module.css"

export default function RedditRedux() {
    return (
        <>
            <h1>Reddit + Redux</h1>
            <p>
                Reddit + Redux is a React application built as a minimalistic reddit application. The project was written using React, Redux, and the Reddit JSON API.
            </p>
            
            <div className={styles.imageContainer}>
                <Image src={redditReduxDemo} alt={'Demo photo of Reddit Redux project'} />
            </div>
            <div className={styles.bulletPoints}>
                <div className={styles.stackList}>
                    <span>Stack:</span>
                    <ul>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Netlify</li>
                    </ul>
                </div>
                <div className={styles.liveDemo}>
                    <span>Live</span>
                    <a>view site</a>
                </div>
            </div>
            <div className={styles.explanation}>
                <h2>Web Stack and Explanation</h2>
                <div className={styles.stackLogos}>
                    <div className={styles.logoContainer}>
                        <Image src={typeSLogo} alt={"TypeScript Logo"} />
                    </div>
                    <div className={styles.logoContainer}>
                        <Image src={reactLogo} alt={"React Logo"} />
                    </div>
                    <div className={styles.logoContainer}>
                        <Image src={reduxLogo} alt={"Redux Logo"} />
                    </div>
                    <div className={styles.logoContainer}>
                        <Image src={netlifyLogo} alt={"Netlify Logo"} />
                    </div>
                </div>
                <p>
                    Going into this project, I knew there would be a lot of state variables related to different subreddits and posts received from the reddit JSON API, so I wanted to use Redux as a reliable state management tool. This in turn made me choose React due to the smooth workflow between Redux and the official React bindings, React-Redux.
                </p>
                <p>
                    Additionally, I chose to use TypeScript for this project, because the Reddit JSON API is poorly documented and I knew I&apos;d have trouble keeping track of the different data types received from <code>GET</code> requests. TypeScript forced me to be methodical about the data I was requesting and provided a level of sanity during debugging.
                </p>
                <p>
                    Netlify was chosen for hosting the application due to its seamless and reliable experience with React applications.
                </p>
               
            </div>
            <div className={styles.problems}>
                <h2>Problems and Thought Process</h2>
                <p>
                    Like all worthwhile projects, there will be challenges and hiccups along the way. Due to the project&apos;s size and amount of data provided by Reddit, I ran into difficulty keeping an organized and maintainable code structure.
                </p>
                <p>
                    In order to correct this, I strove to keep React components as small, simple, and reusable as possible. I also utilized Redux slices to split up the Redux store and used the power of react hooks to only select portions of the entire application state that were needed.
                </p>
            </div>
            
            <h2>Lessons Learned</h2>
        </>
    )
}