import currencyapi from '@everapi/currencyapi-js'
import { CurrencyAPIResponse } from '../interfaces/currencyApiResponse.interface';

const client = new currencyapi('cur_live_AhoMndZE4XtfjndmSoGGhI86cDhZtr3W98GsvZn5')

export const CurrencyResponse =  async(): Promise<CurrencyAPIResponse>=>{
    return await client.latest({
    base_currency: 'BRL',
    currencies: 'COP'
});
}

/* export const CurrencyResponse: CurrencyAPIResponse =  await client.latest({
    base_currency: 'BRL',
    currencies: 'COP'
});
 */