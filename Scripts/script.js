$(document).ready(function() {

var content = [
  {
    title: 'Nummer1',
    text: 'blabla',
    id:1
  },
  {
    title: 'Nummer2',
    text: 'blabla',
    id:2

  },
  {
    title: 'Nummer3',
    text: 'blabla',
    id:3

  },
  {
    title: 'Nummer4 halllo du was geht?',
    text: 'blablasldjflasjdflöjasödlfsdlöfjlskdfjlökasdjflköajsdlfkjaslkdfjlkasjdfljsdfljlsdj',
    id:4
  },
  {
    title: 'Nummer5',
    text: 'blabla',
    id:5
  },
  {
    title: 'Nummer6',
    text: 'blabla',
    id:6
  },
  {
    title: 'Nummer7',
    text: 'blabla',
    id:7
  }

];

function fillContent(content){
for (var i = 0; i < content.length; i++){
  var $populatedTemplate = $(populateTemplate(content[i]));
  $('#rect').append($populatedTemplate);
}

}

function populateTemplate(content){
  var filler = `<li class="content-wrapper id="${content.id}">
  <input type="radio" name="fruit" value="${content.id}" id="${content.id}">
  <h2>${content.title}<h2/><p>${content.text}<p/><li/>`;
  console.log("content", $(filler));
  
  return filler;
}

fillContent(content);


var container = $('#rect')
var contentWrapper = $('.content-wrapper');


contentWrapper.click(function(index){
  console.log("INDEX",contentWrapper.id);

})

$( "input" ).on( "click", function() {
  console.log("check",$("input:checked").val());
  var toggled = $("input:checked").val();
  console.log("id Test:", toggled);
  toggled.addClass("open");

});






});
