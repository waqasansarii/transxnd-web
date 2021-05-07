import React from 'react'
import UserCard from '../../Components/AccountComp/UserCard'
// assets 
import s1 from '../../Assets/Group 4488.png'
import s2 from '../../Assets/Group 4489.png'
import s3 from '../../Assets/Group 4490.png'
import s4 from '../../Assets/Group 4491.png'
import s5 from '../../Assets/Group 4492.png'
import s6 from '../../Assets/Group 4493.png'
import or from '../../Assets/Path 7553.png'
import email from '../../Assets/Icon feather-mail.png'
import linkG from '../../Assets/Group 4484.png'
import link from '../../Assets/Icon feather-link-2.png'
import copy from '../../Assets/Icon feather-copy.png'
import './styles/Refer.css'

const ReferFriend = () => {
    return (
        <div>
            <div className="refer_main_">
                <div className="user_card_div2">
                    <UserCard />
                </div>
                <div className="refer_card_social" style={{ backgroundColor: '#E9F8F7' }}>
                    <h5 style={{ color: '#27BDAD' }}>REFER A FRIEND</h5>
                    <div className='social_share_head'>
                        <h5 style={{ color: '#27BDAD' }}>Share on social media</h5>
                        <p>Share referral link on social media on your favorite social networking websites!</p>
                    </div>
                    <div className="social_icon_div">
                        <img src={s1} alt="" />
                        <img src={s2} alt="" />
                        <img src={s3} alt="" />
                        <img src={s4} alt="" />
                        <img src={s5} alt="" />
                        <img src={s6} alt="" />
                    </div>
                    <div className="orline_div">
                        <img src={or} alt="" />
                        <span> OR </span>
                        <img src={or} alt="" />
                    </div>
                    <div className="emailInput">
                        <h5 style={{ color: '#27BDAD' }}>Enter friend's email</h5>
                        <p>Send a personalized email link to your friend or family! Simply enter email and send a referral link!</p>
                        <div className="pass_inpt entr_link">
                            <img src={email} alt="" />
                            <input type='email' name="" id="" />
                        </div>
                        <div >
                            <button className='change_pss_btn'>Share Now</button>
                        </div>
                    </div>
                </div>
                <div className="refer_copylink_card" style={{ backgroundColor: '#E9F8F7' }}>
                    <img src={linkG} alt="" />
                    <h5 style={{ color: '#27BDAD' }}>Share via invite link</h5>
                    <p>Copy the invite link and send to your friends or family via messages or any medium you link!</p>
                    <div className="link_inpt">
                        <img src={link} alt="" />
                        <input type='email' name="" value='https://www.youtube.com/watch?v=pba_' readOnly id="" />
                        <img src={copy} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReferFriend
