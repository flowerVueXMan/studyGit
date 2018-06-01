<template>
  <div id="app">
			<view-box >
				<x-header :left-options="{showBack:false}"><!--显示返回-->
					<div slot="left">
						<img src="../static/img/wangyi.png"/>
					</div>
					<div>
						<input type="" name="" id="" value="" />
					</div>
					<div slot="right">右</div>
				</x-header>
				
				
				<div>
					<router-view></router-view>
				</div>
				
				
				<tabbar>
			      <tabbar-item selected link="/index">
			        <img slot="icon">
			        <span slot="label">首页</span>
			      </tabbar-item>
			      <tabbar-item show-dot link="/video">
			        <img slot="icon">
			        <span slot="label">视频</span>
			      </tabbar-item>
			      <tabbar-item  link="/show">
			        <img slot="icon">
			        <span slot="label">直播</span>
			      </tabbar-item>
			      <tabbar-item badge="2" link="my">
			        <img slot="icon">
			        <span slot="label">我</span>
			      </tabbar-item>
			    </tabbar>
			</view-box>

  </div>
</template>

<script>
	import {ViewBox,XHeader,Tabbar,TabbarItem,Tab,TabItem} from 'vux'
	export default {
	  name: 'App',
	  components:{ViewBox,XHeader,Tabbar,TabbarItem,Tab,TabItem},
	  data:function(){
	  	return {
	  		
	  	}
	  }
	}
</script>

<style lang="less">
	*{
		padding: 0;
		margin: 0;
	}

#app{
	 .vux-header{
		 	height: 3rem;
		 	background:#e22829;
	 }
	.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
		color: red;
	}
	 .weui-tabbar{
	 	position: fixed;
	 	bottom: 0;
	 	height: 3.3rem;
	 	.weui-tabbar__label{
	 		font-size: 1rem;
	 	}
	 }
	 .vux-tab-ink-bar{
		  background-color: #666 !important;
		}
		.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
			font-size: 1rem !important;
		}
		.weui-media-box__hd{
			width: 7rem;
			height: 4.9rem;
		}
		.weui-media-box__title{
			font-size: 1rem !important;
		}
		.weui-media-box__desc{
			font-size: 0.7rem;
		}
		.weui-loading{
			width: 2rem;
			height: 2rem;
		}
}
</style>
