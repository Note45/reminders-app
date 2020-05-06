import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Main from './pages/main'

const Pages = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerTitle: 'Reminders',
      headerStyle: {
        backgroundColor: '#F0F0F0',
        elevation: 0
      },
      headerTintColor: '#3D3D3D',
      headerTitleStyle: {
        fontSize: 35,
      },
      headerTitleAlign: 'center'
    }
  },
})

const Routes = createAppContainer(Pages)

export default Routes 