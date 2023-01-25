import React, { useState } from 'react'
import { StackNavigationProp } from "@react-navigation/stack";
import Screen from "../../components/Screen";
import { MainStackList } from "../../types";
import { View, Text, Switch, StyleSheet, ListRenderItem, FlatList } from 'react-native';
import OrderOverview from './orderOverview';
import { orderOverviewList } from '../../assets/data/mock';
import { IOrderOverview } from '../../assets/data/model';

interface Props {
    navigation: StackNavigationProp<MainStackList, 'Profile'>
}

export default function OrderHistory({ navigation }: Props) {

    const [isCancelled, setIsCancelled] = useState(false);

    const navigateToDetails = (order: IOrderOverview) => {
        (navigation as any).navigate('UserProfile', {
            screen: 'OrderDetails',
            params: {
                id: order.orderId
            }
        })
    }

    const renderOrderOverview: ListRenderItem<IOrderOverview> = ({ item }) => {
        return <OrderOverview order={item} onPressed={navigateToDetails} />
    }

    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.cancelRow}>Show Cancelled Orders</Text>
                <Switch
                    trackColor={{ false: "#d0d3d6", true: "#d0d3d6" }}
                    thumbColor={'#8c9ba5'}
                    onValueChange={setIsCancelled}
                    value={isCancelled} />
            </View>
            <FlatList
                style={styles.orderList}
                scrollEnabled={true}
                data={orderOverviewList}
                keyExtractor={(item, _) => item.orderId}
                renderItem={renderOrderOverview} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    cancelRow: {
        flex: 1
    },
    orderList: {
        marginBottom: 50
    }
})