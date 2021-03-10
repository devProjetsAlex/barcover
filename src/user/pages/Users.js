import React from 'react'

import niccage from '../../image/niccage.PNG'
import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
        {
        id: 'u1',
        name:'Alex Cote',
        email: 'alex@gmail.com',
        image: niccage,
        bars: 3
       }
    ];

    return <UsersList items={USERS}/>
}

export default Users