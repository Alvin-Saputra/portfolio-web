<script setup>

</script>

<template>
    <header>
        <nav class="container">

            <div class="branding">
                <h1>Portfolio</h1>
            </div>
            <ul class="nav-routes">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Projects</a>
            </ul>
        </nav>
    </header>
</template>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

*{
    font-family: "Montserrat", sans-serif;
}
header {

    nav {
        display: flex;
        align-items: center;
        padding: 32px 48px ;

        .branding {
            display: flex;
            align-items: center;
            gap: 8px;


            h1 {
                font-size: 18px;
                color:white
            }
        }

        .nav-routes {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap: 64px;
            list-style: none;
            color:white;
            a {
                text-decoration: none;
                color: inherit;
            }
        }
    }
}
</style>
