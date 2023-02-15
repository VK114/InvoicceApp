import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {
  errormessage,
  head1,
  head2,
  formgroup,
  lable,
  input,
  link,
  link2,
} from '../../common/formcss';
import {button1} from '../../common/button';
import logo from '../../../assets/8.1.png';
import bg from '../../../assets/bg1.jpg';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useTogglePasswordVisibility} from './Togglepassword';

const Signup = ({navigation}) => {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.mainbg} source={bg} />

      <View></View>
      <View style={styles.container1}>
        <Image style={styles.bg} source={logo} />
        <View style={styles.s1} />
        <View style={styles.s2}>
          <Text style={head1}>Creat a new account</Text>
          {/* <Text style={button1}>login</Text> */}
          {/* {errormsg ? <Text style={errormessage}>{errormsg} </Text> : null} */}
          <View style={formgroup}>
            <View>
              <Text style={lable}>Name</Text>
              <TextInput style={input} placeholder="enter your name" />
              <MaterialIcons
                name="person"
                color="#000"
                size={25}
                style={styles.inputContainer1}
              />
            </View>

            <View>
              <Text style={lable}>Email</Text>
              <TextInput style={input} placeholder="enter your email" />
              <MaterialIcons
                name="email"
                color="#000"
                size={25}
                style={styles.inputContainer1}
              />
            </View>

            <View>
              <Text style={lable}>password</Text>
              <TextInput
                style={input}
                placeholder="enter your password"
                secureTextEntry={passwordVisibility}
              />
              <MaterialIcons
                name="lock"
                color="#000"
                size={25}
                style={styles.inputContainer1}
              />

              <Pressable
                onPress={handlePasswordVisibility}
                style={styles.inputContainer}>
                <MaterialCommunityIcons
                  name={rightIcon}
                  size={22}
                  color="#232323"
                />
              </Pressable>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={button1}>
            <Text style={styles.btntext}> Singup</Text>
          </TouchableOpacity>
          <Text style={link2}>
            Already Registered?&nbsp;
            <Text style={link} onPress={() => navigation.navigate('Login')}>
              Login here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  container1: {
    display: 'flex',
    height: '82%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  s1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    marginTop: '20%',

    width: 200,
    height: 200,
  },
  s2: {
    display: 'flex',
    backgroundColor: '#3b3e81',
    // d2e5ff
    width: '90%',
    height: '55%',
    borderRadius: 30,
    padding: 20,
    marginTop: '10%',
  },
  fp: {
    display: 'flex',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  btntext: {
    textAlign: 'center',
    color: '#3b3e81',
  },
  inputContainer: {
    paddingRight: 10,
    position: 'absolute',
    right: 0,
    padding: 26,
    marginBottom: 20,
  },
  inputContainer1: {
    position: 'absolute',
    marginTop: 26,
    marginLeft: 6,
  },
  mainbg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});
