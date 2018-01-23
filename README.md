# Constraint List Builder
This project allows you to build a list but based on constraints that you set up.

You provide a defintion file when you initialize the object (or later), in the defintion file you set up a list of constraints. When you try adding a node to the list the constraints are checked to see if the node is allowed.

# How to use
I wrote an example project on how to use the library.

https://github.com/Rafal-G/constraint-list-builder-example

# Installation
`npm i constraint-list-builder --save`

# Tests
`npm test`

# Defining your contraints
Example of constraint structure
```javascript
[
    {
        "id": "node1",
        "allowedNodes": ["node2", "node3"]
        //other custom properties
    },
    {
        "id": "node2",
        "allowedNodes": ["node1"]
        //other custom properties
    },
    {
        "id": "node3",
        "allowedNodes": ["node4"]
        //other custom properties
    },
    {
        "id": "node4",
        "allowedNodes": []
        //other custom properties
    }

]
```
## Fields explained
id - id of the node

allowedNodes - array of ids of the nodes that are allowed to be added after the current node. 

In the above example if you've added `node1` to the list you can only add `node2` or `node3`. `node4` cannot be added. Since `node4` does not allow any nodes to be added if `node4` is ever added to the list, no other nodes can be added after it.

# Huge thanks to:
tsmean - for their excellent article https://www.tsmean.com/articles/how-to-write-a-typescript-library/

https://journal.artfuldev.com - for their article on setting up unit tests https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2

# Todo
- More unit test.
- update `Defining your contraints`, remove name.