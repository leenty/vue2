function bgi (el, binding) {
  el.style.backgroundImage = `url(${binding.value})`
}
const directive = {
  bind: bgi,
  update: bgi,
  unbind: bgi
}

export default directive
