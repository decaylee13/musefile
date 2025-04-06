import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: 'primary' | 'secondary';
}

export function Button({ title, variant = 'primary', className, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            className={`px-4 py-2 rounded-lg ${variant === 'primary' ? 'bg-blue-500' : 'bg-gray-200'
                } ${className}`}
            {...props}
        >
            <Text
                className={`text-center font-semibold ${variant === 'primary' ? 'text-white' : 'text-gray-800'
                    }`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
} 