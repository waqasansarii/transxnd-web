import React, { useContext } from 'react'
import { ColorContext } from '../../Context/Context'
import UserCard from '../../Components/AccountComp/UserCard'
import { Link } from 'react-router-dom'
import Switch from '@material-ui/core/Switch';
import TransTable from '../../Components/AccountComp/TransTable'
import Chart from '../../Components/AccountComp/Chart'
import './styles/Account.css'

const AccountOverview = () => {
    const { color } = useContext(ColorContext)
    let { mode } = color
    
    const [state, setState] = React.useState({
        checkedA: true,
        // checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div className="overview_main_container">
            <div className="overview_main_div">
                <div className="over_view_user_card">
                    <UserCard />
                </div>
                <div className="overview_right_content_div">
                    <div className="head0verview">
                        <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Welcome to transxnd!</h2>
                        <div className="links_divpay">
                            <Link className={mode === 'light' ? 'over_view_link' : 'dark_overview'} >Pay a bill</Link>
                            <Link className={mode === 'light' ? 'over_view_link' : 'dark_overview'}>Send Money</Link>
                        </div>
                    </div>
                    <div className="your_summery_div">
                        <div style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#112626' }} className="blnce_main_div">
                            <div className="blnce_head_div">
                                <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Your Balance</h6>
                                <Switch
                                    checked={state.checkedA}
                                    onChange={handleChange}
                                    name="checkedA"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div>
                            <div style={{ backgroundColor: mode === 'light' ? '#B5EEE8' : '#1b3b3a' }} className="total_blnce">
                                <p style={{ color: mode === 'light' ? 'black' : 'white' }}>TOTAL BALANCE</p>
                                <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>1232434 <sup>53</sup> </h4>
                            </div>
                            <div className="wallet_card_div">
                                <div style={{ backgroundColor: mode === 'light' ? '#B5EEE8' : '#1b3b3a' }} className="e_wallet">
                                    <p style={{ color: mode === 'light' ? 'black' : 'white' }} >E_WALLET BALANCE</p>
                                    <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>1232434 <sup>53</sup> </h4>
                                </div>
                                <div style={{ backgroundColor: mode === 'light' ? '#B5EEE8' : '#1b3b3a' }} className="card_blnce">
                                    <p style={{ color: mode === 'light' ? 'black' : 'white' }}>CARD BALANCE</p>
                                    <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>1232434 <sup>53</sup> </h4>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#112626' }} className='chart_main_div'>
                            <div className="blnce_head_div">
                                <h6 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Your Summery</h6>
                                <select
                                    style={{
                                        color: mode == 'light' ? '#27BDAD' : '#72FAEC',
                                        backgroundColor: mode == 'light' ? '#E9F8F7' : 'transparent',
                                        border: `1px solid  ${mode === 'light' ? '#27BDAD' : '#72FAEC'}`
                                    }}
                                    name="" id=""
                                >
                                    <option value="Card Transaction">Funds Transfer</option>
                                </select>
                            </div>
                            <Chart />
                        </div>
                    </div>
                    <div style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#112626' }} className="transaction_table_div">
                        <div className="transaction_table_head">
                            <h5 style={{ color: mode === 'dark' ? 'white' : 'black' }}>YOUR TRANSACTION</h5>
                            <div className="select_transaction_div">
                                <select 
                                style={{
                                    color: mode == 'light' ? '#27BDAD' : '#72FAEC',
                                    backgroundColor: mode == 'light' ? '#E9F8F7' : 'transparent',
                                    border: `1px solid  ${mode === 'light' ? '#27BDAD' : '#72FAEC'}`
                                }}
                                 name="" id=""
                                 >
                                    <option value="Card Transaction">Card Transaction</option>
                                </select>
                                <Link className='all_trans_link' style={{ color: mode === 'light' ? '' : '#72FAEC' }}>View All</Link>
                            </div>
                        </div>
                        <TransTable className='table_scrol' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AccountOverview
