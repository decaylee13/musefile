import 'nativewind/types';

declare module 'react-native' {
    interface ViewProps {
        className?: string;
    }

    interface TextProps {
        className?: string;
    }

    interface TouchableOpacityProps {
        className?: string;
    }
} 