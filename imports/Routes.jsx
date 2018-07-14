import React from 'react';
import loadable from 'loadable-components'

export const About = loadable(() => import('./ui/About'));
export const Home = loadable(() => import('./ui/Home'));