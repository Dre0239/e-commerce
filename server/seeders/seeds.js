const db = require('../config/connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Sees Candy',
      description:
        'An irresistible mixture of best-selling creamy, nutty, chewy and soft center favorites wrapped in Sees rich milk and dark chocolates.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'Matcha Green tea',
      description:
        'Matcha is a high-grade green tea ground into powdered form. The green tea powder is whisked into hot water, instead of steeped, to form a frothy drink. The meditative act of preparing, presenting, and sipping matcha is the backbone of the Japanese tea ceremony',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 5.99,
      quantity: 500
    },
    {
      name: 'Charmin Toilet ',
      category: categories[1]._id,
      description:
        'Sheer comfort and excellent durability combined make Charmin Ultra Soft the best toilet paper to use every day.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'SoftSoap',
      category: categories[1]._id,
      description:
        'Softsoap® Antibacterial Liquid Hand Soap, Crisp Clean is clinically proven to eliminate "99.9%" of bacteria leaving your skin feeling clean and protected.',
      image: 'soap.jpg',
      price: 1.99,
      quantity: 50
    },
    {
      name: 'Home Hero 44-pcs Kitchen Utensils Set ',
      category: categories[1]._id,
      description:
        'High quality that lasts - These kitchen gadgets are made to stand the test of time. Top of the range 430 stainless steel handles provide greater durability than other plastic kitchen utensil sets',
      image: 'wooden-spoons.jpg',
      price: 69.99,
      quantity: 100
    },
    {
      name: 'RAV Tripod',
      category: categories[2]._id,
      description:
        'It is foldable and easy to carry. It has good stability due to the silicone caps on the floor part of the stand. Other caps made of the polyester cord will also defend the instrument from scratches while being installed. The stand is adjustable thanks to the belts that set the Tripod according to the drums diameter.',
      image: 'camera.jpg',
      price: 99.00,
      quantity: 30
    },
    {
      name: '85" Class QN900C Samsung Neo QLED 8K Smart TV (2023)',
      category: categories[2]._id,
      description:
        'The Infinity Screen with Slim One Connect provides edge-to-edge 8K picture that defies limits and redefines expectations.See worlds within worlds with unparalleled 8K precision made possible by a universe of tiny lights with Quantum Matrix Pro with Mini LEDs.',
      image: 'tablet.jpg',
      price: 7999.99,
      quantity: 500
    },
    {
      name: 'Abiyoyo',
      category: categories[3]._id,
      description:
        'A young boy and his father save the town that ostracized them from a hungry giant in this picture book adaptation of a South African lullaby and folk story.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Mongoose Legion Kids Freestyle BMX Bike, Intermediate Rider, Boys and Girls Bikes, Hi-Ten Steel Frame',
      category: categories[4]._id,
      description: 'L20 is a stylish freestyle BMX bike that offers everything a beginning rider needs to hit the streets and pop off curbs, Suggested rider height is 48-54 Built to last with its Hi-Ten steel frame removable brake mounts',
      image: 'spinning-top.jpg',
      price: 300.99,
      quantity: 100
    },
    {
      name: 'Hot-Wheels',
      category: categories[4]._id,
      description:
        'Hot Wheels is an American brand of scale model cars introduced by American toymaker Mattel in 1968. It was the primary competitor of Matchbox until 1997, when Mattel bought Tyco Toys, then owner of Matchbox.',
      image: 'plastic-horses.jpg',
      price: 13.99,
      quantity: 1000
    },
    {
      name: 'Barbie Dreamhouse',
      category: categories[4]._id,
      description:
        'Doll House Playset with 70+ Accessories Including Transforming Furniture, Elevator, Slide, Lights & Sounds',
      image: 'teddy-bear.jpg',
      price: 224.99,
      quantity: 100
    },
    {
      name: 'LEGO',
      category: categories[4]._id,
      description:
        'Lego, consists of variously colored interlocking plastic bricks made of acrylonitrile butadiene styrene that accompany an array of gears, figurines called minifigures, and various other parts.',
      image: 'alphabet-blocks.jpg',
      price: 199.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
