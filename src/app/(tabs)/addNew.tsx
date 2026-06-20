import Header from "@/Components/Header";
import ImageUploadModal from "@/Components/ImageUploadModal";
import PickerModal from "@/Components/PickerModal";
import { createItem } from "@/lib/actions";
import { globalStyles } from "@/styles/global";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    Alert,
    Image,
    Modal,
    ScrollView,
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
      router.push("/create");
    } else {
      Alert.alert("Error", "Failed to add item");
    }
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Header
        isPreview={false}
        setIsPreview={(value: boolean) => false}
        screen="Add New Item to wardrobe"
        subTitle="Take a picture of the item you want to add"
      />
      <View style={globalStyles.card}>
        <Text style={globalStyles.subTitle}>Select Category</Text>

        <View style={{ width: "100%" }}>
          <TouchableOpacity
            onPress={() => setPickerModalVisible(true)}
            style={globalStyles.card}
          >
            <Text style={globalStyles.subTitle}>Select Category</Text>
            <TextInput
              value={category}
              onChangeText={setCategory}
              placeholder="Category"
              style={globalStyles.text}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={globalStyles.card}>
        <Text style={globalStyles.subTitle}>Enter Description</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          style={globalStyles.text}
        />
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={globalStyles.card}
      >
        <Text style={globalStyles.subTitle}>Upload Image</Text>
        <TextInput
          value={image}
          onChangeText={setImage}
          placeholder="Image"
          style={globalStyles.text}
        />
        {image && (
          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={addItem} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Add Item</Text>
      </TouchableOpacity>
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
