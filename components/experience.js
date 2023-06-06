import { AiOutlineLink } from 'react-icons/ai';

const Experience = () => {
    return (
        <div className='p-6 mt-12 bg-slate-100 shadow-y shadow-slate-400'>
            <h2 id='experience' className='sticky top-0 pt-2 text-2xl font-extrabold mb-12 z-50 md:static'>Experience</h2>
            <div>
                <div className='flex flex-wrap'>
                    <div className='pb-3 min-w-[20rem]'>
                        <span className='block font-bold'>HZA Engineering Solutions</span>
                        <span className='font-light'>Jan 2021 - Dec 2022</span>
                    </div>
                    <div className='max-w-2xl'>
                        <h3 className='pb-3 font-bold text-xl'>Electrical Engineer</h3>
                        <p>
                            Worked under the supervision of a Professional Electrical Engineer licensed in the State of Alaska, developing construction drawings. Designed Electrical Systems for new and remodeled buildings that met the User-Requirements of the Owner and the constraints set forth by the National Electrical Code (including State Amendments). This required performing load analyses to ensure proper and safe operation of all added electrical equipment and coordinating with different Engineer disciplines to produce a final product.
                        </p>
                        <a className='flex items-center gap-2 py-2 hover:font-bold w-fit' target='_blank'
                        rel='noreferrer' href='https://www.hza-eng.com/'>
                            <AiOutlineLink />
                            <span className='border-b border-gray-600 text-gray-600'>https://www.hza-eng.com/</span>
                        </a>
                    </div>
                </div>
                <div className='flex flex-wrap pt-8'>
                    <div className='pb-3 min-w-[20rem]'>
                        <span className='block font-bold'>NASA Langley Research Center</span>
                        <span className='font-light'>May 2020 - Aug 2020</span>
                    </div>
                    <div className='max-w-2xl'>
                        <h3 className='pb-3 font-bold text-xl'>Team Lead | Intern</h3>
                        <p>
                            Led 15 student researchers towards prototyping an autonomous multi-modal vechicle capable of navigating hazardous terrain without the use of GPS. Coordinated between project mentors and team members to ensure an end result was feasible within the time constrains set forth by the internship. This included delegating roles and tasks to individual team members based on experience and background. Additionally, assisted the software sub-team in designing simulations in Linux using the Robotic Operating System as well as designing a finite state machine detailing the robot&apos;s operation. Concluded the internship by writing and publishing a paper of our work to the AIAA Sci Tech conference [<a target='_blank' rel='noreferrer' href='https://doi.org/10.2514/6.2021-1520'>paper</a>].
                        </p>
                        <a className='flex items-center gap-2 py-2 hover:font-bold w-fit' target='_blank'
                        rel='noreferrer' href='https://aero.larc.nasa.gov/nasa-academy/'>
                            <AiOutlineLink />
                            <span className='border-b border-gray-600 text-gray-600'>
                                https://aero.larc.nasa.gov/nasa-academy/
                            </span>
                        </a>
                    </div>
                </div>
                <div className='flex flex-wrap pt-8'>
                    <div className='pb-3 min-w-[20rem]'>
                        <span className='block font-bold'>NASA Langley Research Center</span>
                        <span className='font-light'>May 2019 - Aug 2019</span>
                    </div>
                    <div className='max-w-2xl'>
                        <h3 className='pb-3 font-bold text-xl'>Intern</h3>
                        <p>
                            Collaborated in a multi-disciplined team of engineer interns by researching consumer GPS receivers and their viability for safe use with unmanned aerial vehicles. Conducted experiments with RTK GPS and performed data analysis on the resulting NMEA data with Excel and Python. Concluded the internship by writing and publishing a paper of our work to the AIAA Sci Tech conference [<a target='_blank' rel='noreferrer' href='https://doi.org/10.2514/6.2020-0740'>paper</a>]
                        </p>
                        <a className='flex items-center gap-2 py-2 hover:font-bold w-fit' target='_blank'
                        rel='noreferrer' href='https://aero.larc.nasa.gov/nasa-academy/'>
                            <AiOutlineLink />
                            <span className='border-b border-gray-600 text-gray-600'>
                                https://aero.larc.nasa.gov/nasa-academy/
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;