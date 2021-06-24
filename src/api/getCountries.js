const axios = require('axios')


const getCountries = async (currencyCode) => {

    try {
        
        const { data } = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    
        return data.map(({ name }) => name)
    } catch (error) {
        throw new Error(`Unable to get countries that use ${currencyCode}`)
    }

}

export default getCountries;