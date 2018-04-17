<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClasses" class="star-item" :class="itemClass"></span>
	</div>
</template>

<script>
	const starLenth = 5;
	const cs_on = 'on';
	const cs_half = 'half';
	const cs_off = 'off';

	export default {
		props:{
			size:{},
			score:{}
		},
		computed:{
			starType(){
				return 'star-' + this.size;
			},
			itemClasses(){
				let result = [];
				let score = Math.floor(this.score) / 2 ;
				let hasDecimal = score % 1 !== 0;
				let integer = Math.floor(score);
				for(let i=0; i<integer;i++){
					result.push(cs_on);
				}
				if(hasDecimal){
					result.push(cs_half);
				}
				while (result.length < starLenth) {
					result.push(cs_off);
				}
				return result;
			}
		}
	}
</script>

<style>
	.star { text-align:center; display:inline-block;}
	.star .star-item{font-size:0; display:inline-block; background-repeat:no-repeat;}
  .star-24 .star-item {width:12px; height:12px; margin-right:4px; background-size:12px 12px;}
	.star-item:last-child { margin-right:0px;}
	.star-item.on {background-image:url(star48_on.png);}
	.star-item.half {background-image:url(star48_half.png);}
	.star-item.off {background-image:url(star48_off.png);}

	.star-16 .star-item {width:10px; height:10px; margin-right:2px; background-size:10px 10px;}
</style>
