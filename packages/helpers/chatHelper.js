import Wallet from 'nkn-wallet'
import Client from 'nkn-multiclient'

const SEED_ADDRESSES = [
  'https://mainnet-seed-0001.nkn.org:30003',
  'https://mainnet-seed-0002.nkn.org:30003',
  'https://mainnet-seed-0003.nkn.org:30003',
  'https://mainnet-seed-0004.nkn.org:30003',
  'https://mainnet-seed-0005.nkn.org:30003',
  'https://mainnet-seed-0006.nkn.org:30003',
  'https://mainnet-seed-0007.nkn.org:30003',
  'https://mainnet-seed-0008.nkn.org:30003',
  'https://mainnet-seed-0009.nkn.org:30003',
  'https://mainnet-seed-0010.nkn.org:30003',
  'https://mainnet-seed-0011.nkn.org:30003',
  'https://mainnet-seed-0012.nkn.org:30003',
  'https://mainnet-seed-0013.nkn.org:30003',
  'https://mainnet-seed-0014.nkn.org:30003',
  'https://mainnet-seed-0015.nkn.org:30003',
  'https://mainnet-seed-0016.nkn.org:30003',
  'https://mainnet-seed-0017.nkn.org:30003',
  'https://mainnet-seed-0018.nkn.org:30003',
  'https://mainnet-seed-0019.nkn.org:30003',
  'https://mainnet-seed-0020.nkn.org:30003',
  'https://mainnet-seed-0021.nkn.org:30003',
  'https://mainnet-seed-0022.nkn.org:30003',
  'https://mainnet-seed-0023.nkn.org:30003',
  'https://mainnet-seed-0024.nkn.org:30003',
  'https://mainnet-seed-0025.nkn.org:30003',
  'https://mainnet-seed-0026.nkn.org:30003',
  'https://mainnet-seed-0027.nkn.org:30003',
  'https://mainnet-seed-0028.nkn.org:30003',
  'https://mainnet-seed-0029.nkn.org:30003',
  'https://mainnet-seed-0030.nkn.org:30003',
  'https://mainnet-seed-0031.nkn.org:30003',
  'https://mainnet-seed-0032.nkn.org:30003',
  'https://mainnet-seed-0033.nkn.org:30003',
  'https://mainnet-seed-0034.nkn.org:30003',
  'https://mainnet-seed-0035.nkn.org:30003',
  'https://mainnet-seed-0036.nkn.org:30003',
  'https://mainnet-seed-0037.nkn.org:30003',
  'https://mainnet-seed-0038.nkn.org:30003',
  'https://mainnet-seed-0039.nkn.org:30003',
  'https://mainnet-seed-0040.nkn.org:30003',
  'https://mainnet-seed-0041.nkn.org:30003',
  'https://mainnet-seed-0042.nkn.org:30003',
  'https://mainnet-seed-0043.nkn.org:30003',
  'https://mainnet-seed-0044.nkn.org:30003',
]
const getRandomSeed = () =>
  SEED_ADDRESSES[Math.floor(Math.random() * SEED_ADDRESSES.length)]
const randomSeed = getRandomSeed()

export default class ChatHelper {
  constructor() {
    let wallet = Wallet.newWallet('')
    this.client = Client({
      originalClient: true,
      seed: wallet.getSeed(),
      seedRpcServerAddr: randomSeed,
      msgHoldingSeconds: 3999999999,
    })

  }

  async getSubscribers(topic, owner) {
    let i = 0
    let members = [owner]
    while (true) {
      let res = await this.client.clients[0].getSubscription(`${topic}`, `__${i}__.${owner}`)
      let meta
      try {
        meta = JSON.parse(res.meta)
      } catch (e) {
        break
      }
      if (meta && meta.members && meta.members.length > 0) {
        members = members.concat(meta.members)
      } else {
        break
      }
      i++
    }
    return members
  }

  async publish(dests, data) {

    await this.client.send(dests, JSON.stringify(data))
  }
}
