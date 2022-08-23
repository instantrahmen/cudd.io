export default [
  // Bukku App
  {
    name: 'Bukku - Comic Book Reader',
    photo: '/images/projects/bukku-darkmode.png',
    description: `
<center><strong>[WIP]</strong></center>
<p>
A cross platform, web-based comic reader. Supports .cbz and .cbr files, LTR and RTL reading directions, syncing reading position across multiple devices, etc. 
</p>
<p>
Works on Android, iOS, and web. Is a PWA so can be installed locally and used offline.   
</p>
Note: Will likely be open sourced when it's ready for release, as well as released on Android and iOS App Stores. 
      `,
    links: {},
    tags: ['SvelteKit', 'Framework7', 'TypeScript'],
  },

  // HelperBot

  {
    name: 'HelperBot',
    photo: '/images/projects/helperbot.png',
    description: `
<p>
  A general-purpose private Discord bot with personality. Supports music playback, a DnD Dice Roller, moderation features, and responds to general questions in a fun and engaging manner. 
</p>
<p>
  Written in Node using Discord.js and the Discord API. Has a Fastify API and user profile support is in the works along with an admin panel. 
</p>
      `,
    links: {
      live: null,
      source: 'https://github.com/instantrahmen/HelperBot',
    },
    tags: ['Node', 'Discord.js', 'TypeScript'],
  },

  // Convention Center App
  {
    name: 'Chattanooga Convention Center Virtual Walkthrough',
    photo: '/images/projects/convention-center.png',
    description: `
A specialized React SPA created for the Chattanooga Convention Center while I was working at PointsMap. Uses a combination of Matterport and A-Frame to create an interactive overview of all rooms available for renting out with detailed information about each. 
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
A specialized Discord Bot commissioned for the no-longer-active Twitch streamer TsukiMoon and her community. Uses Node and the Discord API and allows admins to log into an admin panel and create custom commands in with an easy EJS-like syntax. 
  `,
    links: {
      live: null,
      source: 'https://github.com/instantrahmen/MoonBot',
    },
    tags: ['Node', 'Sanity', 'Discord.js'],
  },

  // XMas App
  {
    name: 'Christmas Scavenger Hunt for VRMedia Pros',
    photo: '/images/projects/xmas-project.png',
    description: `
<p>
A virtual scavenger hunt created in Next.js using the Matterport API.  
</p>
<p>
The team hid items throughout a house and took 360 scans of said house.
The goal is to find all objects hidden around the house. 
It won't accept an answer unless the item is in view.
</p>
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
