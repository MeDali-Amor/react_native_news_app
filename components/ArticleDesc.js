import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { ArticleTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const ArticleDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);

    return (
        <View style={{ height: "100%", paddingBottom: 30 }}>
            {/* <ScrollView style={{ height: "100%", paddingBottom: 30 }}> */}
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <ArticleTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
            </View>

            <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
                <View
                    style={{
                        marginTop: SIZES.base,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.secondary,
                            fontSize: SIZES.small,
                            fontFamily: FONTS.regular,
                            lineHeight: SIZES.large,
                        }}
                    >
                        {data.description}
                        {/* {!readMore && "..."} */}
                        {/* <Text
                            style={{
                                color: COLORS.primary,
                                fontSize: SIZES.small,
                                fontFamily: FONTS.semiBold,
                            }}
                            onPress={() => {
                                if (!readMore) {
                                    setText(data.description);
                                    setReadMore(true);
                                } else {
                                    setText(data.description.slice(0, 100));
                                    setReadMore(false);
                                }
                            }}
                        >
                            {readMore ? " Show Less" : " Read More"}
                        </Text> */}
                    </Text>
                </View>
            </View>
            {/* </ScrollView> */}
        </View>
    );
};

export default ArticleDesc;
