import { CarProps, CarTypeProps, ColoursProps, ServiceProp } from "@/types/Types";

export const CarTypes:CarTypeProps[] = [
    'Sedan', 'Van', 'Pickup', 'Wagon', 'Minivan', 'Couple'
]

export const ColoursData:ColoursProps[]=[
    {
        name:'Black',
        code:'#080D1B',
        secondary:'crimson'
    },
    {
        name:'Silver',
        code:'#E3E4E6',
        secondary:'crimson'
    },
    {
        name:'Dark blue',
        code:'#1942A3',
        secondary:'crimson'
    },
    {
        name:'White',
        code:'#fff',
        secondary:'crimson'
    },
    {
        name:'Grey',
        code:'#969AA7',
        secondary:'crimson'
    },
    {
        name:'Brown',
        code:'#593B2B',
        secondary:'crimson'
    },
    
]

export const RentalTypes: string[] = ['Any', 'Per day', 'Per hour']

export const InsuranceData:string[]=[
    'Collision Damage Waiver','Roadside Plus',
    'Personal Injury Protection'
]


export const CarsData:CarProps[] = [
    {
        id: "1",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_960_720.png",
            "https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg", 
            "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521_960_720.jpg"
        ],
        name: "Speedster",
        colour: "Red",
        brand: "Ferrari",
        model: "488",
        pricePerDay: 500,
        pricePerHour: 60,
        type: "Couple",
        rented: false,
        rentType: "Per day",
        insurance: "Collision Damage Waiver",
        createdAt: new Date("2023-01-01"),
        new:true,
        favourites:['1'],
        rentedBy:'2',
        year:'2018'
    },
    {
        id: "2",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png",
            "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg", 
            "https://cdn.pixabay.com/photo/2021/01/01/21/09/challenger-5880009_960_720.jpg",
            "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg"
        ],
        name: "Explorer",
        colour: "Blue",
        brand: "Jeep",
        model: "Wrangler",
        pricePerDay: 100,
        pricePerHour: 15,
        type: "Van",
        rented: true,
        rentedFrom: new Date("2023-10-01"),
        rentedTo: new Date("2023-10-15"),
        rentType: "Per day",
        insurance: "Roadside Plus",
        createdAt: new Date("2023-01-02"),
        new:false,
        favourites:['1'],
        rentedBy:'4',
        year:'2015'
    },
    {
        id: "3",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png",
            "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png", 
            "https://cdn.pixabay.com/photo/2013/07/12/12/56/ford-mustang-146580_960_720.png"
        ],
        name: "Cargo King",
        colour: "White",
        brand: "Ford",
        model: "F-150",
        pricePerDay: 120,
        pricePerHour: 20,
        type: "Pickup",
        rented: false,
        rentType: "Any",
        insurance: "Personal Injury Protection",
        createdAt: new Date("2023-01-03"),
        new:false,
        favourites:['1'],
        rentedBy:'2',
        year:'2019'
    },
    {
        id: "4",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png",
            "https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_960_720.png",
            "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
            "https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_960_720.jpg",
        ],
        name: "Family Cruiser",
        colour: "Silver",
        brand: "Toyota",
        model: "Sienna",
        pricePerDay: 90,
        pricePerHour: 12,
        type: "Minivan",
        rented: true,
        rentedFrom: new Date("2023-10-10"),
        rentedTo: new Date("2023-10-20"),
        rentType: "Per day",
        insurance: "Collision Damage Waiver",
        createdAt: new Date("2023-01-04"),
        new:true,
        favourites:['2', '3'],
        rentedBy:'3',
        year:'2020'
    },
    {
        id: "5",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png",
            "https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_960_720.jpg", 
        ],
        name: "Luxury Ride",
        colour: "Black",
        brand: "Mercedes",
        model: "S-Class",
        pricePerDay: 300,
        pricePerHour: 45,
        type: "Couple",
        rented: false,
        rentType: "Per hour",
        insurance: "Roadside Plus",
        createdAt: new Date("2023-01-05"),
        new:false,
        favourites:['3'],
        rentedBy:'3',
        year:'2022'
    },
    {
        id: "6",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_960_720.png",
            "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg",
             "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857_960_720.jpg"
            ],
        name: "City Commuter",
        colour: "Green",
        brand: "Honda",
        model: "Civic",
        pricePerDay: 70,
        pricePerHour: 10,
        type: "Sidan",
        rented: false,
        rentType: "Per hour",
        insurance: "Personal Injury Protection",
        createdAt: new Date("2023-01-06"),
        new:true,
        favourites:['1'],
        rentedBy:'3',
        year:'2023'
    },
    {
        id: "7",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990_960_720.png",
            "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_960_720.jpg", 
            "https://cdn.pixabay.com/photo/2018/07/01/20/01/dashboard-3510327_960_720.jpg"
        ],
        name: "Adventure Seeker",
        colour: "Orange",
        brand: "Subaru",
        model: "Outback",
        pricePerDay: 110,
        pricePerHour: 18,
        type: "Wagon",
        rented: true,
        rentedFrom: new Date("2023-10-05"),
        rentedTo: new Date("2023-10-12"),
        rentType: "Per day",
        insurance: "Collision Damage Waiver",
        createdAt: new Date("2023-01-07"),
        new:true,
        favourites:['1'],
        rentedBy:'1',
        year:'2016'
    },
    {
        id: "8",
        photos: [
            "https://cdn.pixabay.com/photo/2013/07/13/01/07/ford-mustang-155132_960_720.png",
            "https://cdn.pixabay.com/photo/2013/07/12/12/55/oldtimer-146524_960_720.png",
            "https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795128_1280.jpg", 
            "https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_1280.jpg",
        ],
        name: "Eco Drive",
        colour: "Yellow",
        brand: "Toyota",
        model: "Prius",
        pricePerDay: 80,
        pricePerHour: 11,
        type: "Sidan",
        rented: false,
        rentType: "Any",
        insurance: "Roadside Plus",
        createdAt: new Date("2023-01-08"),
        new:true,
        favourites:['5','6'],
        rentedBy:'5',
        year:'2022'
    },
    {
        id: "9",
        photos: [
            "https://cdn.pixabay.com/photo/2013/07/13/11/50/car-158795_960_720.png",
            "https://cdn.pixabay.com/photo/2017/08/22/00/27/car-dashboard-2667434_1280.jpg"
        ],
        name: "Road Tripper",
        colour: "Gray",
        brand: "Chrysler",
        model: "Pacifica",
        pricePerDay: 95,
        pricePerHour: 13,
        type: "Minivan",
        rented: true,
        rentedFrom: new Date("2023-10-15"),
        rentedTo: new Date("2023-10-30"),
        rentType: "Per day",
        insurance: "Personal Injury Protection",
        createdAt: new Date("2023-01-09"),
        new:true,
        favourites:['2'],
        rentedBy:'2',
        year:'2022'
    },
    {
        id: "10",
        photos: [
            "https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_960_720.png", 
            "https://cdn.pixabay.com/photo/2013/07/12/12/55/oldtimer-146524_960_720.png",
            "https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_1280.jpg",
        ],
        name: "Compact Fun",
        colour: "Red",
        brand: "Mini",
        model: "Cooper",
        pricePerDay: 85,
        pricePerHour: 12,
        type: "Sidan",
        rented: false,
        rentType: "Per hour",
        insurance: "Collision Damage Waiver",
        createdAt: new Date("2023-01-10"),
        new:false,
        favourites:['1'],
        rentedBy:'2',
        year:'2021'
    },
    {
        id: "11",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990_960_720.png", 
            "https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_960_720.jpg"
        ],
        name: "Power Van",
        colour: "White",
        brand: "Ram",
        model: "ProMaster",
        pricePerDay: 150,
        pricePerHour: 25,
        type: "Van",
        rented: false,
        rentType: "Per day",
        insurance: "Roadside Plus",
        createdAt: new Date("2023-01-11"),
        new:false,
        favourites:['3','2'],
        rentedBy:'2',
        year:'2017'
    },
    {
        id: "12",
        photos: [
            "https://cdn.pixabay.com/photo/2013/07/13/13/22/car-160895_960_720.png",
            "https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_960_720.jpg", 
            "https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465_960_720.jpg"
        ],
        name: "City Escape",
        colour: "Blue",
        brand: "Mazda",
        model: "CX-5",
        pricePerDay: 90,
        pricePerHour: 14,
        type: "Wagon",
        rented: false,
        rentType: "Any",
        insurance: "Personal Injury Protection",
        createdAt: new Date("2023-01-12"),
        new:false,
        favourites:['8'],
        rentedBy:'2',
        year:'2018'
    },
    {
        id: "13",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png", 
            "https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_1280.jpg"
        ],
        name: "Sporty",
        colour: "Black",
        brand: "Ford",
        model: "Mustang",
        pricePerDay: 250,
        pricePerHour: 40,
        type: "Couple",
        rented: false,
        rentType: "Per hour",
        insurance: "Collision Damage Waiver",
        createdAt: new Date("2023-01-13"),
        new:false,
        favourites:['1'],
        rentedBy:'3',
        year:'2018'
    },
    {
        id: "14",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_960_720.png",
            "https://cdn.pixabay.com/photo/2016/05/18/10/52/buick-1400243_960_720.jpg", 
            "https://cdn.pixabay.com/photo/2023/10/23/17/03/audi-8336484_1280.jpg"
        ],
        name: "Family Wagon",
        colour: "Silver",
        brand: "Chevrolet",
        model: "Traverse",
        pricePerDay: 130,
        pricePerHour: 19,
        type: "Minivan",
        rented: false,
        rentType: "Per day",
        insurance: "Roadside Plus",
        createdAt: new Date("2023-01-14"),
        new:true,
        favourites:['4'],
        rentedBy:'2',
        year:'2019'
    },
    {
        id: "15",
        photos: [
            "https://cdn.pixabay.com/photo/2013/07/13/13/22/car-160895_960_720.png", 
            "https://cdn.pixabay.com/photo/2013/07/12/15/36/passenger-car-150155_1280.png"
        ],
        name: "Off-Road Beast",
        colour: "Green",
        brand: "Toyota",
        model: "4Runner",
        pricePerDay: 140,
        pricePerHour: 22,
        type: "Pickup",
        rented: false,
        rentType: "Any",
        insurance: "Personal Injury Protection",
        createdAt: new Date("2023-01-15"),
        new:true,
        favourites:['2'],
        rentedBy:'1',
        year:'2020'
    },
    {
        id: "16",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_960_720.png",
            "https://cdn.pixabay.com/photo/2020/10/19/08/16/car-5667107_960_720.jpg", 
            "https://cdn.pixabay.com/photo/2024/03/21/14/29/chevrolet-8647804_960_720.jpg",
        ],
        name: "Classic Ride",
        colour: "Yellow",
        brand: "Volkswagen",
        model: "Beetle",
        pricePerDay: 75,
        pricePerHour: 9,
        type: "Sidan",
        rented: false,
        rentType: "Per hour",
        insurance: "Collision Damage Waiver",
        createdAt: new Date("2023-01-16"),
        new:true,
        favourites:['1'],
        rentedBy:'2',
        year:'2021'
    },
    {
        id: "17",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png",
            "https://cdn.pixabay.com/photo/2017/01/06/05/28/car-1957037_960_720.jpg", 
            "https://cdn.pixabay.com/photo/2015/06/05/15/02/audi-798530_960_720.jpg"
        ],
        name: "Luxury SUV",
        colour: "Black",
        brand: "BMW",
        model: "X5",
        pricePerDay: 350,
        pricePerHour: 55,
        type: "Couple",
        rented: false,
        rentType: "Per day",
        insurance: "Roadside Plus",
        createdAt: new Date("2023-01-17"),
        new:false,
        favourites:['3'],
        rentedBy:'2',
        year:'2022'
    },
    {
        id: "18",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_960_720.png",
            "https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_960_720.png",
            "https://cdn.pixabay.com/photo/2015/01/20/11/09/black-605334_960_720.jpg", 
            "https://cdn.pixabay.com/photo/2021/10/30/06/39/vintage-car-6753626_960_720.jpg"
        ],
        name: "City Hatchback",
        colour: "Gray",
        brand: "Hyundai",
        model: "Elantra",
        pricePerDay: 65,
        pricePerHour: 8,
        type: "Sidan",
        rented: false,
        rentType: "Any",
        insurance: "Personal Injury Protection",
        createdAt: new Date("2023-01-18"),
        new:true,
        favourites:['5'],
        rentedBy:'3',
        year:'2016'
    },
    {
        id: "19",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_960_720.png",
            "https://cdn.pixabay.com/photo/2013/08/11/03/40/car-171422_1280.jpg", 
            "https://cdn.pixabay.com/photo/2016/11/19/11/26/automotive-1838744_960_720.jpg"
        ],
        name: "Adventure Van",
        colour: "White",
        brand: "Nissan",
        model: "NV3500",
        pricePerDay: 140,
        pricePerHour: 21,
        type: "Van",
        rented: false,
        rentType: "Per day",
        insurance: "Collision Damage Waiver",
        createdAt: new Date("2023-01-19"),
        new:true,
        favourites:['2','4','5'],
        rentedBy:'4',
        year:'2024'
    },
    {
        id: "20",
        photos: [
            "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png",
            "https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_960_720.png",
            "https://cdn.pixabay.com/photo/2016/11/21/18/07/automotive-1846910_960_720.jpg", 
            "https://cdn.pixabay.com/photo/2016/11/18/15/58/vw-1835506_960_720.jpg"
        ],
        name: "Compact SUV",
        colour: "Blue",
        brand: "Kia",
        model: "Sportage",
        pricePerDay: 95,
        pricePerHour: 14,
        type: "Wagon",
        rented: true,
        rentedFrom: new Date("2023-10-01"),
        rentedTo: new Date("2023-10-10"),
        rentType: "Per day",
        insurance: "Roadside Plus",
        createdAt: new Date("2023-01-20"),
        new:false,
        favourites:[],
        rentedBy:'4',
        year:'2019'
    },
    {
        id: "21",
        photos: [
            "https://cdn.pixabay.com/photo/2013/07/13/01/07/ford-mustang-155132_960_720.png",
            "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_960_720.png",
            "https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg", 
            "https://cdn.pixabay.com/photo/2020/10/18/16/45/porsche-5665390_1280.jpg"
        ],
        name: "Sporty Hatch",
        colour: "Red",
        brand: "Volkswagen",
        model: "Golf",
        pricePerDay: 85,
        pricePerHour: 12,
        type: "Sidan",
        rented: false,
        rentType: "Per hour",
        insurance: "Personal Injury Protection",
        createdAt: new Date("2023-01-21"),
        new:true,
        favourites:['1'],
        rentedBy:'3',
        year:'2014'
    },
    {
        id: "22",
        photos: [
            "https://cdn.pixabay.com/photo/2013/07/13/01/07/ford-mustang-155132_960_720.png",
            "https://cdn.pixabay.com/photo/2016/09/06/13/37/maserati-gran-turismo-1649119_960_720.jpg", 
            "https://cdn.pixabay.com/photo/2023/06/03/18/12/benz-8038240_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374448_1280.jpg"
        ],
        name: "Elderly Van",
        colour: "Gray",
        brand: "Chrysler",
        model: "Voyager",
        pricePerDay: 110,
        pricePerHour: 16,
        type: "Van",
        rented: false,
        rentType: "Per day",
        insurance: "Collision Damage Waiver",
        createdAt: new Date("2023-01-22"),
        new:true,
        favourites:['1'],
        rentedBy:'2',
        year:'2023'
    },
    {
        id: "23",
        photos: [
            "https://cdn.pixabay.com/photo/2013/07/13/01/07/ford-mustang-155132_960_720.png",
            "https://cdn.pixabay.com/photo/2019/07/24/23/09/car-4361321_1280.jpg", 
            "https://cdn.pixabay.com/photo/2016/03/26/22/34/car-1281640_1280.jpg"
        ],
        name: "Family SUV",
        colour: "Black",
        brand: "Ford",
        model: "Explorer",
        pricePerDay: 130,
        pricePerHour: 19,
        type: "Wagon",
        rented: true,
        rentedFrom: new Date("2023-10-05"),
        rentedTo: new Date("2023-10-15"),
        rentType: "Per day",
        insurance: "Roadside Plus",
        createdAt: new Date("2023-01-23"),
        new:false,
        favourites:['5'],
        rentedBy:'3',
        year:'2016'
    },
    {
        id: "24",
        photos: [
            "https://cdn.pixabay.com/photo/2017/04/06/16/57/car-2208807_1280.png", 
            "https://cdn.pixabay.com/photo/2013/08/29/04/37/automobile-176989_960_720.jpg"
        ],
        name: "Budget Car",
        colour: "Green",
        brand: "Nissan",
        model: "Versa",
        pricePerDay: 65,
        pricePerHour: 9,
        type: "Sidan",
        rented: false,
        rentType: "Any",
        insurance: "Personal Injury Protection",
        createdAt: new Date("2023-01-24"),
        new:true,
        favourites:['3'],
        rentedBy:'4',
        year:'2018'
    },
    {
        id: "25",
        photos: [
            "https://cdn.pixabay.com/photo/2013/07/13/01/07/ford-mustang-155132_960_720.png",
            "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg", 
            "https://cdn.pixabay.com/photo/2023/06/02/05/01/car-8034787_1280.jpg"
        ],
        name: "Family Comfort",
        colour: "Silver",
        brand: "Honda",
        model: "Odyssey",
        pricePerDay: 120,
        pricePerHour: 18,
        type: "Minivan",
        rented: true,
        rentedFrom: new Date("2023-10-01"),
        rentedTo: new Date("2023-10-12"),
        rentType: "Per day",
        insurance: "Collision Damage Waiver",
        createdAt: new Date("2023-01-25"),
        new:false,
        favourites:['1'],
        rentedBy:'1',
        year:'2022'
    }
];

export const ServiceData:ServiceProp[]=[
    {
        id:1,
        title:'Discover Your Perfect Car',
        text:'Explore our car collection and choose a vehicle that suits your trip needs; choose a car that will be your perfect trip',
        image:'/One.png',
        imageDark:'/OneDark.png'
    },
    {
        id:2,
        title:'Secure Your Rental Booking',
        text:'Go ahead to choose the pick-up and drop-off dates. The relatives prices will be shown to you.',
        image:'/Two.png',
        imageDark:'/TwoDark.png'
    },
    {
        id:3,
        title:'Complete Your Booking Payment',
        text:'You can decide to pay online with credit card, debit card, Momo or come to the office to complete your transaction.',
        image:'/Pay.png',
        imageDark:'/PayDark.png'
    },
    {
        id:4,
        title:'Your Booking is Confirmed',
        text:'✔ Congratulations! The booking process is complete. Visit the office to pick-up the car' ,
        image:'/Four.png',
        imageDark:'/Four.png'
    }
]