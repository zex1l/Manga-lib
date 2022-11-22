import  { FC } from 'react';

import Main from './components/pages/Main/Main'
import SingleManga from './components/ui/SingleManga/SingleManga'

interface IRoute {
    component: FC,
    url: string
}

export const routes : IRoute[] = [
    {
        component: Main,
        url: '/'
    },
    {
        component: SingleManga,
        url: '/manga/:id'
    }
]