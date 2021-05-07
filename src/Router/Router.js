import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import AccountOverview from '../Pages/Account/AccountOverview'
import HistoricTrans from '../Pages/Account/HistoricTrans'
import SelectBill from '../Pages/Account/Paybill/SelectBill'
import VendorDetail from '../Pages/Account/Paybill/VendorDetail'
import PaymentDetailBill from '../Pages/Account/Paybill/PaymentDetailBill'
import ConfirmOtp from '../Pages/Account/Paybill/ConfirmOtp'
import wait from '../Pages/Account/Paybill/wait'
import SuccessFul from '../Pages/Account/Paybill/Successful'
import SelectMonyMethod from '../Pages/Account/Money/SelectMonyMethod'
import MoneyAccDetail from '../Pages/Account/Money/MoneyAccDetail'
import MoenyDetail from '../Pages/Account/Money/MoneyDetail'
import ConfirmTransaction from '../Pages/Account/Money/ConfirmTransaction'
import ReferFriend from '../Pages/Account/ReferFriend'
import ChangePassword from '../Pages/Account/ChangePassword'
import ProfileSetting from '../Pages/Account/ProfileSetting'
import CurrCard from '../Pages/Account/CardManage/CurrCard'


const AppRouter  = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={AccountOverview} />
                <Route path='/historic-transaction' component={HistoricTrans} />
                <Route path='/pay-bill' component={SelectBill} />
                <Route path='/bil-detail' component={VendorDetail} />
                <Route path='/bil-payment' component={PaymentDetailBill} />
                <Route path='/confrim-otp' component={ConfirmOtp} />
                <Route path='/waiting' component={wait} />
                <Route path='/successful' component={SuccessFul} />
                <Route path='/select-bank' component={SelectMonyMethod} />
                <Route path='/bank_info' component={MoneyAccDetail} />
                <Route path='/money-detail' component={MoenyDetail} />
                <Route path='/confrim-transaction' component={ConfirmTransaction} />
                <Route path='/refer-friend' component={ReferFriend} />
                <Route path='/change-password' component={ChangePassword} />
                <Route path='/setting' component={ProfileSetting} />
                <Route path='/active-card' component={CurrCard} />
            </Switch>

        </Router>
    )
}

export default AppRouter