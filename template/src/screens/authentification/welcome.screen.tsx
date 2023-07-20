import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from '@rneui/base';
import React from 'react';
import AppStyles from '../../config/styles';

const WelcomeScreen = ({navigation}: any) => {
  function goToLoginPage() {
    navigation.replace('LoginScreen');
  }

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <SafeAreaView style={[styles.container]}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              BasicTemplate
            </Text>
          </View>
          <Pressable style={styles.button} onPress={goToLoginPage}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
              }}>
              Commencer !
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    margin: 10,
  },

  button: {
    margin: 10,
    width: '80%',
    height: 50,
    backgroundColor: AppStyles.colour.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
