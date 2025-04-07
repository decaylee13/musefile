import { TouchableOpacity, Text } from 'react-native';

export const Button = ({ onPress, children, variant = 'primary' }) => {
    const baseStyles = 'px-4 py-2 rounded-lg';
    const variantStyles = {
        primary: 'bg-blue-500',
        secondary: 'bg-gray-500',
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            className={`${baseStyles} ${variantStyles[variant]}`}
        >
            <Text className="text-white font-semibold text-center">
                {children}
            </Text>
        </TouchableOpacity>
    );
}; 