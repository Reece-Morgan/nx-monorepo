export const stickyNavData = [
    { url: '#about', text: 'About' },
    { url: '#projects', text: 'Projects' },
    { url: '#journey', text: 'My Journey' },
];

export const socialMediaData = [
    { imageUrl: "/images/icons/facebook.svg", altText: "Facebook", url: "https://www.facebook.com/reece.morgan.1996/" },
    { imageUrl: "/images/icons/twitter.svg", altText: "Twitter", url: "https://twitter.com/reecemorgandev" },
    { imageUrl: "/images/icons/instagram.svg", altText: "Instagram", url: "https://www.instagram.com/reecemorgandev/" },
    { imageUrl: "/images/icons/linkedin.svg", altText: "LinkedIn", url: "https://www.linkedin.com/in/reece-morgan-dev/" },
    { imageUrl: "/images/icons/github.svg", altText: "Github", url: "https://github.com/Reece-Morgan" },
    { imageUrl: "/images/icons/sketchfab.svg", altText: "Sketchfab", url: "https://sketchfab.com/reecemorgan" },
];

export const timeLineData = [
    {
        title: 'First Discovered Web Development',
        subtitle: 'Hobbyist',
        description: `
            I was first introduced to web development in my last years of High School. I took a basic web  
            design class with a few mates, and that was when I discovered my passion for web development.`,
        date: '2012',
        colour: '#008000',
    },
    {
        title: 'Casual Developer',
        subtitle: 'Hobbyist',
        description: `
            The following two years I spent as a casual hobbyist, designing and building very basic sites, and 
            building my skills in HTML and CSS. I also started to dabble in JavaScript during this time.`,
        date: '2012-2014',
        colour: '#008000',
    },
    {
        title: 'HNC Computing',
        subtitle: 'Student',
        description: `
            As a student in the HNC Computing Course at my local college, Moray College UHI, I continued my personal development 
            of HTML, CSS and JS. I also took various other classes, where I learnt the basics with Python, Java and SQL.`,
        date: 'Sept 2014 - June 2015',
        colour: '#e91e63',
    },
    {
        title: 'HND Computing',
        subtitle: 'Student',
        description: `
            Moving onto the HND course, I continued to develop the programming skills from the year before. I felt I was moving further 
            away from web development during this year, however, and opted against moving forward into the Computing degree and started 
            the following year as a HNC Interactive Media student.`,
        date: 'Sept 2015 - June 2016',
        colour: '#e91e63',
    },
    {
        title: 'HNC Interactive Media',
        subtitle: 'Student',
        description: `
            During this year I was able to spend more time developing my web dev skills, along with learning some new ones, particuarly around 
            designing a website from scratch. From basic UI design with sketches and wireframes, to building the site itself. I also spent 
            time with Adobe Illustrator and Photoshop, and was able to develop some basic skills there.`,
        date: 'Sept 2016 - June 2017',
        colour: '#e91e63',
    },
    {
        title: 'HND Interactive Media',
        subtitle: 'Student',
        description: `
            The second year of IM took the knowledge and skills from the HNC and built on them further. By this time my HTML and CSS skills were 
            very proficent, and I started looking for a new challenge. In other areas of this course, I continued to use Illustrator and Photoshop,
            and was introduced to 3D animation and Video Editing techniques.`,
        date: 'Sept 2017 - June 2018',
        colour: '#e91e63',
    },
    {
        title: 'The Football Pools',
        subtitle: 'Graduate Developer',
        description: `
            In early 2018 there was a presentation at college from a Producer at The Football Pools, who had recently opened an office in Elgin, Moray and were looking to 
            expand their staff. I applied and was offered the position of a Graduate Developer. I worked solely within the Front End team. My main duties and responsiblities 
            here included maintenance of the current site, and the development of new sites using new technologies we, as a company, were exploring. It was then that I started 
            working with Angular in a professional capacity for a while, before moving on and spending a few months learning React.`,
        date: 'June 2018 - Sept 2020',
        colour: '#000d68',
    },
    {
        title: 'BSc Interactive Media',
        subtitle: 'Student',
        description: `
            The culmination of my education at Moray College was my BSc course in IM. It was during this year that I came across Angular for the first time, and started 
            using that for my studies rather than HTML and CSS. Also during this year that I built Alba Cruises, a site for a fictional company that I am currently rebuilding 
            in NextJS as part of my Portfolio. I also continued my work in Illustrator and Photoshop, along with 3D animation and video editing techniques
            in Adobe Premiere Pro.`,
        date: 'Sept 2018 - June 2019',
        colour: '#e91e63',
    },
    {
        title: 'The Football Pools',
        subtitle: 'Software Engineer',
        description: `In September 2020 I was promoted from a Graduate Developer to a Software Engineer. I remained within the front end team, but my role shifted slightly, 
        away from React and towards the maintenance and day-to-day running of one of our biggest sites, via a CMS called Custodian. This CMS uses HTML and CSS, and I worked with
        this system for over a year. My role eventually expanded to include maintenance of several subsites, built with a variety of technologies, from .Net Core, Razor Pages/C#
        and Angular. In 2021 I resumed my training with React, and I now maintain and develop new features using NextJS. I have also kept my previous duties, maintaining the other 
        sites with C#, Angular and now React.`,
        date: 'Sept 2020 - June 2023',
        colour: '#000d68',
    },
    {
        title: 'The Football Pools',
        subtitle: 'Senior Software Engineer',
        description: `In June 2023 I was promoted to a Senior Software Engineer within the front end team. With this promotion, I took on more responsibility within the front end team,
        and the wider technology team within the company. I continue to work with the front end team on the maintenance of the company website, along with the development of new features. 
        This is using NextJS and Typescript. I am also in continous contact with other teams, such as the creative team, to continue to deliver the optimal user experience. As part of my new 
        responsibilities, I assist and guide the junior and mid-level developers within the front end team, as well as delegating tasks for them to perform. I am also now vocal in planning 
        sessions for new features on the website. This can include giving estimations on how long a piece of work may take and collaborating on work with the front and back end teams.`,
        date: 'June 2023 - Present',
        colour: '#000d68',
    },
]

export const projectData =  [
    {
        imageUrl: '/images/projects/allus_interactive.png',
        altText: 'Allus Interactive',
        description: `
            I built this website to showcase my work as an Indie Game Developer. This site is built using 
            NextJS, Typescript and the Hygraph CMS.`,
        url: 'https://www.allusinteractive.com',
        urlText: 'View Website'
    },
    // TODO: re-introduce Alba Cruises when Vercel Deployment issues can be sorted
    // {
    //     imageUrl: '/images/projects/alba_cruises.png',
    //     altText: 'Alba Cruises',
    //     description: `Alba Cruises was built in Angular during my studies at college. It is now used purely as a portfolio piece.`,
    //     url: 'https://albacruises.reecemorgan.co.uk',
    //     urlText: 'View Project'
    // },
    {
        imageUrl: '/images/projects/movie_search.png',
        altText: 'Movie Search',
        description: `
            This site uses the OMDb API to display different media based on a user's search parameters. 
            It is a basic portfolio piece that demonstrates some understanding of react state and hooks.`,
        url: 'https://moviesearch.reecemorgan.co.uk',
        urlText: 'View Project'
    },
    {
        imageUrl: '/images/projects/pokedex_app.png',
        altText: 'Pokedex App',
        description: `
            This site is a basic portfolio piece built using sveltekit. I have implemented the PokeAPI to 
            display different pokemon based on the generation they are viewing.`,
        url: 'https://pokedex.reecemorgan.co.uk',
        urlText: 'View Project'
    }
];
