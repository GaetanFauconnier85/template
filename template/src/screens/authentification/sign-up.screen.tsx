import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from '@rneui/base';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import AppStyles from '../../config/styles';

const SignUpScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [mailErrorMessage, setMailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  function signUp() {
    if (password === passwordConfirm) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          console.log('response', response);
        })
        .catch(error => {
          console.log('error', error);
          if (error.code === 'auth/email-already-in-use') {
            setMailErrorMessage('That email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            setMailErrorMessage("L'email est invalide !");
          } else if (error.code === 'auth/weak-password') {
            setPasswordErrorMessage(
              'La sécurité du mot de passe est trop faible !',
            );
          } else {
            setErrorMessage(error.message);
          }
        });
    }
  }

  function goToConnexion() {
    navigation.replace('LoginScreen');
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
          Inscription
        </Text>
        <View>
          <Text>Si vous avez déjà un compte,</Text>
          <Text>
            vous pouvez{' '}
            <Text
              onPress={goToConnexion}
              style={{
                color: AppStyles.colour.primary,
              }}>
              vous connecter !
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 2,
        }}>
        <Input
          style={[styles.items]}
          placeholderTextColor={'grey'}
          placeholder={'Email'}
          onChangeText={setEmail}
          autoCapitalize={'none'}
          errorMessage={mailErrorMessage}
        />
        <Input
          style={[styles.items]}
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          placeholder={'Mot de passe'}
          onChangeText={setPassword}
          errorMessage={passwordErrorMessage}
        />
        <Input
          style={[styles.items]}
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          placeholder={'Confirmation du mot de passe'}
          onChangeText={setPasswordConfirm}
        />
        <Button
          style={[styles.items]}
          color={AppStyles.colour.primary}
          radius={10}
          title={'Valider'}
          onPress={signUp}
        />
        {errorMessage && <Text>{errorMessage}</Text>}
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },

  items: {
    marginVertical: 10,
  },
});
