import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-white">
            {/* Logo and Welcome Text */}
            <View className="flex-1 justify-center items-center px-6">
                <Image
                    source={require('../assets/logo.png')}
                    className="w-32 h-32 mb-8"
                    resizeMode="contain"
                />
                <Text className="text-3xl font-bold text-gray-800 mb-2 text-center">
                    Welcome to MuseFile
                </Text>
                <Text className="text-gray-600 text-center mb-8">
                    Your personal music library, organized just the way you like it.
                </Text>
            </View>

            {/* Buttons */}
            <View className="px-6 pb-12">
                <TouchableOpacity
                    className="bg-blue-500 py-4 rounded-xl mb-4"
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text className="text-white text-center font-semibold text-lg">
                        Sign In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-white py-4 rounded-xl border-2 border-blue-500"
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text className="text-blue-500 text-center font-semibold text-lg">
                        Create Account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WelcomeScreen; 