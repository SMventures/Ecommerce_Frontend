export const color = [
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
   
    {
        id: "size",
        name: "Categories",
        options: [
            { value: "Financial", label: "Financial"},
            { value: "Stock Market", label: "Stock Market"},
            { value: "Marketing", label: "Marketing"},
        ],
    },
];

export const singleFilter=[
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "Rs-159 To rs-399" },
            { value: "399-999", label: "Rs-399 To rs-999" },
            { value: "999-1999", label: "Rs-999 To rs-1999" },
            { value: "1999-2999", label: "Rs-1999 To rs-2999" },
            { value: "3999-4999", label: "Rs-3999 To rs-4999" },
        ],  
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {
                value: "10",
                label: "10% And Above",
            },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
        ],   
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" },
        ],
    },
]