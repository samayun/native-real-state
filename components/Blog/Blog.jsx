import React from "react";
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Linking  } from "react-native";
import Swiper from "react-native-swiper/src";
import { RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';

const books = [
    {
        id: 1,
        name: "Hablu der jonno programming",
        // image: 
    }
];

function Blog({ navigation }) {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.cardWrapper}>
                <Text>Blogs from </Text>

                <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image
                                source={"https://miro.medium.com/max/1118/1*iX1Vj5jkJ-UHOA8vRWpQCA.jpeg"}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>

                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>পৃথিবীর সবচেয়ে ছোট টেক উপন্যাসঃ এক বেকবেঞ্চারের জাভাস্ক্রিপ্ট যাত্রা</Text>
                            <Text style={styles.cardDetails}>Author: Samayun Chowdhury</Text>
                            <Text style={styles.cardButton} onPress={() => Linking.openURL('https://samayunmc.medium.com/')}> Read more </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={"https://miro.medium.com/max/612/1*ch9YznwxmrH971Aeyw261w.png"}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>A Brief journey to React</Text>
                        <Text style={styles.cardDetails}>Author: Jihan</Text>
                        <Text style={styles.cardButton} onPress={() => Linking.openURL('https://zihanjashim2121.medium.com/a-brief-journey-to-react-c703b3bdeb42')}> Read more </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={"https://miro.medium.com/max/3200/1*2d2mjFUAIApulqKeZ817ig.jpeg"}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>A Simple Guide to ES6 Iterators in JavaScript with Examples</Text>
                        <Text style={styles.cardDetails}>Author: Brandon Morelli</Text>
                        <Text style={styles.cardButton} onPress={() => Linking.openURL('https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e')}> Read more </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: "70%",
        height: "auto",
        marginTop: 10,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 8,
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: 8,
    },
    sliderImage: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 8,
    },

    cardWrapper: {
        marginTop: 20,
        width: "90%",
        alignSelf: "center",
    },
    card: {
        height: 200,
        marginVertical: 10,
        flexDirection: "row",
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        fontFamily: 'RobotoCondensed_400Regular',
    },
    cardImageWrapper: {
        flex: 1,
    },
    cardImg: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "#fff",
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5
    },
    cardDetails: {
        fontSize: 15,
        color: "#444",
        padding: 5,
        margin: 5
    },
    cardButton: {
        backgroundColor: "tomato",
        color: "white",
        width: 100,
        height: 30,
        padding: 5,
        margin: 5,
        borderRadius: 8,
        fontSize: 15,
        textAlign:'center'
    }
});

export default Blog;
