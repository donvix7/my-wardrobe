import AsyncStorage from "@react-native-async-storage/async-storage";

const DB_KEY = "my-wardrobe";
const ITEMS_KEY = "my-wardrobe-items";
const PRESETS_KEY = "my-wardrobe-presets";

export async function createItem(item) {
  try {
    const existingItemsStr = await AsyncStorage.getItem(ITEMS_KEY);
    let items = [];
    if (existingItemsStr) {
      try {
        const parsed = JSON.parse(existingItemsStr);
        items = Array.isArray(parsed) ? parsed : [parsed];
      } catch (e) {
        items = [];
      }
    }
    items.push(item);
    await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(items));
    return item;
  } catch (error) {
    console.log(error);
  }
}
export async function addPreset(preset) {
  try {
    const existingPresetsStr = await AsyncStorage.getItem(PRESETS_KEY);
    let presets = [];
    if (existingPresetsStr) {
      try {
        const parsed = JSON.parse(existingPresetsStr);
        presets = Array.isArray(parsed) ? parsed : [parsed];
      } catch (e) {
        presets = [];
      }
    }
    presets.push(preset);
    await AsyncStorage.setItem(PRESETS_KEY, JSON.stringify(presets));
    return preset;
  } catch (error) {
    console.log(error);
  }
}

export async function addItem(item) {
  return createItem(item);
}
