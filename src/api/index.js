import getCountries from './getCountries';
import getExchangeRate from './getExchangeRate';

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();

    const [exchangeRate, countries] = await Promise.all([

        getExchangeRate(fromCurrency, toCurrency),
        getCountries(toCurrency),
    ])

    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return {convertedAmount , countries}
    
}

export default convertCurrency;

