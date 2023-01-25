import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackList } from "../../types";
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ListRenderItem, Pressable, FlatList, Modal } from 'react-native';
import Screen from "../../components/Screen";
import { Entypo } from "@expo/vector-icons";
import { favorites } from "../../assets/data/mock";
import ProductCard from "../home/ProductCard";
import { IProduct } from "../../assets/data/model";
import { StackActions, useTheme } from "@react-navigation/native";

interface Props {
    navigation: StackNavigationProp<MainStackList, 'Profile'>
}

export default function Profile({ navigation }: Props) {

    const [modalVisible, setModalVisible] = useState(false);
    const { colors } = useTheme();

    const renderProduct: ListRenderItem<IProduct> = ({ item }) => {
        return <ProductCard product={item} />
    }

    const navigateTo = (route: string) => {
        (navigation as any).navigate('UserProfile', { screen: route })
    }

    const logout = () => {
        setModalVisible(false);
        navigation.dispatch(StackActions.popToTop());
    }

    return (
        <Screen scroll={true} style={styles.screen}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure you want to logout?</Text>
                        <View style={styles.buttonRow}>
                            <Pressable
                                style={[styles.button, styles.secondaryButton]}
                                onPress={logout}
                            >
                                <Text style={styles.buttonText}>Confirm Logout</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, { backgroundColor: colors.primary }]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.primaryButtonText}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('./../../assets/images/beautiful-smiling-girl.png')} />
            </View>
            <Text style={styles.username}>Victoria Petrova</Text>
            <View style={styles.headingRow}>
                <Text style={styles.heading}>Favourites (12)</Text>
                <Entypo name="chevron-right" size={22} color="grey" />
            </View>
            <FlatList
                style={styles.favoritesList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={favorites}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()} />
            <Pressable
                style={styles.profileItem}
                onPress={() => { navigateTo('OrderHistory') }}>
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>Order History</Text>
                    <Entypo name="chevron-right" size={22} color="grey" />
                </View>
            </Pressable>
            <Pressable
                style={styles.profileItem}
                onPress={() => { navigateTo('Addresses') }}>
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>My Addresses</Text>
                    <Entypo name="chevron-right" size={22} color="grey" />
                </View>
            </Pressable>
            <Pressable
                style={styles.profileItem}
                onPress={() => { navigateTo('PersonalInfo') }}>
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>Personal Info</Text>
                    <Entypo name="chevron-right" size={22} color="grey" />
                </View>
            </Pressable>
            <Pressable
                style={styles.profileItem}
                onPress={() => setModalVisible(true)}>
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>Logout</Text>
                    <Entypo name="chevron-right" size={22} color="grey" />
                </View>
            </Pressable>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 24,
        flex: 1,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 90,
    },
    username: {
        color: '#1F1F26',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 16,
    },
    headingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    heading: {
        fontSize: 16,
        color: '#1F1F26',
        fontWeight: 'bold',
    },
    favoritesList: {
        marginVertical: 24,
    },
    profileItem: {
        marginBottom: 24,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        borderRadius: 6,
        padding: 10,
        marginStart: 12,
    },
    secondaryButton: {
        backgroundColor: '#1F1F26',
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    primaryButtonText: {
        fontWeight: 'bold',
        color: '#000'
    }
})