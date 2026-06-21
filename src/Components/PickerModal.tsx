import { Picker } from "@react-native-picker/picker";
import { Button, StyleSheet, View } from "react-native";
import { colors, globalStyles } from "../styles/global";

export default function PickerModal({
  category,
  categories,
  setModalVisible,
  setCategory,
}: {
  categories: { label: string; value: string }[];
  category: string;
  setModalVisible: (visible: boolean) => void;
  setCategory: (category: string) => void;
}) {
  return (
    <View style={globalStyles.pickerContainer}>
      <Picker
        selectedValue={category}
        onValueChange={(selectedValue: any) => {
          setCategory(selectedValue);
          setModalVisible(false);
        }}
      >
        {categories.map((category) => (
          <Picker.Item
            key={category.value}
            label={category.label}
            value={category.value}
            style={globalStyles.pickerItem}
          />
        ))}
      </Picker>
      <Button
        title="Close"
        color={colors.text}
        onPress={() => setModalVisible(false)}
      />
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
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    alignItems: "center",
  },

  pickerContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  picker: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: colors.accent,
  },
  pickerItem: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: colors.accent,
  },
});
