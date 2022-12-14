const UserResource = {
	resource: User,
	options: {
		actions: {
			list: {
				showFilter: false,
			},
			edit: {
				isAccessible: false,
				isVisible: true,
			},
			myCustomAction: {
				actionType: 'record',
				component: false,
				handler: (request, response, context) => {
					const { record, currentAdmin } = context;
					return {
						record: record.toJSON(currentAdmin),
						msg: 'Hello world',
					};
				},
			},
		},
	},
};
