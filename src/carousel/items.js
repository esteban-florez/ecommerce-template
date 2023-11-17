const ITEM_ID_PREFIX = 'carousel-item'
const INDICATOR_ID_PREFIX = 'carousel-indicator'

const items = []
const indicators = []

for (let index = 0; index < 4; index++) {
  items.push(new Item(ITEM_ID_PREFIX, index))
  indicators.push(new Item(INDICATOR_ID_PREFIX, index))
}

function Item(prefix, index) {
  this.position = index
  this.el = document.querySelector(`#${prefix}-${index + 1}`)
}

export { items, indicators }
