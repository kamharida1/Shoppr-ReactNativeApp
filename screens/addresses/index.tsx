import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addressList } from '../../assets/data/mock';
import { IAddress } from '../../assets/data/model';
import Screen from '../../components/Screen';
import { ProfileStackList } from '../../types';
import AddressCard from './addressCard';

interface Props {
    navigation: StackNavigationProp<ProfileStackList, 'Addresses'>
}

export default function Addresses({ navigation }: Props) {

    const { colors } = useTheme();
    const [addresses, setAddress] = useState(addressList);

    const updateSelectedAddress = (item: IAddress) => {
        const updatedAddress = addresses.map((address) => ({
            ...address,
            selected: item.id === address.id
        }));
        setAddress(updatedAddress);
    }

    const renderAddress: ListRenderItem<IAddress> = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => updateSelectedAddress(item)}>
                <AddressCard address={item} />
            </TouchableOpacity>
        )
    }

    return (
        <Screen style={styles.container}>
            <FlatList
                scrollEnabled={true}
                data={addresses}
                keyExtractor={(item, i) => item.id.toString()}
                renderItem={renderAddress}
            />
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => alert('Your address is updated successfully.')}
                    style={[styles.primaryButton, { backgroundColor: colors.primary }]}>
                    <Text style={styles.primaryButtonText}>Update Default Address</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push('AddAddress')}
                    style={[styles.secondaryButton, { borderColor: colors.primary }]}>
                    <View style={styles.secondaryButtonRow}>
                        <Ionicons name="add" size={24} color="black" />
                        <Text style={styles.secondaryButtonText}>Add New Address</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    buttons: {
        flexDirection: 'column',
    },
    primaryButton: {
        borderRadius: 6,
        padding: 10,
        marginTop: 16,
    },
    primaryButtonText: {
        textAlign: 'center',
        color: '#000',
    },
    secondaryButton: {
        borderWidth: 2,
        borderRadius: 6,
        marginTop: 24,
        padding: 10,
    },
    secondaryButtonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryButtonText: {
        textAlign: 'center',
        color: '#000',
    },
})