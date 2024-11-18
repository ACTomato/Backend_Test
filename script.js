const orders = [
    {
        id: 1,
        status: 'delivered',
        deliveryDate: '2024-10-05',
        items: [
            { productName: 'Item1', quantity: 2, price: 50 },
            { productName: 'Item2', quantity: 1, price: 100 }
        ]
    },
    {
        id: 2,
        status: 'pending',
        deliveryDate: '2024-10-12',
        items: [
            { productName: 'Item3', quantity: 1, price: 200 }
        ]
    },
    {
        id: 3,
        status: 'delivered',
        deliveryDate: '2024-10-12',
        items: [
            { productName: 'Item3', quantity: 1, price: 200 }
        ]
    },
    {
        id: 4,
        status: 'delivered',
        deliveryDate: '2024-01-12',
        items: [
            { productName: 'Item3', quantity: 3, price: 75 }
        ]
    },
    {
        id: 5,
        status: 'delivered',
        deliveryDate: '2024-10-12',
        items: [
            { productName: 'Item3', quantity: 1, price: 200 }
        ]
    },
    {
        id: 6,
        status: 'delivered',
        deliveryDate: '2024-11-12',
        items: [
            { productName: 'Item3', quantity: 1, price: 5000 },
            { productName: 'Item3', quantity: 1, price: 5000 },
            { productName: 'Item3', quantity: 2, price: 636 },
        ]
    }
];

const calc = function (orders) {
    const filteredOrders = {}
    for (let i = 0; i < orders.length; i++) {
        if(orders[i].status === 'delivered') {
            let month = orders[i].deliveryDate.split('-')[1];
            const months = ['January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
            ]
            month = months[month - 1];
            
            for (let c = 0; c < orders[i].items.length; c++) {
                let amount = 0;
                amount += orders[i].items[c].price * orders[i].items[c].quantity; 
                if (!filteredOrders[month]) {
                    filteredOrders[month] = amount
                } else {
                    filteredOrders[month] += amount;
                }
            }  
        } 
    }
    return filteredOrders;
};

console.log(calc(orders))

