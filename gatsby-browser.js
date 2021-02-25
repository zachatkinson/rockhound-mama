import React from 'react';
import { ProductContextProvider } from './src/components/shopify/context/ProductContext';
import { CartContextProvider } from './src/components/shopify/context/CartContext';


export const wrapRootElement = ({ element }) => (
    <ProductContextProvider>
        <CartContextProvider>{element}</CartContextProvider>
    </ProductContextProvider>
);

export const wrapPageElement = ({ element }) => (
    <>

        {element}
    </>
);