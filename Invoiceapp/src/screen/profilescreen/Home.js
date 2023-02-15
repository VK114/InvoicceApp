import React from 'react';
import {View} from 'react-native';
import Footer from '../commonscreen/Footer';
import Header from '../commonscreen/Header';
import {NavigationContainer} from '@react-navigation/native';

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Footer />
    </NavigationContainer>
  );
};

export default Home;
