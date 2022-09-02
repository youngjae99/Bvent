import { LocalStorageKey } from '@constants/localStorage';

export const getItem = (key: LocalStorageKey) => {
    try {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
    } catch (e) {
        return;
    }
};

export const setItem = (
    key: LocalStorageKey,
    value: number | string | Record<string, unknown>
) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));

        return true;
    } catch (e) {
        return false;
    }
};

export const removeItem = (key: LocalStorageKey) => {
    localStorage.removeItem(key);
    return true;
};
