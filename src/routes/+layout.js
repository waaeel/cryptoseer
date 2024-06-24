import { get_btc_price, get_eth_price } from '$lib/api/crypto';

export const load = async () => {
	const btc_price = await get_btc_price();
	const eth_price = await get_eth_price();
	return {
		prices: {
			btc_price,
			eth_price
		}
	};
};
