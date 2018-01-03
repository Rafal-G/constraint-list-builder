# constraint-list-builder
This library currently doesn't work. Do not use.

# Defining your contraints
Example of constraint structure
```javascript
//TODO: find better name for acceptsConnectionsFrom
[
    {
        id: node1,
        name: optionalName1,
        acceptsConnectionsFrom: [node2, node3]
    },
    {
        id: node2,
        name: optionalName2,
        acceptsConnectionFrom: [node1]
    },
    {
        id: node3,
        name: optionalName3,
        acceptsConnectionFrom: [node2]
    }

]
```

# Huge thanks to:
tsmean - for their excellent article https://www.tsmean.com/articles/how-to-write-a-typescript-library/