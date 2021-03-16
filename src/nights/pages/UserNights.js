import React from 'react';
import {useParams} from 'react-router-dom'
import NightsList from '../components/NightsList';


const DUMMY_NIGHT = [
    {
        id:'p1',
        friends:'George et Phil',
        barName:'Le Sacrilège',
        barArrival: "21:00",
        barDeparture: "23:00",
        barDate: "2021-03-13",
        creator: "u1"
    },
    {
        id:'p2',
        friends:'George et Phil',
        barName:'Le Nelligan',
        barArrival: "21:00",
        barDeparture: "23:00",
        barDate: "2021-03-13",
        creator: "u1"
    }
]


const UserNights = () =>{
    
    const userId = useParams().userId;
    const loadedBars = DUMMY_NIGHT.filter(night=> night.creator === userId)

 return <NightsList items={loadedBars} />

}

export default UserNights