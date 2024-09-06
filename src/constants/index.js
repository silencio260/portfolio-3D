import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    price_wise,
    summerizer,
    car_hub,
    imaginify,
    profile
  } from "../assets";
  
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Flutter Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "NITDA",
      icon: github,
      iconBg: "#383E56",
      date: "Dec 2023 - Current",
      points: [
        "Possess a strong foundation in machine learning and its applications. Actively contributed to the development of a robust attendance system utilizing advanced machine learning techniques.",
        "Collaborated effectively within a team to design, implement, and test machine learning models.  Leveraged Python and relevant libraries (TensorFlow, OpenCV) to build and optimize the attendance  system. Demonstrated proficiency in data preprocessing, feature engineering, and model evaluation.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Malead Technologies",
      icon: github,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Jan 2024",
      points: [
        "Developed a scalable dashboard solutions for managing the clients complex trading transactions and visualizing the monthly returns.",
        "Worked on front-end (Svelte.js) and back-end (Node.js, Express, Postgres, Prisma, TypeScript).",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Freelance",
      icon: github,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Research, developed and optimized complex algorithms for Analyzing financial markets and executing rules based strategy.",
        "Verified the viability of proposed strategies by analyzing, back testing and optimizing performance (using Python, MQL5 and prinescript).",
        " Developed automated algorithms for executing, monitoring and managing active trades.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "BuzzKarma",
      icon: github,
      iconBg: "#E6DEDD",
      date: "March 2022 - December 2023",
      points: [
        "Developed a make money online application with Flutter for Android",
        "Worked on the User management system / Admin panel with React.",
        "Built the back-end (Node.js, Express, MongoDB, Redis.",
        "Achieved an 80% user satisfaction rate by troubleshooting technological.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Faruq proved me wrong.",
      name: "Abdul",
      designation: "Lead Developer",
      company: "GenRevibes",
      image: 'https://th.bing.com/th/id/OIP.mrOfkJb-O0orq_OK7B-pQAHaHa?rs=1&pid=ImgDetMain',
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Faruq does.",
      name: "Tunde",
      designation: "CTO",
      company: "BuzzKarma",
      image: 'https://th.bing.com/th/id/OIP.mrOfkJb-O0orq_OK7B-pQAHaHa?rs=1&pid=ImgDetMain',
    },
    {
      testimonial:
        "After Faruq optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Limzy",
      designation: "CTO",
      company: "Maleed",
      image: 'https://th.bing.com/th/id/OIP.mrOfkJb-O0orq_OK7B-pQAHaHa?rs=1&pid=ImgDetMain',
    },
  ];
  
  const projects = [
    {
      name: "AI Article Summarizer",
      description:
        "AI Summarizer is an intelligent tool designed to quickly condense long articles into concise summaries. Using advanced natural language processing, it extracts key points and insights, saving users time while retaining essential information. Ideal for researchers, students, and professionals looking to digest content efficiently.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: summerizer,
      source_code_link: "https://github.com/silencio260/ai-summarizer",
    },
    {
      name: "Imaginify",
      description:
        "Imaginify is an AI-powered SaaS platform that allows users to effortlessly transform and modify images with advanced tools. Whether resizing, enhancing, or applying creative effects, Imaginify delivers fast, high-quality results, making it ideal for designers, marketers, and creatives looking to streamline their image editing workflow.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: imaginify,
      source_code_link: "https://github.com/silencio260/imaginify",
    },
    {
      name: "Price Wise",
      description:
        "Price Wise is a web-based price tracker that scrapes and monitors online prices across multiple retailers. With real-time alerts and detailed price history, Price Wise helps users find the best deals, track price drops, and make informed purchasing decisions with ease. Perfect for savvy shoppers and bargain hunters.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: price_wise,
      source_code_link: "https://github.com/silencio260/pricewise-web-scraper",
    },
    {
      name: "Price Wise",
      description:
        "Car Hub is a comprehensive platform that simplifies finding, booking, and renting cars. Users can browse a wide range of vehicles, compare prices, and make reservations seamlessly, all in one place. With flexible rental options and user-friendly search features, Car Hub makes car renting fast, convenient, and hassle-free. Perfect for travelers and locals alike.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        // {
        //   name: "",
        //   color: "green-text-gradient",
        // },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/silencio260/car-showcase",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };