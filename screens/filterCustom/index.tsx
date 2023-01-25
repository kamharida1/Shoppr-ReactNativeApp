import { CompositeNavigationProp, RouteProp, useTheme } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React, { useEffect, useState } from "react"
import { Text, FlatList, ListRenderItem, Pressable, View } from "react-native"
import { IFilterItem } from "../../assets/data/model"
import { useAppDispatch } from "../../hooks"
import { updatedFilters } from "../../redux/filter/filterSlice"
import AppStyles from "../../styles"
import { ShoppingStackList } from "../../types"
import CustomFilterItem from "./CustomFilterItem"

type FilterCustomRouteProp = RouteProp<ShoppingStackList, 'CustomFilter'>

type FilterCustomProp = CompositeNavigationProp<
    StackNavigationProp<ShoppingStackList, 'CustomFilter'>,
    StackNavigationProp<ShoppingStackList>
>

interface Props {
    navigation: FilterCustomProp,
    route: FilterCustomRouteProp,
}

const FilterCustom = ({ route, navigation }: Props) => {

    const [filterList, setFilterList] = useState<IFilterItem[]>([]);
    const { colors } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: route.params.title
        })
        setFilterList([...route.params.filter])
    }, []);

    const onSelectionChange = (id: number) => {
        setFilterList(filterList.map(item => (item.id === id) ?
            { ...item, selected: !!!item.selected }
            : { ...item }
        ));
    }

    const navigateWithParams = () => {
        dispatch(
            updatedFilters(
                { title: route.params.title, filters: filterList }
            )
        );
        (navigation as any).navigate({
            name: 'Filter',
            merge: true
        });
    }

    const renderFilterItem: ListRenderItem<IFilterItem> = ({ item }) => {
        return <CustomFilterItem filter={item} onSelectionChange={onSelectionChange} />
    }

    return (
        <View>
            <FlatList
                renderItem={renderFilterItem}
                keyExtractor={(item) => item.id.toString()}
                data={filterList} />
            <Pressable
                style={[AppStyles.button, { margin: 16, backgroundColor: colors.primary }]}
                onPress={navigateWithParams}>
                <Text>Select Filter</Text>
            </Pressable>
        </View>
    )
}

export default FilterCustom;