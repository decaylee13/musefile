import { View, Text } from 'react-native';
import { Button } from '../components/Button';

export function HomeScreen({ navigation }) {
    return (
        <View className="flex-1 items-center justify-center bg-white space-y-4">
            <Text className="text-xl font-bold text-blue-600">
                Welcome to MuseScreen!
            </Text>
        </View>
    );
}