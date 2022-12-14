const customBefore = (request, context) => {
	const { query = {} } = request;
	const newQuery = {
		...query,
		['filters.status']: 'active',
	};

	request.query = newQuery;

	return request;
};

const customAfter = (originalResponse, request, context) => {
	console.log(originalResponse.meta);

	return originalResponse;
};

const UserResource = {
	resource: User,
	options: {
		actions: {
			list: {
				before: [customBefore],
				after: [customAfter],
			},
		},
	},
};
