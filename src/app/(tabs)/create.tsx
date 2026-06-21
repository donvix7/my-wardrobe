import CreateForm from "@/Components/CreateForm";
import Empty from "@/Components/Empty";
import Header from "@/Components/Header";
import PreviewCard from "@/Components/PreviewCard";
import { getLastPreset } from "@/lib/service";
import { colors, globalStyles } from "@/styles/global";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function create() {
  const [items, setItems] = useState<any>([]);
  const [isPreview, setIsPreview] = useState(true);

  const loadItem = async () => {
    try {
      const response = await getLastPreset();
      setItems(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadItem();
  }, []);

  return (
    <ScrollView style={globalStyles.container}>
      <Header screen="Create" subTitle="Create an outfit from scratch" />
      {isPreview ? (
        <>
          {items ? (
            <View
              style={{
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={globalStyles.title}>Preview</Text>
                  <Text style={globalStyles.subTitle}>Your latest outfit</Text>
                </View>
                <TouchableOpacity
                  style={{
                    padding: 12,
                    paddingHorizontal: 20,
                    backgroundColor: colors.primary,
                    borderRadius: 10,
                  }}
                  onPress={() => setIsPreview(false)}
                >
                  <Text style={globalStyles.buttonText}>New Outfit</Text>
                </TouchableOpacity>
              </View>

              {items.map((item: any, index: number) => (
                <PreviewCard
                  key={index}
                  title={item?.category || item?.title}
                  description={item?.description}
                  image={item?.image}
                />
              ))}
            </View>
          ) : (
            <Empty
              title="No Outfits Yet"
              subtitle="Click the add button below to create your first outfit"
              buttonText="Get Started"
              onPress={() => setIsPreview(false)}
            />
          )}
        </>
      ) : (
        <>
          <CreateForm
            onCreateSuccess={() => {
              loadItem();
              setIsPreview(true);
            }}
          />
        </>
      )}
    </ScrollView>
  );
}
