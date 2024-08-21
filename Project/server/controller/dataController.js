
const dummyData = [
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
    },
    {
        name: "Bob Smith",
        email: "bob.smith@example.com"
    },
    {
        name: "Charlie Brown",
        email: "charlie.brown@example.com"
    },
    {
        name: "David Wilson",
        email: "david.wilson@example.com"
    },
    {
        name: "Emma Davis",
        email: "emma.davis@example.com"
    },
    {
        name: "Fiona Clark",
        email: "fiona.clark@example.com"
    },
    {
        name: "George Martinez",
        email: "george.martinez@example.com"
    },
    {
        name: "Hannah Lewis",
        email: "hannah.lewis@example.com"
    },
    {
        name: "Ivy Robinson",
        email: "ivy.robinson@example.com"
    },
    {
        name: "Jack Walker",
        email: "jack.walker@example.com"
    }
];

module.exports.getData = (req, res) => {
    res.status(201).json({succes:true,data:dummyData})
};