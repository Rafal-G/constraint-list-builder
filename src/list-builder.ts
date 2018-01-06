export namespace ListBuilder {
    
    let definition = [];
    /**
     * Sets the definition, checks that each node has an ID property.
     * @param {Array} def - the array of nodes to be set as the definition
     * @returns {Boolean} - returns false if one of the nodes doesn't have an id property
     */
    export function setDefinition(def: Array<object>): Boolean {
        let invalid = def.some(element => !element.hasOwnProperty('id'));
        invalid ? this.definition = [] : definition = def;
        return !invalid;
    }
    
    /**
     * Adds a node to the list
     * @param {any} node - The node to be added
     * @returns {Boolean} - true if the node has been added, false if the node hasn't been added
     */
    export function addNode(node: any): Boolean {
        return false;
    }

    export function removeLastNode() {
        return 'remove last node'
    }

    export function getList() {
        return 'getting list';
    }

  }