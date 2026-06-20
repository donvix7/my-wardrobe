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
      <View>
        <Text style={globalStyles.subTitle}>Upload Image</Text>
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
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
    justifyContent: "center",
    height: "100%",
  },

  icons: {
    color: colors.textSecondary,
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    width: 70,
    height: 70,
    flex: 1,
  },

  iconText: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    color: colors.textSecondary,
  },
  list: {
    flexDirection: "row",
    paddingHorizontal: 80,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
