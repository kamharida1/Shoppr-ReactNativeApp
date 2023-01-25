import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import OrderHistory from "../screens/orderHistory/orderHistory";
import { ProfileStackList } from "../types";
import OrderDetails from '../screens/orderDetails/orderDetails';
import Addresses from '../screens/addresses';
import AddAddress from '../screens/addAddress';
import PersonalInfo from '../screens/personalInfo';

const ProfileStack = createStackNavigator<ProfileStackList>()

export default function ProfileNavigation() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="OrderHistory" component={OrderHistory} options={{ title: 'Order History' }}></ProfileStack.Screen>
            <ProfileStack.Screen name="OrderDetails" component={OrderDetails}></ProfileStack.Screen>
            <ProfileStack.Screen name="Addresses" component={Addresses} options={{ title: 'Addresses' }}></ProfileStack.Screen>
            <ProfileStack.Screen name="AddAddress" component={AddAddress} options={{ title: 'Add Address' }}></ProfileStack.Screen>
            <ProfileStack.Screen name="PersonalInfo" component={PersonalInfo} options={{ title: 'Personal Info' }}></ProfileStack.Screen>
        </ProfileStack.Navigator>
    )
}