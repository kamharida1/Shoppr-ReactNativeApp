import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, View, Text, Pressable } from 'react-native'
import { IProduct } from '../../assets/data/model';
import { ShoppingStackList } from '../../types';

interface Props {
    product: IProduct
}

type ProductScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<ShoppingStackList, 'ProductDetails'>,
    StackNavigationProp<ShoppingStackList>
>;

const ProductCard = ({ product }: Props) => {

    const navigation = useNavigation()

    const navigateToDetails = () => {
        (navigation as any).navigate('Shopping', { screen: 'ProductDetails' })
    }

    return (
        <Pressable onPress={navigateToDetails}>
            <View style={styles.container}>
                <View style={[styles.background, { backgroundColor: product.background }]}>
                    <Image source={product.image} style={styles.image} />
                </View>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.amount}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 160,
        marginStart: 16,
    },
    background: {
        width: 160,
        height: 160,
        borderRadius: 24,
    },
    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        marginTop: 4,
    }
});

export default ProductCard