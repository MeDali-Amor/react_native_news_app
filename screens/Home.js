import axios from "axios";
import Constants from "expo-constants";

import { useState, useEffect } from "react";
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    Image,
    StyleSheet,
} from "react-native";
import { Header, FocusedStatusBar, ArticleCard } from "../components";
import { COLORS, Authors, assets } from "../constants";

const Home = () => {
    const [dataList, setDataList] = useState([]);
    const uri = "https://b3a7-41-62-101-194.eu.ngrok.io";
    const handleSearch = (value) => {
        let currentList = [...dataList];
        if (!value.length) return setDataList(currentList);
        const filteredData = currentList.filter((item) =>
            item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
        if (filteredData.length) {
            setDataList(filteredData);
        } else {
            setDataList(currentList);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${uri}/drupalwebsite/api/articles`
                );

                setDataList(res.data);
                // console.log(res.data);
            } catch (error) {
                setDataList(ArticlesData);
            }
        };
        fetchData();
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.gray} />
            <Header onSearch={handleSearch} />
            <AuthorsList />
            <View style={styles.homeContainer}>
                {dataList.length > 0 && (
                    <View style={{ zIndex: 0 }}>
                        <FlatList
                            data={dataList}
                            renderItem={({ item }) => (
                                <ArticleCard data={item} uri={uri} />
                            )}
                            keyExtractor={(item) => item.name}
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            // ListHeaderComponent={

                            // }
                        />
                    </View>
                )}
                {/* <View
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: -1,
                    }}
                > */}
                {/* <View
                        style={{ height: 300, backgroundColor: COLORS.primary }}
                    ></View> */}
                {/* <Image
                        source={assets.background}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            // borderTopLeftRadius: SIZES.font,
                            // borderTopRightRadius: SIZES.font,
                        }}
                    />
                    <View
                        style={{ flex: 1, backgroundColor: COLORS.white }}
                    ></View> */}
                {/* </View> */}
            </View>
        </SafeAreaView>
    );
};

export default Home;
export const AuthorsList = () => {
    return (
        <View style={styles.Autherscontainer}>
            <FlatList
                horizontal={true}
                data={Authors}
                renderItem={({ item }) => <AuthorCirlceView data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                // ListHeaderComponent={

                // }
            />
        </View>
    );
};
const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    Autherscontainer: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
export const AuthorCirlceView = ({ data }) => {
    return (
        <View
            style={{
                // width: 71,
                // height: 71,
                marginHorizontal: 15,
                // borderWidth: 1,
                // borderColor: "#494BA1",
                // borderRadius: 50,
            }}
        >
            <Image
                source={data.image}
                resizeMode="cover"
                // style={{
                //     width: 70,
                //     height: 70,
                //     borderRadius: 50,
                //     display: "block",
                //     marginHorizontal: "auto",
                // }}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                    overflow: "hidden",
                    borderWidth: 2,
                    borderColor: "#494BA1",
                }}
            />
        </View>
    );
};
