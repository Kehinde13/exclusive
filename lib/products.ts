import Keyboard from "@/public/assets/Frame 612.png" 
import Gamepad from '@/public/assets/Frame 611.png'
import GameMonitor from '@/public/assets/Frame 613.png'
import GameLaptop from '@/public/assets/Frame 604.png'
import Chair from '@/public/assets/Frame 614.png'
import shelf from '@/public/assets/Frame 612 (1).png'
import cooler from '@/public/assets/Frame 610.png'
import coat from '@/public/assets/Frame 605.png'
import gucciBag from '@/public/assets/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'

export const products = [
    {
        name: "AK-900 Wired Keyboard",
        price: "$900",
        discount: "$800",
        ratings: 4,
        feedbacks: 30,
        image: Keyboard
    },
    {
        name: "Havit HV-G92 Gamepad",
        price: "$120",
        discount: "$100",
        ratings: 5,
        feedbacks: 32,
        image: Gamepad
    },
    {
        name: "IPS LCD Gaming Monitor",
        price: "$370",
        discount: "$340",
        ratings: 4,
        feedbacks: 35,
        image: GameMonitor
    },
    {
        name: "S series Comfort chair",
        price: "$400",
        discount: "$374",
        ratings: 5,
        feedbacks: 31,
        image: Chair
    },
    {
        name: "ASUS FHD Gaming laptop",
        price: "$900",
        discount: "$800",
        ratings: 5,
        feedbacks: 38,
        image: GameLaptop
    }

]

export const bestSelling = [
    {
        name: "The North Coat",
        price: "$360",
        discount: "$260",
        ratings: 5,
        feedbacks: 30,
        image: coat
    },
    {
        name: "Gucci Duffle Bag",
        price: "$1160",
        discount: "$960",
        ratings: 5,
        feedbacks: 32,
        image: gucciBag
    },
    {
        name: "RGB Liquid CPU Cooler",
        price: "$270",
        discount: "$240",
        ratings: 4,
        feedbacks: 35,
        image: cooler
    },
    {
        name: "Small Bookshelf",
        price: "$100",
        discount: "$84",
        ratings: 5,
        feedbacks: 31,
        image: shelf
    },
]