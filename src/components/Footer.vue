<template>
    <footer class="d-flex-r clear container text-white">
       <div class="copyright">
            <p>Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
            <p>Built With Love from Nesa Cohort 9</p>
            <a href="#mypage"><div id="backtoptop"><i class="fa fa-chevron-up"></i></div></a>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.copyright{
    display: flex;
    justify-content: space-around;
    background: #34495e;
    color: white;
    margin-bottom: 20px;
}
</style>