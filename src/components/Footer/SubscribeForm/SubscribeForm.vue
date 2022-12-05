<template>
    <div class="right-side-footer">
        <h3>Узнайте первыми о новинках и акциях</h3>
        <form action="">
            <input type="email" name='emailSub' id="emailSub" placeholder="Адрес электронной почты">
            <hr>
            <div>
                <button for='emailSub' class="regular-border subs-email-button">Подписаться</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
    setup() {


        return {}
    }
})
</script>

<style scoped lang="scss">
    .right-side-footer {
        
        h3 {
            margin: 1rem 1rem;
            text-transform: uppercase;
        }
        input {
            width: 100%;
            line-height: 2rem;
            margin: 0rem 1rem
        }
        .subs-email-button {
            padding: 0.5rem 2rem;
            margin: 2rem 0;
        }
        hr {
            margin: 0rem 1rem;
        }
        div {
            position: relative;
            left: 60%;
        }
        button:hover {
            background-color: #E1E1E1;
            transition: 0.1s linear;
        }
    }
</style>