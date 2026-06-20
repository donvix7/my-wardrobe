import HomeHeader from "@/Components/HomeHeader";
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function index() {
  return (
    <ScrollView style={globalStyles.container}>
      <HomeHeader />
      <View style={globalStyles.centeredContainer}>
        <Text style={globalStyles.title}>My Wardrobe.</Text>
        <Text style={globalStyles.subTitle}>
          Manage your style, plan outfits, and discover new looks.
        </Text>
        <TouchableOpacity style={globalStyles.button}>
          <Link href="/create" asChild>
            <Text style={globalStyles.buttonText}>Get Started</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
