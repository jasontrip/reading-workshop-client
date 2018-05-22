export const required = value =>
	value ? undefined: 'Required';

export const nonEmpty = value =>
	value.trim() !== ''? undefined: 'Cannot be empty';

export const email = value =>
	/^\S+@\S+\.\S+$/.test(value) ? undefined : 'Must be valid email address';

export const noWhitespace = value =>
	value.trim() === value? undefined:
		'Cannot start or end with empty spaces'