import { createStackNavigator } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';

export default createStackNavigator({
  'Login': {
    screen: LoginPage
  }
})