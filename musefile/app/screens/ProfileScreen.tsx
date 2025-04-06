import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/ui/Button';
import { NavigationProps, ProfileScreenRouteProp } from '../../types/navigation';

type ProfileScreenProps = {
    navigation: NavigationProps;
    route: ProfileScreenRouteProp;
};

export function ProfileScreen({ navigation, route }: ProfileScreenProps) {
    const { name } = route.params || { name: 'Guest' };

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500 mb-4">
                {name}'s Profile
            </Text>
            <Button
                title="Go Back"
                variant="secondary"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
} 