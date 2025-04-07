import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/screens/HomeScreen';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { MusicScreen } from './src/screens/MusicScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { HomeIcon } from './src/components/icons/HomeIcon';
import { ProfileIcon } from './src/components/icons/ProfileIcon';
import { MusicIcon } from './src/components/icons/MusicIcon';
import { SettingsIcon } from './src/components/icons/SettingsIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <HomeIcon />;
            } else if (route.name === 'Music') {
              return <MusicIcon />;
            } else if (route.name === 'Settings') {
              return <SettingsIcon />;
            }
          },
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Music"
          component={MusicScreen}
          options={{ title: 'Music' }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
