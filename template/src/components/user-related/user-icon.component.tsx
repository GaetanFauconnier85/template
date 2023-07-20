import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';

const UserIconComponent = () => {
  const navigation = useNavigation();

  const navigateToUserPage = () => {
    // @ts-ignore
    navigation.navigate('UserProfilScreen');
  };

  return (
    <TouchableOpacity onPress={navigateToUserPage}>
      <Icon name="user" size={30} />
    </TouchableOpacity>
  );
};

export default UserIconComponent;
