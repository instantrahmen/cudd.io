export default [
  // Tsukimoon Website
  {
    name: 'Tsukimoon.net',
    photo: '/images/projects/tsukimoon.net.png',
    description: `
A website created for my best friend and VTuber Tsukimoon. 
It was built in Gatsby and uses a Sanity backend so she can update the content herself easily without having to rely on me to make changes for her.
      `,
    links: {
      live: 'https://tsukimoon.net',
      source: 'https://github.com/instantrahmen/tsukimoon-website',
    },
    tags: ['React', 'Sanity', 'Gatsby'],
  },

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
A discord bot also created for Tsuki. Allows her to quickly manage commands in a Sanity backend. Uses discord.js to make interfacing with the Discord API easier.
  `,
    links: {
      live: null,
      source: 'https://github.com/instantrahmen/MoonBot',
    },
    tags: ['Node', 'Sanity', 'Discord'],
  },

  // XMas App
  {
    name: 'Christmas Scavenger Hunt for VRMedia Pros',
    photo: '/images/projects/xmas-project.png',
    description: /*md*/ `
<p>
A virtual scavenger hunt created in Next.js using the Matterport API.  
</p>
<br />

<p>
The team hid items throughout a house and took 360 scans of said house.
The goal is to find all objects hidden around the house. 
It won't accept an answer unless the item is in view.
</p>
<br />
<p>
The whole project went from concept to production in the span of 2-3 weeks.
</p>
  `,
    links: {
      live: 'https://christmashunt.vrmediapros.com/',
      source: null,
    },
    tags: ['React', 'Matterport', 'Next.js'],
  },
];
