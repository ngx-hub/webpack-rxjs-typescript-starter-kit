// Property Decorator
export const Emoji: () => (target: Object, key: string|symbol) => void = () => {
    return (target: Object, key: string|symbol) => {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: () => val,
            set: (value: string) => val = `🍦 ${value} 🍦`,
            enumerable: true,
            configurable: true,
        });
    };
};