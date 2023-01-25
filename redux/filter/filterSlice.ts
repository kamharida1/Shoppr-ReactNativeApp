import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { brandFilterList, clothFilterList, colorFilterList, genderFilterList, sizeFilterList } from "../../assets/data/mock";
import { FilterState, FilterStateItem, UpdateFilterSelectionPayload } from "../actions";

const initialState: FilterState = {
    filters: [
        {
            title: 'Brand',
            filters: brandFilterList
        },
        {
            title: 'Cloth',
            filters: clothFilterList
        },
        {
            title: 'Color',
            filters: colorFilterList
        }
    ],
    nonExpandedFilters: [
        {
            title: 'Gender',
            filters: genderFilterList
        },
        {
            title: 'Size',
            filters: sizeFilterList
        },
    ]
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updatedFilters: (state, action: PayloadAction<FilterStateItem>) => {
            const index = state.filters.findIndex(item => item.title === action.payload.title)
            state.filters = [
                ...state.filters.slice(0, index),
                action.payload,
                ...state.filters.slice(index + 1)
            ]
        },
        updateFilterSelection: (state, action: PayloadAction<UpdateFilterSelectionPayload>) => {
            const index = state.nonExpandedFilters.findIndex(item => item.title === action.payload.title)
            if (index > -1) {
                state.nonExpandedFilters = state.nonExpandedFilters.map(item => {
                    if (item.title === action.payload.title) {
                        item.filters.forEach((filter) => {
                            if (filter.id === action.payload.filterId) {
                                filter.selected = !!!filter.selected
                            }
                        });
                    }
                    return item
                });
            }
        }
    }
})

export const { updatedFilters, updateFilterSelection } = filterSlice.actions

export default filterSlice.reducer