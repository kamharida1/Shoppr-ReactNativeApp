import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { ColorSchemeName } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OnboardingNavigation from './OnBoardingNavigator';
import MainNavigator from './MainNavigator';
import ShoppingNavigation from './ShoppingNavigator';
import ProfileNavigation from './ProfileNavigator';

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFD952',
        background: '#fff'
    }
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : AppTheme}>
            <StatusBar style="light" />
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={OnboardingNavigation}></Stack.Screen>
            <Stack.Screen name="Main" component={MainNavigator}></Stack.Screen>
            <Stack.Screen name="Shopping" component={ShoppingNavigation}></Stack.Screen>
            <Stack.Screen name="UserProfile" component={ProfileNavigation}></Stack.Screen>
        </Stack.Navigator>
    )
}