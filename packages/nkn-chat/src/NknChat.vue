<template>
    <div class="nkn-chat">
        <transition name="fade">
            <v-card v-show="showChat" class="chat">
                <v-card-title>Title</v-card-title>
                <div class="divider"></div>
                <v-card-text class="container">
                    <v-list three-line flat>
                        <template v-for="(item, index) in items">
                            <v-list-item :key="item.title">
                                <v-list-item-content class="message-target">
                                    <v-list-item-subtitle>heron.25ac59
                                    <span class="time">2019-12-25 10:20</span>
                                    </v-list-item-subtitle>
                                    <v-list-item-title>Hello.</v-list-item-title>

                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content class="message-mine">
                                    <v-list-item-subtitle>
                                        <span class="time">2019-12-25 10:20</span>
                                        heron.25ac59
                                    </v-list-item-subtitle>
                                    <v-list-item-title>Hello.</v-list-item-title>

                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-textarea class="message-box"
                                outlined persistent-hint hide-details
                                rows="2"
                    />
                    <v-btn class="send" fab small dark>
                        <font-awesome-icon icon="paper-plane" style="font-size:1.2rem"/>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </transition>
        <v-btn class="button" @click="showChat = !showChat" fab large dark color="blue">
            <v-badge>
                <template v-slot:badge>
                    <div class="count">1</div>
                </template>
                <font-awesome-icon icon="comment-dots" size="2x"/>
            </v-badge>
        </v-btn>

    </div>
</template>

<script>
  import '../../styles/global.scss'
  import '../../styles/nkn-chat.scss'

  export default {
    name: 'nkn-chat',
    components: {},
    data() {
      return {
        showChat: false,
        items: [

          {
            avatar: 'https://picsum.photos/250/300?image=660',
            title: 'Meeting @ Noon',
            subtitle:
              '<span class=\'text--primary\'>Spike Lee</span> &mdash; I\'ll be in your neighborhood',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=821',
            title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
            subtitle:
              '<span class=\'text--primary\'>to Operations support</span> &mdash; Wish I could come.',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=783',
            title: 'Yes yes',
            subtitle:
              '<span class=\'text--primary\'>Bella</span> &mdash; Do you have Paris recommendations',
          },

          {
            avatar: 'https://picsum.photos/250/300?image=1006',
            title: 'Dinner tonight?',
            subtitle:
              '<span class=\'text--primary\'>LaToya</span> &mdash; Do you want to hang out?',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=146',
            title: 'So long',
            subtitle:
              '<span class=\'text--primary\'>Nancy</span> &mdash; Do you see what time it is?',
          },

          {
            avatar: 'https://picsum.photos/250/300?image=1008',
            title: 'Breakfast?',
            subtitle:
              '<span class=\'text--primary\'>LaToya</span> &mdash; Do you want to hang out?',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=839',
            title:
              'Winter Porridge <span class="grey--text text--lighten-1"></span>',
            subtitle:
              '<span class=\'text--primary\'>cc: Daniel</span> &mdash; Tell me more...',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=145',
            title: 'Oui oui',
            subtitle:
              '<span class=\'text--primary\'>Nancy</span> &mdash; Do you see what time it is?',
          },
        ],
      }
    },
    computed: {},
  }
</script>
