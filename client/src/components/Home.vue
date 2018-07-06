<template>
    <div>
        Hello World!
        <ul id="post-container">
            <li v-for="post in posts" v-bind:key="post">
                {{ post.title }}
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            posts: [
                {title: "fwee", description: "that's what", date: Date.now(), content: "<h1>I0</h1>"},
                {title: "fwee", description: "that's what", date: Date.now(), content: "<h1>I0</h1>"},
                {title: "fwee", description: "that's what", date: Date.now(), content: "<h1>I0</h1>"},
                {title: "fwee", description: "that's what", date: Date.now(), content: "<h1>I0</h1>"}
            ]
        }
    }
}
</script>

<style>

</style>
