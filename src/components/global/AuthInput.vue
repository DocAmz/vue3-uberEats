<template>
    <div class="auth--wrapper">
        <div class="spacer--24"></div>
        <button class="btn cart-btn">
            <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" class="cd ce c6 cf"><path fill="#FFF" clip-rule="evenodd" d="M3.666 11.333h10.333l1.334-8h-11l-.267-2h-3.4v2h1.667l1.333 8zm1.333 3.334A1.333 1.333 0 105 12a1.333 1.333 0 000 2.667zm9.334-1.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"></path></svg>
            <div class="spacer--4"></div>
            <div class="btn-cart-label">Panier • 0</div>
        </button>
        <div class="spacer--24"></div>
        <button class="btn log-btn login-btn">
            <svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" class="cd ce c6 cf"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"></path></svg>
            <div class="spacer--4"></div>
            Connexion
        </button>
        <div class="spacer--16"></div>
        <button class="btn log-btn signin-btn">
            Inscription
        </button>
    </div>
</template>

<script>
export default {
    name: 'AuthInput'
}
</script>

<style lang="scss">

.auth--wrapper{
    height: 96px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;

    .btn{
        border-width: 0;
        cursor: pointer;
        padding: 0;
        margin: 0;
        background: transparent;
        font: inherit;
        color: inherit;
        letter-spacing: inherit;

        svg{
            color: #FFF;
            width: 16px;
            height: 16px;
        }
    }

    .cart-btn{
        margin: 0px;
        height: 36px;
        padding: 8px 12px;
        border-radius: 500px;
        background: #000;
        color: #FFF;
        font-size: 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .log-btn{
        margin: 0px;
        height: 36px;
        padding: 8px 12px;
        border-radius: 500px;
        background: #eee;
        color: #000;
        font-size: 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
}

</style>