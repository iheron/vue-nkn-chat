import NknChat from './src/NknChat'

NknChat.install = function (Vue, options) {
  Vue.component(NknChat.name, NknChat)
}

export default NknChat
