var res = document.getElementById('result');
var electricBill = document.getElementById('electricBill');
var oilBill = document.getElementById('oilBill');
var mileage = document.getElementById('mileage');
var lessthan4 = document.getElementById('lessthan4');
var morethan4 = document.getElementById('morethan4');
var newspaper = document.getElementById('newspaperYes')
var newspaperNo = document.getElementById('newspaperNo')
var aluminium = document.getElementById('aluminiumYes')
var aluminiumNo = document.getElementById('aluminiumNo')
// var nchoices = document.getElementsById('input');
// var achoices = document.getElementsById('input');



function calcCO2() {
    var a = electricBill.value;
    var b = oilBill.value;
    var c = mileage.value;
    var d = lessthan4.value;
    var e = morethan4.value
    // var nchoices = newspaper.input
    // var achoices = aluminium.input


    // let calcCF

    var calcCO = (105 * a) + (113 * b) + (0.79 * c) + (1100 * d) + (4400 * e);
    console.log(calcCO)

    // if (nchoices == 'newspaperYes' && achoices == 'aluminiumYes') {
    //     calcCF = calcCO + 350;
    // }
    // if (nchoices == 'newspaperNo' && achoices == 'aluminiumYes') {
    //     calcCF = calcCO + 166;
    // }
    // if (nchoices == 'newspaperYes' && achoices == 'aluminiumNo') {
    //     calcCF = calcCO + 184;
    // }
    // if (nchoices == 'newspaperNo' && achoices == 'aluminiumNo') {
    //     calcCF = calcCO + 0;
    // }
    res.innerHTML = calcCO;
    // res.innerHTML = calcCF
    // console.log(calcCF)
};


console.log('calc is: ' + calcCO2)




//ScrollMagic Function

// $(function () { // wait for document ready
//     // init
//     var controller = new ScrollMagic.Controller({
//         globalSceneOptions: {
//             triggerHook: 'onLeave',
//             duration: "200%" // this works just fine with duration 0 as well
//             // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
//             // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
//         }
//     });

//     // get all slides
//     var slides = document.querySelectorAll("section.panel");

//     // create scene for every slide
//     for (var i = 0; i < slides.length; i++) {
//         new ScrollMagic.Scene({
//             triggerElement: slides[i]
//         })
//             .setPin(slides[i], { pushFollowers: false })
//             .addIndicators() // add indicators (requires plugin)
//             .addTo(controller);
//     }
