import React from 'react';
import {useParams} from 'react-router-dom'
import NightsList from '../components/NightsList';


const DUMMY_NIGHT = [
    {
        id:'p1',
        friends:'George et Phil',
        barName:'Le Sacrilège',
        barArrival: "20hrs",
        barDeparture: '23hrs',
        barDate: "8 Février",
        creator: "u1"
    },
    {
        id:'p1',
        friends:'George et Phil',
        barName:'Le Nelligan',
        barArrival: "23hrs",
        barDeparture: '2hrs',
        barDate: "8 Février",
        creator: "u1"
    }
]


const UserNights = () =>{
    
    const userId = useParams().userId;
    const loadedBars = DUMMY_NIGHT.filter(night=> night.creator === userId)

 return <NightsList items={loadedBars} />

}

export default UserNights