export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

export const btc = async (addr) => {
	const price = await fetch(
		`https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=kraken`
	)
		.then(async (response) => {
			const data = await response.json();
			return data.RAW.PRICE;
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
		});

	return fetch(`https://blockchain.info/q/addressbalance/${addr}`)
		.then(async (response) => {
			const data = await response.text();
			const balance = data / 100000000 ?? 0;
			return {
				balance: balance,
				type: 'btc',
				value: Math.floor(price * balance),
				usd: formatter.format(Math.floor(price * balance)),
				addr: addr
			};
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
		});
};

export const eth = async (addr) => {
	return fetch(`https://api.ethplorer.io/getAddressInfo/${addr}/?apiKey=freekey`)
		.then(async (response) => {
			const data = await response.json();
			const balance = data.ETH.balance.toString().substring(0, 4) ?? 0;
			return {
				balance: balance,
				type: 'eth',
				value: Math.floor(data.ETH.price.rate * balance),
				usd: formatter.format(Math.floor(data.ETH.price.rate * balance)),
				addr: addr
			};
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
		});
};
