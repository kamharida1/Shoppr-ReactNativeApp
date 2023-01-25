import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, StyleSheet, View, Text, Pressable } from 'react-native'
import { ICatelogue, IProduct } from '../../assets/data/model'

interface Props {
    catelogue: ICatelogue
}

const CatelogueCard = ({ catelogue }: Props) => {

    const navigation = useNavigation();

    return (
        <Pressable onPress={() => (navigation as any).navigate('Shopping', { screen: 'Story' }) }>
            <View style={styles.container}>
                <Image source={catelogue.image} style={styles.image} />
                <Text style={styles.name}>{catelogue.name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 180,
        marginStart: 16,
        borderRadius: 16,
    },
    image: {
        width: 180,
        borderRadius: 16,
        height: undefined,
        aspectRatio: 1,
    },
    name: {
        position: 'absolute',
        bottom: 12,
        left: 12,
        right: 12,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
        color: 'white',
    },
});

export default CatelogueCard