export const formatter = new Intl.NumberFormat('de-AT', {
	style: 'currency',
	currency: 'EUR'
});

export const get_btc_price = async (fetch) => {
	const eur = await fetch(
		`https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=EUR&e=kraken`
	)
		.then(async (response) => {
			const data = await response.json();
			return data.RAW.PRICE;
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
		});

	const usd = await fetch(
		`https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=kraken`
	)
		.then(async (response) => {
			const data = await response.json();
			return data.RAW.PRICE;
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
		});

	return {
		eur: formatter.format(Math.floor(eur)),
		usd: formatter.format(Math.floor(usd))
	};
};

export const get_eth_price = async (fetch) => {
	const eur = await fetch(
		`https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=EUR&e=kraken`
	)
		.then(async (response) => {
			const data = await response.json();
			return data.RAW.PRICE;
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
		});

	const usd = await fetch(
		`https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=USD&e=kraken`
	)
		.then(async (response) => {
			const data = await response.json();
			return data.RAW.PRICE;
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
		});

	return {
		eur: formatter.format(Math.floor(eur)),
		usd: formatter.format(Math.floor(usd))
	};
};

export const btc = async (addr) => {
	const price = await fetch(
		`https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=EUR&e=kraken`
	)
		.then(async (response) => {
			const data = await response.json();
			return data.RAW.PRICE;
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
			return null;
		});

	return fetch(`https://blockchain.info/q/addressbalance/${addr}`)
		.then(async (response) => {
			const data = await response.text();
			const balance = data / 100000000 ?? 0;
			return {
				balance: balance,
				type: 'btc',
				value: Math.floor(price * balance),
				eur: formatter.format(Math.floor(price * balance)),
				addr: addr
			};
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
		});
};

export const eth = async (addr) => {
	const price = await fetch(
		`https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=EUR&e=kraken`
	)
		.then(async (response) => {
			const data = await response.json();
			return data.RAW.PRICE;
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
			return null;
		});
	return fetch(`https://api.ethplorer.io/getAddressInfo/${addr}/?apiKey=freekey`)
		.then(async (response) => {
			const data = await response.json();
			const balance = data.ETH.balance.toString().substring(0, 4) ?? 0;
			return {
				balance: balance,
				type: 'eth',
				value: Math.floor(price * balance),
				eur: formatter.format(Math.floor(price * balance)),
				addr: addr
			};
		})
		.catch(function (err) {
			console.log('Unable to fetch -', err);
		});
};
