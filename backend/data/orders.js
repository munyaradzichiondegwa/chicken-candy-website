const orders = [
  {
    user: '', // will fill after users are inserted
    orderItems: [
      {
        name: 'Fried Chicken',
        qty: 2,
        price: 5.99,
      },
      {
        name: 'Chicken Burger',
        qty: 1,
        price: 6.99,
      },
    ],
    totalPrice: 18.97,
    isPaid: true,
  },
  {
    user: '',
    orderItems: [
      {
        name: 'Chicken Wings',
        qty: 3,
        price: 7.99,
      },
    ],
    totalPrice: 23.97,
    isPaid: false,
  },
];

export default orders;
