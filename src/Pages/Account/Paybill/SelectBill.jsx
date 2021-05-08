import React, { useContext } from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import { useHistory } from 'react-router-dom'
import bulb from '../../../Assets/bil1.png'
import mob2 from '../../../Assets/Group 4234.png'
import bulb2 from '../../../Assets/Group 4228.png'
import water2 from '../../../Assets/Group 4231.png'
import gas2 from '../../../Assets/Group 4233.png'
import mob from '../../../Assets/bil2.png'
import water from '../../../Assets/bil3.png'
import gas from '../../../Assets/bil4.png'
import '../styles/Paybill.css'
import { ColorContext } from '../../../Context/Context'

const SelectBill = () => {
    const {color} = useContext(ColorContext)
    let {mode} = color
    const history = useHistory()
    return (
        <div className='pay_Bil_container'>
            <div className="pay_bill_main_div">
                <div className="pay_user_card_div">
                    <UserCard />
                </div>
                <div className="select_bill_div" style={{ backgroundColor:mode==='light'? '#E9F8F7':'#0E2725' }}>
                    <h4 style={{ color:mode==='light'? '#27BDAD' :'#72FAEC'}}>PAY A BILL</h4>
                    <p style={{color:mode==='light'?'':'white'}}>Please select a vendor type and continue to proceed!</p>
                    <div className="bill_type_select" style={{ backgroundColor:mode==='light'? '#D0F2EE':'#142b28' }}>
                        <div className="bil_type">
                            <div className="_img_bill" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={mob} alt="" />
                                <img className='hover_light_bil' src={mob2} alt="" />
                            </div>
                            <p style={{color:mode==='light'?'':'white'}}>Mobile Recharge</p>
                        </div>
                        <div className="bil_type">
                            <div className="_img_bill" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={bulb} alt="" />
                                <img className='hover_light_bil' src={bulb2} alt="" />

                            </div>
                            <p style={{color:mode==='light'?'':'white'}}>Electricity Bills</p>
                        </div>
                        <div className="bil_type">
                            <div className="_img_bill" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={water} alt="" />
                                <img className='hover_light_bil' src={water2} alt="" />

                            </div>
                            <p style={{color:mode==='light'?'':'white'}}>Water Bills</p>
                        </div>
                        <div className="bil_type">
                            <div className="_img_bill" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={gas} alt="" />
                                <img className='hover_light_bil' src={gas2} alt="" />

                            </div>
                            <p style={{color:mode==='light'?'':'white'}}>Gas/CNG Bills</p>
                        </div>
                    </div>
                    <div className='abslt_btn_div'>
                        <button className='back_btn' style={{ color: '#27BDAD', border: '1px solid #27BDAD' }}>Back</button>
                        <button
                            className='con_btn'
                            style={{ backgroundColor: "#27BDAD", color: 'white' }}
                            onClick={() => history.push('/bil-detail')}
                        >Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectBill
