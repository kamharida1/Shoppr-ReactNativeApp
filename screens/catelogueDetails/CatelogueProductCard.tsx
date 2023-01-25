import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { ICatelogueProduct } from "../../assets/data/model";

interface Props {
    product: ICatelogueProduct;
}

const CatelogueProductCard = ({ product }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageBackground}>
                <Image style={styles.image} source={product.image} />
            </View>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 16,
        marginHorizontal: 8,
    },
    imageBackground: {
        width: 164,
        height: 160,
        backgroundColor: '#F1EFF5',
        borderRadius: 15
    },
    image: {
        width: 164,
        height: 160,
        resizeMode: 'contain',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        color: '#1F1F26',
        marginTop: 4,
    }
})

export default CatelogueProductCard