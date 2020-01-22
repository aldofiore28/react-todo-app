export const fetchWithRetry = (
	url: string,
	request: RequestInit,
	numberOfRetries: number = 1
): Promise<Response> => {
	if (numberOfRetries < 1) {
		throw 'invalid number retries';
	}

	return new Promise((resolve, reject) => {
		const tryCallback = async (retriesRemaining: number, r?: Response) => {
			if (retriesRemaining <= 0) {
				reject(r);
			} else {
				const window = getWindow();

				try {
					const response = await window.fetch(url, request);
					if (response.status >= 200 && response.status < 500) {
						resolve(response);
					} else {
						tryCallback(retriesRemaining - 1, response);
					}
				} catch (error) {
					tryCallback(retriesRemaining - 1, error);
				}
			}
		};

		const INITIAL_CALL = 1;
		const callsRemaining = numberOfRetries + INITIAL_CALL;
		tryCallback(callsRemaining);
	});
};

const getWindow = () => window as Window;
