import numeral from 'numeral';

// load a locale
numeral.register('locale', 'br', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'real' : 'reais';
    },
    currency: {
        symbol: 'R$'
    }
});

numeral.locale('br');