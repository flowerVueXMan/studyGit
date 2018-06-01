<template>
	<div id="app">
		<tab>
	      <tab-item style="width: 30px;" custom-bar-width="3" v-for="(item,index) in project" :key="item" :selected="index===0">{{ item }}</tab-item>
	    </tab>
	    
	    <swiper :list="list" height="360px" :loop="true" :auto="true" :interval="2000"></swiper>
		<marquee>
	      <marquee-item v-for="(item,index) in list" :key="index" class="align-middle">{{item.title}}</marquee-item>
	    </marquee>
	    <panel :list="newList"></panel>
	    <div>
	    	<load-more></load-more>
	    </div>
	</div>
</template>

<script>
	import {Tab,TabItem,Swiper,Marquee,MarqueeItem,Panel,LoadMore} from 'vux'
	
	export default {
	  components:{Tab,TabItem, Swiper,Marquee, MarqueeItem,Panel,LoadMore},
	  data:function(){
	  	return {
	  	
		  	project:[
		  		'生活','美食','直播','新闻','体育','趣闻','段子'
		  	],
		  	list:[
			  	
		  	],
		  	newList:[{
		        src: 'http://somedomain.somdomain/x.jpg',
		        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
		        title: '标题一',
		        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
		        url: '/component/cell'
		    }]	
	  	}
	  },
	  created:function(){
	  	this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/29-99.html').then(data=>{
	  		
	  		let arr = data.live.map(function(item,index){
	  			return {
	  				img:item.picInfo[0].url,
	  				title:item.title,
	  				url:item.link
	  			}
	  		})
	  		this.list = arr;
	  		let arr1 = data.live.map(function(item,index){
	  			return {
			        fallbackSrc: 'https://3g.163.com/all/photoview/0001/2293904.html',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
	  				src:item.picInfo[0].url,
	  				title:item.title,
	  				url:item.link
	  			}
	  		})
	  		this.newList = arr1;
	  		console.log(data)
	  	})
	  }
	}
</script>

<style lang="less" scoped>
	#app{
		padding-left: 20px;
		padding-right:20px;
		padding-bottom: 2rem;
		.scrollable{
			.vux-tab-item{
				font-size: 0.6rem;
			}
			
			.vux-tab-selected{
				color: black;
			}
		}
		.vux-tab .vux-tab-item{
			margin-left: -20px;
		}
		
	}
	
</style>