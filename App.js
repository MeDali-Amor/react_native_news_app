import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Article from "./screens/Article";
export default function App() {
    // const fetchFonts = async () =>
    //     await Font.loadAsync({
    //         "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    //     });
    const [loaded] = useFonts({
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
        "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    });
    const Stack = createStackNavigator();
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "transparent",
        },
    };
    if (!loaded) return null;
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Article" component={Article} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
