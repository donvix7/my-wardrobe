import Empty from "@/Components/Empty";
import Header from "@/Components/Header";
import { getAllItems } from "@/lib/service";
import { globalStyles } from "@/styles/global";
import { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";

export default function Wardrobe() {
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
      <View style={globalStyles.grid}>
        {items?.length > 0 ? (
          items.map((item: any, index: number) => (
            <View key={index} style={globalStyles.gridItem}>
              <Image
                style={globalStyles.previewCardImage}
                source={{ uri: item.image }}
              />
            </View>
          ))
        ) : (
          <Empty
            title="No Outfits Yet"
            subtitle="Click the add button below to create your first outfit"
            buttonText="Get Started"
            onPress={() => {}}
          />
        )}
      </View>
    </ScrollView>
  );
}
