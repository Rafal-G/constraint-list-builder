# constraint-list-builder
Core functionality is done.

Need to convert so that someone can construct this as an object.
Need to still do a writeup on what this is for.

# Tests
npm test

# Defining your contraints
Example of constraint structure
```javascript
[
    {
        "id": "node1",
        "name": "optionalName1",
        "allowedNodes": ["node2", "node3"]
        //other custom properties
    },
    {
        "id": "node2",
        "name": "optionalName2",
        "allowedNodes": ["node1"]
        //other custom properties
    },
    {
        "id": "node3",
        "name": "optionalName3",
        "allowedNodes": ["node4"]
        //other custom properties
    },
    {
        "id": "node4",
        "name": "optionalName4",
        "allowedNodes": []
        //other custom properties
    }

]
```
## Fields explained
id - id of the node

name - optional field for name of node

allowedNodes - array of ids of the nodes that are allowed to be added after the current node. 

In the above example if you've added `node1` to the list you can only add `node2` or `node3`. `node4` cannot be added. Since `node4` does not allow any nodes to be added if `node4` is ever added to the list, no other nodes can be added after it.

# Huge thanks to:
tsmean - for their excellent article https://www.tsmean.com/articles/how-to-write-a-typescript-library/

https://journal.artfuldev.com - for their article on setting up unit tests https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2