$(document).ready(function() {

var content = [
  {
    title: 'AN-100',
    manufacturer: 'Anchor Audio',
    description: 'lorem ipsum',
    img: 'AN_100.jpgs'

  },
  {
    title: 'Explorer PA-2500',
    manufacturer: 'Anchor Audio',
    description: 'Einzel Aktiv Lautsprecher mit Griff. Gut für kleine Vorträge oder Vorführungen. Dazugehöriges Stativ ist separat ausleihbar.',
    img: 'explorer.jpg'



  },
  {
    title: 'DVX 8',
    manufacturer: 'dB Technologies',
    description: 'Die DVX D8 ist eine sehr leistungsfähige aktive 8“/1“ 2-Wege Lautsprecherbox, die speziell zur Wiedergabe von Sprache, Hintergrundmusik und Musikeinspielungen konzipiert wurde.',
    img: 'dvx_d8.png'


  },
  {
    title: 'SRM 450 V2',
    manufacturer: 'Mackie',
    description: 'Bestückung: 12”/1” Abstrahlwinkel: 90°x45° 400 Watt (Biamped 100 Watt Hochtöner 300 Watt Mittel Tieftöner) Frequenzgang 55-18000Hz SPL max. 127db Flugfähig (M10 Eyebolt 180321) Low Cut Schaltbar (75Hz) Mic oder Line Input XLR female Anschluss Abme',
    img: 'mackie_srm450_1.jpeg'
    },
  {
    title: 'Object 5',
    text: 'blabla',

  },
  {
    title: 'Object 6',
    text: 'blabla',
},
  {
    title: 'Object 7',
    text: 'blabla',

  },
  {
    title: 'Object 7',
    text: 'blabla',

  },
  {
    title: 'Object 7',
    text: 'blabla',

  },
  {
    title: 'Object 7',
    text: 'blabla',

  },
  {
    title: 'Object 7',
    text: 'blabla',

  },
  {
    title: 'Object 7',
    text: 'blabla',
    img: 'stick.jpg'

  }

];

function fillContent(something){
for (var i = 0; i < content.length; i++){
  var $populatedTemplate = $(populateTemplate(something[i]));
  $('#rect').append($populatedTemplate);
}

}

function populateTemplate(content){
  var filler = `<div class="content-wrapper grid-item" id= >
                <h1>${content.title}</h1>
                <h2>${content.manufacturer}</h2>
                <img src="./Data/Pictures/${content.img}" alt="" style='height: 50px; width: 100%; object-fit: contain'>
                <div class="hidden" id="1">
                <span  id="text">${content.description}<br></span>
                <button class="button-secondary" type="button"> In den Warenkorb </button>

                <div/>
                <div/>`;
  return filler;
}


fillContent(content);


var container = $('#rect')
var contentWrapper = $('.content-wrapper');
var input = $('input');


$('.content-wrapper').click(function(event){
    // var target = $( event.target );
    // target.toggleClass(".hidden");
    // $(".hidden").toggle();
    var parent_box;
    parent_box = $(this).closest('.content-wrapper');
    parent_box.find('#1').toggle('hidden');
    // parent_box.toggle('.hidden');

  });
r

      $('.testgrid').masonry({
    // options
    itemSelector: '.grid-item',
    horizontalOrder: true,
    columnwidth: '.grid-item',

  });

var $testgrid = $('.testgrid').masonry({
  // columnWidth: 80
});
// change size of item by toggling gigante class
$testgrid.on( 'click', '.grid-item', function() {
  // $(this).toggleClass('.hidden');
  // trigger layout after item size changes
   // $testgrid.masonry('layout');

});





//
// input.click(function(index){
//   console.log("INDEX",input.id);
//
// })
// $(contentWrapper).click(function( event ) {
// console.log("CLICKTEST", event.currentTarget);
// })
// $( "input" ).on( "click", function() {
//   console.log("check",$("input:checked").val());
//   var toggled = $("input:checked").val();
//   console.log("id Test:", toggled);
//   contentWrapper.toggleClass("open");
//
// });

// var opened = contentWrapper.click(get(index)){
//   console.log.{}
// }






});
