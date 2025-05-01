/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rohit Chandel",
  title: "Hi all, I'm Rohit",
  subTitle: emoji(
    "A motivated Computer Science student 🚀 with growing skills in AWS, Python, and AI, eager to apply cloud and machine learning knowledge through hands-on projects and internships."
  ),
  resumeLink: "/resume.pdf", // ✅ LOCAL FILE PATH
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rohoxoxo",
  linkedin: "https://www.linkedin.com/in/rohitchadel/",
  gmail: "rohoxoxo@gmail.com",
  gitlab: "https://gitlab.com/rohit1663418",
  facebook: "https://www.facebook.com/profile.php?id=61550259182878",
  medium: "https://medium.com/@rohoxoxo",
  stackoverflow: "https://stackoverflow.com/users/30415068/rohit-chandel",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CURIOUS COMPUTER SCIENCE STUDENT EXPLORING CLOUD, AI, AND REAL-WORLD TECH SOLUTIONS",
  skills: [
    emoji(
      "⚡ Learning and building projects using AWS services like EC2, S3, and Lambda"
    ),
    emoji("⚡ Exploring cloud-based AI integrations and serverless computing"),
    emoji(
      "⚡ Interested in real-world problem solving through cloud and AI technologies"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "",
      logo: require("./assets/images/SIUE.png"),

      subHeader: "Bachelors In Computer Science",
      duration: "August 2023 - May2026",
      desc: "Currently pursuing coursework in software engineering, cloud computing, AI/ML, and web development with hands-on lab and project experience."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Computing (AWS)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming (Python, JavaScript)",
      progressPercentage: "65%"
    },
    {
      Stack: "AI/ML Fundamentals",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Student Data Assistant",
      company: "Southern Illinois University Edwardsville",
      companylogo: require("./assets/images/siueLogo.png"),
      date: "Sep 2024 – Present",
      desc: "Supporting university data operations with attention to detail and technical accuracy.",
      descBullets: [
        "Handle student data management and administrative tasks with high accuracy",
        "Assist faculty/staff with system queries, digital tools, and process organization",
        "Build familiarity with data tools and campus-wide systems"
      ]
    },
    {
      role: "URCA Assistant (Undergraduate Research)",
      company: "SIUE - Computer Science Department",
      companylogo: require("./assets/images/siueLogo.png"),
      date: "Fall 2025 (upcoming)",
      desc: "Selected for a research assistantship to explore intelligent systems and cloud integration.",
      descBullets: [
        "Collaborating with faculty to explore AI and edge computing for smart vehicles",
        "Planned integration of AWS services for data storage, processing, and deployment",
        "Gaining hands-on experience in applied research and technical documentation"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Personal and academic projects reflecting my learning journey",
  projects: [
    {
      image: require("./assets/images/github.webp"), // You can use any placeholder image or your own screenshot
      projectName: "Headline Sentiment Analyzer",
      projectDesc:
        "Python-based tool that scrapes news headlines and performs sentiment analysis, using AWS Lambda for serverless processing and storing output in S3.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Rohoxoxo/CS325_project1"
        }
      ]
    },
    {
      image: require("./assets/images/github.webp"),
      projectName: "AWS Cloud Portfolio Website",
      projectDesc:
        "A personal portfolio built using React and deployed on GitHub Pages, with future plans to move to AWS Amplify or S3 hosting.",
      footerLink: [
        {
          name: "Live Site",
          url: "https://github.com/Rohoxoxo/my_github_pages"
        }
      ]
    }
  ],
  display: true
};

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind or just want to say hi? I'm always open to connect!",
  number: "XXX-XXX-XXXX",
  email_address: "xxxxxx@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
