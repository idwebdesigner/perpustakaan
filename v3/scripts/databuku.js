var search = null;
(function($, _M) {
  'use strict';

  var $searchbar = $('#search');

  var dex = [



{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2410 "> Arimbi </a>',nat: ' Arimbi ',cat: ' Anjar Lembayung ',typing: [' Scritto , Yogyakarta ',' - SR 813 ANJ a ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2411 "> Trik Dasyat Mempertajam Daya Ingat Hafalan Pelajaran </a>',nat: ' Trik Dasyat Mempertajam Daya Ingat Hafalan Pelajaran ',cat: ' Nurla Isna Auniliah ',typing: [' Araska , Yogyakarta ',' - SR 153.1 NUR t ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2408 "> Darah; Sebuah Kumcer Psikopat </a>',nat: ' Darah; Sebuah Kumcer Psikopat ',cat: ' Baiq Cynthia ',typing: [' Scritto , Yogyakarta ',' - SR 808.83 BAI d ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2409 "> Lucu-Lucu Tokoh Dunia </a>',nat: ' Lucu-Lucu Tokoh Dunia ',cat: ' Isa An. Tamami ',typing: [' Araska , Yogyakarta ',' - SR 817 ISA l ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2407 "> Selimut Mimpi </a>',nat: ' Selimut Mimpi ',cat: ' R. Adrelas ',typing: [' Scritto , Yogyakarta ',' - SR 813 ADR s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2405 "> Istri - Istri Raja Di Tanah Jawa </a>',nat: ' Istri - Istri Raja Di Tanah Jawa ',cat: ' Sri Wintala Achmad ',typing: [' Araska , Yogyakarta ',' - SR 920.72 SRI i ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2406 "> 13 Kisah Horor Kuntilanak Dan Cerita-Cerita Super Horor Lainya </a>',nat: ' 13 Kisah Horor Kuntilanak Dan Cerita-Cerita Super Horor Lainya ',cat: ' Tirta Wisanggeni ',typing: [' Araska , Yogyakarta ',' - SR 813 TIR t ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2403 "> 30 Resep istimewa rasa italia pasta, spagethi & salad </a>',nat: ' 30 Resep istimewa rasa italia pasta, spagethi & salad ',cat: ' Annia kissanti ',typing: [' Araska , Yogyakarta ',' - SR 645.01 ANN t ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2402 "> 25 resep sambal nusantara paling favorit </a>',nat: ' 25 resep sambal nusantara paling favorit ',cat: ' Annika Kisanti ',typing: [' Araska Pubisher , Yogyakarta ',' - SR 645.01 ANN d ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2400 "> Aneka resep bubur sehat jus buah & camilan paling favorit untuk bayi </a>',nat: ' Aneka resep bubur sehat jus buah & camilan paling favorit untuk bayi ',cat: ' Heni hendrayati ',typing: [' Araska Publisher , Yogyakarta ',' - SR 645.01 HEN a ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2401 "> Menjadi guru yang mampu menulis dan menerbitkan buku </a>',nat: ' Menjadi guru yang mampu menulis dan menerbitkan buku ',cat: ' Deni damayanti ',typing: [' Araska , Yogyakarta ',' - SR 808.02 DEN m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2398 "> 34 Resep menu makan sehat & lezat untuk mengendalikan penyakit jantung & stroke </a>',nat: ' 34 Resep menu makan sehat & lezat untuk mengendalikan penyakit jantung & stroke ',cat: ' Dian safitri ',typing: [' Araska , Yogyakarta ',' - SR 645.01 DIA t ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2399 "> Sang penakluk trik jitu menaklukkan & memahami lika-liku laki-laki </a>',nat: ' Sang penakluk trik jitu menaklukkan & memahami lika-liku laki-laki ',cat: ' Hersinta Astari ',typing: [' Parasmu , Yogyakarta ',' - SR 155.2 HER s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2397 "> Midnigth stories </a>',nat: ' Midnigth stories ',cat: ' As.Soenarwi ',typing: [' Araska , Yogyakarta ',' - SR 817 SOE m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2396 "> Lucu-Lucu Para Boss Kumpulan Kisah Konyol Para Boss </a>',nat: ' Lucu-Lucu Para Boss Kumpulan Kisah Konyol Para Boss ',cat: ' Fanina Tan ',typing: [' Fanina Tan , Yogyakarta ',' - SR 817 FAN l ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2395 "> Dia Jujur Nggak Sih? </a>',nat: ' Dia Jujur Nggak Sih? ',cat: ' Humaira El Rahmi ',typing: [' Araska , Yogyakarta ',' - SR 155.2 HUM d ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2394 "> Lorosae: My Love </a>',nat: ' Lorosae: My Love ',cat: ' Riskanida Maharani ',typing: [' Araska , Yogyakarta ',' - SR 813 RIS l ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2127 "> Budi Utomo Cabang Betawi </a>',nat: ' Budi Utomo Cabang Betawi ',cat: ' Abdurrachman Surjomihardjo ',typing: [' PT Dunia Pustaka Jaya , Jakarta ',' - SR 959.8 ABD b ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2393 "> Rahasia Dibalik Telepon </a>',nat: ' Rahasia Dibalik Telepon ',cat: ' John Bassett ',typing: [' Penerbit Pakar Raya , Bandung ',' - SR 384.6 JOH r ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2392 "> Akuntabilitas Kinerja Pendidikan </a>',nat: ' Akuntabilitas Kinerja Pendidikan ',cat: ' Dr. M. Hasanudin Buhory, M.M. ',typing: [' Penerbit Universitas Negeri Malang , Malang ',' - SR 371.2 HAS a ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1309 "> Pendidikan Agama Kristen dan Budi Pekerti untuk SMP Kelas VIII </a>',nat: ' Pendidikan Agama Kristen dan Budi Pekerti untuk SMP Kelas VIII ',cat: ' Kementerian Pendidikan dan Kebudayaan ',typing: [' Kementerian Pendidikan dan Kebudayaan , Jakarta ',' - SR 241 KEM p ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1382 "> Budidaya, Pengolahan dan Pemasaran Coklat </a>',nat: ' Budidaya, Pengolahan dan Pemasaran Coklat ',cat: ' Tumpal H.S. SiregarSlamet RiyadiLaeli Nuraeni ',typing: [' PT Penebar Swadaya , Jakarta ',' - SR 633.7 TUM b ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1380 "> Mengenal Ekspor dan Impor </a>',nat: ' Mengenal Ekspor dan Impor ',cat: ' Agung Feryanto ',typing: [' Penerbit Cempaka Putih , Klaten ',' - SR 382 AGU m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1378 "> Pelayaran Nusantara </a>',nat: ' Pelayaran Nusantara ',cat: ' Arim Kamandaka ',typing: [' Penerbit SIC , Surabaya ',' - SR 387.2 ARI p ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1377 "> Salesmanship: Ilmu dan Seni Menjadi Penjual yang Sukses </a>',nat: ' Salesmanship: Ilmu dan Seni Menjadi Penjual yang Sukses ',cat: ' Sotar BaduaraSabar Martin Sirait ',typing: [' Penerbit Bumi Aksara , Jakarta ',' - SR 380.1 SOT s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1376 "> Flu Burung di Manusia </a>',nat: ' Flu Burung di Manusia ',cat: ' Tjandra Yoga Aditama ',typing: [' Penerbit Universitas Indonesia , Jakarta ',' - SR 614.4 TJA f ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1375 "> Reparasi Motor Bensin dan Diesel </a>',nat: ' Reparasi Motor Bensin dan Diesel ',cat: ' Soedjono ',typing: [' Penerbit Titian Ilmu , Bandung ',' - SR 621.43 SOE r ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1374 "> Terampil Berbahasa Arab </a>',nat: ' Terampil Berbahasa Arab ',cat: ' Zuhri M. Thoha ',typing: [' PT Pustaka Insan Madani , Yogyakarta ',' - SR 429.7 ZUH t ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1372 "> Rahasia Dibalik Bilangan? </a>',nat: ' Rahasia Dibalik Bilangan? ',cat: ' Janu Ismadi ',typing: [' Penerbit Nobel Edumedia , Jakarta ',' - SR 513 JAN r ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1371 "> Epilog Kudeta G 30 S/PKI Siapa Melawan Siapa </a>',nat: ' Epilog Kudeta G 30 S/PKI Siapa Melawan Siapa ',cat: ' Husnu Mufid ',typing: [' Penerbit JP Books , Surabaya ',' - SR 959.8 HUS e ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1368 "> Manajemen Keuangan </a>',nat: ' Manajemen Keuangan ',cat: ' Abdrachim ',typing: [' Nober Edumedia , Jakarta ',' - SR 658.1 ABD m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1367 "> Kumpulan Cerita Rakyar Nusantara 2 </a>',nat: ' Kumpulan Cerita Rakyar Nusantara 2 ',cat: ' Ade Soekirno SSP ',typing: [' Gramedia Widiasarana Indonesia , Jakarta ',' - SR 398 ADE k ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1365 "> Pola Pelaksanaan Pendidikan Kecakapan Hidup Melalui Pendekatan Pendidikan Berbasis Luas </a>',nat: ' Pola Pelaksanaan Pendidikan Kecakapan Hidup Melalui Pendekatan Pendidikan Berbasis Luas ',cat: ' Tim Broad Based EducationDepdiknas ',typing: [' Surabaya Intellectual Club , Jakarta ',' - SR 371.3 TIM p ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1363 "> Seri Ketrampilan Memanfaatkan Barang Bekas: Membuat Aneka Pigura </a>',nat: ' Seri Ketrampilan Memanfaatkan Barang Bekas: Membuat Aneka Pigura ',cat: ' Bagas Shinugi ',typing: [' PT Mediantara Semesta , Jakarta ',' - SR 749.7 BAG s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1362 "> English Everywhere </a>',nat: ' English Everywhere ',cat: ' Erna FitriniRatih Sumiratingratri ',typing: [' Cahaya Pustaka Raga , Bekasi ',' - SR 425 ERN e ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1357 "> Standar Kompetisi dan Sertifikasi Guru </a>',nat: ' Standar Kompetisi dan Sertifikasi Guru ',cat: ' Mulyasa ',typing: [' PT Remaja Rosdakarya , Bandung ',' - SR 371.1 MUL s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1351 "> Kenakalan Remaja dan Penanggulangannya </a>',nat: ' Kenakalan Remaja dan Penanggulangannya ',cat: ' Vina Dwi Laning ',typing: [' Penerbit Cempaka Putih , Klaten ',' - SR 364.3 VIN k ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1350 "> Negara, Civil Society dan Demokrasi </a>',nat: ' Negara, Civil Society dan Demokrasi ',cat: ' Luthfi J. Kurniawan ',typing: [' In-Trans Publishing , Malang ',' - SR 323.4 LUT n ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1349 "> Ayo Terus Sekolah </a>',nat: ' Ayo Terus Sekolah ',cat: ' Sugeng Waluyo ',typing: [' Penerbit SIC , Surabaya ',' - SR 371.9 SUG a ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1873 "> His Last Bow: Salam Perpisahan </a>',nat: ' His Last Bow: Salam Perpisahan ',cat: ' Sir Arthur Conan Doyle ',typing: [' Penerbit Indoliterasi , Yogyakarta ',' - SR 813 SIR k ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1960 "> Ensiklopedi Anak Nasional 6 </a>',nat: ' Ensiklopedi Anak Nasional 6 ',cat: ' Prof. Dr. Conny R. Semiawan ',typing: [' PT Delta Pamungkas , Bogor ',' - R 959.803 CON e ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1961 "> Budidaya Mina Ayam </a>',nat: ' Budidaya Mina Ayam ',cat: ' Sunarno, B.Sc. ',typing: [' PT Balai Pustaka , Jakarta ',' - SR 636.589 SUN b ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1962 "> Indonesia Bagian Dari Dunia </a>',nat: ' Indonesia Bagian Dari Dunia ',cat: ' Devi Andriana ',typing: [' PT Mitra Akasara Panaitan , Jakarta ',' - SR 959.8 DEV i ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1963 "> Mengenal Antartika dan Arktika </a>',nat: ' Mengenal Antartika dan Arktika ',cat: ' Winarti ',typing: [' Penerbit Cempaka Putih , Klaten ',' - SR 551.198.9 WIN m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2017 "> 99 Percobaan Sehari-hari Bereksperimen dengan Bahan-Bahan Sederhana Seri 5 </a>',nat: ' 99 Percobaan Sehari-hari Bereksperimen dengan Bahan-Bahan Sederhana Seri 5 ',cat: ' Prof. Dr. Wahyudin ',typing: [' Penerbit Armandelta Selaras , ',' - R 530.7 WAH s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2016 "> Menentukan Posisi dan Mengolah Data </a>',nat: ' Menentukan Posisi dan Mengolah Data ',cat: ' Didik Djunaedi ',typing: [' PT Gading Inti Prima , Jakarta ',' - SR 513 DID m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2043 "> Mengenal Lingkungan Sekitar Kita </a>',nat: ' Mengenal Lingkungan Sekitar Kita ',cat: ' Herlina Rahmawati ',typing: [' Penerbit Nobel Edumedia , Jakarta ',' - SR 613.5 HER m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2041 "> Himpunan Peraturan Perundang-Undangan tentang Wajib Belajar </a>',nat: ' Himpunan Peraturan Perundang-Undangan tentang Wajib Belajar ',cat: ' Tim Redaksi Fokusmedia ',typing: [' Penerbit Fokus Media , Bandung ',' - SR 348.02 TIM h ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2051 "> Seri Pahlawan Nasional: Panglima Besar Jenderal Soedirman </a>',nat: ' Seri Pahlawan Nasional: Panglima Besar Jenderal Soedirman ',cat: ' B. A. Saleh ',typing: [' CV Citra Praya , Bandung ',' - SR 923.5 SAL s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2057 "> Alam Sekitar Kita </a>',nat: ' Alam Sekitar Kita ',cat: ' E. SpeareL. Colvin ',typing: [' PT Gading Inti Prima , Jakarta ',' - SR 550 COL a ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2049 "> Ensiklopedia Pahlawan Nasional Indonesia </a>',nat: ' Ensiklopedia Pahlawan Nasional Indonesia ',cat: ' Nur Asiah ',typing: [' PT Mediantara Semesta , Jakarta ',' - R 929.403 NUR e ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2021 "> Mengungkap dan Mengenal Budaya Jawa </a>',nat: ' Mengungkap dan Mengenal Budaya Jawa ',cat: ' Thomas Wiyasa Bratawijaya ',typing: [' Penerbit Pradnya Paramita , Jakarta ',' - SR 959.82 THO m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2022 "> Kisah-Kisah dalam Al-Quran (4) </a>',nat: ' Kisah-Kisah dalam Al-Quran (4) ',cat: ' Miftah F ',typing: [' CV Megah Jaya , Jakarta ',' - SR 2X1.6 MIF k ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2024 "> Korespondensi Bahasa Indonesia: Dasar, Teori, dan Aplikasi </a>',nat: ' Korespondensi Bahasa Indonesia: Dasar, Teori, dan Aplikasi ',cat: ' Afra Tien Sotyaningrum, Dra., M.Si ',typing: [' Penerbit Amara Books , Yogyakarta ',' - SR 415 AFR k ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2026 "> Benteng Remaja Menolak Narkoba </a>',nat: ' Benteng Remaja Menolak Narkoba ',cat: ' R.W. Dodo, S.Pd.I ',typing: [' Penerbit Nobel Edumedia , Jakarta Timur ',' - SR 613.8 DOD b ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2027 "> Aktivitas Pramuka untuk Penggalang Terap </a>',nat: ' Aktivitas Pramuka untuk Penggalang Terap ',cat: ' Elly SumarsihAnthonius DaudHongky Siteja ',typing: [' Penerbit Erlangga , Jakarta ',' - SR 370.114 ELL a ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2028 "> Rahasia di Balik Televisi </a>',nat: ' Rahasia di Balik Televisi ',cat: ' John Bassett ',typing: [' Penerbit Pakar Raya , Bandung ',' - SR 621.388 JOH r ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2033 "> Ada Apa Dengan Narkoba </a>',nat: ' Ada Apa Dengan Narkoba ',cat: ' Winarto, S.S ',typing: [' Penerbit Aneka Ilmu , Semarang ',' - SR 613.8 WIN a ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2034 "> Narkoba Perlukah Mengenalnya? </a>',nat: ' Narkoba Perlukah Mengenalnya? ',cat: ' Ida Listyarini Handoyo, S.Si., M.Si. ',typing: [' Penerbit Pakar Raya , Bandung ',' - SR 613.8 IDA n ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2035 "> Promosi dan Penjualan Bagi Usaha Kecil </a>',nat: ' Promosi dan Penjualan Bagi Usaha Kecil ',cat: ' Ardi Gautama Leman ',typing: [' PT Balai Bahasa , Jakarta ',' - SR 380.1 ARD p ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2036 "> Seri Bencana Alam: Letusan Gunung Berapi </a>',nat: ' Seri Bencana Alam: Letusan Gunung Berapi ',cat: ' Weni R ',typing: [' PT Intan Sejati Klaten , Klaten ',' - SR 904.5 WEN s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2037 "> Mengenal Penyair Dunia dan Indonesia </a>',nat: ' Mengenal Penyair Dunia dan Indonesia ',cat: ' Iwan Hendrawan ',typing: [' PT Musi Perkasa Utama , Jakarta Barat ',' - SR 928.02 IWA m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1983 "> Fiqhul Haidh: Kajian Tentang Fiqh </a>',nat: ' Fiqhul Haidh: Kajian Tentang Fiqh ',cat: ' Muhammad bin Abdil Qohar ',typing: [' CV Megah Jaya , Jakarta ',' - SR 2X4 MUH f ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1982 "> Qishah Al-Miraj: Kajian tentang Sejarah Kebudayaan Islam </a>',nat: ' Qishah Al-Miraj: Kajian tentang Sejarah Kebudayaan Islam ',cat: ' Najmudin Al Ghaity ',typing: [' PT Aliansi Belajar Mandiri , Jakarta Barat ',' - SR 2X9 NAJ q ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1730 "> Sejarah Indonesia 6: Zaman Pendudukan Jepang dan Kemerdekaan Indonesia </a>',nat: ' Sejarah Indonesia 6: Zaman Pendudukan Jepang dan Kemerdekaan Indonesia ',cat: ' Eko Praptanto ',typing: [' PT Bina Sumber Daya MIPA , Jakarta ',' - SR 959.8 EKO s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1895 "> 90 Kerajinan Tangan 1 </a>',nat: ' 90 Kerajinan Tangan 1 ',cat: ' Anita Van Saan ',typing: [' Penerbit Tiga Serangkai Pustaka Mandiri , Solo ',' - SR 745.5 ANI s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1383 "> Seri Pustaka Sains: Hewan Liar </a>',nat: ' Seri Pustaka Sains: Hewan Liar ',cat: ' Steve Parker ',typing: [' Miles Kelly Publishing , Bandung ',' - SR 591 STE s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1979 "> Waspadai Kekerasan di Sekitar Kita </a>',nat: ' Waspadai Kekerasan di Sekitar Kita ',cat: ' Tammi Prastowo, S.Sos. ',typing: [' PT Maraga Borneo Tarigas , Kalimantan Barat ',' - SR 364.4 TAM w ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2002 "> Fisika dalam Kehidupan Kita </a>',nat: ' Fisika dalam Kehidupan Kita ',cat: ' Taufik Ramlan ',typing: [' Penerbit Ipa Abong , Jakarta ',' - SR 530 TAU f ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1698 "> Elektronik di Rumah Kita </a>',nat: ' Elektronik di Rumah Kita ',cat: ' Hadi KaryantoSigit Giri Purwana ',typing: [' Penerbit Pakar Raya Pustaka , Klaten ',' - SR 621.381 HAD e ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2015 "> Bioteknologi di Sekitar Kita </a>',nat: ' Bioteknologi di Sekitar Kita ',cat: ' Reni Mulyati ',typing: [' PT Intan Pariwara , Klaten ',' - SR 620.8 REN b ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2000 "> Mari Bereksperimen dengan Sains </a>',nat: ' Mari Bereksperimen dengan Sains ',cat: ' R. Nurfadilah ',typing: [' PT Musi Perkasa Utama , Jakarta Barat ',' - SR 507 NUR m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1999 "> Ensiklopedia Matematika (R-Z) </a>',nat: ' Ensiklopedia Matematika (R-Z) ',cat: ' Hadi Lesmana ',typing: [' PT Indahjaya Adipratama , Bandung ',' - R 510.03 HAD e ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1998 "> Seri Penemu: Bidang Teknologi </a>',nat: ' Seri Penemu: Bidang Teknologi ',cat: ' Ardani ',typing: [' Penerbit Insan Cendekia , Jawa Timur ',' - SR 926 ARD s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1997 "> Sejarah Indonesia 2: Zaman Sejarah Kuna </a>',nat: ' Sejarah Indonesia 2: Zaman Sejarah Kuna ',cat: ' Eko Praptanto ',typing: [' PT Bina Sumber Daya MIPA , Jakarta Selatan ',' - SR 959.8 EKO s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2003 "> Referensi Matematika Dalam Kehidupan Manusia 3 </a>',nat: ' Referensi Matematika Dalam Kehidupan Manusia 3 ',cat: ' Wahyudin ',typing: [' Penerbit Ipa Abong , Jakarta ',' - R 510 WAH r ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1994 "> Sopan Santun Berlalu Lintas </a>',nat: ' Sopan Santun Berlalu Lintas ',cat: ' Alnurrizki Muthfisari ',typing: [' PT Maraga Borneo Tarigas , Kalimantan Barat ',' - SR 344.05 ALN s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1978 "> Menjelajah Lautan </a>',nat: ' Menjelajah Lautan ',cat: ' Dewi Yuliana Astuti ',typing: [' PT Sarana Panca Karya Nusa , Bandung ',' - SR 574.5 DEW m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1980 "> Menembus Belantara Irian Barat </a>',nat: ' Menembus Belantara Irian Barat ',cat: ' Drs. Daniel Agus Maryanto ',typing: [' PT Citra Aji Parama , Yogyakarta ',' - SR 813 DAN m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1984 "> Adabul Alim Wal Mutaallim: Kajian tentang Akhlaq </a>',nat: ' Adabul Alim Wal Mutaallim: Kajian tentang Akhlaq ',cat: ' Syeikh Hasyim Asy\'ari ',typing: [' CV Megah Jaya , Jakarta ',' - SR 2X5.1 SYE a ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1986 "> Mabadi Awwaliyyah: Kajian tentang Fiqh </a>',nat: ' Mabadi Awwaliyyah: Kajian tentang Fiqh ',cat: ' Abdul Hamid Hakim ',typing: [' CV Megah Jaya , Jakarta ',' - SR 2X4 ABD m ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1987 "> Tuhfatul Ahwadzi: Kajian tentang Shalat Berjamaah </a>',nat: ' Tuhfatul Ahwadzi: Kajian tentang Shalat Berjamaah ',cat: ' Al Imam Al Hafizh Abul \'Ula Muhammad Abdurrahman bin Abdurrahim Al Mubarakfuri ',typing: [' PT Aliansi Belajar Mandiri , Jakarta Barat ',' - SR 2X4.1 ABU t ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1988 "> Tuhfatul Ahwadzi: Kajian tentang Adzan </a>',nat: ' Tuhfatul Ahwadzi: Kajian tentang Adzan ',cat: ' Al Imam Al Hafizh Abul \'Ula Muhammad Abdurrahman bin Abdurrahim Al Mubarakfuri ',typing: [' PT Aliansi Belajar Mandiri , Jakarta Barat ',' - SR 2X4.1 ABU t ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1989 "> Seri Sains Dasar 2: Mengenal Keseimbangan </a>',nat: ' Seri Sains Dasar 2: Mengenal Keseimbangan ',cat: ' Daryanto Nurhidayat ',typing: [' PT Aliansi Belajar Mandiri , Jakarta Barat ',' - SR 531.5 DAR s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1991 "> Atom, Ion, dan Molekul Beserta Aplikasinya </a>',nat: ' Atom, Ion, dan Molekul Beserta Aplikasinya ',cat: ' Suntari ',typing: [' PT Intan Pariwara , Klaten ',' - SR 541 SUN a ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 1993 "> Kekayaan Sumber Daya Indonesia (Masalah dan Pengelolaannya) </a>',nat: ' Kekayaan Sumber Daya Indonesia (Masalah dan Pengelolaannya) ',cat: ' Heri Sucitro. S.Pd ',typing: [' PT Era Pustaka Utama , Surakarta ',' - SR 333.7 HER k ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2004 "> Referensi Matematika Dalam Kehidupan Manusia 2 </a>',nat: ' Referensi Matematika Dalam Kehidupan Manusia 2 ',cat: ' Wahyudin ',typing: [' Penerbit Ipa Abong , Jakarta ',' - R 510 WAH r ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2005 "> Ensiklopedia tentang Geografi (Seri A-K) </a>',nat: ' Ensiklopedia tentang Geografi (Seri A-K) ',cat: ' L. Tsagita Ariani ',typing: [' PT Indahjaya Adipratama , Bandung ',' - R 903 TSA e ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2006 "> Sains Untuk Pemula 7: Mari Bermain Listrik Statis </a>',nat: ' Sains Untuk Pemula 7: Mari Bermain Listrik Statis ',cat: ' Drs. Suhendiana NoorDra. Ida Kaniawati, M.Si ',typing: [' PT Setia Purna Inves , Bandung ',' - SR 537 SUH s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2007 "> Seri Sains Dasar 1: Mengenal Gerak </a>',nat: ' Seri Sains Dasar 1: Mengenal Gerak ',cat: ' Candra Hermanto ',typing: [' PT Aliansi Belajar Mandiri , Jakarta Barat ',' - SR 531.6 CAN s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2008 "> Sains untuk Pemula 6: Mari Bermain Cahaya </a>',nat: ' Sains untuk Pemula 6: Mari Bermain Cahaya ',cat: ' Drs. Suhendiana NoorDra. Ida Kaniawati, M.Si ',typing: [' PT Setia Purna Inves , Bandung ',' - SR 535 SUH s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2009 "> Sains untuk Pemula 4: Mari Bermain Pesawat Sederhana </a>',nat: ' Sains untuk Pemula 4: Mari Bermain Pesawat Sederhana ',cat: ' Drs. Suhendiana NoorDra. Ida Kaniawati, M.Si ',typing: [' PT Setia Purna Inves , Bandung ',' - SR 530 SUH s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2010 "> Sains untuk Pemula 3: Mari Bermain Kelembaman dan Gesekan </a>',nat: ' Sains untuk Pemula 3: Mari Bermain Kelembaman dan Gesekan ',cat: ' Drs. Suhendiana NoorDra. Ida Kaniawati, M.Si ',typing: [' PT Setia Purna Inves , Bandung ',' - SR 530 SUH s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2011 "> Sains untuk Pemula 9: Mari Bermain Elektromagnet </a>',nat: ' Sains untuk Pemula 9: Mari Bermain Elektromagnet ',cat: ' Drs. Suhendiana NoorDra. Ida Kaniawati, M.Si ',typing: [' PT Setia Purna Inves , Bandung ',' - SR 538 SUH s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2012 "> Undang-Undang Pemberantasan Tindak Pidana Korupsi </a>',nat: ' Undang-Undang Pemberantasan Tindak Pidana Korupsi ',cat: ' Redaksi Grhatama ',typing: [' Penerbit Pustaka Grhatama , Yogyakarta ',' - SR 345 RED u ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2013 "> Tafsir Juz amma 1: Surat An-Naas - Surat At-Takaatsur </a>',nat: ' Tafsir Juz amma 1: Surat An-Naas - Surat At-Takaatsur ',cat: ' Muhammad Muslih ',typing: [' PT Tiga Serangkai , Solo ',' - SR 2X1.3 MUH t ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2014 "> Sejarah Indonesia 5: Zaman Kebangkitan Nasional </a>',nat: ' Sejarah Indonesia 5: Zaman Kebangkitan Nasional ',cat: ' Eko Praptanto ',typing: [' PT Bina Sumber Daya MIPA , Jakarta Selatan ',' - SR 959.8 EKO s ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2374 "> Pengajaran yang Kreatif dan Menarik: Cara Membangkitkan Minat Siswa melalui Pemikiran </a>',nat: ' Pengajaran yang Kreatif dan Menarik: Cara Membangkitkan Minat Siswa melalui Pemikiran ',cat: ' LouAnne Johnson ',typing: [' PT Indeks , ',' - SR 371.1 LOU p ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2375 "> Tambelo (Meniti Hari di Ottakwa) </a>',nat: ' Tambelo (Meniti Hari di Ottakwa) ',cat: ' Redhite Kurniawan ',typing: [' PT Era Adicitra Intermedia , Surakarta ',' - SR 813 RED t ']},
{name: '<a href="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id= 2376 "> Model-Model Pembelajaran Inovatif </a>',nat: ' Model-Model Pembelajaran Inovatif ',cat: ' Hendy Hermawan ',typing: [' CV Citra Praya , Bandung ',' - SR 371.3 HEN m ']},




  ];

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
      name: 'cat',
      weight: 0.5
    },{
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
        el.cat + '' + el.name + ''+ el.typing + '<br><br>'
      );
    });
  });

})(jQuery, Materialize);
