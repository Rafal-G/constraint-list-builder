let incorrectDef = [
    {
        "id": "node1",
        "allowedNodes": ["node2", "node3"]
    },
    {
        "id": "node2",
        "allowedNodes": ["node1"]
    },
    {
        "id": "node3",
        "allowedNodes": ["node4"]
    },
    {
        "allowedNodes": []
    }

]

export { incorrectDef }