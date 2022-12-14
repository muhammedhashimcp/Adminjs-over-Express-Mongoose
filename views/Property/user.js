const UserResource = {
	resource: User,
	options: {
		properties: {
			bio: {
				type: 'textarea',
				props: {
					rows: 20,
				},
			},
			gender: {
				availableValues: [
					{ value: 'male', label: 'Male' },
					{ value: 'female', label: 'Female' },
					{ value: 'other', label: 'Other' },
					{ value: 'notSay', label: 'Rather not say' },
				],
			},
			randomPicture: {
				type: 'string',
				components: {
					list: Components.MyCustomAction, // see "Writing your own Components"
					show: Components.MyCustomAction,
				},
			},
		},
	},
};
