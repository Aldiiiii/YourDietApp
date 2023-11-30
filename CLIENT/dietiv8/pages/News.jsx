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
import Body from "../components/Body";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  dietTitle,
  eatNight,
  obesity,
  vegan,
  gorengan,
  inter,
  ways,
} from "../components/Image";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function News() {
  const navigation = useNavigation();
  const news = () => {
    navigation.navigate("First");
  };
  return (
    <>
      <Body>
        <View style={styles.container}>
          <SafeAreaView>
            <View>
              <Text style={styles.txt}>Healthy Information</Text>
              <Pressable
                onPress={() => {
                  news();
                }}
              >
                <Image source={dietTitle} style={styles.img} />
              </Pressable>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 16,
                  fontWeight: "800",
                  color: "#A71D31",
                }}
              >
                Tips
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 24,
                  fontWeight: "800",
                }}
              >
                How to Maintain a Healthy Workout Diet Plan
              </Text>
              <Text
                style={{ color: "#808080", marginBottom: 15, marginTop: 5 }}
              >
                November 20, 2023
              </Text>
              <View
                style={{
                  borderBottomColor: "grey",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
            </View>
            {/* Mulai Card */}
            <View style={{ flex: 1 }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 340 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View
                        style={{ height: 200, width: 150, marginRight: 20 }}
                      >
                        <Image
                          source={eatNight}
                          style={{
                            height: 200,
                            width: 150,
                            borderRadius: 10,
                            marginTop: 20,
                          }}
                        ></Image>
                        <Text
                          style={{
                            color: "#0075A2",
                            marginTop: 10,
                            fontSize: 13,
                            fontWeight: "800",
                          }}
                        >
                          Article
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "600",
                            marginTop: 5,
                          }}
                        >
                          Diet Truth or Myth: Eating at Night Causes Weight Gain
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: "#808080",
                            marginTop: 5,
                          }}
                        >
                          November 19, 2023
                        </Text>
                      </View>
                      {/* Obesitas */}
                      <View
                        style={{ height: 200, width: 150, marginRight: 20 }}
                      >
                        <Image
                          source={obesity}
                          style={{
                            height: 200,
                            width: 150,
                            borderRadius: 10,
                            marginTop: 20,
                          }}
                        ></Image>
                        <Text
                          style={{
                            color: "#0075A2",
                            marginTop: 10,
                            fontSize: 13,
                            fontWeight: "800",
                          }}
                        >
                          Article
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "600",
                            marginTop: 5,
                          }}
                        >
                          Health Effects of Overweight and Obesity
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: "#808080",
                            marginTop: 5,
                          }}
                        >
                          November 19, 2023
                        </Text>
                      </View>
                      {/* VEGAN */}
                      <View
                        style={{ height: 200, width: 150, marginRight: 20 }}
                      >
                        <View>
                          <Image
                            source={vegan}
                            style={{
                              borderRadius: 10,
                              marginTop: 20,
                              height: 200,
                              width: 150,
                              resizeMode: "stretch",
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            color: "#0075A2",
                            marginTop: 10,
                            fontSize: 13,
                            fontWeight: "800",
                          }}
                        >
                          Article
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "600",
                            marginTop: 5,
                          }}
                        >
                          How to be vegan 3 days a week
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: "#808080",
                            marginTop: 5,
                          }}
                        >
                          November 18, 2023
                        </Text>
                      </View>
                      {/* GORENGAN */}
                      <View style={{ height: 200, width: 150 }}>
                        <View>
                          <Image
                            source={gorengan}
                            style={{
                              borderRadius: 10,
                              marginTop: 20,
                              height: 200,
                              width: 150,
                              resizeMode: "stretch",
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            color: "#0075A2",
                            marginTop: 10,
                            fontSize: 13,
                            fontWeight: "800",
                          }}
                        >
                          Article
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "600",
                            marginTop: 5,
                          }}
                        >
                          Why Are Fried Foods Bad for You?
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: "#808080",
                            marginTop: 5,
                          }}
                        >
                          November 17, 2023
                        </Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                <View
                  style={{
                    borderBottomColor: "grey",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 20,
                  }}
                />
                {/* .. */}
                <View style={styles.containerTips}>
                  <View
                    style={{
                      height: 100,
                      width: 270,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "800",
                        color: "#A71D31",
                      }}
                    >
                      Tips
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                      }}
                    >
                      Intermittent Fasting for Beginners: Stages, Benefits &
                      Side Effects
                    </Text>
                    <Text style={{ fontSize: 12, color: "#808080" }}>
                      November 19, 2023
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={inter}
                      style={{ height: 100, width: 100, borderRadius: 10 }}
                    />
                  </View>
                </View>
                {/* .. */}
                <View
                  style={{
                    borderBottomColor: "grey",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 20,
                  }}
                />
                <View style={styles.containerTips}>
                  <View
                    style={{
                      height: 100,
                      width: 270,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "800",
                        color: "#A71D31",
                      }}
                    >
                      Tips
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                      }}
                    >
                      3 simple ways to make healthy food choices for you and the
                      planet
                    </Text>
                    <Text style={{ fontSize: 12, color: "#808080" }}>
                      November 18, 2023
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={ways}
                      style={{ height: 100, width: 100, borderRadius: 10 }}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </SafeAreaView>
        </View>
      </Body>
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
  txt: {
    fontWeight: "800",
    fontSize: 24,
    marginTop: 20,
    color: "green",
  },
  img: {
    marginTop: 20,
    height: 160,
    width: windowWidth - 50,
    borderRadius: 10,
  },
  containerTips: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
