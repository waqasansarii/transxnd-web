import React, { useContext } from 'react'
// assets 
import user from '../../Assets/Group 4244.png'
import date from '../../Assets/Group 4243.png'
import calender from '../../Assets/Icon feather-calendar.png'
import email from '../../Assets/Icon feather-mail.png'
import pakistan from '../../Assets/Mask Group 6.png'
import loc from '../../Assets/Path 7362.png'
import phone from '../../Assets/Icon feather-smartphone.png'
import { ColorContext } from '../../Context/Context'

const PersonalDetail = ({ nextFunc, head,height }) => {
    const {color} = useContext(ColorContext)
    let {mode} = color
    return (
        <div>

            <div className={`personal_detail_container ${mode==='dark'? 'darK_input' :''} ${height}`}>
                {head ?
                    <p style={{ color:mode==='light'? '#27BDAD':'#72FAEC' }}>PERSONAL DETAILS</p>
                    :
                    null
                }
                <div className="user_name_change_input_div">
                    <div className="_name_change_div">
                        <img src={user} alt="" />
                        <input type="text" placeholder='First Name' />
                    </div>
                    <div className="_name_change_div">
                        <img src={user} alt="" />
                        <input type="text" placeholder='Last Name' />
                    </div>
                </div>
                <div className="pass_inpt entr_link">
                    <img src={date} alt="" />
                    <input type='email' name="" placeholder='Date of birth' />
                    <label htmlFor="date">
                        <img src={calender} alt="" />
                    </label>
                    <input type="date" style={{ display: 'none' }} name="date" id="date" />
                </div>
                <div className="email_input_perosnal">
                    <img src={email} alt="" />
                    <input type='email' name="" placeholder='Email' />
                </div>
                {head ?
                    <p style={{ color:mode==='light'? '#27BDAD':'#72FAEC' }}>CONTACT DETAILS</p>
                    : null
                }
                <div className="email_input_perosnal">
                    <img src={loc} alt="" />
                    <select name="" id="">
                        <option value="">Pakistan</option>
                    </select>
                </div>
                <div className="email_input_perosnal">
                    <img src={phone} alt="" />
                    <select name="" id="">
                        <option value={pakistan}><img src={pakistan} alt="" /> Pakistan</option>
                    </select>
                </div>
            </div>
            {nextFunc ?
                <div className="continue_btn_div">
                    <button 
                    style={{backgroundColor:mode==='light'?'':'#72FAEC',color:mode==='light'?'':'#000000'}}
                    className='personal_cont_btn' 
                    onClick={nextFunc}
                     >Continue</button>
                </div>
                :
                null
            }
        </div>
    )
}

export default PersonalDetail
