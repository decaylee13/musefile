module.exports = {
    expo: {
        name: "MuseFile",
        slug: "musefile",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff"
        },
        assetBundlePatterns: [
            "**/*"
        ],
        ios: {
            supportsTablet: true,
            bundleIdentifier: "com.musefile.app",
            googleServicesFile: "./GoogleService-Info.plist"
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff"
            },
            package: "com.musefile.app",
            googleServicesFile: "./google-services.json"
        },
        web: {
            favicon: "./assets/favicon.png"
        },
        plugins: [
            "@react-native-firebase/app",
            "@react-native-firebase/auth",
            "@react-native-firebase/storage",
            "@react-native-firebase/firestore",
            [
                "expo-build-properties",
                {
                    ios: {
                        useFrameworks: "static"
                    }
                }
            ]
        ]
    }
}; 