import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";

import { dietTitle } from "../Image";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function First() {
  return (
    <>
      <View style={styles.container}>
        <Image source={dietTitle} style={{ width: windowWidth, height: 300 }} />
        <View style={styles.contentContainer}>
          <Text
            style={{
              marginTop: 5,
              fontSize: 24,
              fontWeight: "800",
            }}
          >
            How to Maintain a Healthy Workout Diet Plan
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                marginTop: 10,
                backgroundColor: "#A71D31",
                width: 50,
                padding: 3,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "800",
                  color: "white",
                }}
              >
                Tips
              </Text>
            </View>
            <Text style={{ color: "#808080" }}>November 20, 2023</Text>
          </View>
          <Text
            style={{
              textAlign: "left",
              lineHeight: 22,
              fontWeight: "400",
              letterSpacing: 0.5,
            }}
          >
            Everybody wants to be healthy; however, it can be challenging to
            determine which healthy lifestyle suggestions are worthwhile. You
            need to take in calories and nutrients by eating a well-balanced
            diet to power your everyday activities, including frequent exercise.
            It’s not as easy as picking vegetables over doughnuts to consume
            nutrients that power your exercise performance. The appropriate
            healthy workout diet is supposed to be eaten at the appropriate
            time.
          </Text>

          <Text style={{ marginTop: 20, fontWeight: "700" }}>
            Avoid Eating these Food Items
          </Text>
          <Text
            style={{
              textAlign: "left",
              lineHeight: 22,
              fontWeight: "400",
              letterSpacing: 0.5,
            }}
          >
            Sugar-rich processed foods and drinks should be avoided if you wish
            to lose weight at a fast pace. Such food items cause weight gain and
            negatively impact your general health
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    width: windowWidth,
    alignItems: "center",
  },
  contentContainer: {
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
});
