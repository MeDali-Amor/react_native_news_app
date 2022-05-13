import { View, Text } from "react-native";
import React from "react";

const ArticleCard = ({ data }) => {
    console.log(data);
    return (
        <View>
            <Text>{data.id}</Text>
        </View>
    );
};

export default ArticleCard;
