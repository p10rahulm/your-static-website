console.log("jo");
function resizeGridItem(item){
    grid = document.getElementsByClassName("reviews_grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    console.log("rowSpan = " + rowSpan);
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
    allItems = document.getElementsByClassName("review_grid_element");
    for(x = 0 ; allItems.length > x; x++){
        resizeGridItem(allItems[x]);
    }
}
function resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
}
document.addEventListener('DOMContentLoaded', function() {
    resizeAllGridItems();
},false);
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("review_grid_element");
for(x = 0; allItems.length > x;x++){
  imagesLoaded( allItems[x], resizeInstance);
}