import { useTheme } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { useEffect } from 'react'
import { Image, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Screen from '../../components/Screen'
import { OnBoardingStackList } from '../../types'

interface Props {
    navigation: StackNavigationProp<OnBoardingStackList, 'Splash'>
}

export default function Splash({ navigation }: Props) {

    const { colors } = useTheme();
    useEffect(() => {
        const checkStorage = async () => {
            navigation.replace('Login')
        }
        checkStorage();
    }, [])

    return (
        <Screen style={styles.screen}>
            <Image style={styles.logo}
                source={require('./../../assets/icons/logo.png')}></Image>
            <Text style={styles.appname}>Shoppr</Text>
            <ActivityIndicator size="large" color={colors.primary} />
        </Screen >
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    appname: {
        fontSize: 25,
        paddingTop: 24,
        paddingBottom: 24,
        fontWeight: 'bold',
        color: '#000'
    }
});