export const abbreviatedThousands = (number, digits = 2) => {
    const num = Number(number);
    const symbols = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'K' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'G' },
    ];

    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;

    let i;
    for (i = symbols.length - 1; i > 0; i -= 1) {
        if (num >= symbols[i].value) {
            break;
        }
    }

    const unit = (num / symbols[i].value).toFixed(digits).replace(regex, '$1');
    const sym = symbols[i].symbol;
    return `${unit}${sym}`;
};

export const separatedThousands = (value, decimals = 2) =>
    Number(value)
        .toFixed(decimals)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
