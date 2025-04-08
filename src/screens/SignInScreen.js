import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            await signIn(email, password);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View className="flex-1 bg-white px-6">
            <View className="flex-1 justify-center">
                <Text className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Welcome Back
                </Text>

                <View className="space-y-4">
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
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPassword')}
                        className="items-end"
                    >
                        <Text className="text-blue-500">Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="bg-blue-500 py-4 rounded-xl mt-6"
                        onPress={handleSignIn}
                    >
                        <Text className="text-white text-center font-semibold text-lg">
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="pb-12">
                <View className="flex-row justify-center space-x-1">
                    <Text className="text-gray-600">Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text className="text-blue-500 font-semibold">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignInScreen; 