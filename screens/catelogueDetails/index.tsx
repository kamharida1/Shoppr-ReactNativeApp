import { FontAwesome } from "@expo/vector-icons";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { catelogueProductList } from "../../assets/data/mock";
import Screen from "../../components/Screen";
import { ShoppingStackList } from "../../types";
import CatelogueProductCard from "./CatelogueProductCard";

type CatelogueRouteProp = RouteProp<ShoppingStackList, 'Catalogue'>

type CatelogueNavProp = CompositeNavigationProp<
    StackNavigationProp<ShoppingStackList, 'Catalogue'>,
    StackNavigationProp<ShoppingStackList>
>

interface Props {
    navigation: CatelogueNavProp,
    route: CatelogueRouteProp,
}

export default function CatelogueDetails({ route, navigation }: Props) {

    const { name, id } = route.params

    useEffect(() => {
        navigation.setOptions({
            headerTitle: name,
            headerTitleAlign: 'center',
            headerRight: () => (
                <View style={styles.headerButtons}>
                    <Pressable style={styles.sortButton} onPress={() => navigation.navigate('Filter')}>
                        <FontAwesome name="sort-amount-asc" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Filter')}>
                        <FontAwesome name="sliders" size={24} color="black" />
                    </Pressable>
                </View>
            )
        })
    }, [])

    return (
        <Screen scroll={true} style={styles.screen}>
            <View style={styles.container}>
                {catelogueProductList.map((item) => (
                    <CatelogueProductCard product={item} key={item.id} />
                ))}
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {

        paddingHorizontal: 16,
        paddingTop: 12,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    headerButtons: {
        flexDirection: 'row',
        marginRight: 16,
    },
    sortButton: {
        marginRight: 16,
    }
})