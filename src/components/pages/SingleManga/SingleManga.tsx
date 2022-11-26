import {FC, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import CurrentManga from '../../ui/CurrentManga/CurrentManga';

import { fetchCurrentManga } from '../../../api/$api';
import { IManga } from '../../../types/types';

const SingleManga : FC = () => {
    const [currManga, setCurrManga] =  useState({} as IManga)
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
       fetchCurrentManga(id,  setLoading)
        .then(res => setCurrManga(res))
    }, [])

    console.log(currManga)

    return (
        <div className='container'>
            {loading && <div>Loading...</div>}
            {currManga && (
                <CurrentManga manga={currManga}/>
            )}
        </div>
    );
};

export default SingleManga;