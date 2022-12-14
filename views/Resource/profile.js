// Providing resources explicitly

import User from './user.entity';
import Profile from './profile.entity';

// User and Profile are models defined in your ORM/ODM

const admin = new AdminJS({
	resources: [
		User, // you can simply pass a model
		{
			resource: Profile,
			options: {
				// or you can provide an object with your custom resource options
				id: 'profiles', // here the resource identifier has been renamed to "profiles"
			},
		},
	],
});
