const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
        // console.log(product);

        // tackle existing products
        let existingProduct = state.cart.find((curr) => curr.id === id + color);
        // console.log(existingProduct)

        if (existingProduct) {
            let updatedProduct = state.cart.map((curr) => {
                if (curr.id === id + color) {
                    let newAmount = curr.amount + amount;

                    // handling quantity with stock
                    if (newAmount >= curr.max) {
                        newAmount = curr.max;
                    }

                    return {
                        ...curr,
                        amount: newAmount
                    }
                } else {
                    return {
                        ...curr,
                    }
                }
            });

            return {
                ...state,
                cart: updatedProduct,
            }
        }

        let cartProduct = {
            id: id + color,
            name: product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        }

        localStorage.setItem('myCart', { cartProduct });

        return {
            ...state,
            cart: [...state.cart, cartProduct],
        }
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curr) => curr.id !== action.payload);

        return {
            ...state,
            cart: updatedCart,
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

    return state;
}

export default cartReducer