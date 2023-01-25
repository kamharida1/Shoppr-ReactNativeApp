import { Entypo } from "@expo/vector-icons";
import { CompositeNavigationProp, RouteProp, useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { IFilterItem } from "../../assets/data/model";
import Screen from "../../components/Screen";
import SelectableButton from "../../components/SelectableButtone";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateFilterSelection } from "../../redux/filter/filterSlice";
import { selectFilters, selectNonExpandedFilters } from "../../redux/selectors";
import AppStyles from "../../styles";
import { ShoppingStackList } from "../../types";

type FilterRouteProp = RouteProp<ShoppingStackList, 'Filter'>
type FilterNavProp = CompositeNavigationProp<
    StackNavigationProp<ShoppingStackList, 'Filter'>,
    StackNavigationProp<ShoppingStackList>
>
interface Props {
    navigation: FilterNavProp,
    route: FilterRouteProp
}

const Filter = ({ route, navigation }: Props) => {

    const filters = useAppSelector(selectFilters);
    const nonExpandedfilters = useAppSelector(selectNonExpandedFilters);
    const { colors } = useTheme();
    const dispatch = useAppDispatch();

    const renderSelectedItems = (items: IFilterItem[]) => {
        return items.filter((item) => item.selected).map((item) => item.name).join(', ')
    }

    const dispatchSelection = (title: string, filterId: number) => {
        dispatch(updateFilterSelection({ title, filterId }));
    }

    return (
        <Screen scroll={true} style={styles.screen}>
            {nonExpandedfilters?.map((item) => (
                <View key={item.title}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.list}>
                        {item.filters.map((filter) => (
                            <SelectableButton
                                name={filter.name} selected={filter.selected || false}
                                onPress={() => dispatchSelection(item.title, filter.id)} />
                        ))}
                    </View>
                </View>
            ))}
            {filters?.length && filters.map((item) => (
                <Pressable
                    onPress={() => { navigation.navigate('CustomFilter', { id: 1, filter: item.filters, title: item.title }) }}
                    key={item.title}>
                    <View style={styles.navRow}>
                        <View style={styles.column}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.filter}>{renderSelectedItems(item.filters)}</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="black" style={styles.rightSpace} />
                    </View>
                </Pressable>
            ))}
            <Pressable
                style={[AppStyles.button, styles.button, { backgroundColor: colors.primary }]}
                onPress={() => { navigation.goBack() }}>
                <Text>Apply Filters</Text>
            </Pressable>
        </Screen>
    )
}

export default Filter;

const styles = StyleSheet.create({
    screen: {
        padding: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 12,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 12,
    },
    navRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 36,
        alignItems: 'center',
        marginTop: 32,
    },
    column: {
        flexDirection: 'column',
    },
    rightSpace: {
        marginRight: 16,
    },
    filter: {
        color: '#85838E',
    },
    button: {
        marginHorizontal: 16,
        marginVertical: 24,
    }
})