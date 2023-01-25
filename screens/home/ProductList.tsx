import React from 'react'
import { StyleSheet, View, Text, FlatList, ListRenderItem } from 'react-native'
import { IProduct, IProductList } from '../../assets/data/model'
import ProductCard from './ProductCard'


const ProductList = ({ title, products }: IProductList) => {

    const renderProduct: ListRenderItem<IProduct> = ({ item }) => {
        return <ProductCard product={item} />
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.header}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                horizontal={true}
                data={products}
                keyExtractor={(item, i) => item.id.toString()}
                renderItem={renderProduct}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        padding: 16,
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default ProductList