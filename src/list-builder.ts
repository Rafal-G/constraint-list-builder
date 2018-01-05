export namespace ListBuilder {
    
    export function setDefinition() {
       return 'setting definition';
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