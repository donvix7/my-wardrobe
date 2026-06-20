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
      <Text style={globalStyles.subTitle}>{subtitle}</Text>
      <TouchableOpacity style={globalStyles.button}>
        <Text onPress={onPress} style={globalStyles.buttonText}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
