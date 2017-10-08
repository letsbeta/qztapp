import {
    Alert
} from "react-native";

export function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

export function alertMe(msg) {
    Alert.alert("WARN", msg);
}