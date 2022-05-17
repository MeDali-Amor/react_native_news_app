import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { ArticleTitle, SubInfo } from "./SubInfo";
import { RectangularButton } from "./Button";
import { useEffect, useState } from "react";
const ArticleCard = ({ data, uri }) => {
    const [imgURL, setImgURL] = useState("");
    useEffect(() => {
        const asynFunc = async () => {
            // let img = data.image
            await setImgURL(
                `${uri}` +
                    data.image.substring(
                        data.image.indexOf("=") + 2,
                        data.image.indexOf(" width") - 1
                    )
            );
            // console.log(
            //     `${uri}` +
            //         data.image.substring(
            //             data.image.indexOf("=") + 2,
            //             data.image.indexOf(" width") - 1
            //         )
            // );
        };
        asynFunc();
    }, [data]);
    const navigation = useNavigation();

    // console.log(data);
    // const [imgUrl, setImgUrl] = useState(
    //     `${uri}/drupalwebsite/sites/default/files/oatmeal-fruit-syrup-topping.jpg`
    // );
    // useEffect(() => {
    //     let img = data.image;
    //     //    const imageFormatter = (img) => {
    //     //    if (!img) return;
    //     //    `${uri}/drupalwebsite/sites/default/files/oatmeal-fruit-syrup-topping.jpg`;
    //     //    img.toString();
    //     let res = img.substring(
    //         img.indexOf("=") + 2,
    //         img.indexOf(" width") - 1
    //     );
    //     //    console.log(`${uri}${res}`);
    //     //    return `${uri}${res}`;
    //     //    };
    //     //    let imgURL = imageFormatter(data.image);
    //     setImgUrl(`${uri}${img}`);
    // }, [, data]);

    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.white,
                borderRadius: 36,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.font,
                ...SHADOWS.dark,
                width: 300,
                height: 400,
                position: "relative",
            }}
            onPress={() => navigation.navigate("Article", { data, imgURL })}
        >
            <View style={{ width: "100%", height: "100%" }}>
                <Image
                    source={{
                        uri:
                            imgURL.length > 0
                                ? imgURL
                                : `${uri}/drupalwebsite/sites/default/files/oatmeal-fruit-syrup-topping.jpg`,
                    }}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        borderRadius: 36,
                        height: "100%",
                    }}
                />
            </View>
            {/* <View
                style={{
                    width: "100%",
                    padding: SIZES.font,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            > */}
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    top: "40%",
                    left: 0,
                    paddingHorizontal: 30,
                    paddingBottom: 20,
                }}
            >
                <ArticleTitle title={data.name} />
            </View>
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "15%",
                    left: 0,
                    paddingHorizontal: 30,
                    paddingBottom: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Image source={assets.logo} resizeMode="contain" />
                <Text
                    style={{
                        // fontFamily: FONTS.bold,
                        // fontWeight: "",
                        fontSize: SIZES.small,
                        color: COLORS.white,
                    }}
                >
                    4h ago
                </Text>
            </View>
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "0%",
                    left: 0,
                    paddingHorizontal: 0,
                    paddingBottom: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                <Text
                    style={{
                        // fontFamily: FONTS.bold,
                        // fontWeight: "",
                        fontSize: SIZES.small,
                        color: COLORS.white,
                    }}
                >
                    {data.creator}
                </Text>
                <Text
                    style={{
                        // fontFamily: FONTS.bold,
                        // fontWeight: "",
                        fontSize: SIZES.small,
                        color: COLORS.white,
                    }}
                >
                    5min Reads
                </Text>
                <Text
                    style={{
                        // fontFamily: FONTS.bold,
                        // fontWeight: "",
                        fontSize: SIZES.small,
                        color: COLORS.white,
                    }}
                >
                    50 Upvote
                </Text>
            </View>
            {/* <RectangularButton
                minwidth={120}
                fontSize={SIZES.font}
                handlePress={() =>
                    navigation.navigate("Article", { data, imgURL })
                }
            /> */}
        </TouchableOpacity>
        // </View>
    );
};

export default ArticleCard;
