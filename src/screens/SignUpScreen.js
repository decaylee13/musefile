import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signUp } = useAuth();

    const handleSignUp = async () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            await signUp(name, email, password);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View className="flex-1 bg-white px-6">
            <View className="flex-1 justify-center">
                <Text className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Create Account
                </Text>

                <View className="space-y-4">
                    <View>
                        <Text className="text-gray-600 mb-2">Full Name</Text>
                        <TextInput
                            className="border border-gray-300 rounded-xl px-4 py-3"
                            placeholder="Enter your full name"
                            value={name}
                            onChangeText={setName}
                            autoCapitalize="words"
                        />
                    </View>

                    <View>
                        <Text className="text-gray-600 mb-2">Email</Text>
                        <TextInput
                            className="border border-gray-300 rounded-xl px-4 py-3"
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                    </View>

                    <View>
                        <Text className="text-gray-600 mb-2">Password</Text>
                        <TextInput
                            className="border border-gray-300 rounded-xl px-4 py-3"
                            placeholder="Create a password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <View>
                        <Text className="text-gray-600 mb-2">Confirm Password</Text>
                        <TextInput
                            className="border border-gray-300 rounded-xl px-4 py-3"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity
                        className="bg-blue-500 py-4 rounded-xl mt-6"
                        onPress={handleSignUp}
                    >
                        <Text className="text-white text-center font-semibold text-lg">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="pb-12">
                <View className="flex-row justify-center space-x-1">
                    <Text className="text-gray-600">Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text className="text-blue-500 font-semibold">Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUpScreen; 