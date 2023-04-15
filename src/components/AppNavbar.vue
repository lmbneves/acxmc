<template>
  <div 
    class="menu-icon"
    @click="toggleMenu"
    :class="{ active: isActive }"
  >
    <span class="menu-icon__line menu-icon__line-left"></span>
    <span class="menu-icon__line"></span>
    <span class="menu-icon__line menu-icon__line-right"></span>
  </div>

  <div 
    class="nav"
    :class="{ active: isActive }"
  >
    <div class="nav__content">
      <ul class="nav__list">
        <li class="nav__list-item home"><router-link :to="{ path: '/' }">Home</router-link></li>
        <li class="nav__list-item about"><router-link :to="{ path: 'about' }" >About</router-link></li>
        <li class="nav__list-item schedule"><router-link :to="{ path: 'schedule' }">Schedule</router-link></li>
        <li class="nav__list-item media"><router-link :to="{ path: 'media' }">Media</router-link></li>
        <li class="nav__list-item contact"><router-link :to="{ path: 'contact' }">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data: function () {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleMenu: function() {
      this.isActive = !this.isActive;
    }
  },
  watch: {
    '$route' () {
      this.isActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
$background--color: $shark-blue;
$icon--color: $shark-blue;
$font--color:#ffffff;
$font--color--active:#fff;
$font--primary:'Fira Sans', sans-serif;
$transition--length: .8;

.site-content{
	max-width: 1100px;
	height: 100vh;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	&__headline{
		font-weight: 200;
		color: $font--color;
		font-size: calc(2vw + 10px);
	}
}

// default state
.menu-icon {
	$size: 30px;
	height: $size;
	width: $size;
	position: fixed;
	z-index:2;
	right: 50px;
	top: 30px;
	cursor: pointer;
	&__line{
		height: 2px;
		width: $size;
		display: block;
		background-color: $icon--color;
		margin-bottom: 4px;
		transition: transform .2s ease, background-color .5s ease;
	}
	&__line-left{
		width: $size / 2;
	}
	&__line-right{
		width: $size / 2;
		float: right;
	}
}

.nav {
	$width: 100%;
	$height: 100vh;
	$font--size--calc: calc(2vw + 10px);
	$transition--easing: cubic-bezier(.77,0,.175,1);
	position: fixed;
	z-index:1;

  width: 100%;
  height: 100vh;

	&:before,&:after{
		content: "";
		position: fixed;
		width: $width;
		height: $height;
		background: rgba(#fff, .2);
		z-index: -1;
		transition: transform $transition--easing $transition--length + s;
		transform: translateX(0%) translateY(-100%);
	}
	&:after{
		background: rgba(#fff, 1);
		transition-delay: 0s;
	}
	&:before{
		transition-delay: .1s;
	}
	&__content{
		position: fixed;
		top:50%;
		transform: translate(0%,-50%);
		width: 100%;
    text-align: center;
		font-size: $font--size--calc;
		font-weight: 200;
    color: $font--color;
	}
	&__list-item{
		position: relative;
		display: block;
		transition-delay: $transition--length + s;
		opacity: 0;
		transform: translate(0%, 100%);
		transition: opacity .2s ease, transform .3s ease;

    a:link, a:visited {
      color: $font--color;
      text-decoration: none;
    }
		// &:before{
		// 	content: "";
		// 	position: absolute;
		// 	background: $font--color--active;
		// 	width: 20px;
		// 	height: 1px;
		// 	top: 100%;
		// 	transform: translate(0%, 0%);
		// 	transition: all .3s ease;
		// 	z-index: -1;
		// }
		// &:hover{
		// 	&:before{
		// 		width: 100%;
		// 	}
		// }
	}
}

// active state
.active {
	$menu--items--count: 5;
  background-color: $shark-blue;

  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

	.menu-icon {
		&__line{
			background-color: #fff;
			transform: translateX(0px) rotate(-45deg);
		}
		&__line-left{
			transform: translateX(1px) rotate(45deg);
		}
		&__line-right{
			transform: translateX(-2px) rotate(45deg);
		}
	}
	.nav {
		visibility: visible;

		// &:before,&:after{
		// 	transform: translateX(0%) translateY(0%);
		// }
		// &:after{
		// 	transition-delay: .1s;
		// }
		// &:before{
		// 	transition-delay: 0s;
		// }
		&__list-item {
      margin: 0;
      text-transform: uppercase;
			opacity: 1;
			transform: translateX(0%);
			transition: opacity .3s ease, transform .3s ease, color .3s ease;
			@for $i from 0 through $menu--items--count {
				&:nth-child(#{$i}){
					transition-delay: $transition--length * $i / 8 + .5 + s;
				}
			}
		}
    &__list-item.home, &__list-item.schedule, &__list-item.contact {
      font-family: "Archivo Black";
      font-size: 42pt;
      height: 80px;
    }
    &__list-item.about, &__list-item.media {
      font-family: "Display";
      font-size: 48pt;
    }
	}
}
</style>