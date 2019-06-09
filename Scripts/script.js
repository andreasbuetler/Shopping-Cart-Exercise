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

  }

];

function fillContent(something){
for (var i = 0; i < content.length; i++){
  var $populatedTemplate = $(populateTemplate(something[i]));
  $('#rect').append($populatedTemplate);
}

}

function populateTemplate(content){
  var filler = `<div class="content-wrapper" >
                <h1>${content.title}<h1/>
                <span class="text">${content.text}<span/>
                <div/>`;
  console.log("content", $(filler));
  return filler;
}


fillContent(content);


var container = $('#rect')
var contentWrapper = $('.content-wrapper');
var input = $('input');


$('.content-wrapper').click(function(event){
    var id = event.target.id;
    console.log('id = ' + id);
    $( this ).toggleClass( "open" );
    $('text').toggleClass("open");

})
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
