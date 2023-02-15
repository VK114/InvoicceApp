import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Settings,
} from 'react-native';
import React from 'react';
import Signup from './src/screen/authscreen/Signup';
import Login from './src/screen/authscreen/Login';
import Footer from './src/screen/commonscreen/Footer';
import Home from './src/screen/profilescreen/Home';
import More from './src/screen/profilescreen/More';

import bg from './assets/bg1.jpg';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dashboard from './src/screen/profilescreen/Dashboard';
// import Footer from './src/screen/commonscreen/Footer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Image style={styles.bg} source={bg} />
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});
