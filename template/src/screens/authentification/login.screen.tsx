import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Button, Input} from '@rneui/base';
import AppStyles from '../../config/styles';

const LoginScreen = ({navigation}: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [mailErrorMessage, setMailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordMailErrorMessage] = useState('');

  function logIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        if (
          error.code === 'auth/email-already-in-use' ||
          error.code === 'auth/invalid-email'
        ) {
          setMailErrorMessage('Email invalide');
        } else if (error.code === 'auth/wrong-password') {
          setPasswordMailErrorMessage('Le mot de passe est incorrect');
        } else if (
          error.code === 'auth/user-disabled' ||
          error.code === 'auth/user-not-found'
        ) {
          setErrorMessage("Le nom d'utilisateur est incorrect");
        } else {
          setErrorMessage(error.message);
        }
      });
  }

  useEffect(() => {
    auth().onAuthStateChanged(() => {
      if (loading) {
        setLoading(false);
      }
    });
  });

  function goToRegister() {
    navigation.replace('SignUpScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          margin: 20,
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 26,
          }}>
          Connexion
        </Text>
        <View>
          <Text>Si vous n’avez pas de compte,</Text>
          <Text>
            vous pouvez{' '}
            <Text
              onPress={goToRegister}
              style={{
                color: AppStyles.colour.primary,
              }}>
              vous enregistrer !
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          margin: 20,
          justifyContent: 'flex-start',
        }}>
        <Input
          placeholderTextColor={'grey'}
          placeholder="Email"
          onChangeText={setEmail}
          autoCapitalize={'none'}
          errorMessage={mailErrorMessage}
          containerStyle={[
            styles.items,
            {
              borderRadius: 10,
            },
          ]}
        />
        <Input
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          placeholder="Mot de passe"
          onChangeText={setPassword}
          errorMessage={passwordErrorMessage}
          errorStyle={{color: 'red'}}
          containerStyle={[
            styles.items,
            {
              borderRadius: 10,
            },
          ]}
        />
        <Button
          style={[styles.items]}
          color={AppStyles.colour.primary}
          radius={10}
          onPress={logIn}
          title={'Valider'}
        />
        {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },

  items: {
    marginVertical: 10,
  },
});
