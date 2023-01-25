import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import { Text } from "react-native";
import Cart from "../screens/cart";
import Catelogue from "../screens/catelogue";
import Home from "../screens/home";
import Profile from "../screens/profile";
import { MainStackList } from "../types";
import BottomTabs from "./BottomTabs";

const BottomNavigator = createBottomTabNavigator<MainStackList>();

export default function MainTabs() {
    return (
        <BottomNavigator.Navigator tabBar={props => <BottomTabs {...props} />}>
            <BottomNavigator.Screen name="Home" component={Home} options={{ title: 'Shoppr', headerTitleAlign: 'center' }}></BottomNavigator.Screen>
            <BottomNavigator.Screen name="Catalogue" component={Catelogue} options={{ headerShown: false }}></BottomNavigator.Screen>
            <BottomNavigator.Screen name="Profile" component={Profile} options={{ headerShown: false }}></BottomNavigator.Screen>
            <BottomNavigator.Screen name="Cart" component={Cart} options={{ headerShown: false }}></BottomNavigator.Screen>
        </BottomNavigator.Navigator>
    )
}