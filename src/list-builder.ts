export namespace ListBuilder {

    let definition = [];
    let list = [];
    /**
     * Sets the definition, checks that each node has an ID property.
     * @param {Array} def - the array of nodes to be set as the definition
     * @returns {Boolean} - returns false if one of the nodes doesn't have an id property
     */
    export function setDefinition(def: Array<object>): Boolean {
        let invalid = def.some(element => !element.hasOwnProperty('id'));
        invalid ? this.definition = [] : this.definition = def;
        return !invalid;
    }

    export function getDefinition() {
        return this.definition;
    }
    
    export function resetDefinition() {
        this.definition = [];
    }
    
    /**
     * Adds a node to the list
     * @param {object} node - The node to be added
     * @returns {Boolean} - true if the node has been added, false if the node hasn't been added
     */
    export function addNode(node: object): Boolean {
        //Should we care if the definition array is empty before we add
        if(node.hasOwnProperty('id')) {
            let last = this.list[this.list.length - 1];
            if(typeof last !== 'undefined' ) {
                let defintionEle = this.definition.find((ele) => ele.id === last.id);
                let allowed = defintionEle.allowedNodes.some(element => element === node['id']);
                if(allowed) {
                    this.list.push(node);
                    return true;
                } else {
                    return false;
                }
            } else {
                this.list.push(node);
                return true;
            }
        }
        return false;
    }

    export function getList(): any[] {
        return this.list;
    }

    export function resetList() {
        this.list = [];
    }

    export function removeLastNode() {
        this.list.pop();
    }

}