import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";

const SocialMediaLinks = () => {
    return (
        <div className="text-5xl flex justify-center gap-16 pb-5">
            <a href="https://github.com/Akbarmaulanar21">
                <AiFillGithub className={"text-gray-800 dark:text-gray-400"}/>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-akbar-maulana-rahmat-68a044230">
                <AiFillLinkedin className={"text-blue-500"}/>
            </a>
            <a href="https://www.instagram.com/akbarmaulanar21/">
                <AiFillInstagram className={"text-red-600"}/>
            </a>
        </div>
    );
};

export default SocialMediaLinks;
