import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Pressable, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";;

interface Props {
    name: string,
    selected: boolean,
    style?: StyleProp<ViewStyle>
    onPress: Function
}

const SelectableButton = ({ name, selected, style, onPress }: Props) => {
    const { colors } = useTheme();
    return (<Pressable
        style={[styles.button, selected && { backgroundColor: colors.primary }, style]}
        onPress={() => onPress()}>
        <Text>{name}</Text>
    </Pressable>)
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F1EFF5',
        paddingHorizontal: 24,
        paddingVertical: 12,
        marginEnd: 12,
        borderRadius: 100,
    }
})

export default SelectableButton