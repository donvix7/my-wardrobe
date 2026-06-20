import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Header({
  screen,
  subTitle,
}: {
  screen: string;
  subTitle: string;
}) {
  return (
    <View style={globalStyles.header}>
      <View>
        <Text style={globalStyles.title}>{screen}</Text>
        <Text style={globalStyles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}
