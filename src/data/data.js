export const PROFILE = {
  NAME: "Testing Name",
  IMAGE_URL: "personal-photo.png",
  EMAIL: "test@gmail.com",
  INTRO: "Software Developer",
  LOCATION: "Toronto, ON",
  DESCRIPTION:
    "Full Stack software developer with passion to deliver quality web applications. I enjoy designing, building things.  I continue to learn new language, tools and framework. If you're looking for a developer to add to your team, I'd love to hear from you! I can work remote or work in Greater Toronto Area.",
  SKILLS: [
    {
      name: "TOOLS",
    },
    {
      name: "FRAMEWORKS",
    },
    {
      name: "DATABASES",
    },
    {
      name: "LANGUAGES",
    },
  ],
  TOOLS: [
    { img: "git.svg", title: "Git", link: "https://git-scm.com/" },
    { img: "github-dark.png", title: "GitHub", link: "https://github.com/" },
    {
      img: "office.png",
      title: "Microsoft 365",
      link: "https://www.office.com/",
    },
    {
      img: "microsoftWindows.svg",
      title: "Windows",
      link: "https://www.microsoft.com/en-ca",
    },
    {
      img: "vscode.svg",
      title: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
    },
    { img: "postman.png", title: "Postman", link: "https://www.postman.com/" },
  ],
  FRAMEWORKS: [
    { img: "react.svg", title: "React JS", link: "https://reactjs.org/" },
    {
      img: "express-js.png",
      title: "Express JS",
      link: "https://expressjs.com/",
    },
    { img: "node-js.jpg", title: "Node JS", link: "https://nodejs.org/en/" },
    { img: "vue.png", title: "Vue", link: "https://vuejs.org/" },
    {
      img: "spring-boot.png",
      title: "Spring Boot",
      link: "https://spring.io/",
    },
    {
      img: "django.png",
      title: "Django",
      link: "https://www.djangoproject.com/",
    },
    {
      img: "tailwind.png",
      title: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
    {
      img: "bootstrap.png",
      title: "Bootstrap",
      link: "https://getbootstrap.com/",
    },
  ],
  DATABASES: [
    {
      img: "mongodb.png",
      title: "Mongo DB",
      link: "https://www.mongodb.com/what-is-mongodb",
    },
    { img: "mysql.png", title: "My SQL", link: "https://www.mysql.com/" },
    {
      img: "oracle.png",
      title: "Oracle",
      link: "https://www.oracle.com/ca-en/database/",
    },
  ],
  LANGUAGES: [
    {
      img: "html.svg",
      title: "HTML 5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      img: "css.svg",
      title: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      img: "javascript.svg",
      title: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      img: "java.png",
      title: "Java",
      link: "https://www.java.com/en/download/help/whatis_java.html",
    },
    { img: "python.png", title: "Python", link: "https://www.python.org/" },
    {
      img: "sql.png",
      title: "SQL",
      link: "https://www.w3schools.com/sql/sql_intro.asp",
    },
  ],
  SOCIALMEDIA: [
    {
      icon: "github.png",
      icondark: "github-dark.png",
      link: "https://github.com/test",
      desc: "Feel free to check out my github.",
      showcontact: false,
    },
    {
      icon: "instagram.png",
      icondark: "instagram-dark.png",
      link: "https://www.instagram.com/test/?hl=en",
      desc: "Here're my instagram.",
      showcontact: true,
    },
    {
      icon: "linkedin.png",
      icondark: "linkedin-dark1.png",
      link: "https://www.linkedin.com/in/test",
      desc: "Connect with my linkedin.",
      showcontact: true,
    },
    {
      icon: "twitter.png",
      icondark: "twitter-dark.png",
      link: "https://twitter.com/test",
      desc: "This is my twitter account.",
      showcontact: true,
    },
    {
      icon: "codepen.png",
      icondark: "codepen-dark.png",
      link: "https://github.com/test",
      desc: "Check out my codepen",
      showcontact: false,
    },
    {
      name: "test@gmail.com",
      link: "mailto:test@gmail.com",
      desc: "Keep in touch with my email.",
      showcontact: false,
    },
  ],
  PROJECTS: [
    {
      name: "Order Management System",
      description:
        "An order application with CRUD features to maintain customer, product and order information. This application is developed with front end using Vue 3 and Tailwind CSS. Version One - Backend using Java/Spring Boot/MySQL and Version Two - Backend using Express/Node JS/MySQL. Json format is for datainterchange. This application based on MySQL sample database(https://www.mysqltutorial.org/mysql-sample-database.aspx).",
      img: "order.png",
      style: "bg-yellow-300",
      left: true,
      live: "https://github.com/test/HelloWorld",
      github: "https://github.com/test/HelloWorld",

      technologies: [
        { name: "Vue", icon: "vue.png" },
        { name: "Tailwind CSS", icon: "tailwind.png" },
        { name: "Spring Boot", icon: "spring-boot.png" },
        { name: "My SQL", icon: "mysql.svg" },
        { name: "Javascript", icon: "javascript.svg" },
        { name: "Java", icon: "java.png" },
        { name: "JSON" },
      ],
    },
    {
      name: "Pizza",
      description:
        "This is an web application for handling a pizza restaurant's online orders. Users will be able to browse the menu, add items to their cart. Users can customize their input choices such as size, toppings, addons. Shopping cart will display orders and total amount. This application is developed with front end use React, React Router. Backend using Node/Express JS and Mongo DB as database. Using Json as a data interchange format.",
      img: "pizza.png",
      style: "bg-blue-300",
      left: false,
      live: "https://connie388.github.io/pizza",
      github: "https://github.com/connie388/pizza",
      technologies: [
        { name: "React JS", icon: "react.svg" },
        { name: "Javascript", icon: "javascript.svg" },
        { name: "MongoDB", icon: "mongodb.svg" },
        { name: "Express JS", icon: "express-js.png" },
        { name: "Node JS", icon: "node-js.jpg" },
      ],
    },
    {
      name: "The Zone",
      description:
        "The Zone is a website for a party and facility rental company. This application is built with React and React Router Dom. Different components are dynamically rendered into navigable web pages",
      img: "thezone.png",
      style: "bg-blue-300",
      left: false,
      live: "https://connie388.github.io/thezone",
      github: "https://github.com/connie388/thezone",
      technologies: [
        { name: "React JS", icon: "react.svg" },
        { name: "HTML", icon: "html.svg" },
        { name: "CSS", icon: "css.svg" },
        { name: "Javascript", icon: "javascript.svg" },
        { name: "Bootstrap", icon: "bootstrap.png" },
      ],
    },
    {
      name: "Portfolio",
      description:
        "This responsive personal portfolio was developed using Vue JS, Tailwind CSS. ",
      img: "portfolio.png",
      style: "bg-yellow-300",
      left: true,
      live: "https://connie388.github.io/thezone",
      github: "https://github.com/connie388/thezone",
      technologies: [
        { name: "Vue", icon: "vue.png" },
        { name: "Tailwind CSS", icon: "tailwind.png" },
        { name: "HTML", icon: "html.svg" },
        { name: "Javascript", icon: "javascript.svg" },
      ],
    },
  ],
};
