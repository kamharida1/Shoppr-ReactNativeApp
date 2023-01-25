import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { View, StyleSheet, Image, Text, Pressable } from "react-native"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { CartProduct, removeProduct, updateQuantity } from "../../redux/cart/cartSlicer"

interface Props {
    product: CartProduct
}

const CartProductItem = ({ product }: Props) => {

    const dispatch = useAppDispatch()

    const incrementProductCount = () => {
        dispatch(updateQuantity({ id: product.id, quantity: product.quantity + 1 }))
    }

    const decrementProductCount = () => {
        const quantity = product.quantity - 1
        if (quantity > 0) {
            dispatch(updateQuantity({ id: product.id, quantity: quantity }))
        } else {
            removeProductFromCart();
        }
    }

    const removeProductFromCart = () => {
        dispatch(removeProduct({ id: product.id }))
    }

    return (
        <View style={styles.row}>
            <View style={[styles.background, { backgroundColor: product.background }]}>
                <Image source={product.image} style={styles.image} />
            </View>
            <View style={[styles.column, styles.detailsColumn]}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.variant}>Size {product.size}</Text>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.cartButton} onPress={decrementProductCount}>
                        <Text style={styles.cartButtonText}>-</Text>
                    </Pressable>
                    <Text style={styles.cartQuantityText}>{product.quantity}</Text>
                    <Pressable style={styles.cartButton} onPress={incrementProductCount}>
                        <Text style={styles.cartButtonText}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.column}>
                <Pressable onPress={removeProductFromCart}>
                    <AntDesign name="delete" size={24} color="red" />
                </Pressable>
                <Text style={styles.price}>{product.total}</Text>
            </View>
        </View>
    )
}

export default CartProductItem

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginVertical: 16,
    },
    background: {
        width: 90,
        height: 90,
        borderRadius: 24,
    },
    image: {
        position: 'absolute',
        width: 90,
        height: 90,
    },
    column: {
        flexDirection: 'column',
    },
    detailsColumn: {
        marginHorizontal: 8,
        flex: 1,
    },
    name: {
        color: '#1F1F26',
        fontWeight: 'bold',
        fontSize: 16,
    },
    variant: {
        fontSize: 14,
        marginVertical: 4,
        color: '#85838E'
    },
    buttonRow: {
        flexDirection: 'row',
        marginVertical: 8,
    },
    cartButton: {
        width: 32,
        height: 32,
        backgroundColor: '#F1EFF5',
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartButtonText: {
        fontSize: 16,
    },
    cartQuantityText: {
        marginHorizontal: 12,
        fontSize: 16,
        fontWeight: 'bold'
    },
    price: {
        marginTop: 32,
        color: '#1F1F26',
        fontSize: 16,
        fontWeight: 'bold'
    }
})