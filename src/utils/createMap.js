//创建百度地图的api
//idName是对应元素的id名
function createMap(idName) {
    var BMap = window.BMap
    // 创建地图实例 
    //设置zoom值
    // Zoom值其实就是地图可放大，可缩小的一个范围，我们可以设置地图的最大最小缩放级别 
    var map = new BMap.Map(idName)
    // 创建点坐标  
    const point = new BMap.Point(115.975632, 40.445091)
    //设置地图中心点
    //15值默认缩放级别
    map.centerAndZoom(point, 15)
    //设置地图可以缩放
    map.enableScrollWheelZoom(true)
    //设置地图显示的城市
    map.setCurrentCity("北京")
    // 混合图
    // var mapType = new BMap.MapTypeControl({
      
    // })
    //创建标注
    var marker = new BMap.Marker(point)
    //标注内容
    var content = ['北京延庆南菜园项目']
    //将标注添加到地图上
    map.addOverlay(marker)
}

export default createMap