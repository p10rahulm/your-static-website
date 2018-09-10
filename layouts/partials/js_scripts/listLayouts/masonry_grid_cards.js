
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
    allItems = parentNode.getElementsByClassName("card_reviewed_item_categories")
    //    review_categories = parentNode.getElementsByClassName("card_reviewed_item_categories")[0].innerHTML.replace(/\s/g,'');
    review_categories = [];
    for(x = 0; allItems.length > x;x++){
            review_categories.push(allItems[x].innerHTML.replace(/\s/g,''));
    }
    sorted_categories = getSortedByCount(review_categories);
    sorted_main_categories = sorted_categories.slice(0,{{.num_distinct_categories}});
    for(x = 0; allItems.length > x;x++){
        var current_cat = allItems[x].innerHTML.replace(/\s/g,'');
        if(sorted_main_categories.includes(current_cat)){
            allItems[x].classList.add("category_" + sorted_main_categories.indexOf(current_cat));
        } else {
            allItems[x].classList.add("category_other");
        }
    }


    function getSortedByCount(){
        var category_counts = {}; //Get frequency table: https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
        for (var i = 0; review_categories.length > i; i++) {
          var cat = review_categories[i];
          category_counts[cat] = category_counts[cat] ? category_counts[cat] + 1 : 1;
        }
        keysSorted = Object.keys(category_counts).sort(function(a,b){return category_counts[a]-category_counts[b]}).reverse(); //https://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value
        return(keysSorted);
    }



},false);

