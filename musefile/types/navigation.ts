import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    Home: undefined;
    Profile: { name: string };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>; 