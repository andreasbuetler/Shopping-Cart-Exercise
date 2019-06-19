$(document).ready(function() {

var content = [
  {
    title: 'Object 1',
    text: 'blabla',

  },
  {
    title: 'Object 2',
    text: 'blabla',


  },
  {
    title: 'Object 3',
    text: 'blabla',


  },
  {
    title: 'Object 4',
    text: 'blablasldjflasjdflöjasödlfsdlöfjlskdfjlökasdjflköajsdlfkjaslkdfjlkasjdfljsdfljlsdj',
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
  var filler = `<div class="content-wrapper grid-item" >
                <h1>${content.title}</h1>

                <span class="hidden" id="text">${content.text}<br></span>
                <button type="button"> Test Button </button>
                <img src="./Data/Pictures/${content.img}" alt="" style='height: 100%; width: 100%; object-fit: contain'>

                <div/>`;
  return filler;
}


fillContent(content);


var container = $('#rect')
var contentWrapper = $('.content-wrapper');
var input = $('input');


// $('.content-wrapper').click(function(event){
//     var id = event.target.id;
//     console.log('id = ' + id);
//     $( this ).toggleClass( "open" );
//     $(this).show();
//
//   });

var $testgrid = $('.testgrid').masonry({
  columnWidth: 80
});
// change size of item by toggling gigante class
$testgrid.on( 'click', '.grid-item', function() {
  $(this).toggleClass('open');
  // trigger layout after item size changes
  $testgrid.masonry('layout');
});


    $('.testgrid').masonry({
  // options
  itemSelector: '.grid-item',
  horizontalOrder: true,
  columnwidth: '.grid-item',
  percentPosition: true,
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
