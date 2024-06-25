import { get_btc_price, get_eth_price } from '$lib/api/crypto';

export const load = async ({ fetch }) => {
	const btc_price = await get_btc_price(fetch);
	const eth_price = await get_eth_price(fetch);
	return {
		prices: {
			btc_price,
			eth_price
		}
	};
};
