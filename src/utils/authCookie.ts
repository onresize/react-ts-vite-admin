import Cookies from "js-cookie";
import { TokenKey } from "@/config/config";

export function getToken() {
	return Cookies.get(TokenKey);
}

export function setToken(token: any) {
	return Cookies.set(TokenKey, token);
}

export function removeToken() {
	return Cookies.remove(TokenKey);
}
