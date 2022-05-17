import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const Stack = createStackNavigator();
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Trending from "../screens/Trending";
import Saved from "../screens/Saved";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
            // tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                showLabel: false,
                tabBarStyle: {
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    // shadowOpacity: 0.58,
                    // shadowRadius: 16.0,
                    elevation: 48,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: 0,
                    padding: 10,
                    width: "100%",
                    height: 64,
                    zIndex: 0,
                    // backgroundColor: "#fff",
                    // // elevation: 1,
                    // height: 60,
                    // ...SHADOWS.dark,
                    // // borderWidth: 0,
                    // borderTopLeftRadius: 15,
                    // borderTopRightRadius: 15,
                    // // alignItems: "center",
                    // // justifyContent: "space-evenly",
                    // // height: 100,
                },
            }}
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? assets.homeAlt : assets.home}
                            style={{
                                width: 24,
                                height: 24,
                            }}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontWeight: "bold",
                        // color: "#B1B2B2",
                    },
                    tabBarActiveTintColor: "#494BA1",
                    tabBarInactiveTintColor: "#B1B2B2",
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? assets.searchAlt : assets.search}
                            style={{
                                width: 24,
                                height: 24,
                            }}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontWeight: "bold",
                        // color: "#B1B2B2",
                    },
                    tabBarActiveTintColor: "#494BA1",
                    tabBarInactiveTintColor: "#B1B2B2",
                }}
            />
            <Tab.Screen
                name="Trending"
                component={Trending}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? assets.fireAlt : assets.fire}
                            style={{
                                width: 24,
                                height: 24,
                            }}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontWeight: "bold",
                        // color: "#B1B2B2",
                    },
                    tabBarActiveTintColor: "#494BA1",
                    tabBarInactiveTintColor: "#B1B2B2",
                }}
            />
            <Tab.Screen
                name="Save"
                component={Saved}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? assets.saveAlt : assets.save}
                            style={{
                                width: 24,
                                height: 24,
                            }}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontWeight: "bold",
                        // color: "#B1B2B2",
                    },
                    tabBarActiveTintColor: "#494BA1",
                    tabBarInactiveTintColor: "#B1B2B2",
                }}
            />
            <Tab.Screen
                name="User"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? assets.circle : assets.circle}
                            style={{
                                width: 24,
                                height: 24,
                            }}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontWeight: "bold",
                        // color: "#B1B2B2",
                    },
                    tabBarActiveTintColor: "#494BA1",
                    tabBarInactiveTintColor: "#B1B2B2",
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;

// const styles = StyleSheet.create({
//     tabsContainer: {
//         flex: 1,
//         backgroundColor: COLORS.white,
//     },
//     Autherscontainer: {
//         backgroundColor: COLORS.white,
//         paddingHorizontal: 10,
//         paddingVertical: 10,
//     },
// });

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View
            style={{
                flexDirection: "row",

                // postion: "absolute",
                // bottom: 0,
                // left: 0,
                elevation: 1,
                height: 60,
                ...SHADOWS.dark,
                borderWidth: 0,
                background: "#fff",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
