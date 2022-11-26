import  { FC } from 'react';

import Main from './components/pages/Main/Main'
import SingleManga from './components/pages/SingleManga/SingleManga'
import Login from './components/pages/Login/Login'
import EditManga from './components/pages/EditManga/EditManga';

interface IRoute {
    component: FC,
    url: string
    admin: boolean
}

export const routes : IRoute[] = [
    {
        component: Main,
        url: '/',
        admin: false
    },
    {
        component: SingleManga,
        url: '/manga/:id',
        admin: false
    },
    {
        component: Login,
        url: '/manga/:id/login',
        admin: false
    }
    ,
    {
        component: EditManga,
        url: '/manga/:id/edit',
        admin: true
    }
]