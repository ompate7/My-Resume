import React from 'react'
import Home from '../pages/Home';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import About from '../pages/About';
import Education from '../pages/Education';
import Skills from '../pages/Skills';
import Gallery from '../pages/Gallery';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Error404 from '../pages/Error404';


import { FaRegWindowMinimize, FaRegSquare, FaDesktop } from "react-icons/fa";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";

const Screen = ({ closeScreen }) => {
    const location = useLocation();
    const formatPath = (pathname) => {
        const segments = pathname.split('/').filter(segment => segment.trim() !== '');
        // alert(segments);
        const formattedSegments = segments.map(segment => `> ${segment}`);
        return formattedSegments.join(' ');
    };

    return (
        <>
            <div className="bg-slate-300 rounded-tl-lg rounded-tr-lg w-full text-slate-900 p-3 flex justify-between flex-wrap gap-3 items-center">
                <div className='flex justify-center items-center'>
                    <FaDesktop className='text-blue-500' /><p className='ml-2'>This PC</p>
                </div>
                <div className='flex items-center justify-around'>
                    <IoIosArrowBack className="mr-2 text-xl cursor-pointer" />
                    <IoIosArrowForward className="ml-2 text-xl cursor-pointer" />
                    <div className='w-4'></div>
                    <div className="bg-white w-96 p-2 rounded-md ">
                        <p>OmPatel {formatPath(location.pathname)}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className="bg-white w-72 p-2 rounded-md flex justify-center items-center">
                        <input type="text" placeholder='Search This PC' className='border-none outline-none w-full' />
                        <IoIosSearch className='text-xl' />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className=" mr-2 hover:bg-slate-200 p-2 cursor-pointer rounded-sm" onClick={() => { closeScreen(); }}><FaRegWindowMinimize /></div>
                    <div id="maximize" className="mr-2 hover:bg-slate-200 cursor-pointer p-2 rounded-sm"><FaRegSquare /></div>
                    <div className="hover:bg-red-500 cursor-pointer rounded-sm text-2xl p-1 hover:text-white" onClick={() => { closeScreen(); }}><IoMdClose /></div>
                </div>
            </div>
            <div className="bg-white text-slate-900 rounded-bl-lg rounded-br-lg h-full  grid grid-cols-5">
                <div className="p-3 border-r ">
                    <div className='grid col-span-1 gap-3'>

                        <Link className={`text-lg flex  items-center ${location.pathname === '/' ? 'bg-gray-100 rounded-lg' : ''} p-2 `} to={'/'}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z"></path><path fill="#C5CAE9" d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"></path><path fill="#B71C1C" d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"></path><path fill="#D84315" d="M18 28H30V44H18z"></path><path fill="#01579B" d="M21 17H27V23H21z"></path><path fill="#FF8A65" d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"></path>
                        </svg><p className='ml-3'>Home</p></Link>

                        <hr />

                        <Link className={`text-lg flex  items-center  ${location.pathname === '/about' ? 'bg-gray-100 rounded-lg' : ''} p-2`} to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <linearGradient id="OdX3C1xulekUyisLoPB4ba_BKCQPf8biWWs_gr1" x1="12.686" x2="35.58" y1="4.592" y2="41.841" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33bef0"></stop><stop offset="1" stop-color="#0a85d9"></stop></linearGradient><path fill="url(#OdX3C1xulekUyisLoPB4ba_BKCQPf8biWWs_gr1)" d="M42,8H6c-1.105,0-2,0.895-2,2v26c0,1.105,0.895,2,2,2h8v7.998	c0,0.891,1.077,1.337,1.707,0.707L24.412,38H42c1.105,0,2-0.895,2-2V10C44,8.895,43.105,8,42,8z"></path><path d="M22,34h4c0.552,0,1-0.448,1-1V21c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v12	C21,33.552,21.448,34,22,34z" opacity=".05"></path><path d="M22.227,33.5h3.547c0.401,0,0.727-0.325,0.727-0.727V21.227c0-0.401-0.325-0.727-0.727-0.727h-3.547	c-0.401,0-0.727,0.325-0.727,0.727v11.547C21.5,33.175,21.825,33.5,22.227,33.5z" opacity=".07"></path><radialGradient id="OdX3C1xulekUyisLoPB4bb_BKCQPf8biWWs_gr2" cx="-71.449" cy="44.231" r="5.108" gradientTransform="matrix(.7808 0 0 .7066 79.788 -15.853)" gradientUnits="userSpaceOnUse"><stop offset=".516"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient><ellipse cx="24" cy="15.402" fill="url(#OdX3C1xulekUyisLoPB4bb_BKCQPf8biWWs_gr2)" opacity=".15" rx="3.988" ry="3.609"></ellipse><path fill="#fff" d="M24,17.732c1.7,0,2.65-1.068,2.65-2.388C26.65,14.024,25.647,13,24,13s-2.65,1.024-2.65,2.344	C21.35,16.664,22.3,17.732,24,17.732z"></path><rect width="4" height="12" x="22" y="21" fill="#fff"></rect>
                        </svg><p className='ml-3'>About</p></Link>

                        <Link className={`text-lg flex  items-center  ${location.pathname === '/education' ? 'bg-gray-100 rounded-lg' : ''} p-2`} to={'/education'}>
                            <img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD+0lEQVR4nO2WTWwbRRTHJwXxdSgIwQUJJBBCAiQ4VNk1JMJCJLObJt5xQk1oQ9M0TQNRm+ar7kxC6KYINUkTe9aYL3fGPcDNEoeqN+DIgUOpirhxQrS0lEogUZBa1OahWeLEru00sdd2LPkvPXm19u78/m/ee2OE6qqrrrrqqstjvbt46nHK5Tzj4lcV6lrdQ5tdLCa2US4+Z1z+yxwJmUEdeYtyeWYyKprQZpJt21toVASYI76+HbpgcHmW8mSvbdt3Vw889sVW6sgRysXP6wbP3ZVLlIuZsYh4uGLgLJp8ijlijjriz2LBc4xweY1xmTjCxbNlA6dOspk5MsW4uOkVOMvTJ6oUVUkigIaSoW07dQ9zZIg64rtyQbOCfSLOs5gYHIuk7t8w+GQs+SjjkjIuL1Qc3MmJK6pkw3H52B3B2eLJZ6gjY5TLfzYBOGSXl7ihRvSkI17IpgZoYNFki5rRjIslrxZs7e6DpvYd7mdw3zD0jE7B29OzMDb/sRe98q0q7VAqdReiXHxTjozh7j7QDZI3mjp2gLGzH7r2j8Du8Wl45+g8TCx8svF1uPwKMS7OlWvbDy98CkP2CegdPwqvD46CuWsAmjtCaxrDb+6Fzv3D8JbasfdmYeLEGsa4PIuGY7F71alIufixUvU8OhuHwelZ6BmZgs59wyvlVsjYK6Qb2noGoC9sL4OLn9QhaicSD+TMeq97wUtjPrPz1rrOCBYRT6tpxBzxdzWMsOwyuX7gWOTLtIkNnQd0LvGg2qrRuXjFwcfnPwL1P2l8MfGIYinKQFq+tiAE9gzB0MxC2cEPvh9xm/il7V1ZsCUZyGyoljd6oS88o7LjGTR1JAxMHXenVOZaZTGQDn9wJ+w6xNxRWSx4OPKZO2Jf7erJO33KaiAdL7d3uVt+6ANn3eAjxz+E0NAENHcUHp0VM7Ay4gwC23cPuodPIfADxyJA+g+Czwze8X16pQ1k9Uloj9sn4UjCDXWt7m30PahaBjJ3RUWxz6NqGyg1UN3AsjRs/V7p7GuGdQV5VUKaQY5U3AAmhz0zgBBq0DBxdIMsVQB+STdIVK25mkCrfeX71mBbsSaQeljD5FwZs/69DwfMnHWxdWH1d9YvqEQ1+AyrRcOW0DG5WjI4Jlc1g5xsNMlrmVlPy+/336cb1rWMZ/5S95Ansu0tjUbgeQ1b/arENExOa5j8oGFyUcPkDw1bN/8PdU0u6oZ1fvk3jo6tvZppPafesdYSumHxPDsVQbUiHZPLuROK/IZq2YCOyWVUK9INEs/TO3FUK9rW0vGEhsn11exbN7TWwJOolqRnNbLFUa1JM82t7lmArUsv+slDqBbVaFqdKqrNURe6Tf8B4r/Vsqv3fMUAAAAASUVORK5CYII=" />
                            <p className='ml-3'>Education</p></Link>

                        <Link className={`text-lg flex  items-center  ${location.pathname === '/skills' ? 'bg-gray-100 rounded-lg' : ''} p-2`} to={'/skills'}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                <linearGradient id="L4rKfs~Qrm~k0Pk8MRsoza_s5NUIabJrb4C_gr1" x1="32.012" x2="15.881" y1="32.012" y2="15.881" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset=".242" stop-color="#f2f2f2"></stop><stop offset="1" stop-color="#ccc"></stop></linearGradient><circle cx="24" cy="24" r="11.5" fill="url(#L4rKfs~Qrm~k0Pk8MRsoza_s5NUIabJrb4C_gr1)"></circle><linearGradient id="L4rKfs~Qrm~k0Pk8MRsozb_s5NUIabJrb4C_gr2" x1="17.45" x2="28.94" y1="17.45" y2="28.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset=".363" stop-color="#0e5fa4"></stop><stop offset=".78" stop-color="#135796"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><circle cx="24" cy="24" r="7" fill="url(#L4rKfs~Qrm~k0Pk8MRsozb_s5NUIabJrb4C_gr2)"></circle><linearGradient id="L4rKfs~Qrm~k0Pk8MRsozc_s5NUIabJrb4C_gr3" x1="5.326" x2="38.082" y1="5.344" y2="38.099" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#889097"></stop><stop offset=".331" stop-color="#848c94"></stop><stop offset=".669" stop-color="#78828b"></stop><stop offset="1" stop-color="#64717c"></stop></linearGradient><path fill="url(#L4rKfs~Qrm~k0Pk8MRsozc_s5NUIabJrb4C_gr3)" d="M43.407,19.243c-2.389-0.029-4.702-1.274-5.983-3.493c-1.233-2.136-1.208-4.649-0.162-6.693 c-2.125-1.887-4.642-3.339-7.43-4.188C28.577,6.756,26.435,8,24,8s-4.577-1.244-5.831-3.131c-2.788,0.849-5.305,2.301-7.43,4.188 c1.046,2.044,1.071,4.557-0.162,6.693c-1.281,2.219-3.594,3.464-5.983,3.493C4.22,20.77,4,22.358,4,24 c0,1.284,0.133,2.535,0.364,3.752c2.469-0.051,4.891,1.208,6.213,3.498c1.368,2.37,1.187,5.204-0.22,7.345 c2.082,1.947,4.573,3.456,7.34,4.375C18.827,40.624,21.221,39,24,39s5.173,1.624,6.303,3.971c2.767-0.919,5.258-2.428,7.34-4.375 c-1.407-2.141-1.588-4.975-0.22-7.345c1.322-2.29,3.743-3.549,6.213-3.498C43.867,26.535,44,25.284,44,24 C44,22.358,43.78,20.77,43.407,19.243z M24,34.5c-5.799,0-10.5-4.701-10.5-10.5c0-5.799,4.701-10.5,10.5-10.5S34.5,18.201,34.5,24 C34.5,29.799,29.799,34.5,24,34.5z"></path>
                            </svg>
                            <p className='ml-3'>Skills</p></Link>

                        <Link className={`text-lg flex  items-center  ${location.pathname === '/gallery' ? 'bg-gray-100 rounded-lg' : ''} p-2   `} to={'/gallery'}>
                            <img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0UlEQVR4nO2Y2U8TURTGeQYVK7KoiCBlURBImxgTiDEmKiNJGf8T9a9gcdeAqIAoInsMsgQBfTA+iPHB+CC2pdu0M20pbTUYlhI+M1cxkpYuMwOM5n7Jl0kmc2fOb865956ZpCQqKioqVeiSgBqWh5PlgZ10LQ+O5cEkDPB7IFRiR8IAKggaf5sCsDQD+D9L6Kp3GW3+IDmy/xqAGPTqkhVYspDjlSgQmluz2HtzFqk3zEi9bsaea2bsbjRhV4OJS66bYXYEoN0fJMGvu80flAKAlLqvDlVk4LK0DCCl3hheYrEefvbzIkpGfDg+NIeqDwuSIcSyEd98tOBZpQFOf/yBgj73BldNS4eIxxqlACqnF5DfI0T0mU+L6gY4+fYb8rr4TZ3fLeDclxX1AdS6AP1UAEeeumJa2yvgomU1ajA1tlVUvl8gpWhwrm09QMX4PHI6nHG7aNADgyNyYIw5hIoJP04M+1AyNAfdVAAGbm1rAbLbuIQtrk61zo1BVBtD0E0GUDY2/wfg2AsvdK9iQ2jkABx85JBkMXPr97hgXIF+MoiKcX8YQPGAl5w3RIGQBZDVYpfsU+++4/zMMvRvAtBNBDYFKOzzoHx0flMIWQAZzTbJzrxvQ+mwD/rXsQEKut0oG4kMIQtg/z2rLGc02VA26osLIL9LQOlLXxiELIB9dyyynd5sRfmoPy6AvE6eQCgGIA5UwpnNdpSPxQeQ2+FSDkC8WCkfeOjYfoCcJy5yoVLObndubwmxKrAmUQA1/dhizCFJGWDUAMHMhqDtERIHiKXiQS+KBjwo7PeQDxptrxvaHjdpqY8+F0h7nfuMR27nry5VbPIOP3aS+hd7pUOtHGk3xEmd9cCOzBY72fTEzS+9yUb2j7S7VqSJy/BtCwUIE81AKy0hyJzEHk41k7guwo+tWCoc9DJF/W5uxwHqjY7kBlN1wgBUVFRUVEkR9BOe9huyqrw6NAAAAABJRU5ErkJggg==" />
                            <p className='ml-3'>Gallery</p></Link>

                        <Link className={`text-lg flex  items-center  ${location.pathname === '/projects' ? 'bg-gray-100 rounded-lg' : ''} p-2   `} to={'/projects'}>
                            <img width={20} src="data:image/png;base64,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" />
                            <p className='ml-3'>Projects</p></Link>

                        <hr />

                        <Link className={`text-lg flex  items-center  ${location.pathname === '/contact' ? 'bg-gray-100 rounded-lg' : ''} p-2   `} to={'/contact'}>
                            <img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE3klEQVR4nO2Yy1NbZRjG2bjQTTtutKX0n7DV7tVAQKRoudjWolZKrbRSm1IuYUbpZVy5cdFR6KpgnXGqXEIKSai1dwg0V3IIpGgJ0JZWLnHv67znknzn5HvPJbaDi3wzzy5wfs9znvfNNykoyJ/8yZ/8yZ9ndTri62UdQmqhY/pvsCKnkPrHKaTi7bH1uoKNPE4hlbQILqpdSEFbbF1U69T6VxtmoMMMtAyO0O0xFTi0TK1BS3QNmiMr3/zvDDgFFjwD3YrQMvip6CqciqxCc2QVHOGVb49H117ecANOIu3WNLQEjtDNkRU4GZbkCP8FJ0KSvgw+FXUcFXgCTYEn8MU91DIcm0Q9hqOoicfQOPEIPvdLOuJ/CEfGH8JnqLElODy2lKwfX7IbGqBrwk9bAXegQhxwGVoCX84Cb9SCjyvgIrSohruLourvLM6TBoihzAKXoFdVaTt00m5S0pbB2bQbJzhpa8APoe4g/IIo0gA1lGLaUU7avJoEnlpL258BT0OPLTLgEvSnt1FJOHg7SRvQG8qT3Jpw0taAZ9Jmwem0G2Tweg74wVvz8MmtedqA0VA2BZZh14VR2NzaDZvbumHXBR8cm3ykHsp7loYSGlQ1WWDAFeikCI36+CbqAW3AaCgR+IWm71R6o9troSb8tA9x05bBZeiPUDceQN2NP2kDmZrwhxKT1xrY1NKV21CqapKUwDlpI7QCfuC6JNKA0e7e1JZtAKv0zGpyUw1eh5KhD1z/Az78XRJpQAGnhvL1bm+WgZ1d3vTutj6USXXaTE0UcAV6P+raHOy7NkcbMNrdCLmzyyO+CdSOLg8cvruoSpu3uwvP/Jhl3EhbT/fI4HNp8L2/3RdFGnheu7vwbG8OBnpFaBb8g6v3ofZqgjbwPHc3byjrdGqyT4EWwRMieO1oAmpGZ2kDRru79JdJ2H7uJ3jRcV7U9nOXwH7Zb2p36w3lfgVak7YCXiODV/tQM7QBvQvVjh9GyNf92vce3d2NdbBaoS2dPSI0C17lnYE9Xh0D1O62X54wfKDtZz+5u7eeyc1AtW8WqtLgcdjjicP7njhtQL27M90uOnvJ8IH4GW23rdVkNittBRyhUe+NTIsiDVBD+ZLjvKEB/EyuQ1kjg2fSZsEl6ErUsAC7hwXaAO+bEmX2tbNps7v71c4eyxV6pfNiFjiq4kqMNkB9U5p9KL8mCdhyOgcDX19UQaPeRbmnaAPUhcrsQ/fq1ETqtqYmHrnbnJoo4BJ0DMrdU6LeGdIxQO1uswb0dje7TbRDWcmAV1xhwSXo8iEEj0IZyhWlDVAXKryXGK+9XpNDGc9Aj6jTruCkLYK7JJW6ImAfjNAGtPfuzDbJvlCxadM1iVuvyZAErYAjdOmgBG4fDEPJQJg2wO5u1QrkXKio3c1LWwGnhrKcTZsDjtCo4oEQFPeHaAP/eXd76N1triaRdE2UtFlwW38I3u4L0gasXKi4Q+nJbShLOTUpRsnQtv6gCK6INMDubl7axjURzNXEpQUPc9O2MdCmDNSOJpKmhnJk2lXlixdWume2VQ4LbuPdTQzlQMhVNhgoLHGHthX3Bd02piaU3uoL0D8t1vgS9mrfbNJodyO48jcVw5EiXtpmalLiDqX/j+3XSJEeuAL/Zn+whDSQP/mTP/mTPwUWz79OQeWs7GdIPgAAAABJRU5ErkJggg==" />
                            <p className='ml-3'>Contact</p></Link>


                    </div>
                </div>
                <div className=" p-3 text-slate-900 col-span-4 h-full overflow-x-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/*" element={<Error404 />} />
                    </Routes>
                </div>
            </div></>
    )
}

export default Screen