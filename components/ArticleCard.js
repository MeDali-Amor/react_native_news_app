import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { ArticleTitle, SubInfo } from "./SubInfo";
import { RectangularButton } from "./Button";
const ArticleCard = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
            }}
        >
            <View style={{ width: "100%", height: 250 }}>
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
            </View>
            {/* <SubInfo data={data} /> */}
            <View
                style={{
                    width: "100%",
                    padding: SIZES.font,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <ArticleTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
                <RectangularButton
                    minwidth={120}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate("Article", { data })}
                />
            </View>
        </View>
    );
};

export default ArticleCard;
