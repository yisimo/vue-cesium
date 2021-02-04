<template>
	<div id="container" class="box">
		<div id="cesiumContainer"></div>
	</div>
</template>

<script>
export default {
	name: 'Map',
	data() {
		return {}
	},
	mounted() {
		this.initMap()
	},
	methods: {
		initMap() {
			let Cesium = this.cesium
            let viewer = new Cesium.Viewer('cesiumContainer')
            viewer._cesiumWidget._creditContainer.style.display = "none";// 隐藏版权
		},
	},
}
</script>

<style scope>
#cesiumContainer {
	width: 100vw;
    height: 100vh;
	overflow: hidden;
}
.box {
	width: 100vw;
    height: 100vh;
}
</style>
