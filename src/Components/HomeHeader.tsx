import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function HomeHeader() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const monthAndDay = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  const year = currentDate.getFullYear();
  return (
    <View style={globalStyles.date}>
      <Text style={globalStyles.date}>
        {dayOfWeek}, {monthAndDay}, {year}
      </Text>
    </View>
  );
}
