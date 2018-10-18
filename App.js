import { createStackNavigator } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';

export default createStackNavigator(
	{
		'Login': {
			screen: LoginPage,
			navigationOptions: {
		    	title: "BibComp - Login"
		  	}
		}
	},
	{
		navigationOptions: {
	  		title: "BibComp",
	  		headerTintColor: 'white',
	  		headerStyle: {
	    		backgroundColor: '#08d9d6',
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