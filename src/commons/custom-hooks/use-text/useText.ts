import text from "./text.json";

export function getJsonProperty<T>(key: string, data: Record<string, any>): T {
  if (key === "") {
    return data as T;
  }

  const firstPoint = key.indexOf(".");
  if (firstPoint == -1) {
    return data[key];
  }

  const firstKey = key.substr(0, firstPoint);

  return getJsonProperty(
    key.substr(firstPoint + 1, key.length),
    data[firstKey]
  );
}

export function useText<T>(root: string = "") {
  return getJsonProperty<T>(root, text);
}
