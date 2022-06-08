var log = console.log.bind(console);

var map = new BMap.Map("map"); 
var point = new BMap.Point(117.14677046439, 36.660995339994); // 创建点坐标
var point2 = new BMap.Point(117.147, 36.7); // 创建点坐标
map.centerAndZoom(point, 16); // 初始化地图,设置中心点坐标和地图级别。
// map.addControl(new BMap.NavigationControl());
map.enableScrollWheelZoom(); //启用滚轮放大缩小。


// 菜单
var menu = new BMap.ContextMenu();
menu.addItem(new BMap.MenuItem('第一',function(q,w,e,r){
    log(q,w,e,r)
},{
    width: 100,
    iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN
}))

// 图层
var layer = new BMap.PanoramaCoverageLayer();
// map.addTileLayer(layer)

// 服务
var se = new BMap.LocalSearch(point,{
    renderOptions: {
        map: map,
        selectFirstResult: true,
        autoViewport: true
    },
    onSearchComplete: function() {
        log(1)
    }
})
se.search('美食')
// map.addContextMenu(menu)