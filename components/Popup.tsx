import React from 'react';

import PopupButton from './ui/PopupButton';

const LINKEDIN = "https://www.linkedin.com/in/atanas-stoychev-9475391ba/";
const GITHUB = "https://github.com/AStoychev";
const PORTFOLIO = "https://astoychev.onrender.com/";

const Popup = ({ handleClosePopup }: { handleClosePopup: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="
        bg-gradient-to-r from-cyan-900 to-blue-900
        border-2 border-emerald-900 rounded-xl
        opacity-100 overflow-hidden p-3
        bg-white shadow-lg
        w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-4 sm:mx-6 lg:mx-8
        ">

                <div>
                    <h1 className="uppercase tracking-widest text-xl text-center text-white pb-1.5">
                        Welcome to my Website
                    </h1>
                    <p className="text-wrap">
                        Thank you for visiting. I&apos;am currently in the process of building something amazing,
                        and I appreciate your patience as I work to complete the site.
                    </p>
                </div>

                <div>
                    <h2 className="uppercase tracking-widest text-lg text-center text-white pt-3 pb-1.5">
                        What to Expect
                    </h2>
                    <div className="text-wrap">
                        While my site is under construction, I&apos;am diligently working behind the scenes
                        to bring you a fantastic experience with the following features:
                    </div>
                    <p className="pl-3">- Informative Content</p>
                    <p className="pl-3">- User-Friendly Design</p>
                    <p className="pl-3">- Interactive Features</p>
                </div>

                <div>
                    <h2 className="uppercase tracking-widest text-lg text-center text-white pt-3 pb-1.5">
                        Stay Tuned
                    </h2>
                    <div className="text-wrap">
                        I can&apos;t wait to share my progress with you. In the meantime, here are a few things you can do:
                    </div>
                    <p className="pl-3">- Follow Me: Stay connected with me on
                        <a href={LINKEDIN} target="_blank" className="text-purple cursor-pointer font-bold"> LinkedIn </a>
                        or
                        <a href={GITHUB} target="_blank" className="text-purple cursor-pointer font-bold"> GitHub </a>
                    </p>
                    <p className="pl-3">- Visit My Current Portfolio:
                        <a href={PORTFOLIO} target="_blank" className="text-purple cursor-pointer font-bold"> Here</a>
                    </p>
                </div>

                <PopupButton handleClosePopup={handleClosePopup} />

            </div>
        </div>
    )
}

export default Popup