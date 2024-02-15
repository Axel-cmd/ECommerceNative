import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfilScreen, SearchScreen, WishListScreen } from 'screens/index';
import { Ionicons } from "@expo/vector-icons"
import { Header } from 'components/Header';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({color, size}) => (<Ionicons name='home' size={size} color={color} ></Ionicons>) }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon: ({color, size}) => (<Ionicons name='search' size={size} color={color} ></Ionicons>) }} />
      <Tab.Screen name="WishList" component={WishListScreen} options={{ tabBarIcon: ({color, size}) => (<Ionicons name='heart' size={size} color={color} ></Ionicons>) }} />
      <Tab.Screen name="Profil" component={ProfilScreen} options={{ tabBarIcon: ({color, size}) => (<Ionicons name='person-circle-outline' size={size} color={color} ></Ionicons>) }} />
    </Tab.Navigator>
  );
}