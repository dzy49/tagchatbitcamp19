<template>
  <div class="message-item">
    <div v-if="message.type === 'system'">
      <keep-alive>
        <component :is="currentMessageType"></component>
      </keep-alive>
    </div>

    <div v-else-if="message.from === $uid">
      <right-message-box :message="message">
        <keep-alive>
          <component :is="currentMessageType"
                     :message="message"></component>
        </keep-alive>
      </right-message-box>
    </div>

    <div v-else>
      <left-message-box :message="message">
        <keep-alive>
          <component :is="currentMessageType"
                     :message="message"></component>
        </keep-alive>
      </left-message-box>
    </div>
  </div>
</template>

<script>
import LeftMessageBox from './message-boxes/left-message-box';
import RightMessageBox from './message-boxes/right-message-box';

import TextMessage from './message-types/text-message';
import ImageMessage from './message-types/image-message';
import FileMessage from './message-types/file-message';
import AudioMessage from './message-types/audio-message';
import VideoMessage from './message-types/video-message';
import SystemMessage from './message-types/system-message';

export default {
  name: 'message-item',
  data(){
    return{
      test:this.$parent.test
    };
  },
  components: {
    LeftMessageBox,
    RightMessageBox,
    TextMessage,
    ImageMessage,
    FileMessage,
    AudioMessage,
    VideoMessage,
    SystemMessage
  },
  props: {
    message: {
      required: true,
      type: Object
    }
  },
  computed: {
    currentMessageType() {
      return `${this.$capitalizeFirstLetter(this.message.type)}Message`;
    },
    isGroup() {
      return this.message.to.startsWith('g');
    }
  },
  methods:{
    getbarchecked(){
      return this.$parent.getbarchecked();
    },
    containstag(){
      console.log(this.message.content.text);
      return this.message.content.text.includes("ha");
    },
    containstag2(){
      console.log(this.$parent.getfromtagbar);
      return this.message.content.text.includes(this.$parent.getfromtagbar);
    },
    containstag3(){
      return this.$parent.getfromtagbar5().every(item => this.message.content.text.includes('#'+item));
    }
  }
};
</script>

<style lang="stylus">
.message-item {
  margin-bottom: 15px;
}
</style>
