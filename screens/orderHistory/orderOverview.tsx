import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { IOrderOverview } from '../../assets/data/model';

interface Props {
    order: IOrderOverview,
    onPressed: Function
}

const OrderOverview = ({order, onPressed}: Props) => {
    const labels = [order.shippedFrom, order.deliveryAddress];
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
          <Text style={{textAlign: 'left', color: '#5e6c75', paddingStart: 16,}}>{label}</Text>
        );
      };

    return (
        <Pressable
            onPress={() => onPressed(order) }>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.deliveryTime}>{order.deliveryTime}</Text>
                    <Text style={styles.amount}>${order.amount}</Text>
                </View>
                <View style={{paddingHorizontal: 16}}>
                    <StepIndicator
                        stepCount={2}
                        direction={'vertical'}
                        customStyles={customStyles}
                        currentPosition={0}
                        renderLabel={renderLabel}
                        labels={labels}/>
                </View>
                <View style={styles.items}>
                    <MaterialCommunityIcons name="clipboard-list-outline" size={18} color="black" />
                    <Text style={styles.itemsDescription}>{order.items}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.orderAgainBtn}>{order.status}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default OrderOverview;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderTopColor: '#f5f6f7',
        borderTopWidth: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    deliveryTime: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    amount: {
        fontSize: 16,
    },
    items: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center'
    },
    itemsDescription: {
        marginLeft: 6,
    },
    footer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#f5f6f7',
    },
    orderAgainBtn: {
        fontSize: 14,
        color: '#e61e1b',
    }
})