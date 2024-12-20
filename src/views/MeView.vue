<template>
  <v-container>
    <div class="name">
        <div v-for="(letter, index) in newname" :key="index" class="letters">
            <p v-for="i in n_repeat" :key="i">{{ letter.toUpperCase() }}</p>
        </div>
    </div>
    <div class="summary">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto sed non magni fuga suscipit?</p>
    </div>
  </v-container>
</template>

<script>
export default {
    created(){
        this.splitName()
    },
    computed:{
        me(){
            return this.$store.state.me
        }
    },
    data(){
        return{
            n_repeat: 10,
            newname:[]
        }
    },
    methods:{
        splitName(){
            const letters = this.me.shortname.split('')
            this.newname = letters
        }
    }

}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: row;

    .name{
        min-width: 30%;
        max-width: 30%;

        .letters{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
}

// .k-name-line {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       margin: 0;
//       transition-duration: 300ms;
//       will-change: margin;

//       &:hover {
//         margin-top: 20px;
//         margin-bottom: 20px;
//       }

//       .l {
//         width: 40px;
//         height: 80px;
//         font-size: 100px;
//         font-weight: 700;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background-color: #000;
//         box-shadow: 0 0 60px 30px #000;
//         transition-duration: 250ms;
//         opacity: 0.75;
//       }
    // }

</style>