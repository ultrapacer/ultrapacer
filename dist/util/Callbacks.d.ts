/**
 * Callbacks class facilitates adding/removing/executing callbacks for target object
 */
export class Callbacks {
    /**
     *
     * @param {*} target target object
     * @param {[String]} events array of event names to map
     */
    constructor(target: any, events: [string]);
    _target: any;
    _callbacks: _.Dictionary<never[]>;
    /**
     * add a callback function to an event
     * @param {String} evt event name
     * @param {Function} fun callback function, first argument is target object
     */
    add(evt: string, fun: Function): void;
    /**
     * remove a callback function from event
     * @param {String} evt event name
     * @param {Function} fun callback function
     */
    remove(evt: string, fun: Function): void;
    /**
     * clear all callbacks from a target
     * @param {*} [evt] event to clear; if undefined all events will be cleared
     */
    clear(evt?: any): void;
    /**
     * execute callbacks for an event
     * @param {String} event event name
     */
    execute(event: string): void;
}
import _ from 'lodash';
