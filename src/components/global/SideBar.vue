<template>
  <div class="sidebar">
    <div class="sidebar--wrapper">
        <div class="liner--24"></div>
        <div>
            <div class="liner--24"></div>
            <div>
                <!-- 		Trie section		 -->
                <button class="btn-acc-trie">
                    <div class="btn-content">
                        Trier
                        <div class="f"></div>
                        <div class="btn-acc-icon">
                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                </button>
                <!-- 		trie form		 -->
                <div class="radiogroup">
                    <form>
                        <label>
                            <input type="radio" name="radio" checked/>
                            <span>Choisi pour vous (par defaut)</span>
                        </label>
                        <label>
                            <input type="radio" name="radio"/>
                            <span>Les plus populaires</span>
                        </label>
                        <label>
                            <input type="radio" name="radio"/>
                            <span>Note</span>
                        </label>
                        <label>
                            <input type="radio" name="radio"/>
                            <span>Délais de livraison</span>
                        </label>
                    </form>
                </div>
                <div class="liner--24"></div>
                <!-- 		by Us section		 -->
                <button class="btn-acc-trie">
                    <div class="btn-content">
                        Par Uber Eats
                        <div class="f"></div>
                        <div class="btn-acc-icon">
                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                </button>
                <!-- 		by Us form		 -->
                <div class="checkboxgroup">
                    <form>
                        <ul class="list">
                            <li class='list__item'>
                                  <!-- 		Switch: start		 -->
                                <label for='primary' class='switch switch--primary'>
                                    <div class="switch__icon">
                                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" ><path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path></svg>
                                    </div>
                                    <p class="switch__desc f">Offres</p>
                                    <input class='switch__input' type="checkbox" id='primary'/>
                                    <div class="switch__box">
                                        <span class="switch__box-inner"></span>
                                    </div>
                                    
                                </label>
                                <!-- 		Switch: end		 -->
                            </li>
                            <li class='list__item'>
                                  <!-- 		Switch: start		 -->
                                <label for='secondary' class='switch switch--secondary'>
                                    <div class="switch__icon">
                                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="ca cb cc cd"><path d="M15 9l8-8h-6l-5 5-5-5H1l8 8h6z"></path>,<path d="M6 14v6l6 3 6-3v-6l-6-3.5L6 14z"></path></svg>
                                    </div>
                                    <p class="switch__desc f">La crème de la crème</p>
                                    <input class='switch__input' type="checkbox" id='secondary'/>
                                    <div class="switch__box">
                                        <span class="switch__box-inner"></span>
                                    </div>
                                    
                                </label>
                                <!-- 		Switch: end		 -->
                            </li>
                        </ul>  
                    </form>
                </div>
                <div class="liner--24"></div>
                <!-- 		Price section		 -->
                <button class="btn-acc-trie">
                    <div class="btn-content">
                        Fourchette de prix
                        <div class="f"></div>
                        <div class="btn-acc-icon">
                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                </button>
                <div class="pricegroup">
                    <button class="btn btn__price">
                        <div class="price">€</div>
                    </button>
                    <button class="btn btn__price">
                        <div class="price">€€</div>
                    </button>
                    <button class="btn btn__price">
                        <div class="price">€€€</div>
                    </button>
                    <button class="btn btn__price">
                        <div class="price">€€€€</div>
                    </button>
                </div>
                <div class="liner--24"></div>
                <!-- 		Price section		 -->
                <button class="btn-acc-trie">
                    <div class="btn-content">
                        Frais de livraison maximum
                        <div class="f"></div>
                        <div class="btn-acc-icon">
                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                </button>
                <div class="range-slider">
                    <input type="range" min="1" max="4" class="slider"/>
                    
                </div>
                <div class="val__range">
                    <div class="val__item">€3</div>
                    <div class="val__item">€5</div>
                    <div class="val__item">€7</div>
                    <div class="val__item">€7+</div>
                </div>
                <div class="liner--24"></div>
                <!-- 		Price section		 -->
                <button class="btn-acc-trie">
                    <div class="btn-content">
                        Diététique
                        <div class="f"></div>
                        <div class="btn-acc-icon">
                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                </button>
                <div class="pricegroup">
                    <button class="btn btn__price">
                        <div class="price">
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="diet-icon"><path d="M14.083 2.833c-4.333 0-7.916 3.583-7.916 7.917v5.333L2.75 19.5l1.75 1.75 3.417-3.417h4.5a8.749 8.749 0 008.75-8.75v-6.25h-7.084zm0 2.5h3.75L8.667 14.5v-3.75c0-3 2.416-5.417 5.416-5.417z"></path></svg>
                            <div class="spacer--4"></div>
                            Végétarien
                        </div>
                    </button>
                    <button class="btn btn__price">
                        <div class="price">
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="diet-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.182C13.09 4 14.546 2.909 16.546 2.909 19.727 2.91 22 5.546 22 8.82c0 1.636-.727 3-1.818 4.09L12 20.637l-8.182-7.728C2.636 11.91 2 10.455 2 8.82c0-3.273 2.273-5.91 5.455-5.91 2 0 3.454 1.182 4.545 2.273zm0 6.09l3.364-3.182 1.818 1.818-5.182 5-5.182-5L8.636 8.09 12 11.272z"></path></svg>
                            <div class="spacer--4"></div>
                            Vegan
                        </div>
                    </button>
                </div>
                <div class="pricegroup">
                    <button class="btn btn__price">
                        <div class="price">
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="diet-icon"><path d="M9.917 12.417l1.666-1.667c1.25-1.25 1.584-3.167.75-4.833L10.75 2.75 9.083 4.417c-1.25 1.25-1.583 3.166-.75 4.833l1.584 3.167zM13.25 12.417l-1.667 1.666 3.167 1.584c1.583.833 3.5.5 4.833-.75l1.667-1.667-3.167-1.583c-1.666-.834-3.583-.5-4.833.75zM7.333 11L5.75 7.833 4.083 9.5c-1.25 1.25-1.583 3.167-.75 4.833L4.917 17.5l1.666-1.667c1.25-1.333 1.584-3.25.75-4.833zM8.25 17.417l-1.667 1.666 3.167 1.584c1.583.833 3.5.5 4.833-.75l1.667-1.667-3.167-1.583c-1.666-.834-3.583-.5-4.833.75zM19.5 2.833c-2.75 0-5 2.25-5 5V9.5h1.667c2.75 0 5-2.25 5-5V2.833H19.5z"></path></svg>
                            <div class="spacer--4"></div>
                            Sans gluten
                        </div>
                    </button>
                    <button class="btn btn__price">
                        <div class="price">
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="diet-icon"><path d="M21.167 13.666c0-2.3-1.867-4.166-4.167-4.166V12c.917 0 1.667.75 1.667 1.666h-3.334V5.333h-2.5v8.125a1.878 1.878 0 01-1.875 1.875H8.667v2.5h2.291a4.346 4.346 0 003.409-1.667h6.8v-2.5zM4.5 14.916a.413.413 0 01-.417.417H2v2.5h2.083A2.92 2.92 0 007 14.916V5.333H4.5v9.583z"></path><path d="M11.167 5.333h-2.5v8.333h2.5V5.333z"></path></svg>
                            <div class="spacer--4"></div>
                            Halal
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
 name: 'SideBar'
}
</script>

