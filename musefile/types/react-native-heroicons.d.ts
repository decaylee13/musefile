declare module 'react-native-heroicons/outline' {
    import { ComponentType } from 'react';
    import { SvgProps } from 'react-native-svg';

    interface IconProps extends SvgProps {
        size?: number;
        color?: string;
    }

    export const HomeIcon: ComponentType<IconProps>;
    // Add other icons as needed
}

declare module 'react-native-heroicons/solid' {
    import { ComponentType } from 'react';
    import { SvgProps } from 'react-native-svg';

    interface IconProps extends SvgProps {
        size?: number;
        color?: string;
    }

    export const HomeIcon: ComponentType<IconProps>;
    // Add other icons as needed
} 