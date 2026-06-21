import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, globalStyles } from "../styles/global";

export default function ImageUploadModal({
  setModalVisible,
  setImage,
}: {
  setModalVisible: (visible: boolean) => void;
  setImage: (image: string) => void;
}) {
  const handleGallery = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setModalVisible(false);
    }
  };

  const handleCamera = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync({
      cameraType: ImagePicker.CameraType.front,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={globalStyles.title}>Upload Image</Text>
        <Text style={globalStyles.subTitle}>
          Select an image from your device
        </Text>
      </View>
      <View style={styles.list}>
        <TouchableOpacity style={styles.icons} onPress={handleGallery}>
          <Ionicons name="image" size={30} color="white" />
          <Text style={styles.iconText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={handleCamera}>
          <Ionicons name="camera" size={30} color="white" />
          <Text style={styles.iconText}>Camera</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => setModalVisible(false)}
      >
        <Text style={globalStyles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: 100,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    gap: 20,
  },

  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  icons: {
    color: colors.textSecondary,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "column",
    gap: 4,
    justifyContent: "center",
    width: 70,
    height: 70,
  },

  iconText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  list: {
    gap: 10,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
});