<style lang="scss">

.sidebar{
    height: 90vh;
    width: 25%;
    padding: 0 12px 12px 0;
    margin-bottom: 24px;
    max-height: 100vh;
    top: 0px;
    position: sticky;
    overflow-y: hidden;
    display: flex;

    &--wrapper{
        margin: 0;
        width: 280px;
        display: flex;
        flex-direction: column;

        .btn-acc-trie{
            border-width: 0;
            width: 100%;
            cursor: pointer;
            padding: 0;
            margin: 0;
            background: transparent;
            font: inherit;
            color: inherit;
            letter-spacing: inherit;

            .btn-content{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-weight: 500;
                font-size: 18px;

                .btn-acc-icon{
                    width: 24px;
                    height: 24px;
                    line-height: 1;
                }
            }
        }

        .radiogroup{
            padding: 12px 0px;

            form {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
            }

            label {
                display: flex;
                cursor: pointer;
                font-weight: 500;
                position: relative;
                overflow: hidden;
                margin-bottom: 0.375em;
                font-size: 14px;

                input {
                    position: absolute;
                    left: -9999px;
                    &:checked + span {
                        background-color: #fff;
                        &:before {
                            box-shadow: inset 0 0 0 0.4375em black;
                        }
                    }
                }
                span {
                    display: flex;
                    align-items: center;
                    padding: 0.375em 0.75em 0.375em 0.375em;
                    border-radius: 99em; // or something higher...
                    transition: 0.25s ease;
                    &:hover {
                        background-color: #fff;
                    }
                    &:before {
                        display: flex;
                        flex-shrink: 0;
                        content: "";
                        background-color: #fff;
                        width: 1.5em;
                        height: 1.5em;
                        border-radius: 50%;
                        margin-right: 0.375em;
                        transition: 0.25s ease;
                        box-shadow: inset 0 0 0 0.125em black;
                    }
                }
            }
        }
    }
}

