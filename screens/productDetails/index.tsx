import { StackNavigationProp } from "@react-navigation/stack";
import { ShoppingStackList } from "../../types";
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Screen from "../../components/Screen";
import StarRating from 'react-native-star-rating';
import { useTheme } from "@react-navigation/native";
import SelectableButton from "../../components/SelectableButtone";
import AppStyles from "../../styles";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useAppDispatch } from "../../hooks";
import { newProducts } from "../../assets/data/mock";
import { addToCart, CartProduct } from "../../redux/cart/cartSlicer";

interface Props {
    navigation: StackNavigationProp<ShoppingStackList, 'ProductDetails'>
}

export default function ProductDetails({ navigation }: Props) {

    const { colors } = useTheme()
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const dispatch = useAppDispatch()

    const navigateToCart = () => {
        const product: CartProduct = {
            ...newProducts.products[0],
            id: Math.floor(Math.random() * 100),
            quantity: 1,
            discount: 0,
            total: newProducts.products[0].amount,
            size: selectedSize,
        };
        dispatch(addToCart(product));
        (navigation as any).navigate('Main', { screen: 'Cart' })
    }

    return (
        <Screen scroll={true} style={styles.screen}>
            <Image
                style={[styles.image]}
                source={require('./../../assets/images/product-img-01.png')} />
            <View style={styles.container}>
                <Text style={styles.productName}>T-shirt oversize</Text>
                <View style={styles.row}>
                    <Text style={styles.price}>4200</Text>
                    <StarRating
                        starSize={20}
                        starStyle={styles.starStyle}
                        fullStarColor={colors.primary}
                        disabled={true}
                        maxStars={5}
                        rating={3.5} />
                    <Text style={styles.rateText}>(4)</Text>
                </View>
                <View style={[styles.row, AppStyles.topspace]}>
                    {sizes.map((size) => (
                        <SelectableButton
                            key={size}
                            name={size}
                            selected={selectedSize === size}
                            onPress={() => { setSelectedSize(size) }} />
                    ))}
                </View>
                <View style={[styles.spec, AppStyles.topspace]}>
                    <Text style={styles.specTitle}>Gender</Text>
                    <Text style={styles.specDetails}>Women</Text>
                </View>
                <View style={styles.spec}>
                    <Text style={styles.specTitle}>Cloth</Text>
                    <Text style={styles.specDetails}>Silk</Text>
                </View>
                <View style={styles.spec}>
                    <Text style={styles.specTitle}>Season</Text>
                    <Text style={styles.specDetails}>Demi</Text>
                </View>
                <View style={styles.reviews}>
                    <Text style={styles.reviewHeading}>Reviews (5)</Text>
                    <Entypo name="chevron-right" size={22} color="grey" />
                </View>
                <Pressable
                    onPress={navigateToCart}
                    style={[AppStyles.button, { backgroundColor: colors.primary }, AppStyles.topspace]}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add to Cart</Text>
                        <AntDesign name="arrowright" size={24} color="black" />
                    </View>
                </Pressable>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
    },
    image: {
        width: '100%'
    },
    container: {
        padding: 16,
    },
    productName: {
        color: '#1F1F26',
        fontWeight: 'bold',
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        color: '#1F1F26',
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
    },
    starStyle: {
        marginHorizontal: 2,
    },
    rateText: {
        marginStart: 4,
    },
    spec: {
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F1EFF5',
    },
    specTitle: {
        color: '#85838E',
        fontSize: 14,
    },
    specDetails: {
        color: '#1F1F26',
        fontSize: 16,
    },
    reviews: {
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewHeading: {
        fontSize: 16,
    },
    button: {
        flexDirection: 'row',
    },
    buttonText: {
        marginRight: 8,
    }
})