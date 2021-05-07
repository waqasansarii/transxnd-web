import React, { useContext } from 'react'
import { ColorContext } from '../../../Context/Context'
import { Link } from 'react-router-dom'
import UserCard from '../../../Components/AccountComp/UserCard'
// assets 
import dot from '../../../Assets/Ellipse 1019.png'
import toggle from '../../../Assets/Component 49 – 5.png'
import toggleW from '../../../Assets/Component 49 – 2.png'
import card1 from '../../../Assets/Group 4416.png'
import card2 from '../../../Assets/Group 4415.png'
import '../styles/CardManage.css'

const CurrCard = () => {
    const { color } = useContext(ColorContext)
    let { mode } = color
    return (
        <div className='active_card_container'>
            <div className="your_card_main_div">
                <div className='user_card_di'>
                    <UserCard />
                </div>
                <div className="active_card_main_div"
                    style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#112626' }}
                >
                    <div className="your_card_head_div">
                        <h5 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Your Card</h5>
                        <Link
                            className='new_card_reqst_link'
                            style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}
                            to='/add-new-card'>
                            Request a New Card
                        </Link>
                    </div>
                    <div className="active_card_flex_">
                        <div className="acitve_cards" style={{ backgroundColor: mode === 'light' ? '' : '#1b3b3a' }} >
                            <div className="active_head_div">
                                <div className="heading_active">
                                    <h5 style={{ color: mode === 'dark' ? '#72FAEC' : 'black' }}>Transxnd Mansa Card </h5>
                                    <div className="active_para" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                        {'( '} <img src={dot} alt="" />
                                        <span > Active </span>
                                        {' )'}
                                    </div>
                                </div>
                                <div className="toggle_Main_div">
                                    {mode === 'light' ?
                                        <img src={toggle} alt="" />
                                        :
                                        <img src={toggleW} alt="" />
                                    }
                                    <div className="toggle_div" style={{ backgroundColor: mode === 'light' ? '' : '#1b3b3a' }} >
                                        <ul style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                            <li>Deactivate Card</li>
                                            <li>Top up Card</li>
                                            <li>Report as Lost/Stolen</li>
                                            <li>View E-Statement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cards_img_div">
                                <img src={card1} alt="" />
                                <img src={card2} alt="" />
                            </div>
                            <div className="cards_details">
                                <div className="detail_div1">
                                    <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>CARD NUMBER</h6>
                                    <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>34350323920923232</p>
                                    <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>ISSUE DATE</h6>
                                    <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>December 20,2020</p>
                                </div>
                                <div className="detail_div1">
                                    <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>HOLDER NAME</h6>
                                    <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>User name</p>
                                    <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>EXPIRY DATE</h6>
                                    <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>December 20,2021</p>
                                </div>
                            </div>
                            <div className="detail_div2">
                                <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Card TYPE</h6>
                                <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>GIM DEBIT CARD</p>
                            </div>
                            <div className="button_card">
                                <button className='active_btn_card' style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>Top up Card</button>
                                <button className='active_btn_card' style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>View E-Statement</button>
                            </div>
                            <div className='report_btn_div'>
                                <button className='report_btn'>Report as Lost/Stolen</button>
                            </div>
                        </div>


                        <div className="acitve_cards" style={{ backgroundColor: mode === 'light' ? '' : '#1b3b3a' }} >
                            <div className="active_head_div">
                                <div className="heading_active">
                                    <h5 style={{ color: mode === 'dark' ? '#72FAEC' : 'black' }}>Transxnd Mansa Card </h5>
                                    <div className="active_para" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                        {'( '} <img src={dot} alt="" />
                                        <span > Active </span>
                                        {' )'}
                                    </div>
                                </div>
                                <div className="toggle_Main_div">
                                    {mode === 'light' ?
                                        <img src={toggle} alt="" />
                                        :
                                        <img src={toggleW} alt="" />
                                    }
                                    <div className="toggle_div" style={{ backgroundColor: mode === 'light' ? '' : '#1b3b3a' }} >
                                        <ul style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                            <li>Deactivate Card</li>
                                            <li>Top up Card</li>
                                            <li>Report as Lost/Stolen</li>
                                            <li>View E-Statement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cards_img_div">
                                <img src={card1} alt="" />
                                <img src={card2} alt="" />
                            </div>
                            <div className="cards_details">
                                <div className="detail_div1">
                                    <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>CARD NUMBER</h6>
                                    <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>34350323920923232</p>
                                    <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>ISSUE DATE</h6>
                                    <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>December 20,2020</p>
                                </div>
                                <div className="detail_div1">
                                    <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>HOLDER NAME</h6>
                                    <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>User name</p>
                                    <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>EXPIRY DATE</h6>
                                    <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>December 20,2021</p>
                                </div>
                            </div>
                            <div className="detail_div2">
                                <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Card TYPE</h6>
                                <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>GIM DEBIT CARD</p>
                            </div>
                            <div className="button_card">
                                <button className='active_btn_card' style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>Top up Card</button>
                                <button className='active_btn_card' style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>View E-Statement</button>
                            </div>
                            <div className='report_btn_div'>
                                <button className='report_btn'>Report as Lost/Stolen</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrCard
