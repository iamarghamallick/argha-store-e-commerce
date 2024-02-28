const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "SET_API_DATA":
            const featureData = action.payload.filter((currElem) => {
                return currElem.feature === true;
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
        default:
            return state;
    }
}

export default ProductReducer;