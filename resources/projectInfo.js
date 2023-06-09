export const projectInfo = {
    projects: [
        {
            id: 1,
            title: "Dev Doodles",
            href: "/projects/devDoodles",
            description: "Full-stack e-commerce application selling software related decals. Connects to a PostgreSQL database and allows users to sign-up, and login with Oauth2.0. Users can select from a range of stickers and add them to a shopping cart",
            imageURL: "/missing-image.webp",
            gitHubLink: '',
            tags: [ 'PostgreSQL', 'ExpressJS', 'React', 'Node.js' ],
            isComplete: true
        },
        {
            id: 2,
            title: "Reddit + Redux",
            href: "/projects/redditRedux",
            description: "Minimalistic frontend application to display information from the Reddit JSON API",
            imageURL: "/missing-image.webp",
            gitHubLink: 'https://github.com/rbonk907/reddit-api-project',
            tags: [ 'React', 'Redux', 'TypeScript' ],
            isComplete: true
        },
        {
            id: 3,
            title: "Game Boy Emulator",
            href: "",
            description: "Game Boy emulations have been done numerous times, but this one is mine. Written in C and uses SDL for window management",
            imageURL: "/missing-image.webp",
            gitHubLink: '',
            tags: [ 'C', 'SDL', 'CMake'],
            isComplete: false
        }
        
    ]
}