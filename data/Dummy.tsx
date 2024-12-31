import { CarProps, CarTypeProps, ColoursProps, NotificationProps, ServiceProp } from "@/types/Types";

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
        id: "0001",
        photos: [
            '/cars/range2018/1.jpg',
            '/cars/range2018/2.jpg',
            '/cars/range2018/3.jpg',
            '/cars/range2018/4.jpg',
            '/cars/range2018/5.jpg',
        ],
        name: "Vogue",
        colour: "Silver",
        brand: "Range Rover",
        model: "Vogue 2018",
        price: 3500,
        new:true,
        year:'2018'
    },
    {
        id: "0002",
        photos: [
            '/cars/rav42016/1.jpg',
            '/cars/rav42016/2.jpg',
            '/cars/rav42016/3.jpg',
            '/cars/rav42016/4.jpg',
            '/cars/rav42016/5.jpg',
            '/cars/rav42016/6.jpg',
        ],
        name: "Rav4",
        colour: "Red",
        brand: "Toyota",
        model: "Rav4 2016",
        price: 1300,
        new:true,
        year:'2016'
    },
    {
        id: "0003",
        photos: [
            '/cars/honda2017/4.jpg',
            '/cars/honda2017/1.jpg',
            '/cars/honda2017/2.jpg',
            '/cars/honda2017/3.jpg',
            '/cars/honda2017/5.jpg',
            '/cars/honda2017/6.jpg',
            '/cars/honda2017/7.jpg',
            '/cars/honda2017/8.jpg',
        ],
        name: "Civic Touring",
        colour: "Black",
        brand: "Honda",
        model: "Civic 2017",
        price: 1500,
        new:true,
        year:'2017'
    },
    {
        id: "0004",
        photos: [
            '/cars/bmw440i2016/4.jpg',
            '/cars/bmw440i2016/1.jpg',
            '/cars/bmw440i2016/2.jpg',
            '/cars/bmw440i2016/3.jpg',
            '/cars/bmw440i2016/5.jpg',
            '/cars/bmw440i2016/6.jpg',
            '/cars/bmw440i2016/7.jpg',
            '/cars/bmw440i2016/8.jpg',
        ],
        name: "BMW 440i",
        colour: "Red",
        brand: "BMW",
        model: "Spec M4",
        price: 1500,
        new:true,
        year:'2016'
    },
    {
        id: "0005",
        photos: [
            '/cars/toyotacamryse2018/3.jpg',
            '/cars/toyotacamryse2018/1.jpg',
            '/cars/toyotacamryse2018/2.jpg',
            '/cars/toyotacamryse2018/4.jpg',
        ],
        name: "Toyota Camry SE",
        colour: "Black",
        brand: "Toyota",
        model: "Camry",
        price: 1000,
        new:false,
        year:'2018'
    },
    {
        id: "0006",
        photos: [
            '/cars/mercedezbenze3002017/1.jpg',
            '/cars/mercedezbenze3002017/2.jpg',
            '/cars/mercedezbenze3002017/3.jpg',
            '/cars/mercedezbenze3002017/4.jpg',
            '/cars/mercedezbenze3002017/5.jpg',
            '/cars/mercedezbenze3002017/6.jpg',
            '/cars/mercedezbenze3002017/7.jpg',
        ],
        name: "E300",
        colour: "White",
        brand: "Mecedez",
        model: "Benz",
        price: 1500,
        new:true,
        year:'2017'
    },
    {
        id: "0007",
        photos: [
            '/cars/hondacrv2020/1.jpg',
            '/cars/hondacrv2020/2.jpg',
            '/cars/hondacrv2020/3.jpg',
            '/cars/hondacrv2020/4.jpg',
            '/cars/hondacrv2020/5.jpg',
            '/cars/hondacrv2020/6.jpg',
            '/cars/hondacrv2020/7.jpg',
            '/cars/hondacrv2020/8.jpg',
        ],
        name: "CRV",
        colour: "Silva",
        brand: "Honda",
        model: "CRV",
        price: 1300,        
        new:true,
        year:'2020'
    },
    {
        id: "0008",
        photos: [
            '/cars/hyundaielantra2017/7.jpg',
            '/cars/hyundaielantra2017/1.jpg',
            '/cars/hyundaielantra2017/2.jpg',
            '/cars/hyundaielantra2017/3.jpg',
            '/cars/hyundaielantra2017/4.jpg',
            '/cars/hyundaielantra2017/5.jpg',
            '/cars/hyundaielantra2017/6.jpg',
        ],
        name: "Elantra",
        colour: "Silva",
        brand: "Hyundai",
        model: "Elantra",
        price: 1000,
        new:true,
        year:'2017'
    },
    {
        id: "0009",
        photos: [
            '/cars/toyotahighlander2014/1.jpg',
            '/cars/toyotahighlander2014/2.jpg',
            '/cars/toyotahighlander2014/3.jpg',
            '/cars/toyotahighlander2014/4.jpg',
            '/cars/toyotahighlander2014/5.jpg',
            '/cars/toyotahighlander2014/6.jpg',
            '/cars/toyotahighlander2014/7.jpg',
        ],
        name: "Highlander",
        colour: "White",
        brand: "Toyota",
        model: "Highlander",
        price: 1300,
        new:true,
        year:'2014'
    },
    {
        id: "0010",
        photos: [
            '/cars/toyotavenza2014/1.jpg',
            '/cars/toyotavenza2014/2.jpg',
            '/cars/toyotavenza2014/3.jpg',
            '/cars/toyotavenza2014/4.jpg',
            '/cars/toyotavenza2014/5.jpg',
            '/cars/toyotavenza2014/6.jpg',
        ],
        name: "Toyota Venza",
        colour: "Grey",
        brand: "Toyota",
        model: "Venza",
        price: 1300,
        new:true,
        year:'2014'
    },
    {
        id: "0011",
        photos: [
            '/cars/toyotacamry2014/9.jpg',
            '/cars/toyotacamry2014/1.jpg',
            '/cars/toyotacamry2014/2.jpg',
            '/cars/toyotacamry2014/3.jpg',
            '/cars/toyotacamry2014/4.jpg',
            '/cars/toyotacamry2014/5.jpg',
            '/cars/toyotacamry2014/6.jpg',
            '/cars/toyotacamry2014/7.jpg',
            '/cars/toyotacamry2014/8.jpg',
        ],
        name: "Camry",
        colour: "Black",
        brand: "Toyota",
        model: "Camry",
        price: 900,
        new:false,
        year:'2014'
    },
    {
        id: "0012",
        photos: [
            '/cars/toyotacorrolla2013/1.jpg',
            '/cars/toyotacorrolla2013/2.jpg',
            '/cars/toyotacorrolla2013/3.jpg',
            '/cars/toyotacorrolla2013/4.jpg',
            '/cars/toyotacorrolla2013/5.jpg',
            '/cars/toyotacorrolla2013/6.jpg',
        ],
        name: "Corolla",
        colour: "Silva",
        brand: "Toyota",
        model: "Corolla",
        price: 850,
        new:false,
        year:'2013'
    },
  
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


