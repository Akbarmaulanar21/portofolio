import {Card, IProject, Service, Skill} from "./types";
import {FiAward, FiUsers} from "react-icons/fi";
import {VscCode, VscFolderLibrary} from "react-icons/vsc";
import {FaBootstrap, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaReact, FaUikit,} from "react-icons/fa";
import {AiFillGithub, AiOutlineAntDesign, AiOutlineApi, AiOutlineConsoleSql} from "react-icons/ai";
import {MdDesignServices, MdEngineering, MdOutlineDesignServices} from "react-icons/md";
import {
    SiAdobeillustrator,
    SiCplusplus, SiDatabricks,
    SiJavascript, SiNextdotjs, SiPostgresql,
    SiTailwindcss, SiTextpattern,
    SiXampp
} from "react-icons/si"
import {BiCamera, BiGitCompare,} from "react-icons/bi";
import {ImGit} from "react-icons/im";
import {DiGoogleAnalytics, DiLinux} from "react-icons/di";

export const languages: Skill[] = [
    {
        Icon: FaHtml5,
        name: "HTML",
        level: "90",
    },
    {
        Icon: SiJavascript,
        name: "JavaScript",
        level: "80",
    },
    {
        Icon: FaBootstrap,
        name: "Bootstrap",
        level: "80",
    },
    {
        Icon: FaLaravel,
        name: "Laravel",
        level: "80",
    },
    {
        Icon: AiOutlineConsoleSql,
        name: "SQL",
        level: "80",
    },
    {
        Icon: SiTailwindcss,
        name: "TailwindCSS",
        level: "80",
    },
    {
        Icon: SiCplusplus,
        name: "C++",
        level: "80",
    },
    {
        Icon: FaReact,
        name: "ReactJS",
        level: "70",
    },
    {
        Icon: SiNextdotjs,
        name: "NextJS",
        level: "70",
    },
    {
        Icon: FaPhp,
        name: "PHP",
        level: "70",
    },
    {
        Icon: FaNodeJs,
        name: "NodeJs",
        level: "70",
    },

];

export const tools: Skill[] = [
    {
        Icon: VscCode,
        name: "VS Code",
        level: "90",
    },
    {
        Icon: AiOutlineApi,
        name: "REST APIs",
        level: "70",
    },
    {
        Icon: ImGit,
        name: "GIT",
        level: "80",
    },
    {
        Icon: AiFillGithub,
        name: "GitHub",
        level: "80",
    },
    {
        Icon: BiGitCompare,
        name: "CI/CD",
        level: "60",
    },
    {
        Icon: DiLinux,
        name: "Unix/Linux",
        level: "85",
    },
    {
        Icon: SiPostgresql,
        name: "PostgreSQL",
        level: "70",
    },
    {
        Icon: SiXampp,
        name: "XAMPP",
        level: "80",
    },
];

export const otherSkills: Skill[] = [
    {
        Icon: DiGoogleAnalytics,
        name: "Algorithm Analysis",
        level: "70",
    },
    {
        Icon: SiDatabricks,
        name: "Data Structure",
        level: "65",
    },
    {
        Icon: MdEngineering,
        name: "Software Engineering",
        level: "80",
    },
    {
        Icon: SiTextpattern,
        name: "MVC pattern",
        level: "75",
    },
    {
        Icon: AiOutlineAntDesign,
        name: "Design and UX/UI",
        level: "70",
    },
    {
        Icon: SiAdobeillustrator,
        name: "Adobe Illustrator",
        level: "80",
    },

];

