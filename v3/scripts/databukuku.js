var search = null;
(function($, _M) {
  'use strict';

  var $searchbar = $('#search');

  var dex = [{
    name: '<a href="index.html">Lebih Cerdas dengan Wikipedia</a>',
    nat: '#001',
    index: 1,
    cat: 'Seed',
    jp: 'フシギダネ',
    romaji: 'Fushigidane',
    typing: ['Grass', 'Poison']
  }, {
    name: 'Charmander',
    nat: '#004',
    index: 4,
    cat: 'Lizard',
    jp: 'ヒトカゲ',
    romaji: 'Hitokage',
    typing: ['Fire']
  }, {
    name: 'Squirtle',
    nat: '#007',
    index: 7,
    cat: 'Tiny Turtle',
    jp: 'ゼニガメ',
    romaji: 'Zenigame',
    typing: ['Water']
  }, {
    name: 'Pikachu',
    nat: '#025',
    index: 25,
    cat: 'Mouse',
    jp: 'ピカチュウ',
    romaji: 'Pikachu',
    typing: ['Electric'],
  }, {
    name: 'Eevee',
    nat: '#133',
    index: 133,
    cat: 'Evolution',
    jp: 'イーブイ',
    romaji: 'Eievui',
    typing: ['Normal']
  }, {
    name: 'Mewtwo',
    nat: '#150',
    index: 150,
    cat: 'Genetic',
    jp: 'ミュウツー',
    romaji: 'Myuutsuu',
    typing: ['Psychic']
  }, {
    name: 'Mew',
    nat: '#151',
    index: 151,
    cat: 'New',
    jp: 'ミュウ',
    romaji: 'Myuu',
    typing: ['Psychic']
  }, {
    name: 'Celebi',
    nat: '#251',
    index: 251,
    cat: 'Time Travel',
    jp: 'セレビィ',
    romaji: 'Serebyi',
    typing: ['Psychic', 'Grass']
  }, {
    name: 'Jirachi',
    nat: '#385',
    index: 385,
    cat: 'Wish',
    jp: 'ジラーチ',
    romaji: 'Jiraachi',
    typing: ['Steel', 'Psychic']
  }, {
    name: 'Deoxys',
    nat: '#386',
    index: 386,
    cat: 'DNA',
    jp: 'デオキシス',
    romaji: 'Deokishisu',
    typing: ['Psychic']
  }, {
    name: 'Riolu',
    nat: '#447',
    index: 447,
    cat: 'Emanation',
    jp: 'リオル',
    romaji: 'Rioru',
    typing: ['Fighting']
  }, {
    name: 'Lucario',
    nat: '#448',
    cat: 'Aura',
    index: 448,
    jp: 'ルカリオ',
    romaji: 'Rukario',
    typing: ['Fighting', 'Steel']
  }, {
    name: 'Manaphy',
    nat: '#490',
    index: 490,
    cat: 'Seafaring',
    jp: 'マナフィ',
    romaji: 'Manafi',
    typing: ['Water']
  }, {
    name: 'Darkrai',
    nat: '#491',
    index: 491,
    cat: 'Pitch-Black',
    jp: 'ダークライ',
    romaji: 'Daakurai',
    typing: ['Dark']
  }, {
    name: 'Shaymin',
    nat: '#492',
    index: 492,
    cat: 'Gratitude',
    jp: 'シェイミ',
    romaji: 'Sheimi',
    typing: ['Grass']
  }, {
    name: 'Arceus',
    nat: '#493',
    index: 493,
    cat: 'Alpha',
    jp: 'アルセウス',
    romaji: 'Aruseusu',
    typing: ['Normal']
  }, {
    name: 'Victini',
    nat: '#494',
    index: 494,
    cat: 'Victory',
    jp: 'ビクティニ',
    romaji: 'Bikutini',
    typing: ['Psychic', 'Fire']
  }, {
    name: 'Keldeo',
    nat: '#647',
    index: 647,
    cat: 'Colt',
    jp: 'ケルディオ',
    romaji: 'Kerudio',
    typing: ['Water', 'Fighting']
  }, {
    name: 'Meloetta',
    nat: '#648',
    index: 648,
    cat: 'Melody',
    jp: 'メロエッタ',
    romaji: 'Meroetta',
    typing: ['Normal', 'Psychic']
  }, {
    name: 'Genesect',
    nat: '#649',
    index: 649,
    cat: 'Paleozoic',
    jp: 'ゲノセクト',
    romaji: 'Genusekuto',
    typing: ['Bug', 'Steel']
  }, {
    name: 'Diancie',
    nat: '#719',
    index: 719,
    cat: 'Jewel',
    jp: 'ディアンシー',
    romaji: 'Dianshii',
    typing: ['Rock', 'Fairy']
  }, {
    name: 'Hoopa',
    nat: '#720',
    index: 720,
    cat: 'Mischief',
    jp: 'フーパ',
    romaji: 'Fuupa',
    typing: ['Psychic', 'Ghost']
  }, {
    name: 'Volcanion',
    nat: '#721',
    index: 721,
    cat: 'Steam',
    jp: 'ボルケニオン',
    romaji: 'Borukenion',
    typing: ['Fire', 'Water']
  }, {
    name: 'Magearna',
    nat: '#801',
    index: 801,
    cat: 'Artificial',
    jp: 'マギアナ',
    romaji: 'Magiana',
    typing: ['Steel', 'Fairy']
  }, {
    name: 'Marshadow',
    nat: '#802',
    index: 802,
    cat: 'Gloomdweller',
    jp: 'マーシャドー',
    romaji: 'Maashadoo',
    typing: ['Fighting', 'Ghost']
  }];

  var options = {
    shouldSort: true,
    threshold: 0.5,
    minMatchCharLength: 0,
    keys: [{
      name: 'name',
      weight: 0.75
    }, {
      name: 'nat',
      weight: 0.5
    }, {
      name: 'jp',
      weight: 0.5
    }, {
      name: 'cat',
      weight: 0.5
    }, {
      name: 'romaji',
      weight: 0.25
    }, {
      name: 'typing',
      weight: 0.25
    }]
  };
  var fuse = new Fuse(dex, options);

  $searchbar.on('input', function() {
    var search = fuse.search($searchbar.val());
    var $res = $('#results');
    $res.empty();
    if ($searchbar.val().length < 1) return;
    if (search[0] === undefined) {
      $res.append('<h4 class="rip">Tidak ditemukan</h4><h6>Penelusuran anda tidak ada di Perpustakaan</h6><p>Saran: Pastikan semua kata dieja dengan benar, coba kata kunci yang lain, atau coba kata kunci yang lebih umum.</p>');
    }
    $res.append('<h4>Apakah maksud anda: ' + search[0].name + '?</h4>');
    $res.append('<h5>Hasil pencarian:</h5>');

    search.forEach(function(el){
      $res.append(
        el.nat + ': ' + el.name + ' (' + el.typing + ') <br><br>'
      );
    });
  });

})(jQuery, Materialize);
