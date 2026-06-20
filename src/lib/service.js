import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_KEY = "my-wardrobe-items";
const PRESETS_KEY = "my-wardrobe-presets";

export async function getLastItem() {
  try {
    const items = await AsyncStorage.getItem(ITEMS_KEY);
    if (!items) return null;
    const parsedItems = JSON.parse(items);
    if (!Array.isArray(parsedItems) || parsedItems.length === 0) {
      if (parsedItems && typeof parsedItems === "object") {
        return [parsedItems];
      }
      return null;
    }
    return parsedItems.slice(-1);
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getPreset() {
  try {
    const presets = await AsyncStorage.getItem(PRESETS_KEY);
    if (!presets) return null;
    const parsedPresets = JSON.parse(presets);
    if (!Array.isArray(parsedPresets) || parsedPresets.length === 0) {
      if (parsedPresets && typeof parsedPresets === "object") {
        return [parsedPresets];
      }
      return null;
    }
    return parsedPresets;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getLastPreset() {
  try {
    const presets = await getPreset();
    if (!presets) return null;
    return presets.slice(-1);
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllItems() {
  try {
    const items = await AsyncStorage.getItem(ITEMS_KEY);
    if (!items) return null;
    const parsedItems = JSON.parse(items);
    if (!Array.isArray(parsedItems) || parsedItems.length === 0) {
      if (parsedItems && typeof parsedItems === "object") {
        return [parsedItems];
      }
      return null;
    }
    return parsedItems;
  } catch (error) {
    console.log(error);
    return null;
  }
}
