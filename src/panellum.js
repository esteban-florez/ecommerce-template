import 'pannellum/build/pannellum'
import 'pannellum/build/pannellum.css'

pannellum.viewer('panorama', {
  type: 'equirectangular',
  panorama: '/img/360.jpg',
  autoLoad: true,
})
