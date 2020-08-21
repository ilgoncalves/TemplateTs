import AsyncStorage from '@react-native-community/async-storage';

class Storage {

	static save(key: string, obj: string) {
		return AsyncStorage.setItem(key, JSON.stringify(obj));
	}

	static get(key: string) {
		return new Promise(async (resolve) => {
			const result = await AsyncStorage.getItem(key);
			const resultJson = JSON.parse(result);
			resolve(resultJson);
		})
	}

	static remove(key: string) {
		return AsyncStorage.removeItem(key)
	}

	static clear() {
		return AsyncStorage.clear()
	}
}

export { Storage };
