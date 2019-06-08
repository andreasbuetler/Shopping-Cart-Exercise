$(document).ready(function() {

var content = [
  {
    title: 'Nummer1',
    text: 'blabla'
  },
  {
    title: 'Nummer2',
    text: 'blabla'
  },
  {
    title: 'Nummer2',
    text: 'blabla'
  },
  {
    title: 'Nummer3 halllo du was geht?',
    text: 'blablasldjflasjdflöjasödlfsdlöfjlskdfjlökasdjflköajsdlfkjaslkdfjlkasjdfljsdfljlsdj'
  },
  {
    title: 'Nummer2',
    text: 'blabla'
  },
  {
    title: 'Nummer2',
    text: 'blabla'
  },
  {
    title: 'Nummer2',
    text: 'blabla'
  }

];

function fillContent(content){
for (var i = 0; i < content.length; i++){
  var $populatedTemplate = $(populateTemplate(content[i]));
  $('#rect').append($populatedTemplate);
}

}

function populateTemplate(content){
  var filler = `<div class="content-wrapper "><h1>${content.title}<h1/><p>${content.text}<p/><div/>`
  console.log("content", $(filler));
  return filler;
}

fillContent(content);
});
