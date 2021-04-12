import ComeAround from './sounds/ComeAround.m4a'
import BlindToYou from './sounds/BlindToYou.m4a'
import LetMeKnow from './sounds/LetMeKnow.m4a'

const data = [
    {
    summary: {
      name: 'Blue Dream',
      image: 'https://images.leafly.com/flower-images/blue-dream.png?auto=compress,format&w=343&dpr=2',
      description: 'This top-searched, best-selling strain has owned the charts for over a decade & is loved by all types of cannabis consumers.'
        },
    businessStats: {
      difficulty: 'Moderate',
      yield: '3-6 (Oz/Ft)²',
      flowering: '10-12 Weeks'
        },
    consumerStats: [
            {
        name: 'Happy',
        value: 57
            },
            {
        name: 'Euphoric',
        value: 52
            },
            {
        name: 'Relaxed',
        value: 48
            }
        ],
    sound: ComeAround
    },
    {
    summary: {
      name: 'Sour Diesel',
      image: 'https://images.leafly.com/flower-images/sour-diesel.jpg?auto=compress,format&w=343&dpr=2',
      description: 'This strain has defined East Coast high-THC cannabis since the 1990s and has decades-long popularity among elite consumers.'
        },
    businessStats: {
      difficulty: 'Moderate',
      yield: '1-3 (Oz/Ft)²',
      flowering: '10-12 Weeks'
        },
    consumerStats: [
            {
        name: 'Happy',
        value: 57
            },
            {
        name: 'Uplifted',
        value: 50
            },
            {
        name: 'Euphoric',
        value: 49
            }
        ],
    sound: BlindToYou
    },
    {
    summary: {
      name: 'Granddaddy Purple',
      image: 'https://images.leafly.com/flower-images/granddaddy-purple.png?auto=compress,format&w=343&dpr=2',
      description: 'GDP enjoys solid consumer demand and is the matriarch of The Purps strain family, easily making it a Leafly legend of 420.'
        },
    businessStats: {
      difficulty: 'Easy',
      yield: '3-6 (Oz/Ft)²',
      flowering: '7-9 Weeks'
        },
    consumerStats: [
            {
        name: 'Relaxed',
        value: 56
            },
            {
        name: 'Sleepy',
        value: 46,
            },
            {
        name: 'Happy',
        value: 44
            }
        ],
    sound: LetMeKnow
    }
]

export {data}