.f{flex: 1;}

.pricegroup{
    padding: 12px 0px;
    display: flex;

    .btn{
        border-width: 0;
        cursor: pointer;
        padding: 0;
        margin: 0;
        background: transparent;
        font: inherit;
        color: inherit;
        letter-spacing: inherit;

        &__price {
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 12px;
            padding-right: 12px;
            border-radius: 30px;

            margin-left: 6px;
            background-color: #EEEEEE;
            font-size: 14px;
            -webkit-box-align: center;
            align-items: center;
            color: #000000;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;

            .price {
                display: flex;
                flex-direction: row;

                .diet-icon{

                    width: 16px;
                    height: 16px;
                }
            
            }


        }
    }

}

.checkboxgroup{
    padding: 12px 0px;
}

.val__range{
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;

    .val__item{
        font-size: 14px;
        font-weight: 500;
    }

}
.range-slider{
    padding: 0 12px;

    

    .slider {
        appearance: none;
        background: black;
        height: 2px;
        width: 100%;


        &::-webkit-slider-thumb{
            appearance: none;
            height: 12px;
            width: 12px;
            border-radius: 20px;
            background: black;
            color: black;
        }
    }   
}

// Variables
$colors: (
	"primary": #000,
	"info": #2786fb
);

$ease: cubic-bezier(.38,.24,.28,1.17);


// List of switches styles
.list {
    list-style: none;
    margin: 0;
    padding: 1px;
	
	&__item {
		border-radius: 20px;
		transition: .3s ease all;
		will-change: background-color;
		
	}
}

// Switches style
.switch {
	position: relative;
	display: flex;
	align-items: center;
    justify-content: flex-end;
	cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;

    &__icon {
        height: 20px;
        width: 20px;
        fill: #000;
    }
	
	// Hide input 
    &__input {
        opacity: 0;
        visibility: hidden;
        width: 1px;
        height: 1px;
        background-color: transparent;
        pointer-events: none;
        position: absolute;
    }
	// Switch box 
    &__box {
        display: flex;
        align-items: center;
        border-radius: 500px;
        position: relative;
        height: 14px;
        width: 40px;
        background-color: #eee;
        box-shadow: 0 0 10px transparent;
        transition: 0.4s all $ease;
 
        &-inner {
            position: absolute;
            z-index: 99;
            width: 20px;
            height: 20px;
            border-radius: 100px;
            background-color: white;
            transform: translateX(0);
            box-shadow: 0 4px 20px rgba(white, .2);
            transition: 0.4s all $ease;
            overflow: hidden;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

            &:hover {
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                
            }
        }
    }
	// Animation on check input 
    &__input:checked ~ &__box > &__box-inner {
        animation: checkSwitch .4s $ease forwards;
        background-color: black;
        &::after {
            animation: checkSwitchAfter .4s $ease .2s forwards;
        }
    }
	// Animation on uncheck
    &__input:not(:checked) ~ &__box > &__box-inner {
        background-color: white;
        transform: translateX(-20px);
        animation: unCheckSwitch .4s $ease forwards;

        &::after {
            animation: unCheckSwitchAfter .4s $ease forwards;
        }
    }
	
	// Styles for all states 
	@each $key, $value in $colors {
		&--#{$key} &__box-inner::after {
        background-color: rgba($value, .6);
		}
		&--#{$key} &__input:checked ~ &__box {
			
			&::before {
				transform: translateX(0);
				border-radius: 20px;
			}
		}
		
		&--#{$key} &__box::before {
            background-color: $value;
		}
	}
	// Switches text style
	&__desc {
		margin-left: 12px;
	}

}
@each $key, $value in $colors {
	.#{$key}-color {
		color: $value;
	}
}

// Switches keyframes :)
@keyframes checkSwitch {
    0% {
        transform: translateX(0);
    }
    50% {
        width: 36px;
        transform: translateX(0);
    }
    100% {
        width: 20px;
        transform: translateX(24px);
    }
}

@keyframes checkSwitchAfter {
    from {
        transform: translateX(-40px) scale(.2);
    }
    to {
        transform: translateX(0) scale(1);
    }
}
@keyframes unCheckSwitchAfter {
    from {
        transform: translateX(0) scale(1);
    }
    to {
        transform: translateX(40px) scale(.2);
    }
}
@keyframes unCheckSwitch {
    0% {
        width: 20px;
        transform: translateX(24px);
    }
    50% {
        width: 36px;
        transform: translateX(0);
    }
    100% {
        transform: translateX(0);
    }
}




</style>