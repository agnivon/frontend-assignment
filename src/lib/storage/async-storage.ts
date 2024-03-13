import AsyncStorage from "@react-native-async-storage/async-storage";
import { ZodError, ZodSchema } from "zod";

class Storage {
  async get<T>(
    key: string,
    schema: ZodSchema<T>
  ): Promise<
    { success: true; data: T } | { success: false; error: ZodError | string }
  > {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      return schema.safeParse(JSON.parse(data));
    } else return { success: false, error: "Value  not found" };
  }
  async set(key: string, value: any, schema: ZodSchema) {
    return AsyncStorage.setItem(key, JSON.stringify(schema.parse(value)));
  }
}

const AsyncStorageInstance = new Storage();

export default AsyncStorageInstance;
