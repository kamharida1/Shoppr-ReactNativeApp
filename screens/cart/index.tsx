import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackList } from "../../types";
import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useAppSelector } from "../../hooks";
import { selectCartItems } from "../../redux/selectors";
import AppStyles from "../../styles";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import CartProductItem from "./cartProduct";
import Screen from "../../components/Screen";

interface Props {
    navigation: StackNavigationProp<MainStackList, 'Cart'>
}

export default function Cart({ navigation }: Props) {

    const cartProducts = useAppSelector(selectCartItems)
    const { colors } = useTheme();

    if (!cartProducts.length) {
        return (
            <View style={styles.emptyWrapper}>
                <Image style={styles.emptyImage} source={require('./../../assets/icons/box.png')} />
                <Text style={styles.emptyText}>You don't have any items in your cart</Text>
                <Pressable
                    style={[AppStyles.button, AppStyles.topspace, { backgroundColor: colors.primary }]}
                    onPress={() => navigation.navigate('Home')}>
                    <Text>Continue Shopping</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <Screen scroll={true} style={styles.cartWrapper}>
            <Text style={styles.cartItemsCount}>{cartProducts.length} Items in cart</Text>
            {
                cartProducts.map((product) => <CartProductItem product={product} key={product.id} />)
            }
            <Pressable
                style={[AppStyles.button, styles.secondaryButton]}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Text style={styles.secondaryButtonText}>Continue Shopping</Text>
            </Pressable>

            <Pressable
                style={[AppStyles.button, AppStyles.topspace, { backgroundColor: colors.primary }]}>
                <Text style={styles.secondaryButtonText}>Checkout</Text>
            </Pressable>
        </Screen>
    )
}

const styles = StyleSheet.create({
    emptyWrapper: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyImage: {
        width: 100,
        height: 100,
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        paddingHorizontal: 16,
        textAlign: 'center',
    },
    cartWrapper: {
        flex: 1,
        padding: 16,
        marginTop: 24,
    },
    cartItemsCount: {
        color: '#1F1F26',
        fontSize: 20,
        fontWeight: 'bold'
    },
    secondaryButton: {
        elevation: 0,
        borderWidth: 1,
        marginTop: 24,
        flexDirection: 'row'
    },
    secondaryButtonText: {
        fontWeight: 'bold',
        marginStart: 8,
    }
})