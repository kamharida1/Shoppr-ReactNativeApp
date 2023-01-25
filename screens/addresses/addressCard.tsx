import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IAddress } from '../../assets/data/model';

interface Props {
    address: IAddress
}

const AddressCard = ({ address }: Props) => {

    const { colors } = useTheme();

    return (
        <View style={[styles.container, address.selected ? { borderColor: colors.primary } : {}]}>
            <View style={styles.address}>
                <Text>{address.houseNo}, {address.street}</Text>
                {address.landmark && <Text>Landmark: {address.landmark}</Text>}
                <Text>{address.state} - {address.zipcode}</Text>
            </View>
            {address.selected ?
                <Ionicons name="checkmark-circle-sharp" size={24} color={colors.primary} /> :
                <Ionicons name="checkmark-circle-outline" size={24} color="black" />
            }
        </View>
    )
}

export default AddressCard;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#F1EFF5',
        borderRadius: 6,
        marginBottom: 16,
    },
    address: {
        flex: 1,
    }
})