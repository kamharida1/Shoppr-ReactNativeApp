import { IFilterItem } from "../assets/data/model";

export interface FilterStateItem {
    title: string;
    filters: IFilterItem[]
}

export interface FilterState {
    filters: FilterStateItem[],
    nonExpandedFilters: FilterStateItem[]
}

export interface UpdateFilterSelectionPayload {
    title: string;
    filterId: number;
}

export interface UpdateCartQuantity {
    id: number;
    quantity: number;
}

export interface RemoveCartProduct {
    id: number;
}

export interface UserState {
    jwt?: string
}