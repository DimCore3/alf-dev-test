<template>
    <div class="left-side-footer">
        <div class="for-client-footer">
            <h3>покупателям</h3>
            <div>
                <p>Каталог</p>
                <p>Акции</p>
                <p>Бренды</p>
            </div>
        </div>
        <div class="about-us-footer">
            <h3>О нас</h3>
            <div>
                <p>О компании</p>
                <p>Новости</p>
                <p>Команда</p>
            </div>
        </div>
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
.left-side-footer {
    line-height: 2rem;
    .for-client-footer {
        div {
            display: flex;
            flex-direction: column;
        }
    }

    .about-us-footer {
        div {
            display: flex;
            flex-direction: column;
        }
    }

    h3 {
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        color: #919191;
        transition: 0.15s linear;
    }
}
</style>