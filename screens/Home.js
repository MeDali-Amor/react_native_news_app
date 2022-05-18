import axios from "axios";
import { useState, useEffect } from "react";
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Header, FocusedStatusBar, ArticleCard } from "../components";
import { COLORS, Authors, assets, ArticlesData } from "../constants";

const Home = () => {
    const [dataList, setDataList] = useState([]);
    const [status, setStatus] = useState("Trending");
    const uri = "https://ab6f-102-156-218-43.eu.ngrok.io";
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
            } catch (error) {
                setDataList(ArticlesData);
            }
        };
        fetchData();
    }, []);
    const setStatusFilter = (status) => {
        setStatus(status);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.gray} />
            <Header onSearch={handleSearch} />
            <AuthorsList />
            {/* <HomeTabs /> */}
            <View
                style={{
                    height: 50,
                }}
            >
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {categories.map((el) => (
                        <TouchableOpacity
                            onPress={() => setStatusFilter(el.title)}
                            key={el.id}
                            style={{ marginHorizontal: 10 }}
                        >
                            <Text
                                style={
                                    status === el.title
                                        ? styles.activeTab
                                        : styles.tabText
                                }
                            >
                                {el.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            {/* <Text>{status}</Text> */}
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
            />
        </View>
    );
};

export const AuthorCirlceView = ({ data }) => {
    return (
        <View
            style={{
                marginHorizontal: 15,
            }}
        >
            <Image
                source={data.image}
                resizeMode="cover"
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

export const Tab = ({ data }) => {
    return (
        <View style={{ marginHorizontal: 5 }}>
            {/* <TouchableOpacity
                style={styles.tabStyle}
                // onPress={console.log(data.id)}
                onPressOut={PressHnadler(data.id)}
            > */}
            <Text style={styles.tabText}>{data.title}</Text>
            {/* </TouchableOpacity> */}
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
    tabStyle: {
        marginHorizontal: 10,
    },
    activeTab: {
        color: "#494BA1",
        fontSize: 16,
        fontWeight: "700",
        borderBottomWidth: 3,
        paddingVertical: 8,
        borderBottomColor: "#494BA1",
        // borderEndWidth: 2,
    },
    tabText: {
        color: COLORS.primary,
        paddingVertical: 8,
        fontSize: 15,
        fontWeight: "600",
    },
});

const categories = [
    { id: "1", title: "Trending" },
    { id: "2", title: "My topics" },
    { id: "3", title: "Local news" },
    { id: "4", title: "Fact check" },
    { id: "5", title: "Discover" },
];
