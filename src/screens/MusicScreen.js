import { View, Text, TouchableOpacity } from 'react-native';
import { FolderIcon } from '../components/icons/FolderIcon';
import { PageIcon } from '../components/icons/PageIcon';
import { useFonts } from 'expo-font';

export function MusicScreen() {

    return (
        <View className="flex-1">
            {/* Mini navigation bar at the top */}
            <View className="flex-row justify-around items-center bg-gray-200 py-3 px-4 border-b border-gray-300">
                <TouchableOpacity className="items-center">
                    <FolderIcon color="#3b82f6" size={24} />
                    <Text className="text-xs mt-1 text-blue-600">New Folder</Text>
                </TouchableOpacity>

                <TouchableOpacity className="items-center">
                    <PageIcon color="#3b82f6" size={24} />
                    <Text className="text-xs mt-1 text-blue-600">New Music</Text>
                </TouchableOpacity>
            </View>

            {/* Content area */}
            <View className="flex-1 items-center justify-center">
                <Text className="font-inter text-lg">Regular text</Text>
                <Text className="font-inter-bold text-xl">Bold text</Text>
            </View>
        </View>
    );
}