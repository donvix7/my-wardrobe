import HomeHeader from "@/Components/HomeHeader";
import { colors, globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function index() {
  return (
    <ScrollView style={globalStyles.container}>
      <HomeHeader />
      <View style={globalStyles.centeredContainer}>
        <Text style={globalStyles.title}>My Wardrobe.</Text>
        <Text
          style={{
            fontSize: 16,
            color: colors.textSecondary,
            textAlign: "center",
          }}
        >
          Manage your style, plan outfits, and discover new looks.
        </Text>
        <Link href="/create" asChild>
          <TouchableOpacity style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
