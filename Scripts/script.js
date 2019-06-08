$(document).ready(function() {

var content = [
  {
    title: 'Object 1',
    text: 'blabla',
    id:"1",
  },
  {
    title: 'Object 2',
    text: 'blabla',
    id:'2',

  },
  {
    title: 'Object 3',
    text: 'blabla',
    id:'3',

  },
  {
    title: 'Object 4',
    text: 'blablasldjflasjdflöjasödlfsdlöfjlskdfjlökasdjflköajsdlfkjaslkdfjlkasjdfljsdfljlsdj',
    id:4,
  },
  {
    title: 'Object 5',
    text: 'blabla',
    id:5,
  },
  {
    title: 'Object 6',
    text: 'blabla',
    id:6,
  },
  {
    title: 'Object 7',
    text: 'blabla',
    
  }

];

function fillContent(content){
for (var i = 0; i < content.length; i++){
  var $populatedTemplate = $(populateTemplate(content[i]));
  $('#rect').append($populatedTemplate);
}

}

function populateTemplate(content){
  var filler = `<div class="content-wrapper id=${content.id}>
  <input class="js-input" type="radio" name="fruit" value="${content.id}" id="${content.id}">
  <h1>${content.title}<h1/><p>${content.text}<p/><div/>`;
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
