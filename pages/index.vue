<template>
    <header>
        <div class="center-content">
            <TheHeader></TheHeader>
        </div>

    </header>
    <main>
        <section class="login">
            <div class="center-content">
                <TheLogin />
            </div>
        </section>
        <section class="join-steam">
            <div class="center-content">
                <TheJoin />
            </div>
        </section>
    </main>
    <footer>
        <div class="center-content">
            <TheFooter />
        </div>
    </footer>
</template>
<script setup>
import TheHeader from '../components/TheHeader.vue'
</script>
<style scoped>
.center-content {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}
</style>