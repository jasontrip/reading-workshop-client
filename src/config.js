export const BASE_URL = process.env.NODE_ENV === 'production'
	? 'https://reading-workshop.herokuapp.com/'
	: 'http://localhost:8080/api';