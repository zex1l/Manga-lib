import {FC} from 'react'
import Header from '../Header/Header';

import './Layout.scss'

interface ILayout {
    children: JSX.Element,
}

const Layout : FC <ILayout> = ({children}) => {
    return (
        <>
            <Header/>
            <div className='container'>
                {children}
            </div>
        </>
    );
};

export default Layout;