export const NotificationsData: NotificationProps[] = [
    {
        id: "1",
        title: "Booking Confirmed",
        userId: "2",
        orderId:'10',
        carId:'18',
        content: "Your booking for a Toyota Camry has been confirmed.",
        read: false,
        time: new Date('2024-10-01T10:30:00'),
    },
    {
        id: "2",
        title: "Booking Reminder",
        userId: "3",
        orderId:'9',
        carId:'20',
        content: "Don't forget your booking for a Honda Civic tomorrow!",
        read: false,
        time: new Date('2024-10-02T09:00:00'),
    },
    {
        id: "3",
        title: "Booking Cancelled",
        userId: "1",
        orderId:'7',
        carId:'7',
        content: "Your booking for a Ford Focus has been cancelled.",
        read: true,
        time: new Date('2024-09-28T14:00:00'),
    },
    {
        id: "4",
        title: "New Car Available",
        userId: "2",
        orderId:'9',
        carId:'18',
        content: "A Tesla Model 3 is now available for booking.",
        read: false,
        time: new Date('2024-10-01T12:00:00'),
    },
    {
        id: "5",
        title: "Payment Successful",
        userId: "3",
        orderId:'4',
        carId:'12',
        content: "Your payment for the booking has been successfully processed.",
        read: true,
        time: new Date('2024-10-01T10:45:00'),
    },
    {
        id: "6",
        title: "Feedback Request",
        userId: "2",
        orderId:'2',
        carId:'3',
        content: "We'd love to hear your feedback on your recent rental.",
        read: false,
        time: new Date('2024-10-02T08:00:00'),
    },
    {
        id: "7",
        title: "Booking Update",
        userId: "3",
        orderId:'8',
        carId:'17',
        content: "Your booking details have been updated. Check your account for more info.",
        read: false,
        time: new Date('2024-09-30T16:30:00'),
    },
    {
        id: "8",
        title: "Rental Period Ending Soon",
        userId: "3",
        orderId:'2',
        carId:'20',
        content: "Your rental period for the Nissan Altima is ending in 2 days.",
        read: false,
        time: new Date('2024-10-02T15:00:00'),
    },
    {
        id: "9",
        title: "Special Offer",
        userId: "1",
        orderId:'4',
        carId:'20',
        content: "Book now and get 20% off your next rental!",
        read: false,
        specialContent: <strong>Limited time offer!</strong>,
        time: new Date('2024-10-01T11:00:00'),
    },
    {
        id: "10",
        title: "Reminder: Return Vehicle",
        userId: "3",
        orderId:'5',
        carId:'5',
        content: "Please return your vehicle by 10 AM tomorrow.",
        read: false,
        time: new Date('2024-10-02T18:00:00'),
    },
    {
        id: "11",
        title: "New Feature Alert",
        userId: "2",
        orderId:'6',
        carId:'15',
        content: "Check out our new mobile app for easier bookings.",
        read: true,
        time: new Date('2024-09-29T09:00:00'),
    },
    {
        id: "12",
        title: "Account Verification",
        userId: "1",
        orderId:'5',
        carId:'10',
        content: "Please verify your account to continue using our services.",
        read: false,
        time: new Date('2024-10-01T14:00:00'),
    },
];