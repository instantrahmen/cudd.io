export default [
  // Convention Center App
  {
    name: 'Chattanooga Convention Center Virtual Walkthrough',
    photo: '/images/projects/convention-center.png',
    description: `
An interface created for the Chattanooga Convention Center that allows potential clients to see rooms before they rent them. Created as an SPA in React, using both Matterport and Three.js to show the rooms. 
  `,
    links: {
      live: 'https://pointsmap.github.io/matterport-minimap/',
      source: null,
    },
    tags: ['React', 'Matterport', 'Three.js'],
  },

  // Moonbot
  {
    name: 'Moonbot Discord Bot',
    photo: '/images/projects/moonbot.png',

    description: `
A discord bot created for a close friend of mine. Allows her to quickly manage commands in a Sanity backend. Uses discord.js to make interfacing with the Discord API easier.
  `,
    links: {
      live: null,
      source: 'https://github.com/instantrahmen/MoonBot',
    },
    tags: ['Node', 'Discord', 'discord.js'],
  },

  // XMas App
  {
    name: 'Christmas Scavenger Hunt for VRMedia Pros',
    photo: '/images/projects/xmas-project.png',
    description: `
A virtual scavenger hunt created in Next.js using the Matterport API. The team hid items throughout a house and took 360 scans of said house.
It was then my job to design and create this app as the sole developer at the company. The whole project went from concept to production in the span of 2-3 weeks.

The goal is to find all objects hidden around the house. 
It won't accept an answer unless the item is in view.
  `,
    links: {
      live: 'https://christmashunt.vrmediapros.com/',
      source: null,
    },
    tags: ['React', 'Matterport', 'Next.js'],
  },
];
