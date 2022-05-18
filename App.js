import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Article from "./screens/Article";
import BottomTabs from "./components/BottomTabs";
import BottomNavigationTabs from "./modules/navigation/BottomNavigationTabs";
export default function App() {
    // const fetchFonts = async () =>
    //     await Font.loadAsync({
    //         "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    //     });
    const [loaded] = useFonts({
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        // "Roboto-SemiBold": require("./assets/fonts/"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    });
    const Stack = createStackNavigator();
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "#fff",
        },
    };
    if (!loaded) return null;
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                // initialRouteName="Home"
            >
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="Main" component={BottomNavigationTabs} />
                <Stack.Screen name="Article" component={Article} />
            </Stack.Navigator>
            {/* <BottomTabs /> */}
        </NavigationContainer>
    );
}
