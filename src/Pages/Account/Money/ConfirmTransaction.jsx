import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import UserCard from '../../../Components/AccountComp/UserCard'
import MobViewBack from '../../../Components/MobViewBack'
import { ColorContext } from '../../../Context/Context'

const ConfirmTransaction = () => {
    const { color } = useContext(ColorContext)
    let { mode } = color
    const history = useHistory()
    return (
        <div>
            <div className="bak_div">
                <MobViewBack link='/money-detail' value='SEND MONEY' />
            </div>
            <div className='money_detail_container'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div
                    className="money_detail_inputs_div confirm_trans_main_div"
                    style={{
                        backgroundColor: mode === 'light' ? '#E9F8F7' : '#0E2725'
                    }}>
                    <div>
                        <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>CONFIRM TRANSCATION</h4>
                    </div>
                    <p
                        style={{ color: mode === 'light' ? '' : 'white' }}
                    >Please review the transaction before we proceed with the payment!</p>
                    <h6
                        style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC', marginTop: '20px' }}
                    >REVIERW TRANSCATION</h6>
                    <div className="transaction_div" style={{ backgroundColor: mode === 'dark' ? '#214642' : '' }} >
                        <p
                            style={{ color: mode === 'light' ? '' : 'white' }}
                        >RECIPIENT BANK NAME</p>
                        <h5
                            style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}
                        >ABCD Bank Private Limited</h5>
                        <p
                            style={{ color: mode === 'light' ? '' : 'white' }}
                        >RECIPIENT ACCOUNT NUMBER</p>
                        <h5
                            style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}
                        >ABCD-1334-5678-9123</h5>
                        <p
                            style={{ color: mode === 'light' ? '' : 'white' }}
                        >RECIPIENT EMAIL ADDRESS </p>
                        <h5
                            style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}
                        >olalekam.l@transxnd.com</h5>
                        <p
                            style={{ color: mode === 'light' ? '' : 'white' }}
                        >TRANSCATION AMOUNT</p>
                        <div >
                            <p style={{ color: mode === 'light' ? '' : 'white' }}>XOF</p>
                            <h5 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}> 12,043.<sup>52</sup></h5>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }} >
                        <button className='back_btn'
                            onClick={() => history.push('/money-detail')}
                            style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC', border: '1px solid #27BDAD' }}
                        >Back</button>
                        <button
                            className='con_btn'
                            style={{
                                backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC',
                                color: mode === 'light' ? 'white' : 'black',
                                width: '150px'
                            }}
                            onClick={() => history.push('/money-otp-confirm')}
                        >Proceed & Pay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmTransaction
