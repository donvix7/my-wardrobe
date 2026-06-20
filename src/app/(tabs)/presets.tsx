import Empty from "@/Components/Empty";
import Header from "@/Components/Header";
import { getPreset } from "@/lib/service";
import { globalStyles } from "@/styles/global";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function presets() {
  const [items, setItems] = useState<any[]>([]);

  const loadItems = async () => {
    const item = await getPreset();
    if (item) {
      setItems(item);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <ScrollView style={globalStyles.container}>
      <Header screen="Presets" subTitle="Here's what you've got" />
      <View>
        {items?.length > 0 ? (
          items.map((item: any, index: number) => (
            <View key={index} style={globalStyles.previewCard}>
              <Image
                style={globalStyles.previewCardImage}
                source={{ uri: item.image }}
              />
              <Text style={globalStyles.subTitle}>{item.description}</Text>
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
