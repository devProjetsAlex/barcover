import React from 'react'

import niccage from '../../image/niccage.PNG'
import BarsList from '../components/BarsList'

const Bars = () => {

    const BARS = [
        {
        id: 'b1',
        name:'Le Sacrilège',
        email: 'Sacrilege@gmail.com',
        phone: 418-778-7777,
        image: niccage
       }
    ];

    return <BarsList items={BARS}/>
}

export default Bars