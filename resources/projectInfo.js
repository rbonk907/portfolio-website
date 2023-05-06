export const projectInfo = {
    projects: [
        {
            id: 1,
            title: "Reddit + Redux",
            description: "Minimalistic frontend application to display information from the Reddit JSON API",
            imageURL: "/missing-image.webp",
            gitHubLink: 'https://github.com/rbonk907/reddit-api-project',
            tags: [ 'React', 'Redux', 'TypeScript' ],
            isComplete: true
        },
        {
            id: 2,
            title: "E-Commerce REST API",
            description: "RESTful API for a fake e-commerce site selling software related decals. Connects to a PostgreSQL database and allows users to sign-up, and login with Oauth2.0. Users can select from a range of stickers and add them to a shopping cart",
            imageURL: "/missing-image.webp",
            gitHubLink: '',
            tags: [ 'NodeJS', 'ExpressJS', 'PostgreSQL' ],
            isComplete: true
        },
        {
            id: 3,
            title: "Game Boy Emulator",
            description: "Game Boy emulations have been done numerous times, but this one is mine. Written in C and uses SDL for window management",
            imageURL: "/missing-image.webp",
            gitHubLink: '',
            tags: [ 'C', 'SDL', 'CMake'],
            isComplete: false
        }
        
    ]
}