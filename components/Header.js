import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import SwitchButton from "./SwitchButton";

const Header = ({ onSearch }) => {
    return (
        // <View
        //     style={{
        //         backgroundColor: COLORS.primary,
        //         padding: SIZES.font,
        //     }}
        // >
        //     <View
        //         style={{
        //             flexDirection: "row",
        //             justifyContent: "space-between",
        //             alignItems: "center",
        //         }}
        //     >
        //         {/* <Image
        //             source={assets.logo}
        //             resizeMode="contain"
        //             style={{ width: 90, height: 25 }}
        //         /> */}
        //         <Text
        //             style={{
        //                 color: COLORS.white,
        //                 // fontWeight: "600",
        //                 fontSize: SIZES.large,
        //             }}
        //         >
        //             News
        //         </Text>

        //         <View style={{ width: 40, height: 40 }}>
        //             <Image
        //                 source={assets.user}
        //                 resizeMode="contain"
        //                 style={{ width: "100%", height: "100%" }}
        //             />
        //             {/* <Image
        //                 source={assets.badge}
        //                 resizeMode="contain"
        //                 style={{
        //                     position: "absolute",
        //                     width: 15,
        //                     height: 15,
        //                     bottom: 0,
        //                     right: 0,
        //                 }}
        //             /> */}
        //         </View>
        //     </View>

        //     <View style={{ marginVertical: SIZES.font }}>
        //         <Text
        //             style={{
        //                 // fontFamily: FONTS.regular,
        //                 fontSize: SIZES.small,
        //                 color: COLORS.white,
        //             }}
        //         >
        //             Bienvenue User 👋
        //         </Text>

        //         <Text
        //             style={{
        //                 fontFamily: FONTS.bold,
        //                 fontSize: SIZES.font,
        //                 color: COLORS.white,
        //                 marginTop: SIZES.base / 2,
        //             }}
        //         >
        //             Découvrons des nouvelles intéressantes!
        //         </Text>
        //     </View>

        //     <View style={{ marginTop: SIZES.font }}>
        //         <View
        //             style={{
        //                 width: "100%",
        //                 borderRadius: SIZES.extraLarge,
        //                 backgroundColor: COLORS.gray,
        //                 flexDirection: "row",
        //                 alignItems: "center",
        //                 paddingHorizontal: SIZES.font,
        //                 paddingVertical: SIZES.small - 2,
        //             }}
        //         >
        //             <Image
        //                 source={assets.search}
        //                 resizeMode="contain"
        //                 style={{
        //                     width: 20,
        //                     height: 20,
        //                     marginRight: SIZES.base,
        //                 }}
        //             />
        //             <TextInput
        //                 placeholder="Rechercher"
        //                 style={{ flex: 1 }}
        //                 onChangeText={onSearch}
        //             />
        //         </View>
        //     </View>
        // </View>
        <View style={styles.container}>
            <View>
                <Image
                    source={assets.logo}
                    resizeMode="contain"
                    style={{
                        // width: 20,
                        // height: 20,
                        marginRight: SIZES.base,
                    }}
                />
            </View>
            <View>
                {/* <Image
                    source={assets.logo}
                    resizeMode="contain"
                    style={{
                        // width: 20,
                        // height: 20,
                        marginRight: SIZES.base,
                    }}
                /> */}
                <SwitchButton />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    // container: {
    //     width: "100%",
    //     alignItems: "center",
    //     backgroundColor: COLORS.white,
    //     justifyContent: "space-between",
    // },
});
export default Header;
