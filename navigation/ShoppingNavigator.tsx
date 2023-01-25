import { createStackNavigator } from "@react-navigation/stack";
import { ShoppingStackList } from "../types";
import React from 'react'
import CatelogueDetails from "../screens/catelogueDetails";
import Filter from "../screens/filter";
import FilterCustom from "../screens/filterCustom";
import ProductDetails from "../screens/productDetails";

const ShoppingStack = createStackNavigator<ShoppingStackList>()

export default function ShoppingNavigation() {
    return (
        <ShoppingStack.Navigator>
            <ShoppingStack.Screen name="Catalogue" component={CatelogueDetails}></ShoppingStack.Screen>
            <ShoppingStack.Screen name="Filter" component={Filter} options={{ headerTitleAlign: 'center' }}></ShoppingStack.Screen>
            <ShoppingStack.Screen name="CustomFilter" component={FilterCustom} options={{ headerTitleAlign: 'center' }}></ShoppingStack.Screen>
            <ShoppingStack.Screen name="ProductDetails" component={ProductDetails} options={{ headerTransparent: true, headerTitle: '' }}></ShoppingStack.Screen>
        </ShoppingStack.Navigator>
    )
}