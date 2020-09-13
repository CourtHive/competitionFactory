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
      name: 'Competition Engine',
      menu: ['Garman Scheduling'],
    },
    {
      name: 'Draw Engine',
      menu: ['Overview', 'Positioning BYEs', 'Positioning Seeds', 'Glossary'],
    },
    {
      name: 'Examples',
    },
  ],
};