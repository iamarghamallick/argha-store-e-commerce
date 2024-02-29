import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // to set the grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };

    // to set the list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    // to sort
    const sorting = (event) => {
        return dispatch({ type: "GET_SORT_VALUE", payload: event.target.value });
    }

    // to update the filter values
    const updateFilterValue = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    }

    // to clear the filter
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    };

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: products });
    }, [products, state.sorting_value,]);

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS", payload: products });
    }, [products, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider
            value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};