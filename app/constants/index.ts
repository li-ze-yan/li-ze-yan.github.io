import {
  backend,
  carrent,
  creator,
  jobit,
  meta,
  mobile,
  shopify,
  starbucks,
  tesla,
  tripguide,
  web,
} from "@/public/picture";
import OnePerson from "@/public/picture/onePerson.png";
import TwoPerson from "@/public/picture/twoPerson.png";
import ThreePerson from "@/public/picture/threePerson.png";
import ToTop from "@/public/icon/toTop.svg";
import { IExperience, ITechnology } from "../type/Portfolio";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Vue Developer",
    icon: backend,
  },
  {
    title: "Personal Creator",
    icon: creator,
  },
];

const technologies: ITechnology[] = [
  {
    name: "HTML 5",
    icon: "/picture/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/picture/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/picture/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/picture/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/picture/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/picture/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/picture/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/picture/tech/nodejs.png",
  },
  {
    name: "Three JS",
    icon: "/picture/tech/threejs.svg",
  },
  {
    name: "git",
    icon: "/picture/tech/git.png",
  },
];

const experiences: IExperience[] = [
  {
    title: "Communication Internship",
    company_name: "Chengdu Mobile",
    icon: OnePerson,
    iconBg: "#383E56",
    date: "University winter and summer vacation",
    points: [
      "Complete the single inspection report of the Chengdu area.",
      "Test the signal condition of each checkpoint on the day and correct it.",
      "Daily and Huawei information platform to check whether there are data flaws in previous reports.",
    ],
  },
  {
    title: "Vue Developer",
    company_name: "Qiangjiang Technology Co., Ltd",
    icon: TwoPerson,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Jul 2021",
    points: [
      "Complete the second phase of the funding platform named chuanyunjian.",
      "Completed the first phase of the small program project for guards to assist in querying tobacco barcodes.",
      "Completed the development of some mid-stage projects named qiangjiang-stage.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Herun Technology Co., Ltd",
    icon: ThreePerson,
    iconBg: "#383E56",
    date: "Sept 2021 - Sept 2022",
    points: [
      "Complete the project development of Cesium-based Digital Earth Comprehensive Situation.",
      "Complete the project scaffolding construction of the company's react front end.",
      "Complete the project development of the digital earth simulation teaching platform based on cesium and threejs.",
      "Help colleagues solve bugs, code reviewe.",
      "Complete the plant data monitoring large-screen self-adaptive configurable module display platform.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Chengdu Rsen Media Technology Co., Ltd.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Complete the project development of the company's overseas official website. url: https://www.rs-listen.com/",
      "Complete the overall update of the company's domestic official website. url: https://www.listen-ad.com.cn/",
      "Complete the development of difficult demand points of Huawei push project.",
      "working more...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dong XiaoBai",
    description: "Graduation Project",
    detail: "Vocational skills online education system platform in B2C mode",
    skills: ["Vue", "Java", "MyBatis"],
    image: "bg-card-pattern-1",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "Cloud PierceArrow",
    description: "Police-community Cooperation",
    detail: "Crack down on online gambling and killing pigs",
    skills: ["Vue", "Echart", "Antd"],
    image: "bg-card-pattern-2",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "QJMiddle Platform",
    description: "QianJiang Enterprise Middle Office Management",
    detail:
      "Mainly maintain company employee information and product management",
    skills: ["Vue", "Echart", "Antd"],
    image: "bg-card-pattern-3",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "Tobacco Applet",
    description: "Portable Police Program",
    detail:
      "Crack down on illegal smuggling of cigarettes with unknown barcodes",
    skills: ["Vue", "Uniapp", "Axios"],
    image: "bg-card-pattern-4",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "Synthesis Situation",
    description: "Portable Police Program",
    detail:
      "The digital globe shows the dynamic real-time position of the radar detection range of the enemy and the enemy",
    skills: ["React", "Cesium", "Redux"],
    image: "bg-card-pattern-5",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "Teaching System",
    description: "Eastern Theater Electromagnetic Training",
    detail:
      "Divided into assessment, scoring, monitoring, and task systems to manage the training of students",
    skills: ["React", "Cesium", "Threejs"],
    image: "bg-card-pattern-6",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "Screen Display",
    description: "Combined Display Of Various Monitoring Information Controls",
    detail:
      "The system can display the monitoring information of various monitoring equipment in real time",
    skills: ["React", "Echart", "Redux"],
    image: "bg-card-pattern-7",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "Overseas Website",
    description: "Overseas Enterprise Portal",
    detail:
      "It is used to display corporate services and corporate culture, and to demonstrate the company's perfect advertising capabilities",
    skills: ["React", "Nextjs", "I18n"],
    image: "bg-card-pattern-8",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "Domestic Website",
    description: "Domestic Enterprise Portal",
    detail:
      "It is used to display corporate services and corporate culture, and to demonstrate the company's perfect advertising capabilities",
    skills: ["React", "Nextjs", "I18n"],
    image: "bg-card-pattern-9",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "HuaWei Push",
    description: "Connect With Huawei Software Market",
    detail:
      "Connect with the media, and deliver the creatives entrusted by customers at fixed points",
    skills: ["React", "Antd", "Zustand"],
    image: "bg-card-pattern-10",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "Smart AD",
    description: "Accurate Advertising",
    detail:
      "Connect with customers, and put materials into the official website software markets such as vivo, oppo, Tencent, and Julius for advertising push services",
    skills: ["React", "Antd", "Zustand"],
    image: "bg-card-pattern-11",
    link: "https://github.com/li-ze-yan",
  },
  {
    name: "Personal Website",
    description: "tkx.cool ",
    detail: "Sites that showcase personal information, skills, experience",
    skills: ["Nextjs", "Threejs", "Zustand"],
    image: "bg-card-pattern-12",
    link: "https://github.com/li-ze-yan",
  },
];

const TEMPLATE_ID = "template_oyffdc5";
const SERVICE_ID = "service_sdhgqf9";
const PUBLIC_KEY = "A88eojngWe_9o8oO5";

const personInfo =
  "I have a slow personality and believe that life lies in stillness. In life, I like to watch American dramas, cook food, raise cats, and play Overwatch. While entertaining, I am also constantly learning. I am always full of vitality in programming learning , apply what you have learned to practice, realize your own value, prove your strength with actions, and realize your value with output";

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  ToTop,
  personInfo,
  TEMPLATE_ID,
  SERVICE_ID,
  PUBLIC_KEY,
};
