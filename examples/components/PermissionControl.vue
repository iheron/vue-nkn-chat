<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field label="Seed" v-model="seed"/>
            </v-col>
            <v-col>
                <v-text-field label="Topic" v-model="topic"/>
            </v-col>
        </v-row>

        <v-divider/>
        <v-row>
            <v-col>
                <v-textarea label="Meta" v-model="meta"/>
            </v-col>
            <v-col>
                <v-col>
                    <v-text-field label="Prefix" v-model="prefix"/>
                </v-col>
            </v-col>
            <v-col>
                <v-btn @click="search">Search</v-btn>
                <v-btn @click="subscribe">Subscribe</v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
  import ClientHelper from '../../packages/helpers/client.helper'
  import Wallet from 'nkn-wallet'
  import Client from 'nkn-multiclient'

  export default {
    name: 'PermissionControl',
    data() {
      return {
        seed: '',
        topic: 'test',
        prefix: '__0__.__permission__',
        meta: '',
      }
    },
    methods: {
      async search() {
        let wallet = Wallet.restoreWalletBySeed(this.seed, '')
        let client = Client({
          originalClient: true,
          seed: this.seed,
          tls: true,
          msgHoldingSeconds: 3999999999,
        })

        let res = await client.clients[0].getSubscription(`${this.topic}.${wallet.getPublicKey()}`, `${this.prefix}.${wallet.getPublicKey()}`)
        this.meta = res.meta

      },
      async subscribe() {
        let wallet = Wallet.restoreWalletBySeed(this.seed, '')
        let res = await wallet.subscribe(`${this.topic}.${wallet.getPublicKey()}`, 400000, `${this.prefix}`, this.meta)
        console.log(res)
      }
    }
  }
</script>

