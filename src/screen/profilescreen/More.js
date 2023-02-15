import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Companies from '../morescreen/Companies';
import CreditNotes from '../morescreen/CreditNotes';
import Estimates from '../morescreen/Estimates';
import Expenses from '../morescreen/Expenses';
import Payments from '../morescreen/Payments';
import Products from '../morescreen/Products';
import Projects from '../morescreen/Projects';
import Purchaseorder from '../morescreen/Purchaseorder';
import Reports from '../morescreen/Reports';
import Team from '../morescreen/Team';
import Timelogs from '../morescreen/Timelogs';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function More({navigation}) {
  const Stack = createNativeStackNavigator();
  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.container}>
        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={styles.view2}>
              <AntDesign name="calculator" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Estimates</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Fontisto name="shopping-basket-add" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Purchase or..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Foundation name="clipboard-notes" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Credit Notes</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Fontisto name="wallet" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Expenses</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <FontAwesome5 name="money-check-alt" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Payments</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Ionicons name="time-outline" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Time Logs</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Ionicons name="folder-open-outline" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Projects</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <FontAwesome5 name="boxes" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Products</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Foundation name="graph-bar" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Reports</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={styles.view2}>
              <MaterialCommunityIcons
                name="account-group"
                color="white"
                size={35}
              />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Team</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <MaterialCommunityIcons
                name="office-building-outline"
                color="white"
                size={35}
              />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Companies</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Foundation name="clipboard-notes" color="white" size={35} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.textsty}>Credit Notes</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default More;

const styles = StyleSheet.create({
  view2: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 55,
    alignItems: 'center',
    alignContent: 'center',
    position: 'relative',
  },
  maincontainer: {
    backgroundColor: 'grey',
    display: 'flex',
  },
  container: {
    height: '80%',
    width: '100%',
  },
  textsty: {
    color: 'white',
  },
  view3: {
    alignItems: 'center',
  },
});
