
document.addEventListener('DOMContentLoaded', function() {
    function resizeGridItem(item){
        grid = document.getElementById("{{.name}}_cards");
        rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        itemHeight = item.querySelector('.content').offsetHeight;
        rowSpan = Math.ceil((itemHeight+rowGap)/(rowHeight+rowGap));
        item.style.gridRowEnd = "span "+rowSpan;
        // console.log("item.querySelector('.content').id = " + item.querySelector('.content').id + ", rowHeight = " + rowHeight + " rowGap = " + rowGap + " itemHeight = " + itemHeight + " rowSpan = " + rowSpan );
    }

    function resizeAllGridItems(){
        parentNode = document.getElementById('{{.name}}_cards');
        allItems = parentNode.getElementsByClassName("details_cards");
        for(x = 0 ; allItems.length > x; x++){
            resizeGridItem(allItems[x]);
        }
    }
    function resizeInstance(instance){
        resizeGridItem(instance);
    }
    resizeAllGridItems();

    parentNode = document.getElementById('{{.name}}_cards');
    allItems = parentNode.getElementsByClassName("details_cards");

    for(x = 0; allItems.length > x;x++){
        resizeInstance(allItems[x]);
    }

    window.addEventListener("resize", resizeAllGridItems);
},false);


document.addEventListener('DOMContentLoaded', function() {
    parentNode = document.getElementById('{{.name}}_cards');
    review_categories = parentNode.getElementsByClassName("card_reviewed_item_categories")[0];
    console.log("")
},false);

