function isObject(object: object): boolean {
    return object != null && typeof object === 'object';
}

export function isEqual(a: Record<string, any>, b: Record<string, any>): boolean {
    const keys1 = Object.keys(a);
    const keys2 = Object.keys(b);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const val1 = a[key];
        const val2 = b[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            (areObjects && !isEqual(val1, val2)) ||
            (!areObjects && val1 !== val2)
        ) {
            return false;
        }
    }

    return true;
}

export function isEqualString(str1: string, str2: string): boolean {
    return str1 === str2;
}
