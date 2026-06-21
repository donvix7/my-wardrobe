import { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { addPreset } from "../lib/actions";
import { getAllItems } from "../lib/service";
import { colors, globalStyles } from "../styles/global";
import CategoryModal from "./CategoryModal";
import CreateFormCard from "./CreateFormCard";

export default function CreateForm({
  onCreateSuccess,
}: {
  onCreateSuccess?: () => void;
}) {
  const [allItems, setAllItems] = useState<any[]>([]);
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: any }>({
    hat: null,
    top: null,
    bottom: null,
    shoes: null,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("");

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

  const data = [
    { id: 1, category: "hat", label: "Hat" },
    { id: 2, category: "top", label: "Top" },
    { id: 3, category: "bottom", label: "Bottom" },
    { id: 4, category: "shoes", label: "Shoes" },
  ];

  useEffect(() => {
    const loadItems = async () => {
      const all = await getAllItems();
      if (all) {
        setAllItems(all);
      }
    };
    loadItems();
  }, []);

  const handleOpenModal = (category: string) => {
    setActiveCategory(category);
    setModalVisible(true);
  };

  const handleSelectItem = (item: any) => {
    setSelectedItems((prev) => ({
      ...prev,
      [activeCategory]: item,
    }));
    setModalVisible(false);
  };

  const handleCreateOutfit = async () => {
    const selectedList = Object.values(selectedItems).filter(Boolean);
    if (selectedList.length === 0) {
      Alert.alert("Error", "Please select at least one item to create an outfit");
      return;
    }

    const parts = [];
    if (selectedItems.hat) parts.push(selectedItems.hat.description || "Hat");
    if (selectedItems.top) parts.push(selectedItems.top.description || "Top");
    if (selectedItems.bottom) parts.push(selectedItems.bottom.description || "Bottom");
    if (selectedItems.shoes) parts.push(selectedItems.shoes.description || "Shoes");
    const description = parts.join(", ");

    const mainImage =
      selectedItems.top?.image ||
      selectedItems.bottom?.image ||
      selectedItems.shoes?.image ||
      selectedItems.hat?.image;

    const preset = {
      image: mainImage,
      description: description || "My Custom Outfit",
      items: selectedList,
    };

    const res = await addPreset(preset);
    if (res) {
      Alert.alert("Success", "Outfit created successfully!");
      if (onCreateSuccess) {
        onCreateSuccess();
      }
    } else {
      Alert.alert("Error", "Failed to create outfit");
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <CreateFormCard
          key={item.id}
          category={item.label}
          selectedItem={selectedItems[item.category]}
          onPress={() => handleOpenModal(item.category)}
        />
      ))}
      <TouchableOpacity style={globalStyles.button} onPress={handleCreateOutfit}>
        <Text style={globalStyles.buttonText}>Create</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={globalStyles.centeredContainer}>
          <View style={[globalStyles.card, { width: "100%", maxHeight: "80%" }]}>
            <Text style={globalStyles.subTitle}>
              Select {categories.find((c) => c.value === activeCategory)?.label || "Item"}
            </Text>
            <CategoryModal
              visible={modalVisible}
              category={activeCategory}
              items={allItems}
              setModalVisible={setModalVisible}
              onSelectItem={handleSelectItem}
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
  container: {
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
});
