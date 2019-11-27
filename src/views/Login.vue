<template>

    <div>
        <navbar></navbar>
        <form class="box" action="" method="POST">

            <h1>Login</h1>
            <input type="text" name="" placeholder="Username">
            <input type="password" name="" placeholder="Password">
            <input type="submit" name="" placeholder="Login">

        </form>


    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";

    export default {
        name: "Login",
        components: {
            Navbar
        }
    }
</script>

<style scoped>
    .box{
        width: 300px;
        padding: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #191919;
        text-align: center;
    }

    .box h1 {
        color: white;
        text-transform: uppercase;
        font-weight: 500;
    }

    .box input[type = "text"], .box input[type = "password"]{
        border: 0;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid  #3489db;
        padding: 12px 15px;
        width: 200px;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 0.25s;
        cursor: pointer;

    }

    .box input[type ="text"]:focus, .box input[type ="password"]:focus {
        width: 280px;
        border-color: #2ecc71;
    }

    .box input[type ="submit"]{
        width: 150px;
        color: white;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #2ecc71;
        padding: 14px 40px;
        outline: none;
        border-radius: 24px;
        transition: 0.25s;
        cursor: pointer;
    }

</style>