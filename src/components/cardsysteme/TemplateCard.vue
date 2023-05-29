<template>
    <div class="Template--Card">
        <div :style="changeBackground" class="card--img"></div>
        <div class="card--info">
            <div class="card--head">
                <h4 class="card--title">{{data_rest.name}}</h4>
                <p class="card--rating"><span>{{data_rest.rate}}</span></p>
            </div>
            <div class="card--foot">
                <p class="card--time"><span>{{data_rest.time}}</span> &#8226; <span>€€</span>  </p>
            </div>
        </div>
    </div>
</template>

<script>
// import ----------------------
import {  computed } from 'vue'
// export ----------------------
export default {
    name: "TemplateCard",
    props: {
        data_rest: Object
    },

    setup(props) {

        const changeBackground = computed(() => {
            return {
                backgroundImage: `url(${props.data_rest.image})`
            }
        })

        // return ----------------------
        return {
            changeBackground
        }
    }
}
</script>

<style lang="scss">
    .Template--Card{
        width: 32%;
        height: 30vh;
        -webkit-box-shadow: 0px 0px 0px 0px #e7ede6;
        cursor: pointer;
        transition: all 0.8s ease-in-out;

        p{
            margin: 0px;
        }

        .card--img{
            height: 70%;
            background-image: url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            background-size: cover;
            background-position: center;
        }

        .card--info {
            display: flex;
            flex-direction: column;
            padding: 0.5rem;
            background-color: #fff;

            .card--head {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .card--title{
                    margin: 0px;
                }
                .card--rating{
                    background-color: #e0f1dc;
                    height: 30px;
                    width: 30px;
                    font-size: 0.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 100%;

                    span{
                        margin: 0px;
                        color:  rgb(89, 164, 89);
                    }
                }

            }
            .card--foot {
                margin-top: 1rem;

                p{
                    font-size: 0.7rem;
                }
            }
        }

        &:hover {
            -webkit-box-shadow: 0px 0px 50px 2px #cad4c9;
        }

    }
</style>