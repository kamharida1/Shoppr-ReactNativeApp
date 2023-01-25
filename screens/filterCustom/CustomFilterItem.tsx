import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { IFilterItem } from "../../assets/data/model";

interface Props {
    filter: IFilterItem;
    onSelectionChange: Function
}

const CustomFilterItem = ({ filter, onSelectionChange }: Props) => {

    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            {/* <View style={styles.imageBackground}>
                <Image style={styles.image} source={product.image}/>
            </View> */}
            <View style={[styles.colorBackground, { backgroundColor: filter.color }]}>
            </View>
            <Text style={styles.filter}>{filter.name}</Text>
            <CheckBox
                center
                checkedColor={colors.primary}
                checked={filter.selected}
                onPress={() => onSelectionChange(filter.id)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    imageBackground: {
        width: 164,
        height: 160,
        backgroundColor: '#F1EFF5',
        borderRadius: 15
    },
    colorBackground: {
        width: 12,
        height: 12,
        borderRadius: 12,
    },
    image: {
        width: 164,
        height: 160,
        resizeMode: 'contain',
    },
    filter: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
        marginLeft: 16,
    }
})

export default CustomFilterItem