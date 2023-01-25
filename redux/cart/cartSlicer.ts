
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RemoveCartProduct, UpdateCartQuantity } from '../actions'
import { IProduct } from '../../assets/data/model'

export interface CartProduct extends IProduct {
    quantity: number
    total: number
    discount: number
    size: string
}

export interface CartState {
    cart: CartProduct[]
}

const initialState: CartState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            state.cart = [...state.cart, action.payload]
        },
        updateQuantity: (state, action: PayloadAction<UpdateCartQuantity>) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.quantity
                    item.total = item.amount * item.quantity
                }
                return item
            })
        },
        removeProduct: (state, action: PayloadAction<RemoveCartProduct>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        clearProduct: (state) => {
            state.cart = [];
        }
    }
})

export const { addToCart, updateQuantity, removeProduct } = cartSlice.actions
export default cartSlice.reducer