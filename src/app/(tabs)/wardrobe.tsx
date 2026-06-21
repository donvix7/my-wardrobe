import CategoryGrid from "@/Components/CategoryGrid";
import Empty from "@/Components/Empty";
import Header from "@/Components/Header";
import { getAllItems } from "@/lib/service";
import { globalStyles } from "@/styles/global";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Wardrobe() {
  const router = useRouter();
  const [items, setItems] = useState<any[]>([]);

  const loadItems = async () => {
    const item = await getAllItems();
    if (item) {
      setItems(item);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <ScrollView style={globalStyles.container}>
      <Header screen="Wardrobe" subTitle="Here's what you've got" />
      <View>
        {items ? (
          <CategoryGrid items={items} />
        ) : (
          <Empty
            title="No Outfits Yet"
            subtitle="Click the add button below to create your first outfit"
            buttonText="Get Started"
            onPress={() => {
              router.push("/create");
            }}
          />
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 100,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
