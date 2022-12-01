<template>
    <div class="main-header">
        <h3> LOGO </h3>
        <div class='header-icons'>
            <a href=""><img src="src\assets\person.svg"></a>
            <a href=""><img src="src\assets\favorite.svg"></a>
            <a href=""><img src="src\assets\bag.svg"></a>
            <div class="menu-button-is-visible">
                <button @click="clickMenuButton" class="mobile-menu">
                    <img src="src\assets\menu.png">
                </button>
            </div>
        </div>
        <div @click.stop :class="{'opened-menu': isMenuOpen, 'menu-hidden': !isMenuOpen}">
            <button @click="hideMenu" class="mobile-menu">
                    <img src="src\assets\exit.png">
            </button>
            <a href="">постельное белье</a>
            <a href="">одежда для дома</a>
            <a href="">Одежда для улицы</a>
            <a href="">Выход</a>
        </div>
    </div>
    <hr>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            isMenuOpen: false,
        }
    },
    setup () {
        

        return {}
    },
    methods: {
        clickMenuButton() {
            this.isMenuOpen = true;
        },
        hideMenu() {
            this.isMenuOpen = false;
        }
    }
})
</script>

<style scoped lang="scss">
 .main-header {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    align-items: center;

    .header-icons {
        display: flex;
        justify-content: space-around;
        width: 10rem;
    }

    button {
        background-color: white;
    }

    a:active {
        background-color: rgba($color: #000000, $alpha: .4);
    }
    .menu-hidden {
        display: none;
    }

    .opened-menu {
        text-transform: uppercase;
        position: absolute;
        line-height: 4rem;
        background-color: white;
        display: flex;
        flex-direction: column;
        height: 20rem;
        width: 100%;
        z-index: 20;
        left: 0;
        top: 0;
        padding: 1rem 2rem 0rem 2rem;

        button {
            display: flex;
            justify-content: end;
        }

        a {
            text-decoration: none;
            color: #333333;
        }
    }
 }
</style>