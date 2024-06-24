import AsyncStorage from "@react-native-async-storage/async-storage";

export const localStorage = () => {
  const save = async (key: string, value: any) => {
    try {
      const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    } catch (error) {
      console.log('Error en local Storage' + error);
    }
  };

  const getItem = async (key: string) => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.log('Error en local Storage' + error);
    }
  };

  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('Error en local Storage' + error);
    }
  };

  return { save, getItem, removeItem };
};
