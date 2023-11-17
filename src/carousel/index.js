import { Carousel } from 'flowbite'
import { options } from './config.js'
import { items } from './items.js'

const carouselElement = document.querySelector('#default-carousel')
const prevButton = document.querySelector('#carousel-prev')
const nextButton = document.querySelector('#carousel-next')

const carousel = new Carousel(carouselElement, items, options)

prevButton.addEventListener('click', () => carousel.prev())
nextButton.addEventListener('click', () => carousel.next())
carousel.cycle()
