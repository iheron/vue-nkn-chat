<template>
    <div class="nkn-chat">
        <transition name="fade">
            <v-card v-show="showChat" class="chat">
                <v-card-title>
                    {{title}}
                    <v-spacer/>
                    <v-btn text fab small @click="showChat = false">
                        <font-awesome-icon icon="times" style="font-size: 1.2rem"/>
                    </v-btn>
                </v-card-title>
                <div class="divider"></div>
                <v-card-text class="container">
                    <v-list three-line flat id="message-list">
                        <template v-for="(item, index) in items">
                            <v-list-item :key="index" v-if="item.src !== address">
                                <v-list-item-content class="message-target">
                                    <v-list-item-subtitle>
                                        {{item.src}}
                                        <span class="time">{{moment(item.timestamp).format('YYYY-MM-DD HH:mm')}}</span>
                                    </v-list-item-subtitle>
                                    <v-list-item-title>{{item.content}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item :key="index" v-else>
                                <v-list-item-content class="message-mine">
                                    <v-list-item-subtitle>
                                        <span class="time">{{moment(item.timestamp).format('YYYY-MM-DD HH:mm')}}</span>
                                    </v-list-item-subtitle>
                                    <v-list-item-title>{{item.content}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-textarea class="message-box" v-model="message"
                                outlined persistent-hint hide-details
                                rows="2" @keyup.enter.native="send"
                    />
                    <v-btn class="send" fab small dark @click="send">
                        <font-awesome-icon icon="paper-plane" style="font-size:1.2rem"/>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </transition>
        <v-btn class="button" :loading="loading" @click="toggleChat" fab large dark color="blue">
            <v-badge>
                <template v-slot:badge>
                    <div class="count" v-if="unReadCount > 0">{{unReadCount}}</div>
                </template>
                <font-awesome-icon v-if="showChat" icon="times" size="2x"/>
                <font-awesome-icon v-else icon="comment-dots" size="2x"/>
            </v-badge>
        </v-btn>

    </div>
</template>

<script>
  import '../../styles/global.scss'
  import '../../styles/nkn-chat.scss'
  import ClientHelper from '../../helpers/chatHelper'
  import moment from 'moment'
  import uuidv4 from 'uuid/v4'

  export default {
    name: 'nkn-chat',
    components: {},
    props: {
      topic: {
        type: String
      },
      title:{
        type:String
      }
    },
    data() {
      return {
        moment: moment,
        clientHelper: undefined,
        dests: [],
        showChat: false,
        items: [],
        message: '',
        address: undefined,
        loading: true,
        unReadCount: 0
      }
    },
    computed: {},
    async created() {
      let owner = this.topic.replace(/^[^\.]*\./,'')
      this.clientHelper = new ClientHelper()
      this.dests = await this.clientHelper.getSubscribers(this.topic, owner)
      this.clientHelper.client.on('connect', () => {
        this.loading = false
      })
      this.address = this.clientHelper.client.addr
    },
    mounted() {
      this.clientHelper.client.on('message', (src, data) => {
        if (!this.showChat) {
          this.unReadCount++
        }
        let message = JSON.parse(data)
        if(message.contentType === 'text') {
          this.items.push({src: src.replace(/^([^\.]*\.*[^\.]{6})[^\.]+$/, '$1'), ...message})
          let data = {
            contentType: 'text',
            id: uuidv4(),
            content: ` \`\`\`[system] reveice message "${message.content}" from ${src} \`\`\` `,
            // topic: this.topic,
            isPrivate: true,
            timestamp: new Date().getTime()
          }
          this.clientHelper.publish(this.dests, data)
        }
      })
    },
    watch: {
      items() {
        this.$nextTick(() => {
          document.getElementById('message-list').scrollTop = document.getElementById('message-list').scrollHeight
        })
      }
    },
    methods: {
      send() {
        if (this.message.trim()) {
          let message = this.message
          let data = {
            contentType: 'text',
            id: uuidv4(),
            content: message,
            // topic: this.topic,
            isPrivate: true,
            timestamp: new Date().getTime()
          }
          this.clientHelper.publish(this.dests, data)
          this.items.push({src: this.address, content: message})
          this.message = ''
        }
      },
      toggleChat(){
        this.showChat = !this.showChat
        if(this.showChat) this.unReadCount = 0
      }
    }
  }
</script>
