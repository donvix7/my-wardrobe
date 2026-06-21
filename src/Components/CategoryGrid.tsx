import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../styles/global";
import CategoryModal from "./CategoryModal";
import Empty from "./Empty";

export default function CategoryGrid({ items }: { items: any }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState("");

  const categories = [
    { label: "Tops", value: "top" },
    { label: "Bottoms", value: "bottom" },
    { label: "Shoes", value: "shoes" },
    { label: "Accessories", value: "accessory" },
    { label: "Hats", value: "hat" },
    { label: "Belts", value: "belt" },
    { label: "Scarves", value: "scarf" },
    { label: "Bags", value: "bag" },
    { label: "Watches", value: "watch" },
    { label: "Glasses", value: "glasses" },
    { label: "Jewelry", value: "jewelry" },
    { label: "Other", value: "other" },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setCategory(item.category);
        setModalVisible(true);
      }}
    >
      <Image
        style={globalStyles.wardrobeCardImage}
        source={{ uri: item.image }}
      />
    </TouchableOpacity>
  );

  return (
    <View>
      {categories.length > 0 ? (
        categories.map((category) => (
          <View key={category.value} style={styles.category}>
            <Text style={globalStyles.subTitle}>{category.label}</Text>
            <FlatList
              data={items.filter(
                (item: any) => item.category === category.value,
              )}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={3}
              scrollEnabled={false}
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

      {/* Create a modal to allow the user to select the category of the item */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={globalStyles.centeredContainer}>
          <View
            style={[globalStyles.card, { width: "100%", maxHeight: "80%" }]}
          >
            <Text style={globalStyles.subTitle}>
              {categories.find((c) => c.value === category)?.label ||
                "Category Items"}
            </Text>
            <CategoryModal
              visible={modalVisible}
              category={category}
              items={items}
              setModalVisible={setModalVisible}
            />
            <TouchableOpacity
              style={globalStyles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={globalStyles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    margin: 8,
  },
  category: {
    width: "100%",
    minHeight: 100,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
