<template>
  <v-container>
    <div class="name">
        <div v-for="(letter, index) in newname" :key="index" class="letters">
            <div v-for="i in n_repeat" :key="i" class="item">{{ letter.toUpperCase() }}</div>
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
            n_repeat: 9,
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
            justify-content: start;
            font-family: "Rubik Distressed", serif;
            font-size: 45px;
            font-weight: 400;
            font-style: normal;
        }
        .letters .item{
            transition: .5s;
            color: #0B2C3D;
        }
        .item:first-child{
            color: #858D71;
        }
        .letters .item:hover{
            color: #858D71;
            filter: brightness(1);
        }
        .letters .item:hover + *{
            filter: brightness(.6);
            color: #858D71;
        }
        .letters .item:has(+ *:hover){
            color: #858D71;
            filter: brightness(.6);
        }
        .letters .item:hover + * + *{
            filter: brightness(.4);
            color: #858D71;
        }
        .letters .item:has(+ * + *:hover){
            color: #858D71;
            filter: brightness(.4);
        }
        .letters .item:hover + * + * + *{
            filter: brightness(.3);
            color: #858D71;
        }
        .letters .item:has(+ * + * + *:hover){
            color: #858D71;
            filter: brightness(.3);
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