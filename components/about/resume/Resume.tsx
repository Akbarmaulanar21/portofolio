import React from "react";
import Bar from "./Bar";
import { languages, tools, otherSkills } from "../../data";

const Resume = () => {
    return (
        <div className={"bg-gradient-to-l from-white to-teal-200 rounded-2xl px-6 py-2 dark:from-cyan-700 dark:to-cyan-900 dark:text-white"}>
            {/*Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold ">
                            Natural science
                        </h5>
                        <p className="font-bold">Senior High School Prakarya Santi Asromo </p>
                        <small className={"text-sm font-semibold"}>Juli 2017 - Mei 2020</small>

                        <h5 className="my-2 text-xl font-bold ">
                            Informatics Engineering
                        </h5>
                        <p className="font-bold">Muhammadiyah University Prof Dr. Hamka.</p>
                        <small className={"text-sm font-semibold"}>September 2020 - Present</small>

                        <h5 className="my-2 text-xl font-bold ">
                            Frontend Engineering
                        </h5>
                        <p className="font-bold">Kampus Merdeka Ruangguru</p>
                        <small className={"text-sm font-semibold"}>Februari 2023 - Juli 2023</small>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Staff Design UI UX</h5>
                        <p className="font-bold">The Culture Of Sidamukti Mobile (TOS Mobile)</p>
                        <small className={"text-sm font-semibold"}>Juni 2021 - Oktober 2021</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p>Designing a new onboarding flow for new users.</p>
                            <p>Designing a new UI for the application.</p>
                            <p>Designing a new UX for the application.</p>
                            <p className={"font-bold"}>Stack: Figma, Adobe XD, Adobe Photoshop.</p>
                        </article>
                    </div>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Website Developer</h5>
                        <p className="font-bold">GMath - Mathematics Learning Website</p>
                        <small className={"text-sm font-semibold"}>Mei 2023 - Juni 2023</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p>Designing a new UI for the website.</p>
                            <p>Designing a new UX for the website.</p>
                            <p>Developing a new website.</p>
                            <p className={"font-bold"}>Stack: HTML, CSS, Javascript, Bootstrap.</p>
                        </article>
                    </div>
                </div>
            </div>

            {/*Languages & Tools */}
            <div className="grid gap-9 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Language & Framework</h5>
                    <div className="my-2">
                        {languages.map((language, i) => (
                            <Bar value={language} key={i} />
                        ))}
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Tools & Softwares</h5>
                    <div className="my-2">
                        {tools.map((tool, i) => (
                            <Bar value={tool} key={i} />
                        ))}
                    </div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Other skills</h5>
                    <div className="my-2">
                        {otherSkills.map((other, i) => (
                            <Bar value={other} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;