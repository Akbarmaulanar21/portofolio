import React from 'react';
import Image from "next/image";
import Profile from "../../public/ProfilePicture.png"
import CardItem from "./CardItem";
import {cards} from "../data";
import Resume from "./resume/Resume";

function About() {
    return (
        <section id="about" className="min-h-screen">
            <div className={"text-center p-6"}>
                <h5 className="text-2xl pt-2 dark:text-white">Get To Know</h5>
                <h2 className="p-10 text-4xl lg:text-5xl py-2 text-teal-600 font-medium">About Me</h2>
            </div>
            <div id="about-container" className={"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10"}>

                <div id="about-me" className="grid grid-cols-1 aspect-square rounded-3xl bg-gradient-to-b from-teal-500 dark:from-cyan-700 sm:w-3/5 lg:w-5/6 sm:mx-auto"
                >
                    <Image src={Profile} alt={"Profile Picture"}
                           className="rounded-3xl overflow-hidden transform rotate-6 transition duration-200 delay-50 hover:rotate-0 "
                    />
                </div>

                <div id="about-content" className={"py-6 lg:col-span-2"}>
                    <div id="about-cards" className={"grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3"}>
                        {cards.map((card, i) => (
                            <CardItem value={card} key={i} />
                        ))}
                    </div>
                    <div className="text-xl p-6 text-gray-800 dark:text-white
                     bg-gradient-to-l from-white to-teal-200
                     rounded-3xl my-4 dark:from-cyan-700 dark:to-cyan-900
                     ">
                        <p>
                        Hi, My name is Muhammad Akbar Maulana Rahmat. And I am a developer from Majalengka, Indonesia. I am a students from Muhammadiyah University Prof. Dr. Hamka, East Jakarta. I am an Active Student. studying hard in university, i ended up learning more and more new things every day
                        </p>
                    </div>
                    <Resume />
                </div>
            </div>
        </section>
    );
}

export default About;