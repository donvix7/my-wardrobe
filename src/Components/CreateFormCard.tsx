import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/global";

export default function CreateFormCard({
  category,
  selectedItem,
  onPress,
}: {
  category: string;
  selectedItem?: any;
  onPress: () => void;
}) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.listContainer} onPress={onPress}>
        {selectedItem ? (
          <>
            <Image
              source={{ uri: selectedItem.image }}
              style={styles.image}
            />
            <Text style={styles.text}>{selectedItem.description || category}</Text>
          </>
        ) : (
          <>
            <Ionicons name="image" size={80} color={colors.textSecondary} />
            <Text style={styles.text}>{category}</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 10,
    width: "100%",
    gap: 10,
  },
  card: {
    height: 150,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: colors.header,
  },
  text: {
    color: colors.textSecondary,
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
