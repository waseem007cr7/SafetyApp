import React from 'react';

import {useEffect} from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setFirstLaunch] = React.useState(null);

  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunch').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunch', 'true');
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="onboarding"
        component={OnBoardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{header: () => null}}
        // options={({navigation}) => ({
        //   title: '',
        //   headerStyle: {
        //     backgroundColor: '#f9fafd',
        //     shadowColor: '#f9fafd',
        //     elevation: 0,
        //   },
        //   headerLeft: () => {
        //     <View style={{marginLeft: 20}}>
        //       <FontAwesome.Button
        //         name="long-arrow-left"
        //         size={25}
        //         backgroundColor="#f9fafd"
        //         color="#3333"
        //         onPress={() => navigation.navigate('Login')}
        //       />
              
        //     </View>
        //   },
        // })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
