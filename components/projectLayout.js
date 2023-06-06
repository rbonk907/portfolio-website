import Link from "next/link";
import Footer from "./footer";
import { BsChevronLeft } from "react-icons/bs";


const ProjectLayout = ({ children }) => {

    return (
        <>
            <header className="bg-slate-100 relative z-40">
                <Link href="/" className="flex gap-4 items-center py-6 px-3">
                    < BsChevronLeft className="w-6 h-6"/>
                    <span className="font-bold text-lg">Back to Home</span>
                </Link>
            </header>
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}

export default ProjectLayout;