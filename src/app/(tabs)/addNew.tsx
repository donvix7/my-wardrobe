import Header from "@/Components/Header";
import ImageUploadModal from "@/Components/ImageUploadModal";
import PickerModal from "@/Components/PickerModal";
import { createItem } from "@/lib/actions";
import { colors, globalStyles } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function addNew() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [pickerModalVisible, setPickerModalVisible] = useState(false);

  const pickerRef = useRef(null);
  const router = useRouter();
  const categories = [
    {
      label: "Top",
      value: "top",
    },
    {
      label: "Bottom",
      value: "bottom",
    },
    {
      label: "Shoes",
      value: "shoes",
    },
    {
      label: "Accessory",
      value: "accessory",
    },
    {
      label: "hat",
      value: "hat",
    },
    {
      label: "belt",
      value: "belt",
    },
    {
      label: "scarf",
      value: "scarf",
    },
    {
      label: "bag",
      value: "bag",
    },
    {
      label: "watch",
      value: "watch",
    },
    {
      label: "glasses",
      value: "glasses",
    },
    {
      label: "jewelry",
      value: "jewelry",
    },
    {
      label: "other",
      value: "other",
    },
  ];

  const addItem = async () => {
    const payload = {
      category: category,
      description: description,
      image: image,
    };
    const res = await createItem(payload);
    if (res) {
      setCategory("");
      setDescription("");
      setImage("");
      router.push("/create");
    } else {
      Alert.alert("Error", "Failed to add item");
    }
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View>
        <Header
          screen="Add New Item to wardrobe"
          subTitle="Take a picture of the item you want to add"
        />
        <View style={globalStyles.subContainer}>
          {!category ? (
            <TouchableOpacity
              onPress={() => setPickerModalVisible(true)}
              style={styles.dropDown}
            >
              <Text style={globalStyles.subTitle}>Select Category</Text>
              <Ionicons name="chevron-down-outline" size={20} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setPickerModalVisible(true)}
              style={styles.dropDown}
            >
              <Text style={globalStyles.subTitle}>{category}</Text>
              <Ionicons name="chevron-down-outline" size={20} color="white" />
            </TouchableOpacity>
          )}
          <View style={globalStyles.card}>
            <Text style={globalStyles.subTitle}>Enter Description</Text>
            <TextInput
              multiline
              numberOfLines={2}
              value={description}
              onChangeText={setDescription}
              placeholder="Description"
              style={globalStyles.textarea}
            />
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.icons}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 150, height: 150 }}
              />
            ) : (
              <>
                <Ionicons name="add-outline" size={30} color="white" />
                <Text style={globalStyles.subTitle}>Upload Image</Text>
              </>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={addItem} style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ImageUploadModal
          setImage={setImage}
          setModalVisible={setModalVisible}
        />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={pickerModalVisible}
        onRequestClose={() => {
          setPickerModalVisible(false);
        }}
      >
        <PickerModal
          category={category}
          categories={categories}
          setModalVisible={setPickerModalVisible}
          setCategory={setCategory}
        />
      </Modal>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    gap: 5,
  },
  icons: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: colors.textSecondary,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.header,
  },
  dropDown: {
    gap: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.header,
    color: colors.textSecondary,
    padding: 20,
    borderRadius: 10,
  },
});
