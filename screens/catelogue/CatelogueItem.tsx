import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { ICatelogueItem } from "../../assets/data/model";

interface Props {
    catelogue: ICatelogueItem,
}

const CatelogueItem = ({ catelogue }: Props) => {

    const navigation = useNavigation();

    return (
        <Pressable
            style={[styles.button]}
            onPress={() => (navigation as any).navigate('Shopping', {
                screen: 'Catalogue', params: {
                    name: catelogue.name, id: catelogue.id
                }
            })}>
            <View style={styles.row}>
                <View style={styles.imageBackground}>
                    <Image source={catelogue.image} style={styles.image} />
                </View>
                <View style={styles.column}>
                    <Text style={styles.name}>{catelogue.name}</Text>
                    <Text style={styles.description}>{catelogue.description}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    imageBackground: {
        width: 80,
        height: 80,
        backgroundColor: '#F1EFF5',
        borderRadius: 16,
        marginEnd: 16,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 16,
    },
    description: {
        fontSize: 16,
        color: '#85838E',
        marginTop: 4,
    }
})

export default CatelogueItem