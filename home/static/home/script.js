function showPage(event, pageName) {

    var i, pageContents, pageLinks

    pageContents = document.getElementsByClassName("pageContent");
    for (i = 0; i < pageContents.length; i++) {
        pageContents[i].style.display = "none";
    }

    pageLinks = document.getElementsByClassName("pageLink");
    for (i = 0; i < pageLinks.length; i++) {
        pageLinks[i].className = pageLinks[i].className.replace(" active", "");
    }

    document.getElementById(pageName).style.display = "block";
    event.currentTarget.className += " active";

    google.maps.event.trigger(map, 'resize');
    map.setCenter(mapCenter);
}
