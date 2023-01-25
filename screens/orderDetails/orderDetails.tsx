import React, { useEffect } from 'react'
import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackList } from "../../types";
import { View, Text, StyleSheet, ListRenderItem, FlatList, Pressable } from 'react-native';
import Screen from "../../components/Screen";
import { CompositeNavigationProp, RouteProp, useTheme } from '@react-navigation/native';
import StepIndicator from 'react-native-step-indicator';
import { orderDetails } from '../../assets/data/mock';

type OrderDetailsRouteProp = RouteProp<ProfileStackList, 'OrderDetails'>

type OrderDetailsProp = CompositeNavigationProp<
    StackNavigationProp<ProfileStackList, 'OrderDetails'>,
    StackNavigationProp<ProfileStackList>
>

interface Props {
    navigation: OrderDetailsProp,
    route: OrderDetailsRouteProp,
}

export default function OrderDetails({ navigation, route }: Props) {

    const currnetOrder = orderDetails;

    const { colors } = useTheme();

    const labels = currnetOrder.timelines.map((timeline) => timeline.label);
    const details = currnetOrder.timelines.map((timeline) => timeline.details)
    const customStyles = {
        stepIndicatorSize: 12,
        currentStepIndicatorSize: 12,
        stepStrokeWidth: 0,
        currentStepStrokeWidth: 0,
        stepIndicatorFinishedColor: '#000',
        stepIndicatorCurrentColor: '#000',
        stepIndicatorUnFinishedColor: '#e83330',
        currentStepIndicatorLabelFontSize: 0,
        stepIndicatorLabelFontSize: 0,
        labelAlign: "flex-start" as 'flex-start',
        separatorUnFinishedColor: '#d0d3d6',
    };

    const renderLabel = ({
        position,
        label,
        currentPosition,
    }: {
        position: number;
        stepStatus: string;
        label: string;
        currentPosition: number;
    }) => {
        return (
            <View style={styles.labelContainer}>
                <Text style={styles.stepHeading}>{label}</Text>
                <Text style={styles.stepDetails}>{details[position]}</Text>
            </View>
        );
    };

    const renderOrderItem = (
        id: number,
        name: string,
        quantity: number,
        price: number,
        total: number,
    ) => {
        return (
            <View style={styles.itemContainer} key={id}>
                <View style={styles.column}>
                    <Text>{name}</Text>
                    <Text>Qty: {quantity}, Price: $ {price}</Text>
                </View>
                <Text>$ {total}</Text>
            </View>
        )
    }

    const renderPaymentItem = (
        name: string,
        detail: number | string
    ) => {
        return (
            <View style={styles.itemContainer}>
                <Text>{name}</Text>
                <Text>{typeof detail === 'number' ? '$ ' : ''}{detail}</Text>
            </View>
        )
    }


    useEffect(() => {
        navigation.setOptions({ headerTitle: `Order: ${route.params.id}` });
    }, []);

    return (
        <Screen scroll={true} style={styles.container}>
            <View style={styles.padding}>
                <Text style={styles.heading}>Timeline</Text>
                <StepIndicator
                    stepCount={labels.length}
                    direction={'vertical'}
                    customStyles={customStyles}
                    currentPosition={currnetOrder.currentTimeline}
                    renderLabel={renderLabel}
                    labels={labels} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.heading, styles.padding]}>Item Details</Text>
                {currnetOrder.items.map((item) => renderOrderItem(item.id, item.name, item.quantity, item.price, item.total))}
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.heading, styles.padding]}>Payment Details</Text>
                {renderPaymentItem('Total', currnetOrder.total)}
                {renderPaymentItem('Discount', currnetOrder.discount)}
                {renderPaymentItem('Net Total', currnetOrder.netTotal)}
                {renderPaymentItem('Payment Method', currnetOrder.paymentMethod)}
            </View>
            <View style={[styles.infoContainer, styles.buttonWrapper]}>
                <Pressable style={styles.cancelBtn}>
                    <Text style={styles.whiteText}>Cancel Order</Text>
                </Pressable>
                <Pressable style={[{ backgroundColor: colors.primary }, styles.secondaryBtn]}>
                    <Text style={styles.whiteText}>Rate Product</Text>
                </Pressable>
            </View>
        </Screen >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingStart: 0,
    },
    padding: {
        padding: 16,
    },
    paddingHorizontal: {
        paddingHorizontal: 16,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 16
    },
    labelContainer: {
        flexDirection: 'column',
        marginBottom: 16
    },
    stepHeading: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 4,
        textAlign: 'left',
        color: '#5e6c75',
        paddingStart: 16,
    },
    stepDetails: {
        textAlign: 'left',
        color: '#5e6c75',
        paddingStart: 16,
    },
    infoContainer: {
        flexDirection: 'column',
        borderTopColor: '#f5f6f7',
        borderTopWidth: 12,
        paddingBottom: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    column: {
        flexDirection: 'column'
    },
    buttonWrapper: {
        flexDirection: 'row',
        padding: 12,
        justifyContent: 'flex-end',
        marginBottom: 16
    },
    cancelBtn: {
        backgroundColor: '#cc0000',
        padding: 12,
        borderRadius: 4,
        marginEnd: 12
    },
    whiteText: {
        color: '#fff'
    },
    secondaryBtn: {
        padding: 12,
        borderRadius: 4
    }
});