import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function CategoryModal({
  visible,
  category,
  items,
  setModalVisible,
  onSelectItem,
}: {
  category: string;
  items: any[];
  setModalVisible: (visible: boolean) => void;
  visible: boolean;
  onSelectItem?: (item: any) => void;
}) {
  const filteredItems = items.filter((item) => item.category === category);

  const renderItem = ({ item }: { item: any }) => {
    if (onSelectItem) {
      return (
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => {
            onSelectItem(item);
            setModalVisible(false);
          }}
        >
          <Image
            style={globalStyles.wardrobeCardImage}
            source={{ uri: item.image }}
          />
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.gridItem}>
        <Image
          style={globalStyles.wardrobeCardImage}
          source={{ uri: item.image }}
        />
      </View>
    );
  };

  return (
    visible && (
      <View style={styles.container}>
        {filteredItems.length > 0 ? (
          <FlatList
            data={filteredItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No items in this category</Text>
          </View>
        )}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 400,
    marginVertical: 10,
  },
  listContainer: {
    alignItems: "center",
  },
  gridItem: {
    margin: 8,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  emptyText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 16,
    textAlign: "center",
  },
});
