import { View, Text } from 'react-native';
import { HomeIcon } from 'react-native-heroicons/outline';

export default function Home() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <HomeIcon size={24} color="black" />
            <Text className="text-xl font-bold text-blue-500 mt-4">
                Welcome to Musefile
            </Text>
        </View>
    );
} 