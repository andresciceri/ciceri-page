import {Page} from './page';
export const pageRoutes : Page[] = [
	{
		id: 1,
		title: 'Bienvenidos',
		path: 'Bienvenidos.md',
		type: 'posts',
		date: '2017-04-04 10:56:47',
		tags: []
	},
	{
		id: 2,
		title: 'Acerca de mi',
		path: 'about.md',
		type: 'pages',
		date: '2017-04-04 11:24:59',
		tags: []
	},
	{
		id: 3,
		title: 'Como implementar NVM sobre Linux',
		path: 'nvm-use.md',
		type: 'posts',
		date: '2017-04-10 14:15:46',
		tags: ['Node']
	},
	{
		id: 4,
		title: 'Crear una aplicación en Angular 2 usando Angular-Cli',
		path: 'angular-cli.md',
		type: 'posts',
		date: '2017-04-17 18:30:34',
		tags: ['Angular']
	},
	{
		id: 5,
		title: 'Prueba tus servicios en Angular con In Memory Web API',
		path: 'memory-web-api.md',
		type: 'posts',
		date: '2017-12-17 3:00:00',
		tags: ['Angular']
	}
];