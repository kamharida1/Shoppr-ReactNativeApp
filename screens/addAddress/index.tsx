import { useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, View, StyleSheet, Switch, Text, TouchableNativeFeedback, Pressable } from 'react-native';
import { ErrorText } from '../../components/ErrorText';
import Screen from '../../components/Screen';
import AppStyles from '../../styles';
import { ProfileStackList } from '../../types';

interface Props {
    navigation: StackNavigationProp<ProfileStackList, 'AddAddress'>
}

export default function AddAddress({ navigation }: Props) {

    const { colors } = useTheme();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            houseNo: '',
            street: '',
            landmark: '',
            state: '',
            zipcode: '',
            selected: false,
        }
    });

    const onSubmit = async (data: any) => {
        console.log(data);
        navigation.goBack();
    }

    return (
        <Screen style={AppStyles.screen}>
            <View style={styles.row}>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={AppStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Hose No."
                            value={value}
                            keyboardType="default"
                        />
                    )}
                    name="houseNo" />
            </View>
            {errors.houseNo && <ErrorText>House number is required.</ErrorText>}
            <View style={[styles.row, styles.topspace]}>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={AppStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Street name"
                            value={value}
                            keyboardType="default"
                        />
                    )}
                    name="street" />
            </View>
            {errors.street && <ErrorText>Street name is required.</ErrorText>}
            <View style={[styles.row, styles.topspace]}>
                <Controller
                    control={control}
                    rules={{
                        required: false
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={AppStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Landmark"
                            value={value}
                            keyboardType="default"
                        />
                    )}
                    name="landmark" />
            </View>
            <View style={[styles.row, styles.topspace]}>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={AppStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="State"
                            value={value}
                            keyboardType="default"
                        />
                    )}
                    name="state" />
            </View>
            {errors.state && <ErrorText>State name is required.</ErrorText>}
            <View style={[styles.row, styles.topspace]}>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={AppStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Zipcode"
                            value={value}
                            keyboardType="default"
                        />
                    )}
                    name="zipcode" />
            </View>
            {errors.zipcode && <ErrorText>Zipcode is required.</ErrorText>}
            <Controller
                control={control}
                rules={{
                    required: false
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={[styles.container, styles.topspace]}>
                        <Text style={styles.switchRow}>Mark this as my default address</Text>
                        <Switch
                            trackColor={{ false: "#d0d3d6", true: colors.primary }}
                            thumbColor={value ? colors.primary : '#8c9ba5'}
                            onValueChange={onChange}
                            value={value} />
                    </View>
                )}
                name="selected" />
            <Pressable
                style={[styles.button, { backgroundColor: colors.primary }]}
                onPress={handleSubmit(onSubmit)}
                android_ripple={{ color: colors.border }}>
                <Text
                    style={styles.buttonText}>Add Address</Text>
            </Pressable>
        </Screen>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        backgroundColor: '#F1EFF5',
        padding: 12,
        borderRadius: 16,
        alignItems: 'center'
    },
    topspace: {
        marginTop: 24,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    switchRow: {
        flex: 1
    },
    button: {
        padding: 12,
        marginTop: 24,
    },
    buttonText: {
        textAlign: 'center',
        color: '#000',
    }
})