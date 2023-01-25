import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { OnBoardingStackList } from '../../types';
import Screen from '../../components/Screen'
import { useTheme } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';
import { ErrorText } from '../../components/ErrorText';

interface Props {
    navigation: StackNavigationProp<OnBoardingStackList, 'Login'>
}

export default function Login({ navigation }: Props) {

    const { colors } = useTheme();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        }
    });
    const onSubmit = async (data: any) => {
        (navigation as any).navigate('Main', { screen: 'Home' })
    }

    const navigateToRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.row}>
                <AntDesign name="mail" size={20} color="black" />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Email"
                            value={value}
                            keyboardType='email-address'
                        />
                    )}
                    name="identifier" />
            </View>
            {errors.identifier && <ErrorText>Email is required.</ErrorText>}
            <View style={[styles.row, styles.topspace]}>
                <Ionicons name="key-outline" size={20} color="black" />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            textContentType="password"
                            placeholder="Password"
                            secureTextEntry={true} />
                    )}
                    name="password" />
            </View>
            {errors.password && <ErrorText>Password is required</ErrorText>}
            <Pressable
                style={[styles.topspace, styles.button, { backgroundColor: colors.primary }]}
                android_ripple={{ color: colors.border }}
                onPress={handleSubmit(onSubmit)}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
            <View style={styles.registerWrapper}>
                <Text>Don't have an account?</Text>
                <Pressable style={styles.registerButton} onPress={navigateToRegister}>
                    <Text style={[styles.registerButtonText, { borderBottomColor: colors.primary }]}>Register Now</Text>
                </Pressable>
            </View>
        </Screen >
    )
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        paddingStart: 16,
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#F1EFF5',
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center'
    },
    topspace: {
        marginTop: 24,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: '#000',
    },
    registerWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 24,
    },
    registerButton: {
        marginTop: 6,
    },
    registerButtonText: {
        fontSize: 16,
        borderBottomWidth: 1,
    }
})