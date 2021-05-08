import React, { useContext } from 'react'
import './style/otp.css'
// assets 
import edit from '../Assets/editL.png'
import editD from '../Assets/Icon awesome-edit.png'
import mobmsg from '../Assets/Group 4532.png'
import mobmsgL from '../Assets/Group 4532l.png'
import email from '../Assets/Group 4528.png'
import email_l from '../Assets/Group 4528l.png'
import alert from '../Assets/Polygon 8.png'
import { ColorContext } from '../Context/Context'
import { useHistory } from 'react-router'

const Confirmotp = ({nextLink,bLink}) => {
    const { color } = useContext(ColorContext)
    let { mode } = color
    const history = useHistory()
    return (
        <div>
            <div className="confirm_opt_main_div" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#0E2725' }}>
                <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>CONFIRM OTP</h4>
                <p
                    style={{ color: mode === 'light' ? '' : 'white' }}
                >Please enter the 4 digit OPT sent on your email and phone number!</p>
                <div className={mode === 'light' ? "get_otp_main_div" : 'get_otp_main_div D_get_otp_main_div'}>
                    <div className="get_otp_div">
                        <div className="number_div">
                            <span style={{ color: mode === 'light' ? '' : '#72FAEC' }}>924823202332</span>
                            <img src={mode === 'light' ? edit : editD} alt="" />
                        </div>
                        <img className='msg_img' src={mode==='dark'? mobmsg:mobmsgL} alt="" />
                        <div className="number_div_mob">
                            <span style={{ color: mode === 'light' ? '' : '#72FAEC' }}>924823202332</span>
                            <img src={mode === 'light' ? edit : editD} alt="" />
                        </div>
                        <div className="otp_get_inp_div">
                            <input type="text" readOnly value='1' />
                            <input type="text" readOnly value='2' />
                            <input type="text" readOnly value='3' />
                            <input type="text" readOnly value='4' />
                        </div>
                        <div className="alert_msg_div">
                            <img src={alert} alt="" />
                            <span>Any frontend error show here!</span>
                        </div>
                        <button
                        onClick={()=>history.push(nextLink)}
                            className='resend_btn'
                            style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC', color: mode === 'light' ? 'white' : 'black' }}
                        >Resend OTP (00:30)</button>
                        <p
                            style={{ color: mode === 'light' ? '' : 'white' }}
                            className='not_recvd'
                        >Did'nt receive a code?</p>
                    </div>
                    <div className="email_otp_div">
                        <div className="number_div">
                            <span style={{ color: mode === 'light' ? '' : '#72FAEC' }}>abc@123gmail.com</span>
                            <img src={mode === 'light' ? edit : editD} alt="" />
                        </div>
                        <img className='msg_img' src={mode==='dark'? email:email_l} alt="" />
                        <div className="number_div_mob">
                            <span style={{ color: mode === 'light' ? '' : '#72FAEC' }}>abc@123gmail.com</span>
                            <img src={mode === 'light' ? edit : editD} alt="" />
                        </div>
                        <div className="otp_get_inp_div">
                            <input type="text" readOnly value='-' />
                            <input type="text" readOnly value='-' />
                            <input type="text" readOnly value='-' />
                            <input type="text" readOnly value='-' />
                        </div>
                        <div className="alert_msg_div">
                            <img src={alert} alt="" />
                            <span>Any frontend error show here!</span>
                        </div>
                        <button
                        onClick={()=>history.push(nextLink)}
                            className='resend_btn margin_top'
                            style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC', color: mode === 'light' ? 'white' : 'black' }}
                        >Resend OTP (00:30)</button>
                        <p
                            style={{ color: mode === 'light' ? '' : 'white' }}
                            className='not_recvd'
                        >Did'nt receive a code?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmotp
