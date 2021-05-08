import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import AccountOverview from '../Pages/Account/AccountOverview'
import HistoricTrans from '../Pages/Account/HistoricTrans'
import SelectBill from '../Pages/Account/Paybill/SelectBill'
import VendorDetail from '../Pages/Account/Paybill/VendorDetail'
import PaymentDetailBill from '../Pages/Account/Paybill/PaymentDetailBill'
import ConfirmOtpBill from '../Pages/Account/Paybill/ConfirmOtp'
import ConfirmOtpMoney from '../Pages/Account/Money/ConfirmMoneyOtp'
import Wait from '../Pages/Account/Paybill/wait'
import SuccessFul from '../Pages/Account/Paybill/Successful'
import SelectMonyMethod from '../Pages/Account/Money/SelectMonyMethod'
import MoneyAccDetail from '../Pages/Account/Money/MoneyAccDetail'
import MoenyDetail from '../Pages/Account/Money/MoneyDetail'
import ConfirmTransaction from '../Pages/Account/Money/ConfirmTransaction'
import ReferFriend from '../Pages/Account/ReferFriend'
import ChangePassword from '../Pages/Account/ChangePassword'
import ProfileSetting from '../Pages/Account/ProfileSetting'
import CurrCard from '../Pages/Account/CardManage/CurrCard'
import RequestCard from '../Pages/Account/RequestCard'
import CardDone from '../Pages/Account/CardDone'
import WaitMoney from '../Pages/Account/Money/WaitMoney'


const AppRouter  = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={AccountOverview} />
                <Route path='/historic-transaction' component={HistoricTrans} />
                <Route path='/pay-bill' component={SelectBill} />
                <Route path='/bil-detail' component={VendorDetail} />
                <Route path='/bil-payment' component={PaymentDetailBill} />
                <Route path='/confrim-otp' component={ConfirmOtpBill} />
                <Route path='/money-otp-confirm' component={ConfirmOtpMoney} />
                <Route path='/waiting' component={Wait} />
                <Route path='/money-successful' component={WaitMoney} />
                <Route path='/successful' component={SuccessFul} />
                <Route path='/select-bank' component={SelectMonyMethod} />
                <Route path='/bank_info' component={MoneyAccDetail} />
                <Route path='/money-detail' component={MoenyDetail} />
                <Route path='/confrim-transaction' component={ConfirmTransaction} />
                <Route path='/refer-friend' component={ReferFriend} />
                <Route path='/change-password' component={ChangePassword} />
                <Route path='/setting' component={ProfileSetting} />
                <Route path='/active-card' component={CurrCard} />
                <Route path='/request-new-card' component={RequestCard} />
                <Route path='/request-done' component={CardDone} />
            </Switch>

        </Router>
    )
}

export default AppRouter