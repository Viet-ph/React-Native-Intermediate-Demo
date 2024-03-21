import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import Text from "./Text";

function Card({ title, subTitle, image, onPress }) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <Image style={styles.image} source={image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      borderRadius: 15,
      backgroundColor: colors.white,
      marginBottom: 20,
      overflow: "hidden",
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    detailsContainer: {
      padding: 20,
    },
    image: {
      width: "20%",
      height: 50,
      margin: 25,
      alignContent: "center",
    },
    subTitle: {
      color: colors.secondary,
      fontWeight: "bold",
      alignContent: "center"
    },
    title: {
      marginBottom: 7,
    },
  });
  
  export default Card;