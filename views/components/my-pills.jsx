import React from 'react';
import { ShowPropertyProps } from 'adminjs';
import Chip from '@mui/material/Chip';
import ComputerIcon from '@mui/icons-material/Computer';
const MyRolePill = (props) => {
	const { property, record } = props;
	const refId = record.params[property.path];
	const populated = record.populated[property.path];
	const value = (populated && populated.title) || refId;
	return (
		<Chip
			label={value}
			color="success"
			size="medium"
			onDelete={() => {
				return;
			}}
			deleteIcon={<ComputerIcon />}
		/>
	);
};
export default MyRolePill;
