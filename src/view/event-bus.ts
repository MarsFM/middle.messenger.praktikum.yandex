interface IEventBus {
    listeners: Record<string, Function[]>;
    on: (event: string, callback: Function) => void;
    off: (event: string, callback: Function) => void;
    emit: (event: string, ...args: any[]) => void;
};

export class EventBus implements IEventBus {
    listeners;

    constructor() {
        this.listeners = {};
    }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event, callback) {
        this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
    }

    emit(event, ...args) {
        if (!this.listeners[event]) {
            throw new Event(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(listener => {
            listener(...args);
        });
    }
};
