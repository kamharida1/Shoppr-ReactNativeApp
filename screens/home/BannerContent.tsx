import { useTheme } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const BannerContent = () => {

    const { colors } = useTheme();

    return (
        <View>
            <Image
                style={styles.image}
                source={require('./../../assets/icons/banner_image.png')} />
            <View style={styles.bannerText}>
                <Text style={styles.bannerTitle}>The New Summer Collection</Text>
                <View style={styles.bannerFooter}>
                    <Text style={styles.bannerSubtitle}>The New Summer Collection</Text>
                    <Pressable style={[styles.button, { backgroundColor: colors.primary }]}>
                        <Text>See more</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%'
    },
    bannerText: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
    },
    bannerTitle: {
        fontSize: 28,
        color: 'white',
    },
    bannerSubtitle: {
        color: 'white',
        fontSize: 16,
        marginVertical: 8,
        flex: 1,
    },
    button: {
        borderRadius: 6,
        right: 0,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    bannerFooter: {
        flex: 1,
        flexDirection: 'row',
    }
})

export default BannerContent