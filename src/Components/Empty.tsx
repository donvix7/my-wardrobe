import { globalStyles } from "@/styles/global";
import { Text, TouchableOpacity, View } from "react-native";

export default function Empty({
  title,
  subtitle,
  buttonText,
  onPress,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  onPress: () => void;
}) {
  return (
    <View style={globalStyles.empty}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.emptyText}>{subtitle}</Text>
      <TouchableOpacity onPress={onPress} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
