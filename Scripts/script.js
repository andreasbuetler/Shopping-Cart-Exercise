$(document).ready(function() {

  var content = [
    {
      title: 'MKA-60/sw',
      manufacturer: 'Monacor',
      description: 'Einzelner (1) Aktive 2-Wege-Lautsprecherbox, 25WMAX, 15WRMS sym. XLR-Durchschleifeingang, Lautstärkeregelung, 2-fach-Klangregelung und eingebautem Netzteil 16-cm-Bass-System (6½") und Kalottenhochtöner',
      img: 'MKA-60sw.jpg'
    },
    {
      title: 'LSP 500 Pro System',
      manufacturer: 'Sennheiser',
      description: 'Der LSP 500 PRO ist ein professionelles, drahtloses Zwei-Wege-Audiosystem. Set besteht aus: 1x Lautsprecher LSP 500 2x Funkmikrofon Empfänger Sennheiser EM 300-500 G4 A-Band 1x Funkmikrofon Handsender Sennheiser SKM 300 G4 A-Band',
      img: 'sennheiser.jpeg'

    },
    {
      title: 'Elias Satellite',
      manufacturer: 'HK Audio',
      description: 'Kleiner PA-Aktivlautsprecher. Ursprünglich in Kombination mit Basslautsprecher konzipiert. Für kleine und mittlere Vorführungen geeignet.',
      img: 'elias1.jpg'
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
      title: 'Studiophile AV40',
      manufacturer: 'M-Audio',
      description: 'Studio Aktivlautprecher-Set bestehend aus 1 Aktivlautsprecher und 1 Passivlautsprecher. Auch geeignet für kleine Installationen',
      img: 'SPav40_front.jpg'
    },

    {
      title: 'CPC10',
      manufacturer: 'Laney / BLT Industries',
      description: 'Kleiner PA-Aktivlautsprecher. Ursprünglich in Kombination mit Basslautsprecher konzipiert. Für kleine und mittlere Vorführungen geeignet.',
      img: 'Laney_ct10.jpg'
    },

    {
      title: 'Z-340',
      manufacturer: 'Logitech',
      description: 'System: 2x Hochton, 1x Sub Input über Miniklinke (m)',
      img: 'Logitech Z-340.jpg'

    },
    {
      title: '8030A',
      manufacturer: 'Genelec',
      description: 'Aktivlautsprecher-Paar',
      img: 'genelec_8030a.jpg'
    },
    {
      title: 'Explorer PA-2500',
      manufacturer: 'Anchor Audio',
      description: 'Einzel Aktiv Lautsprecher mit Griff. Gut für kleine Vorträge oder Vorführungen. Dazugehöriges Stativ ist separat ausleihbar.',
      img: 'explorer.jpg'
    },
    {
      title: 'AN-100',
      manufacturer: 'Anchor Audio',
      description: 'no description',
      img: 'AN_100.jpg'
    },
    {
      title: 'VL 240',
      manufacturer: 'KME',
      description: 'Aktivlautsprecher',
      img: 'KME VL 240.jpg'
    }

  ];

  function fillContent(something) {
    for (var i=0;i<content.length;i++) {
      var $populatedTemplate = $(populateTemplate(something[i]));
      $('#rect').append($populatedTemplate);
    }
  }

  function populateTemplate(content) {
    var filler = `<div class="content-wrapper grid-item">
                <h1 class="js-title">${content.title}</h1>
                <h2 class="js-manufacturer">${content.manufacturer}</h2>
                <img src="./Data/Pictures/${content.img}" alt="" style='height: 150px; width: 100%; object-fit: contain; margin:10px'>
                <div class="hidden" id="1">
                <div class ="description-styling">DESCRIPTION</div>
                <br>
                <span  class="text">${content.description}<br></span>
                <button class="js-button button-secondary" type="button">Add to Cart</button>
                </div>
                </div>`;
    return filler;
  }

  fillContent(content);



  $('.content-wrapper').click(function(event) {
    // var target = $( event.target );
    // target.toggleClass(".hidden");
    // $(".hidden").toggle();
    var parent_box;
    parent_box = $(this).closest('.content-wrapper');
    parent_box.find('#1').toggle('hidden');
    // parent_box.toggle('.hidden');

  });

  $('.js-button').click(function(event) {
    var parent_box2;
    parent_box2 = $(this).closest('.content-wrapper');
    var titleName = parent_box2.find('.js-title').html();
    var manufacturerName = parent_box2.find('.js-manufacturer').html();
    console.log('titleName: ', titleName);
    console.log('mannufacturerName: ', manufacturerName);
    // create list item HTML
    var listHTML = `<div class="chosen-item">
                  <span class="listTitle">${titleName}</span>
                  <button class="js-remove remove-button button-secondary" type="button"> Remove </button>
                  <br>
                  <span class="listManufacturer">${manufacturerName}</span>
                  <br>
                </div>`;
    $(".shopping-cart").append(listHTML);
  });

  $('.js-remove').click(function(event) {
    // .js-remove doesn't react on click, but that's how I would do the remove function:
    var toRemove;
    toRemove = $(this).closest('.chosen-item');
    toRemove.removeClass();

    var removedObject = toRemove.find('.listTitle').html();
    console.log("removed", removedObject);
  });



});
