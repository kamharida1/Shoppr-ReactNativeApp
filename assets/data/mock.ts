import { ICatelogue, ICatelogueItem, ICatelogueProduct, IFilterItem, IProduct, IProductList, IOrderOverview, IOrderDetails, IAddress } from "./model"

export const newProducts: IProductList = {
    title: 'New products',
    products: [
        { id: 1, name: 'White shirt', background: '#F1EFF5', image: require('./../images/product1.png'), amount: 1200 },
        { id: 2, name: 'Little dress', background: '#F1EFF5', image: require('./../images/product2.png'), amount: 700 },
        { id: 3, name: 'Another dress', background: '#F1EFF5', image: require('./../images/product3.png'), amount: 800 },
    ]
}

export const recommended: IProductList = {
    title: 'Recommended for you',
    products: [
        { id: 1, name: 'Wide neck shirt', background: '#F1EFF5', image: require('./../images/product3.png'), amount: 1200 },
        { id: 2, name: 'Floral white dress', background: '#F1EFF5', image: require('./../images/product4.png'), amount: 700 },
        { id: 3, name: 'Another dress', background: '#F1EFF5', image: require('./../images/product1.png'), amount: 800 },
    ]
}

export const favorites: IProduct[] = [
    { id: 3, name: 'Another dress', background: '#F1EFF5', image: require('./../images/product1.png'), amount: 800 },
    { id: 2, name: 'Little dress', background: '#F1EFF5', image: require('./../images/product2.png'), amount: 700 },
    { id: 1, name: 'Another dress', background: '#F1EFF5', image: require('./../images/product3.png'), amount: 800 },
    { id: 4, name: 'Floral white dress', background: '#F1EFF5', image: require('./../images/product4.png'), amount: 700 },
    { id: 5, name: 'Wide neck shirt', background: '#F1EFF5', image: require('./../images/product3.png'), amount: 1200 },
]

export const catelogues: ICatelogue[] = [
    { id: 1, name: 'Prepare to summer', image: require('./../images/catelogue1.png') },
    { id: 2, name: 'The family style secrets', image: require('./../images/catelogue2.png') },
    { id: 3, name: 'Summer fashion advice', image: require('./../images/catelogue3.png') },
]



export const catelogueList: ICatelogueItem[] = [
    { id: 1, name: 'Footwear', description: 'Boots, shoes, sneakers', image: require('./../images/hiking-shoes-3054634_640-1.png') },
    { id: 2, name: 'Outerwear', description: 'Jackets and coats', image: require('./../images/image-54.png') },
    { id: 3, name: 'Pants', description: 'Jeans and trousers', image: require('./../images/image-52.png') },
    { id: 4, name: 'Sweatshirts and hoodies', description: 'Jumpers, sweaters, robes', image: require('./../images/image-58.png') },
    { id: 5, name: 'Underwear', description: 'Belts, scarfs, ties', image: require('./../images/image-59.png') },
    { id: 6, name: 'Accessories', description: 'Belts, scarfs, ties', image: require('./../images/image-55.png') },
]

export const catelogueProductList: ICatelogueProduct[] = [
    { id: 1, name: 'Beige woolen coat', image: require('./../images/image-01.png'), price: 1200 },
    { id: 2, name: 'Bomber', image: require('./../images/image-02.png'), price: 1500 },
    { id: 3, name: 'Denim jacket', image: require('./../images/image-03.png'), price: 1000 },
    { id: 4, name: 'Leather jacket', image: require('./../images/image-04.png'), price: 900 },
    { id: 5, name: 'Brown coat', image: require('./../images/image-05.png'), price: 1900 },
    { id: 6, name: 'Winter jacket', image: require('./../images/image-06.png'), price: 2000 },
    { id: 7, name: 'Brown coat', image: require('./../images/image-05.png'), price: 1900 },
    { id: 8, name: 'Winter jacket', image: require('./../images/image-06.png'), price: 2000 },
]

export const colorFilterList: IFilterItem[] = [
    { id: 1, name: 'Black', color: '#000' },
    { id: 2, name: 'Grey', color: '#c6c6c6' },
    { id: 3, name: 'White', color: '#fff' },
    { id: 4, name: 'Blue', color: '#541EEF' },
    { id: 5, name: 'Green', color: '#00D72F' },
    { id: 6, name: 'Yellow', color: '#FFD952' },
]

