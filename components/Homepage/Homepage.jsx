import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper/src";

function Homepage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper autoplay horizontal={false} height={200}>
                    <View style={styles.slide}>
                        <Image
                            source={require("../../assets/Images/food-banner1.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require("../../assets/Images/food-banner2.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require("../../assets/Images/food-banner3.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require("../../assets/Images/food-banner4.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={styles.cardWrapper}>
                <Text>Top Foods </Text>

                <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image
                                source={require("../../assets/Images/food-banner3.jpg")}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>

                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Amazing food</Text>
                            <Text style={styles.cardDetails}>
                                Amazing description for this amazing place
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require("../../assets/Images/food-banner2.jpg")}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Amazing food</Text>
                        <Text style={styles.cardDetails}>
                            Amazing description for this amazing place
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require("../../assets/Images/food-banner3.jpg")}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Amazing food</Text>
                        <Text style={styles.cardDetails}>
                            Amazing description for this amazing place
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
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
        height: 100,
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
    },
    cardDetails: {
        fontSize: 12,
        color: "#444",
    },
});

export default Homepage;
