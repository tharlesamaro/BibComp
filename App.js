import { createStackNavigator } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';

import RegisterPage from './src/pages/RegisterPage'

import IndexPage from './src/pages/IndexPage'

export default createStackNavigator(
	{
		'Login': {
			screen: LoginPage,
			navigationOptions: {
	    	title: "BibComp - Login"
	  	}
		},
		'Register': {
			screen: RegisterPage,
			navigationOptions: {
	    	title: "BibComp - Cadastro"
	  	}
		},
		'Index': {
			screen: IndexPage,
			navigationOptions: {
	    	title: "BibComp - Index"
	  	}
		}
	},
	{
		navigationOptions: {
	  		title: "BibComp",
	  		headerTintColor: 'white',
	  		headerStyle: {
	    		backgroundColor: '#252a34',
	    		borderBottomWidth: 1,
	    		borderBottomColor: '#eeeeee',
	  		},
	  		headerTitleStyle: {
	    		color: 'white',
	    		fontSize: 25,
	  		}
		}
	}
);
