import { ImageSourcePropType } from "react-native"

export interface IProduct {
    id: number;
    background: string;
    image: ImageSourcePropType;
    name: string;
    amount: number;
}

export interface ICatelogue {
    id: number;
    name: string;
    image: ImageSourcePropType;
}

export interface IProductList {
    title: string;
    products: IProduct[];
}

export interface ICatelogueGroup {
    id: number;
    name: string;
}

export interface ICatelogueItem {
    id: number;
    image: ImageSourcePropType;
    name: string;
    description: string;
}

export interface ICatelogueProduct {
    id: number;
    image: ImageSourcePropType;
    name: string;
    price: number;
}

export interface IFilterItem {
    id: number;
    name: string;
    selected?: boolean;
    color?: string;
    image?: string;
}

export interface IOrderOverview {
    orderId: string;
    deliveryTime: string;
    amount: number;
    shippedFrom: string;
    deliveryAddress: string;
    items: string;
    status: string;
}

export interface IOrderedItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
    total: number;
}

export interface ITimeline {
    label: string;
    details: string;
}

export interface IOrderDetails {
    orderId: string;
    items: IOrderedItem[];
    total: number;
    discount: number;
    deliveryCharges: number;
    netTotal: number;
    paymentMethod: string;
    timelines: ITimeline[];
    currentTimeline: number;
}

export interface IAddress {
    id: number;
    houseNo: string;
    street: string;
    landmark: string;
    state: string;
    zipcode: string;
    selected: boolean;
}