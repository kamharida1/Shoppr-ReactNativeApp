import { RootState } from "./store";

export const selectFilters = (state: RootState) => state.filter.filters || []

export const selectNonExpandedFilters = (state: RootState) => state.filter.nonExpandedFilters || []

export const selectGenderFilters = (state: RootState) => {
    const genderFilter = (state.filter.nonExpandedFilters || []).find((item) => item.title === 'Gender')
    return genderFilter ? genderFilter.filters : []
}

export const selectCartItems = (state: RootState) => state.cart.cart