import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: "absolute",
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    );
};

export const RectangularButton = ({ minWhidth, fontSize, handlePress }) => {
    return (
        <TouchableOpacity
            style={{
                minWidth: minWhidth,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                ...SHADOWS.light,
                paddingHorizontal: SIZES.extraLarge,
                paddingVertical: SIZES.small,
                // marginRight: SIZES.large,
            }}
            onPress={handlePress}
        >
            <Text
                style={{
                    fontFamily: "Inter-SemiBold",
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: "center",
                }}
            >
                Read more
            </Text>
        </TouchableOpacity>
    );
};
