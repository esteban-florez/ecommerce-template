const mainImage = document.querySelector('#main-image')
const galleryItems = Array.from(document.querySelectorAll('[data-gallery]'))

galleryItems.forEach(item => item.addEventListener('click', handleItemClick))

function handleItemClick(event) {
  const item = event.currentTarget
  const status = item.dataset.gallery

  if (status === 'on') return

  mainImage.src = item.src

  galleryItems.forEach(item => {
    item.dataset.gallery = 'off'
  })

  item.dataset.gallery = 'on'
}
