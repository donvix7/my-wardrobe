import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import { colors, globalStyles } from "../styles/global";

export default function CreateForm({}: {}) {
  return (
    <View style={globalStyles.container}>
      <Picker
        style={globalStyles.pickerContainer}
        onValueChange={(selectedValue: any) => {}}
      >
        <Picker.Item style={globalStyles.pickerItem} />
      </Picker>
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
    width: 50,
    height: 50,
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
});
