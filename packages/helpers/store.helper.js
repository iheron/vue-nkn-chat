import Cookies from 'js-cookie'

const SEED_KEY = '__nkn_chat_seed__'
const MESSAGES_KEY = '__nkn_chat_messages__'
const EXPIRES = 7 // day
class StoreHelper {
  get(key) {
    return Cookies.get(key)
  }

  set(key, val) {
    Cookies.set(key, val, {expires: EXPIRES})
  }

  getSeed() {
    return this.get(SEED_KEY)
  }

  setSeed(val) {
    this.set(SEED_KEY, val)
  }

  getMessages(){
    return this.get(MESSAGES_KEY)
  }

  setMessages(val){
    this.set(MESSAGES_KEY, JSON.stringify(val))
  }
}

export default new StoreHelper()
