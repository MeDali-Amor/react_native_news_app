import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    FlatList,
    ScrollView,
} from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import {
    CircleButton,
    RectangularButton,
    SubInfo,
    ArticleDesc,
    FocusedStatusBar,
} from "../components";
const ArticleHeader = ({ navigation }) => {
    return (
        <View
            style={{
                width: "100%",
                height: 70,
                backgroundColor: "transparent",
                // position: "absolute",
                // top: 0,
            }}
        ></View>
    );
};

const ArticleCover = ({ data, imgURL, navigation }) => {
    // console.log(data);
    return (
        <View style={{ width: "100%", height: 373 }}>
            <Image
                source={{
                    uri: imgURL,
                }}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
            />

            {/* <CircleButton
            imgUrl={assets.heart}
            right={15}
            top={StatusBar.currentHeight + 10}
        /> */}
        </View>
    );
};
const Article = ({ route, navigation }) => {
    const { data, imgURL } = route.params;
    console.log(imgURL);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                }}
            >
                {/* <View
                        style={{ height: 300, backgroundColor: COLORS.primary }}
                    ></View> */}
                <Image
                    source={assets.background}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        // borderTopLeftRadius: SIZES.font,
                        // borderTopRightRadius: SIZES.font,
                    }}
                />
            </View>
            <ScrollView
                // StickyHeaderComponent={
                //     <ArticleHeader navigation={navigation} />
                // }
                // style={{
                //     position: "relative",
                // }}
                stickyHeaderIndices={[0]}
            >
                {/* <ArticleHeader navigation={navigation} /> */}
                <View style={{ width: "100%", height: 80 }}>
                    <CircleButton
                        imgUrl={assets.left}
                        handlePress={() => navigation.goBack()}
                        left={15}
                        top={StatusBar.currentHeight + 10}
                    />
                </View>
                <ArticleCover data={data} imgURL={imgURL} />
                <View
                    style={{
                        padding: SIZES.font,
                        backgroundColor: COLORS.white,
                        // opacity: "0.5",
                    }}
                >
                    <ArticleDesc data={data} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Article;
