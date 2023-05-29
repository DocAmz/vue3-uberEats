<template>
  <div class="home">
    <div class="header">
      <div class="header--wrapper">
        <MainHeader/>

        <div class="search-bar" role="search">
          <div class="search-wrapper">
            <div class="search-icon">
              <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="m20.8333 19-3.6666-3.6667c.9167-1.3333 1.4999-2.9166 1.4999-4.6666 0-4.33334-3.5833-7.9167-7.9167-7.9167-4.33331 0-7.91665 3.58336-7.91665 7.9167 0 4.3333 3.58334 7.9167 7.91665 7.9167 1.75 0 3.3334-.5834 4.6668-1.5001l3.6666 3.6667zm-15.50005-8.25c0-2.99999 2.41667-5.41666 5.41665-5.41666 3 0 5.4167 2.41667 5.4167 5.41666 0 3-2.4167 5.4167-5.4167 5.4167-2.99998 0-5.41665-2.4167-5.41665-5.4167z" fill="currentColor"></path></svg>
            </div>
            <div class="spacer--16"></div>
            <input type="text" v-model="user_search" placeholder="Plats, courses alimentaires, boissons, etc.">
            <div class="result">
              <div class="result--wrapper">
                <div class="result--container">

                  <div class="result--header">
                    <h3>Tous nos restaurants</h3>
                    <div class="result--breack"></div>
                  </div>

                  <router-link to="/restaurant" >

                    <div v-for="(restaurant, i) in search_rest" :key="i" class="result--item">

                      <div class="result--item--img">
                        <img :src="restaurant.image" alt="">
                      </div>
                      <h4 class="result--item--title">{{restaurant.name}}</h4>
                      <div class="spacer--24"></div>
                      <p class="f">{{ restaurant.time }}</p>
                      <p class="result--item--rate"><span>{{ restaurant.rate }}</span></p>
                    </div> 
                  </router-link>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="auth">
          <AuthInput />
        </div>
      </div>
    </div>
    <div class="main">
      <SideBar />
      <div class="row--container">
        <CardRow v-for="(data, i) in data_rest" :key="i" :available_rest="data"/>
      </div>
    </div>
  </div>
</template>

<script>
// import ---------------------- [DATA]
import TempData from '../../Helpers/TempData'
// import ---------------------- [PACKAGES]
import { onMounted, ref, watch } from 'vue'
// import ---------------------- [COMPONENTS]
import CardRow from '../cardsysteme/CardRow.vue'
import MainHeader from '../global/MainHeader.vue'
import SideBar from '../global/SideBar.vue'
import AuthInput from '../global/AuthInput.vue'
// export ----------------------
export default {

  name: 'HomePage',
  components:{
    CardRow,
    MainHeader,
    SideBar,
    AuthInput,
  },
  setup() {
    /**
     * Modele de data pour un restaurant
     * (TemplateData)
     */
    class TemplateData {
        constructor(name, rate, image, time) {
            this.name = name
            this.rate = rate
            this.image = image
            this.time = time
        }
    }
    /**
     * Tableau pour recevoir les data un fois quelles seront traitées
     * (data_rest)
     */
    let data_rest = ref([])
    let all_rest = []
    /**
     * Fonction pour traiter les data
     * (data_rest)
     */
    const makeDataRest = () => {
        
        let available_rest = []

        for(const rest of TempData){

            const new_rest = new TemplateData(rest.name,rest.note,rest.image,rest.drive_time)
            // fill all restaurant array
            all_rest.push(new_rest)

            /**
             * fill available restaurant array with only 3 restaurants
             * and push this Array inside data_rest Array 
             */
            if(available_rest.length === 2) {

                available_rest.push(new_rest)
                data_rest.value.push(available_rest)
                available_rest = []

            } else {

                available_rest.push(new_rest)

            }
        }
    }
    /**
     * Handle search function
     */

    let user_search = ref('')
    let search_rest = ref([])

    watch(user_search, newVal => {
      
        let regexRest = RegExp(newVal.toLocaleLowerCase())
        let new_user_search = all_rest.filter( restaurant => regexRest.test(restaurant.name.toLocaleLowerCase()))
        newVal === '' ? search_rest.value = [] : search_rest.value = new_user_search
    })

    
    /**
     * Execute sur le cycle de vie onMounted()
     * makeDataRest()
     */
    onMounted(() => {

      makeDataRest()
      console.log(search_rest)

    })
    /**
     * Return data
     * 
     */
    return {
        data_rest,
        user_search,
        search_rest,
    }
  },

}
</script>

<style lang="scss">
.home{
  margin: 0;

  .header {
    height: 120px;
    width: 100%;
    display: flex;

    &--wrapper {
      height: 96px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 0 40px;

      .search-wrapper{

        input:focus + .result {
          display: block
        }


        .result {
          
          display: none;

          &--wrapper{
          position: absolute;
          z-index: 999;
          left: 0;
          top: 120px;
          width: 100vw;
          min-height: 20vh;
          padding-bottom: 40px;
          background-color: #fff;
          }

          &--container{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            margin-top: 40px;
            
          }
          &--header {
            display: flex;
            flex-direction: column;
            width: 1200px;
            font-size: 25px;
            font-weight: 700;
          }
          &--breack{
            background: #000;
            height: 4px;
            width: 100%;
          }

          &--item{
            display: flex;
            align-items: center;
            margin-top: 20px;
            width: 1200px;
            border-radius: 5000px;
            cursor: pointer;
            transition: all 0.4s ease-in-out;

            &:hover{
              background: #eee;
            }

            &--img{
              width: 100px;
              height: 100px;
              border-radius: 5000px;
              overflow: hidden;

              img{
                background-size: cover;
                background-position: center;
                height: 100%;
              }
            }

            &--title{
              margin:0 0 0 24px;
              font-size: 20px;
            }

            &--rate{
              background-color: #e0f1dc;
              height: 30px;
              width: 30px;
              font-size: 0.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 100%;
              margin-right: 40px;

              span{
                margin: 0px;
                color:  rgb(89, 164, 89);
              }
            }
          }


          
        }
        
      }

    }
  }

  .main {
    display: flex;
    flex-direction: row;
    padding: 0 40px;

    .row--container{
      width: 75%;
    }
  }
}

</style>