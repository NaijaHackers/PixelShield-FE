import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;

export const hasObjectChanged = (obj1: Record<string, unknown> | unknown, obj2: Record<string, unknown>): boolean => {
    return JSON.stringify(obj1) !== JSON.stringify(obj2);
};

export const getBrowserLocale = (): string => navigator.language || 'en-US';

export const formatNumber = (
    value: number | string,
    locale: string = getBrowserLocale(),
    options: Intl.NumberFormatOptions = {
        notation: 'standard',
        maximumFractionDigits: 6
    }
): string => new Intl.NumberFormat(locale, options).format(Number(value));
 
export const encode = (data: string): string => {
    return btoa(unescape(encodeURIComponent(data))); // Encode as UTF-8
};

export const decode = (data: string): string => {
    return decodeURIComponent(escape(atob(data))); // Decode from UTF-8
};

export function setItem<T>(key: string, value: T): void {
    try {
        const serializedValue = encode(JSON.stringify(value));
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error(`Error setting item in local storage: ${error}`);
    }
}
 
export function getItem<T>(key: string): T | null {
    try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) {
            return null;
        }
        return JSON.parse(decode(serializedValue)) as T;
    } catch (error) {
        console.error(`Error getting item from local storage: ${error}`);
        return null;
    }
}

export function removeItem(key: string): void {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing item from local storage: ${error}`);
    }
}