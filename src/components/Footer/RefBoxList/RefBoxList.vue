<template>
    <div class="left-side-footer">
        <div class="for-client-footer">
            <h3>покупателям</h3>
            <div>
                <a href="">Каталог</a>
                <a href="">Акции</a>
                <a href="">Бренды</a>
            </div>
        </div>
        <div class="about-us-footer">
            <h3>О нас</h3>
            <div>
                <a href="">О компании</a>
                <a href="">Новости</a>
                <a href="">Команда</a>
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
}
</style>