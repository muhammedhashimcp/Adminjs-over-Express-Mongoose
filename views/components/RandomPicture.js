import React from 'react';
import { ShowPropertyProps } from 'adminjs';
import { Box } from '@adminjs/design-system';

const RandomPicture: React.FC<ShowPropertyProps> = (props) => {
	// Picsum generates a random 200x200 photo
	const url = 'https://picsum.photos/200';

	return <img src={url} />;
};

export default RandomPicture;