export const cards: Card[] = [
    {
        Icon: FiAward,
        name: "Experience",
        description: "2+ Years Working",
    },
    {
        Icon: FiUsers,
        name: "Clients",
        description: "10+ Worldwide",
    },
    {
        Icon: VscFolderLibrary,
        name: "Projects",
        description: "30+ Completed",
    },
];
export const services: Service[] = [
    {
        Icon: FaUikit,
        title: "UI/UX Designer",
        about:
            "I can design beautiful user interfaces using <b>Figma</b> and  <b>Framer</b> ",
    },
    {
        Icon: MdOutlineDesignServices,
        title: "Frontend Development",
        about:
            "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b>JS</b> and can use any of the following frameworks <b>React.js</b>, <b>Next.js</b>",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
            "I can develop robust REST API using <b>django-rest-framework</b> & <b>Node API</b>",
    },
    {
        Icon: BiCamera,
        title: "Photographer",
        about:
            "I can take beautiful pictures of nature and people using <b>Handphone</b> and <b>Camera</b>",
    },
    {
        Icon: MdDesignServices,
        title: "Graphic Designer",
        about: "I can design beautiful logos and posters using <b>Adobe Illustrator</b> and <b>Adobe Photoshop</b> ",
    },
    // {
    //     Icon: AiFillYoutube,
    //     title: "Youtuber",
    //     about: "Nothing yet",
    // },
];

export const projects: IProject[] = [
    {
        name: "My Portfolio",
        description:
            "This app shows my portfolio for projects I did, my experience, everything up to date about me.",
        image_path: [
            "/images/projects/portfolio/portfolio1.png",
            "/images/projects/portfolio/portfolio2.png",

        ],
        deployed_url: "https://portofolio-akbarmaulanar21.vercel.app/",
        github_url: "https://github.com/Akbarmaulanar21/portofolio",
        category: ["Website"],
        key_techs: ["React.js", "Next.js", "Tailwind CSS"],
    },

    {
        name: "GMath",
        image_path: [
            "/images/projects/Gmath/Gmath.png",
            "/images/projects/Gmath/Gmath2.png",
        ],
        deployed_url: "https://mathgini.my.id/gita/",
        github_url: "https://github.com/Akbarmaulanar21/Website-GMath",
        category: ["Website"],
        description:
            "This app is a website for GMath, a math learning center for elementary school students. This website is used to promote GMath and also to provide information about GMath.",
        key_techs: [ "Bootstrap"],
    },

    {
        name: "Data Mahasiswa",
        image_path: [
            "/images/projects/DataMahasiswa/DataMahasiswa.png",
            "/images/projects/DataMahasiswa/DataMahasiswa2.png",
        ],
        deployed_url: "",
        github_url: "https://github.com/Akbarmaulanar21/Praktikum_Web",
        category: ["Website"],
        description:
            "This app is a website for managing student data. This website is used to manage student data, such as adding, editing, and deleting student data.",
        key_techs: ["Laravel", "Bootstrap",],
    },

    {
        name: "Student Portal",
        image_path: [
            "/images/projects/StudentPortal/portal.png",
            "/images/projects/StudentPortal/portal2.png",
        ],
        deployed_url: "https://portal-student-react-js.vercel.app/",
        github_url: "https://github.com/Akbarmaulanar21/Portal_Student-ReactJS",
        category: ["Website"],
        description:
            " I have successfully created a Student Portal website using the ReactJS programming language. website student portal is a website that is used to manage student data, such as adding, editing, and deleting student data. ",
        key_techs: ["ReactJs",],
    },

    {
        name: "Library App",
        image_path: [
            "/images/projects/LibraryApp/library.png",
            "/images/projects/LibraryApp/library2.png",
        ],
        deployed_url: "https://ruang-librarya-app.netlify.app/",
        github_url: "https://github.com/Akbarmaulanar21/Library-App",
        category: ["Website"],
        description:
            "I have successfully created a Library App website using the ReactJS programming language. This website is used to manage book data, such as adding, editing, and deleting book data.",
        key_techs: ["ReactJs",],
    },

    {
        name: "photo Gallery",
        image_path: [
            "/images/projects/photoGallery/photoGallery.png",
            "/images/projects/photoGallery/photoGallery2.png",
        ],
        deployed_url: "https://photo-gallery-akbarmaulanar21.vercel.app/",
        github_url: "",
        category: ["Website"],
        description:
            "I have successfully created a photo gallery website using the ReactJS programming language. This website is used to display photos that I have taken.",
        key_techs: ["ReactJs",],
    },
];