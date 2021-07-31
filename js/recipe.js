$(document).ready(function() {
    inject();
})

function inject() {
    $("#chinese_pork_veggie_noodles.html").load("../resource/html/recipe/chinese_pork_veggie_noodles.html", function() {
        console.log("load");
    });
}
console.log("what's happening");
// currently has error