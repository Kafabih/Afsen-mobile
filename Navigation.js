import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './screens/AuthScreen';
import Homepage from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import ValidasiRegister from './screens/ValidasiRegister';
import Register from './screens/RegisterScreen';
import Resetpw from './screens/ResetScreen';

// menuTab screen
import Home from './screens/menu_bar/Home';
import Lembur from './screens/menu_bar/Lembur';
import Profile from './screens/menu_bar/Profile';
import Cuti from './screens/menu_bar/Cuti';
import Ijin from './screens/menu_bar/Ijin';
import TabComponent from './components/tab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeMenu = () => (
  <Tab.Navigator>
    <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => <TabComponent label="home" {...props} />,
          }}
        />
        <Tab.Screen
          name="Lembur"
          component={Lembur}
          options={{
            tabBarButton: (props) => <TabComponent label="lembur" {...props} />,
          }}
        />
        <Tab.Screen
          name="Cuti"
          component={Cuti}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="cuti" {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Ijin"
          component={Ijin}
          options={{
            tabBarButton: (props) => (<TabComponent label="ijin" {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarButton: (props) => <TabComponent label="user" {...props} />,
          }}
        />
  </Tab.Navigator>
);


const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homepage"
          component={HomeMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Validasi"
          component={ValidasiRegister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reset"
          component={Resetpw}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default Navigation;
