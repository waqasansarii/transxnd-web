import React from 'react'
import CStepper from '../../Components/AccountComp/Stepper'
import UserCard from '../../Components/AccountComp/UserCard'

const RequestCard = () => {
    return (
        <div className='new_card_container'>
            <div className="user_card_div1">
                <UserCard />
            </div>
            <div className="stepper_div">
                <CStepper />
            </div>
        </div>
    )
}

export default RequestCard
