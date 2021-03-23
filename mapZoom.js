//Initialize and add map
function initMap() {

    //variables
    let zoomGlobal = 4;
    const maxZoom = 15;

    //cove&cottage location
    const location = { lat: -34.180466, lng: 22.151720};

    //center map on location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        maxZoom: 17,
        center: location,
    });

    map.addListener("zoom_changed", () => {
        console.log("increment: " + zoomGlobal);
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });

    window.onscroll = function(){
        mapZoom()
      };
      
    function mapZoom() {      
        if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){    
            if(zoomGlobal != 15)
            {
                console.log(zoomGlobal);
                changeZoom(map, maxZoom);
            }
        }
    }

    function changeZoom(map, maxZoom) {
        if(zoomGlobal >= maxZoom)
        {
            console.log("return: " + zoomGlobal);
            return;
        }
        else{      
            setTimeout(function(){
                map.setZoom(zoomGlobal);}, 685);
                zoomGlobal = zoomGlobal + 1;
                changeZoom(map, maxZoom);
        }
    }
}