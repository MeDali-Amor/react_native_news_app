import axios from "axios";
import { useState, useEffect } from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { Header, FocusedStatusBar, ArticleCard } from "../components";
import { COLORS, NFTData } from "../constants";
const Home = () => {
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost/drupalwebsite/api/articles"
                );
                setDataList(res.data);
            } catch (error) {
                setDataList([]);
            }
        };
        fetchData();
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={dataList}
                        renderItem={({ item }) => <ArticleCard data={item} />}
                        // keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<Header />}
                    />
                </View>
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
                    <View
                        style={{ height: 300, backgroundColor: COLORS.primary }}
                    ></View>
                    <View
                        style={{ flex: 1, backgroundColor: COLORS.white }}
                    ></View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
