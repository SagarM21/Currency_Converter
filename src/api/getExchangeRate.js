const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
    try {
        
        const { data: { rates } } = await axios.get('http://data.fixer.io/api/latest?access_key=2f13a404d111bce3ebcf3ff9c891a72a')
        const euro = 1 / rates[fromCurrency]
        const exchangeRate = euro * rates[toCurrency];
    
        return exchangeRate;
    } catch (error) {
        throw new Error(`Unable to get ${fromCurrency} and ${toCurrency}`);
    }
}

export default getExchangeRate;