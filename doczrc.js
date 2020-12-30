import pkg from './package.json';

export default {
  title: 'Competition Factory',
  description: pkg.description,
  base: `/${pkg.name}/`,
  dest: `/docs`,
  version: pkg.version,
  propsParser: false,
  hashRouter: true,
  typescript: true,
  themeConfig: {
    showPlaygroundEditor: false,
    colors: {
      primary: '#000000',
    },
  },
  menu: [
    'Readme',
    {
      name: 'General Concepts',
      menu: ['Context', 'Policies', 'Time Items'],
    },
    {
      name: 'Competition Engine',
      menu: ['Garman Scheduling', 'API'],
    },
    {
      name: 'Tournament Engine',
      menu: ['API'],
    },
    {
      name: 'Draw Engine',
      menu: [
        'Overview',
        'Avoidance',
        'Positioning BYEs',
        'Positioning Seeds',
        'Policies',
        'Attributes',
        'API',
      ],
    },
    {
      name: 'Examples',
    },
    {
      name: 'Utilities',
      menu: ['makeDeepCopy'],
    },
  ],
};
