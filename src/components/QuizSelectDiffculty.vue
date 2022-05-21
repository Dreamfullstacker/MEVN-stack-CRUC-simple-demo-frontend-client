<template>
    <section>
        <b-button type="is-danger is-light">Reset</b-button>
         <b-select v-model="difficulty" placeholder="Select Difficult Level">
                <option value="easy" key="easy">Easy</option>
                <option value="medium" key="medium">Medium</option>
                <option value="hard" key="hard">Hard</option>
        </b-select>
        <b-button type="is-success" @click.prevent="quizStart()">Start</b-button>
    </section>
</template>

<script>

export default {
    data(){
        return{
            difficulty : ''
        }
    },
    methods : {
        quizStart(){

        }
    }
}
</script>
