<template>
    <nav>
        <ul>
            <li><a href="#">logo</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">social</a></li>
            <li><a href="#">team</a></li>
            <li><a href="#">contact</a></li>
        </ul>
    </nav>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

    nav {
        background: #95a5a6;
        margin-bottom: 10px;

    }

    ul {
        display: flex;
        text-transform: uppercase;
        justify-content: space-evenly;
        padding: 20px;
        margin: 0 auto;

    }

     ul li {
         list-style: none;

    }


    li a{
        text-decoration: none;
    }





</style>