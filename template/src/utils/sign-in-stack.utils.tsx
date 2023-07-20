import UserProfilScreen from '../screens/authentification/user-profil.screen';
import QuestsScreen from '../screens/quests.screen';
import HomeScreen from '../screens/home.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EventsScreen from '../screens/events.screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import React from 'react';
import UserIconComponent from '../components/user-related/user-icon.component';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'HomeScreen'}>
      <Tab.Screen
        name="QuestsScreen"
        component={QuestsScreen}
        options={{
          title: 'Quêtes',
          tabBarIcon: ({color, size}) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Accueil',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          title: 'Evenements',
          tabBarIcon: ({color, size}) => (
            <Icon name="event" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const SignInStackUtils = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => <UserIconComponent />,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="MuseeumQuest" component={BottomBar} />
        <Stack.Screen
          name="UserProfilScreen"
          component={UserProfilScreen}
          options={{
            title: 'Profil',
            headerRight: undefined,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignInStackUtils;
