import { InvalidNodeError } from './invalid-node-error';
import { Definition } from './interfaces/i.definition';

export class ListBuilder {

    definition: Array<any>;
    list: Array<any>;

    constructor(def?: Array<Definition>) {
        this.definition = [];
        this.list = [];
        
        if(def) {
            this.setDefinition(def);
        }
    }
    
    /**
     * Sets the definition, checks that each node has an ID property.
     * @param {Array} def - the array of nodes to be set as the definition
     * @returns {Boolean} - returns false if one of the nodes doesn't have an id property
     */
    setDefinition(def: Array<Definition>): Boolean {
        let invalid = def.some(element => !element.hasOwnProperty('id'));
        invalid ? this.definition = [] : this.definition = def;
        return !invalid;
    }

    /**
     * Adds a node to the list doesn't throw any exception, only returns true or false.
     * @param {object} node - The node to be added
     * @returns {Boolean} - true if the node has been added, false if the node hasn't been added
     */
    addFast(node: object): Boolean {
        return this.add(node, false);
    }
    
    /**
     * Adds a node to the list, this throws an error when an invalid node is added.
     * @param {object} node - The node to be added
     * @returns {Boolean} - true if the node has been added, false if the node hasn't been added
     * @throws {InvalidNodeError} - if the node that's trying to be added has no id field
     */
    addNode(node: object): Boolean {
        return this.add(node, true);
    }

    private add(node: any, throwError: boolean): Boolean {

        if(this.getDefinition().length <= 0) {
            return this._handleRejection('There is no definition set. Cannot add node until a definition has been set', throwError)
        }

        if(!node.hasOwnProperty('id')) {
            return this._handleRejection('The node that\'s being added has no id field', throwError)
        }

        let last = this.list[this.list.length - 1];
        //Is there an item in the array?
        if(typeof last !== 'undefined') {
            let defintionEle = this.definition.find((ele) => ele.id === last.id);
            let allowed = defintionEle.allowedNodes.some(element => element === node['id']);

            if(allowed) {
                this.list.push(node);
                return true;
            }
            return false;

        //No item in the array. See if definition exists for the node and add it
        } else {
            let definitionExists = this.definition.find(e => e.id === node.id)
            if(definitionExists) {
                this.list.push(node);
                return true;
            } else {
                return this._handleRejection('The node that\'s being added doesn\'t have any matching definition', throwError);
            }
        }
    }

    /**
     * Removes the last node.
     */
    removeLastNode() {
        this.list.pop();
    }

    /**
     * Returns the set list.
     * @returns {any[]} - The list of objects you have created.
     */
    getList(): any[] {
        return this.list;
    }

    /**
     * Resets list to empty array.
     */
    resetList() {
        this.list = [];
    }

    /**
     * Returns the set defintion.
     * @returns {Array<any>} - returns the set defintion array. Empty array if none set.
     */
    getDefinition(): Array<any> {
        return this.definition;
    }
    
    /**
     * Resets definition to empty array.
     */
    resetDefinition() {
        this.definition = [];
    }

    _handleRejection(msg, throwError) {
        if(throwError) {
            throw new InvalidNodeError(msg);
        } else {
            return false;
        }
    }

}   