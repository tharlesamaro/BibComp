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
        backgroundColor: '#00adb5',
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