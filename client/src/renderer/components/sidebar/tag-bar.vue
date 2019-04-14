<template>
  <div id="tag-bar">
    

    

   
      
    <div>
   <input id='box1' type='checkbox' v-show="tagShow[0]">   
    <label id='check1'> </label>   
    </div>
    <div>
    <input id='box2' type='checkbox' v-show="tagShow[1]">   
    <label id='check2'></label>   
    </div>
      <div>
    <input id='box3' type='checkbox' v-show="tagShow[2]">   
    <label id='check3'></label>   
    </div>
    <div>
    <input id='box4' type='checkbox' v-show="tagShow[3]"> 
    <label id='check4'></label>   
    </div>
    <div>
    <input id='box5' type='checkbox' v-show="tagShow[4]">   
    <label id='check5'></label>   
    </div>
    <div>
    <input id='box6' type='checkbox' v-show="tagShow[5]">   
    <label id='check6'></label>  
    </div> 
    <div>
    <input id='box7' type='checkbox' v-show="tagShow[6]">  
    <label id='check7'></label>   
    </div>
    <div>
    <input id='box8' type='checkbox' v-show="tagShow[7]">   
    <label id='check8'></label>    
    </div>

    
    <div> <button v-on:click="displayNewTagInput()" id="a">➕</button></div>
    <div v-show="isShowNewTag" id="inputfield">
  <input type="text" id="input" name="newtagname"><br>
  
  <input type="submit" value="Submit" v-on:click="getfrominput()"/>
</div>

  </div>
</template>

<script>

//import ChatItem from './_parts/chat-item';
//import TagItem from './_parts/tag-item';

export default {
  name: 'tag-bar',
  components: {
  //  TagItem
  },
  data() {
    return{
    isShow:false,
    isShowNewTag:false,
    tag:[],
    tagShow:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.Main.userInfo;
    }
  },
  methods:{ 
    display(){
        console.log("b");
        //isShow=true;
    },
    displayNewTagInput(){
      this.isShowNewTag=true;
      
    },
    displayNewTagInput2(){
      this.$set(this.tagShow,this.tag.length,true);
    },
    changeStatus() {
    document.getElementById("check"+this.tag.length).innerHTML='#'+this.tag[this.tag.length-1];
    //this.tag.push('apple');
    },
    getfrominput(){
      this.$set(this.tagShow,this.tag.length,true);
      this.tag.push(document.getElementById("input").value);
      document.getElementById("input").value='';
      this.changeStatus();
    },
    ifchecked(num){
      return document.getElementById("box"+num).checked;
    },
    selected(){
      let arr=[];
      let i;
      for (i = 0; i < this.tag.length; i++) { 
           if(this.ifchecked(i+1)){
             arr.push(this.tag[i]);
           }
      }
       console.log(arr);

      return arr;
    }
    
  }
};
</script>

<style lang="stylus">
#tag-bar {
  position: absolute;
  right:310px;
  width: $menu-bar-width;
  height: $app-height;
  background: $menu-bar-bg;

  .avatar {
    width: 40px;
    height: 40px;
    margin: 30px auto 20px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    margin: 0 auto 16px;
    font-size: 20px;
    color: #525C68;
    cursor: pointer;

    span {
      transition: 0.1s;
    }

    :hover {
      color: #A7B0BB;
    }

    .active, .router-link-active {
      color: #A7B0BB;
    }
  }

  

  
}

#input{
  width:50px;
}

#last {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 2;
    margin-bottom: 20px;
  }
#a {
    position:absolute;
    bottom :20px;
    left:0px;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
    background-color:#A7B0BC;
  }

  #inputfield {
    position:absolute;
    bottom :40px;
    left:0px;
  }
</style>
