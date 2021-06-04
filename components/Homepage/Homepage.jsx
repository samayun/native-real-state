import React from "react";
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper/src";

const books = [
    {
        id: 1,
        name: "Hablu der jonno programming",
        // image: 
    }
];

function Homepage({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper autoplay horizontal={false} height={200}>
                    <View style={styles.slide}>
                        <Image
                            source={require("../../assets/Images/featured1.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require("../../assets/Images/featured2.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require("../../assets/Images/featured3.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require("../../assets/Images/featured1.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={styles.cardWrapper}>
                <Text>Featured books</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image
                                source={require("../../assets/Images/book1.jpg")}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>

                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Programming er 14 gusti.</Text>
                            <Text style={styles.cardDetails}>Author : Jhankar Mahbub.</Text>
                            <Text style={styles.cardDetails}>Price : $30</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require("../../assets/Images/book2.jpg")}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Hablu der jonno programming</Text>
                        <Text style={styles.cardDetails}>Author : Jhankar Mahbub.</Text>
                        <Text style={styles.cardDetails}>Price : $40</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require("../../assets/Images/book3.jpg")}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Bolod to boss</Text>
                        <Text style={styles.cardDetails}>Author : Jhankar Mahbub.</Text>
                        <Text style={styles.cardDetails}>Price : $50</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require("../../assets/Images/book4.png")}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Eloquent JavaScript: A Modern Introduction to Programming</Text>
                        <Text style={styles.cardDetails}>Author : Marijn Haverbeke</Text>
                        <Text style={styles.cardDetails}>Price : $50</Text>
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
        height: 400,
        width: "90%",
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
});

export default Homepage;
