import { View, Text } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES, SHADOWS, assets } from "../constants";

export const ArticleTitle = ({ title }) => {
    return (
        <View>
            <Text
                style={{
                    // fontFamily: FONTS.bold,
                    fontWeight: "bold",
                    fontSize: SIZES.extraLarge,
                    color: COLORS.white,
                }}
            >
                {title}
            </Text>
        </View>
    );
};
export const ArticleAuthor = ({ subTitle }) => {
    return (
        <View>
            <Text
                style={{
                    // fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.primary,
                }}
            >
                {subTitle}
            </Text>
        </View>
    );
};
export const ArticleDate = ({ date }) => {
    return (
        <View
            style={{
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.base,
                backgroundColor: COLORS.white,
                justifyContent: "center",
                alignItems: "center",
                ...SHADOWS.light,
                elevation: 1,
                maxWidth: "50%",
            }}
        >
            <Text
                style={{
                    // fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.primary,
                }}
            >
                {date}
            </Text>
        </View>
    );
};
export const ArticleWriter = ({ author }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text>{author}</Text>
        </View>
    );
};
export const SubInfo = ({ data }) => {
    return (
        <View
            style={{
                width: "100%",
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            {/* <Text>{summary}</Text> */}
            <ArticleWriter author={data.creator} />
            <ArticleDate date={data.date} />
        </View>
    );
};
