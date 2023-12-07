import '@google/model-viewer/dist/model-viewer-umd'

const mainImage = document.querySelector('#main-image')
const modelViewer = document.querySelector('#model-viewer')
const galleryItems = Array.from(document.querySelectorAll('[data-gallery]'))

galleryItems.forEach(item => item.addEventListener('click', handleItemClick))

function handleItemClick(event) {
  const item = event.currentTarget
  const status = item.dataset.gallery

  if (status === 'on') return
  
  galleryItems.forEach(item => {
    item.dataset.gallery = 'off'
  })

  item.dataset.gallery = 'on'

  const isModel = item.dataset.model === 'true'

  if (isModel) {
    modelViewer.classList.remove('hidden')
    mainImage.classList.add('hidden')
    return
  }

  modelViewer.classList.add('hidden')
  mainImage.classList.remove('hidden')
  mainImage.src = item.src
}
