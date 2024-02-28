const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "SET_API_DATA":
            const featureData = action.payload.filter((currElem) => {
                return currElem.featured === true;
            });

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            }
        case "API_ERROR":
            return {
                ...state,
                isError: true,
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                singleLoading: true,
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleLoading: false,
                singleProduct: action.payload,
            }
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isError: true,
            }
        default:
            return state;
    }
}

export default ProductReducer;