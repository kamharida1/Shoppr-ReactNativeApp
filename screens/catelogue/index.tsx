import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackList } from "../../types";
import React from 'react'
import { View, StyleSheet, TextInput, FlatList, ListRenderItem } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import AppStyles from "../../styles";
import { catelogueList } from "../../assets/data/mock";
import CatelogueItem from "./CatelogueItem";
import SelectableButton from "../../components/SelectableButtone";
import { useAppSelector } from "../../hooks";
import { selectGenderFilters } from "../../redux/selectors";
import { ICatelogueGroup, ICatelogueItem } from "../../assets/data/model";

interface Props {
    navigation: StackNavigationProp<MainStackList, 'Catalogue'>
}

export default function Catelogue({ navigation }: Props) {

    const genderFilterList = useAppSelector(selectGenderFilters)

    const renderCatelogueButton: ListRenderItem<ICatelogueGroup> = ({ item }) => {
        return <SelectableButton name={item.name} selected={item.id === 1} onPress={() => { }} />
    }

    const renderCatelogueItem: ListRenderItem<ICatelogueItem> = ({ item }) => {
        return <CatelogueItem catelogue={item} />
    }

    return (
        <View style={styles.screen}>
            <View style={AppStyles.inputContainer}>
                <AntDesign name="search1" size={20} color="black" />
                <TextInput
                    style={AppStyles.inputWithBackground}
                    placeholder="Search in Catalogue" />
            </View>
            <FlatList
                style={styles.buttonList}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                horizontal={true}
                data={genderFilterList}
                keyExtractor={(item, i) => item.id.toString()}
                renderItem={renderCatelogueButton}>
            </FlatList>
            <FlatList
                style={styles.buttonList}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={catelogueList}
                keyExtractor={(item, i) => item.id.toString()}
                renderItem={renderCatelogueItem}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 56,
        paddingHorizontal: 16,
        flex: 1,
    },
    buttonList: {
        marginTop: 24,
    }
})