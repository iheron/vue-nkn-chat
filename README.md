# vue-nkn-chat

## Install
```shell
npm install vue-nkn-chat
```
or
```shell
yarn add vue-nkn-chat
```

## Usage
> main.js
```javascript
import nknChat from 'vue-nkn-chat'

Vue.use(nknChat)
```

> vue page
```vue
<template>
  <nkn-chat lang="en" title="Customer Support Service" welcome="Hi, this is NKN's community support team. How are you today and what can we help?" send-label="Send" topic="YOUR_TOPIC"/>
</template>
<script>
  import 'vue-nkn-chat/lib/nknChat.css'
</script>
```
