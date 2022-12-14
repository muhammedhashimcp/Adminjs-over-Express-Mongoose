// Customizing resources
const usersNavigation = {
	name: 'Users',
	icon: 'User',
};

const admin = new AdminJS({
	resources: [
		{
			resource: Profile,
			options: {
				navigation: usersNavigation,
				properties: {
					bio: {
						isVisible: {
							edit: true,
							show: true,
							list: false,
							filter: false,
						},
					},
				},
				listProperties: ['id', 'name', 'createdAt'],
				filterProperties: ['id', 'name', 'createdAt'],
				editProperties: ['id', 'name', 'bio', 'createdAt'],
				showProperties: ['id', 'name', 'bio', 'createdAt'],
				sort: {
					sortBy: 'updatedAt',
					direction: 'desc',
				},
			},
			locale: {
				language: 'en',
				translations: {
					labels: {
						User: 'People',
					},
				},
			},
		},
	],
});
