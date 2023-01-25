import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/splash";
import { OnBoardingStackList } from "../types";
import React from 'react'
import Login from "../screens/login";
import Register from "../screens/register";

const OnboardStack = createStackNavigator<OnBoardingStackList>()

export default function OnboardingNavigation() {
    return (
        <OnboardStack.Navigator>
            <OnboardStack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></OnboardStack.Screen>
            <OnboardStack.Screen name="Login" component={Login} options={{ title: 'Login' }}></OnboardStack.Screen>
            <OnboardStack.Screen name="Register" component={Register} options={{ title: 'Register' }}></OnboardStack.Screen>
        </OnboardStack.Navigator>
    )
}