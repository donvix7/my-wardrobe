import { Image, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function PreviewCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <View style={globalStyles.previewCard}>
      {image ? (
        <Image source={{ uri: image }} style={globalStyles.previewCardImage} />
      ) : (
        <Text style={globalStyles.empty}>No Image</Text>
      )}
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.subTitle}>{description}</Text>
    </View>
  );
}