export const brandFilterList: IFilterItem[] = [
    { id: 1, name: 'Burberry' },
    { id: 2, name: 'Ralph Lauren' },
    { id: 3, name: 'Chanel' },
    { id: 4, name: 'Prada' },
    { id: 5, name: 'Gucci' },
    { id: 6, name: 'Louis Vuitton' },
]

export const clothFilterList: IFilterItem[] = [
    { id: 1, name: 'Silk' },
    { id: 2, name: 'Cotton' },
    { id: 3, name: 'Linen' },
    { id: 4, name: 'Satin' },
    { id: 5, name: 'Denim' },
    { id: 6, name: 'Chiffon' },
]

export const genderFilterList: IFilterItem[] = [
    { id: 1, name: 'Men' },
    { id: 2, name: 'Women' },
    { id: 3, name: 'Kids' },
]

export const sizeFilterList: IFilterItem[] = [
    { id: 1, name: 'XS' },
    { id: 2, name: 'S' },
    { id: 3, name: 'M' },
    { id: 3, name: 'L' },
    { id: 3, name: 'XL' },
]

export const orderOverviewList: IOrderOverview[] = [
    {
        orderId: 'TFSdglUQas',
        deliveryTime: 'Today, 3:31 PM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 65,
        items: 'Beige woolen coat (1)',
        status: 'On the way to your location'
    },
    {
        orderId: 'KZvkoCeLHZ',
        deliveryTime: 'Yesterday, 06:16 PM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 165,
        items: 'Sweatshirts and hoodies (2)',
        status: 'Order Delivered'
    },
    {
        orderId: 'TjJBgHprtP',
        deliveryTime: '27 Dec 2020, 11:21 AM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 265,
        items: 'Beige woolen coat (1)',
        status: 'Order Delivered'
    },
    {
        orderId: 'WOauZYCtDM',
        deliveryTime: '13 Dec 2020, 1:20 PM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 135,
        items: 'Beige woolen coat (1)',
        status: 'Cancelled'
    },
    {
        orderId: 'AshdCyRUYS',
        deliveryTime: '07 Nov 2020, 3:31 PM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 785,
        items: 'Beige woolen coat (1)',
        status: 'Order Delivered'
    },
]

export const orderDetails: IOrderDetails = {
    orderId: 'AshdCyRUYS',
    items: [
        {
            id: 1,
            name: 'Beige woolen coat',
            quantity: 1,
            price: 125.00,
            total: 125.00
        },
        {
            id: 2,
            name: 'Sweatshirts and hoodies',
            quantity: 2,
            price: 105.00,
            total: 210.00
        },
        {
            id: 3,
            name: 'Leather jacket',
            quantity: 1,
            price: 160.00,
            total: 160.00
        }
    ],
    total: 495.00,
    discount: 0,
    deliveryCharges: 25.00,
    netTotal: 520.00,
    paymentMethod: 'Net Banking',
    timelines: [
        {
            label: '26 Jan 2022, 02:22 PM',
            details: 'Your order was placed',
        },
        {
            label: '27 Jan 2022, 04:20 PM',
            details: 'Your order was packed',
        },
        {
            label: '28 Jan 2022, 06:30 PM',
            details: 'Your order was shipped',
        },
        {
            label: '29 Jan 2022, 09:30 AM',
            details: 'Your order is on the way to you',
        }
    ],
    currentTimeline: 2,
}

export const addressList: IAddress[] = [
    {
        id: 1,
        houseNo: 'No 1',
        street: 'Lake View Road',
        landmark: 'Near to Get Well Hospital',
        state: 'SA',
        zipcode: '10025',
        selected: true,
    },
    {
        id: 2,
        houseNo: 'No 2',
        street: 'Boat Club Road',
        landmark: 'Near to Fruit Market',
        state: 'GA',
        zipcode: '10035',
        selected: false,
    },
    {
        id: 3,
        houseNo: 'No 3',
        street: 'Park Avenue Road',
        landmark: 'Near to Dental Clinic',
        state: 'MA',
        zipcode: '20035',
        selected: false,
    }
]