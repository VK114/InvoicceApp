import React from 'react';
import {View, Text} from 'react-native';
import {FAB} from '@rneui/themed';

export default () => {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 10,
          flexGrow: 1,
        }}>
        <FAB
          icon={{name: 'add', color: 'white'}}
          color="black"
          placement="right"
        />
      </View>
    </>
  );
};
