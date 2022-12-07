import jsCookie from "js-cookie";

export function getCookie(key: any) {
  let result = [];
  if (key) {
    const localData = jsCookie.get(key);
    if (localData && localData.length > 0) {
      result = JSON.parse(localData);
    }
  }

  return result;
}

export function setCookie(key: any, value: any) {
  jsCookie.set(key, JSON.stringify(value));
}