import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/ui/Button';
import { NavigationProps } from '../../types/navigation';

type HomeScreenProps = {
    navigation: NavigationProps;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500 mb-4">
                Welcome to Musefile
            </Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile', { name: 'User' })}
            />
        </View>
    );
} 