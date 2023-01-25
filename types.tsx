import { IFilterItem } from "./assets/data/model"

export type NO_PARAMS = undefined

export type CATELOGUE_DETAILS = {
    name: string
    id: number
}

export type PRODUCT_DETAILS = {
    id: number
}

export type ORDER_DETAILS = {
    id: string
}

export type FILTER_PARAMS = {
    filter: number[]
}

export type FILTER_DETAILS = {
    id: number
    filter: IFilterItem[]
    title: string
}

export type RootStackParamList = {
    Root: NO_PARAMS
    Main: NO_PARAMS
    Shopping: NO_PARAMS
    NotFound: NO_PARAMS
    UserProfile: NO_PARAMS
}

export type OnBoardingStackList = {
    Splash: NO_PARAMS
    Login: NO_PARAMS
    Register: NO_PARAMS
}

export type MainStackList = {
    Home: NO_PARAMS
    Catalogue: NO_PARAMS
    Profile: NO_PARAMS
    Cart: NO_PARAMS
}

export type ShoppingStackList = {
    Catalogue: CATELOGUE_DETAILS
    Filter: FILTER_PARAMS | undefined
    CustomFilter: FILTER_DETAILS
    ProductDetails: PRODUCT_DETAILS
}

export type ProfileStackList = {
    OrderHistory: NO_PARAMS
    OrderDetails: ORDER_DETAILS
    Addresses: NO_PARAMS
    AddAddress: NO_PARAMS
    PersonalInfo: NO_PARAMS
}

