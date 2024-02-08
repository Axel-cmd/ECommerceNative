import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfilScreen, SearchScreen, WishListScreen } from 'screens/index';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="WishList" component={WishListScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
}