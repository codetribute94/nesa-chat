<template>
<div>
    <form class="box" action="" method="POST">
        <h1>signup</h1>
        <input class="types" type="text" name="" placeholder="fullname">
        <input class="types" type="text" name="" placeholder="username">
        <input class="types" type="email" name="" placeholder="email">
        <input class="types" type="password" name="" placeholder="password">
        <input class="types" type="password" name="" placeholder="confirm password">
        <input type="submit" name="" value="signup">
    </form>

</div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import Footerr from "../components/Footer.vue";
    
    export default {
        name: "signup"
    }
</script>

<style scoped>
.box{
    width: 320px;
    padding: 40px;
    background: #191919;
    text-align: center;
    margin: 60px auto;
}

.box h1{
    color: white;
    text-transform: uppercase;
    font-weight: 500;
}

.types{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 240px;
    outline: none;
    color: white;
    border-radius: 24px;
}
.types:focus{
    width: 300px;
    color: #2ecc71;
}
.box input[type ='submit']{
    width: 120px;
    background: none;
    display: block;
    margin: 20px, auto;
    margin-left: 95px;
    text-align: center;
    align-content: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    cursor: pointer;
    transition: 0.25s;
}
.container{
    margin-top: 30px;
}
</style>