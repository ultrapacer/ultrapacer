type CallbackDict = {
    [key: string]: ((a: object) => void)[];
};
type CallbackFunction = (a: object) => void;
/**
 * Callbacks class facilitates adding/removing/executing callbacks for target object
 */
export declare class Callbacks {
    _callbacks: CallbackDict;
    _target: object;
    /**
     *
     * @param target - target object
     * @param events - array of event names to map
     */
    constructor(target: object, events: string[]);
    /**
     * add a callback function to an event
     * @param evt - event name
     * @param fun - callback function, first argument is target object
     */
    add(evt: string, fun: CallbackFunction): void;
    /**
     * remove a callback function from event
     * @param evt - event name
     * @param fun - callback function
     */
    remove(evt: string, fun: CallbackFunction): void;
    /**
     * clear all callbacks from a target
     * @param evt - event to clear; if undefined all events will be cleared
     */
    clear(evt?: string): void;
    /**
     * execute callbacks for an event
     * @param evt - event name
     */
    execute(evt: string): void;
}
export {};
