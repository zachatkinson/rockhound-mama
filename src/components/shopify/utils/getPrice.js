const getPrice = price =>
    Intl.NumberFormat(undefined, {
        minimumFractionDigits: 2,

    }).format(parseFloat(price ? price : 0))

export default getPrice