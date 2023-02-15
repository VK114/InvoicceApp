import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from '../profilescreen/Dashboard';
import Settings from '../profilescreen/Settings';
import Invoices from '../profilescreen/Invoices';
import More from '../profilescreen/More';
import Contacts from '../profilescreen/Contacts';

const dashboardName = 'Dashboard';
const invoicesName = 'Invoices';
const settingsName = 'Settings';
const moreName = 'More';
const contactsName = 'Contacts';

const Footer = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={dashboardName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === dashboardName) {
            iconName = focused = 'home-outline';
          } else if (rn === invoicesName) {
            iconName = focused = 'md-journal-outline';
          } else if (rn === settingsName) {
            iconName = focused = 'settings-outline';
          } else if (rn === moreName) {
            iconName = focused = 'ellipsis-horizontal-sharp';
          } else if (rn === contactsName) {
            iconName = focused = 'ios-tablet-portrait';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={20} color="black" />;
        },
      })}
      ScreenOptions={{
        ActiveTintColor: 'tmato',
        InactiveTintColor: 'grey',
        LabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Invoices" component={Invoices} />
      <Tab.Screen name="More" component={More} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Footer;

const styles = StyleSheet.create({});
