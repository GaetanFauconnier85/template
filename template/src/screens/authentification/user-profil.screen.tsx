import {View} from 'react-native';
import {Button} from '@rneui/base';
import auth from '@react-native-firebase/auth';

const UserProfilScreen = () => {
  function logOut() {
    auth()
      .signOut()
      .then(resp => resp)
      .catch(err => err);
  }

  return (
    <View>
      <Button title={'Se déconnecter'} onPress={logOut} />
    </View>
  );
};

export default UserProfilScreen;
