var search = null;
(function($, _M) {
  'use strict';

  var $searchbar = $('#search');

  var dex = [

{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2410">Arimbi</a>',nat:'AnjarLembayung',typing:['Scritto','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2411">TrikDasyatMempertajamDayaIngatHafalanPelajaran</a>',nat:'NurlaIsnaAuniliah',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2408">Darah;SebuahKumcerPsikopat</a>',nat:'BaiqCynthia',typing:['Scritto','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2409">Lucu-LucuTokohDunia</a>',nat:'IsaAn.Tamami',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2407">SelimutMimpi</a>',nat:'R.Adrelas',typing:['Scritto','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2405">Istri-IstriRajaDiTanahJawa</a>',nat:'SriWintalaAchmad',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2406">13KisahHororKuntilanakDanCerita-CeritaSuperHororLainya</a>',nat:'TirtaWisanggeni',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2403">30Resepistimewarasaitaliapasta,spagethi&salad</a>',nat:'Anniakissanti',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2402">25resepsambalnusantarapalingfavorit</a>',nat:'AnnikaKisanti',typing:['araskapubisher','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2400">Anekaresepbubursehatjusbuah&camilanpalingfavorituntukbayi</a>',nat:'Henihendrayati',typing:['Araskapublisher','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2401">Menjadiguruyangmampumenulisdanmenerbitkanbuku</a>',nat:'Denidamayanti',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2398">34Resepmenumakansehat&lezatuntukmengendalikanpenyakitjantung&stroke</a>',nat:'Diansafitri',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2399">Sangpenakluktrikjitumenaklukkan&memahamilika-likulaki-laki</a>',nat:'HersintaAstari',typing:['parasmu','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2397">Midnigthstories</a>',nat:'As.Soenarwi',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2396">Lucu-LucuParaBossKumpulanKisahKonyolParaBoss</a>',nat:'FaninaTan',typing:['FaninaTan','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2395">DiaJujurNggakSih?</a>',nat:'HumairaElRahmi',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2394">Lorosa'e:MyLove</a>',nat:'RiskanidaMaharani',typing:['Araska','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2127">BudiUtomoCabangBetawi</a>',nat:'AbdurrachmanSurjomihardjo',typing:['PTDuniaPustakaJaya','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2393">RahasiaDibalikTelepon</a>',nat:'JohnBassett',typing:['PenerbitPakarRaya','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2392">AkuntabilitasKinerjaPendidikan</a>',nat:'Dr.M.HasanudinBuhory,M.M.',typing:['PenerbitUniversitasNegeriMalang','Malang]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1309">PendidikanAgamaKristendanBudiPekertiuntukSMPKelasVIII</a>',nat:'KementerianPendidikandanKebudayaan',typing:['KementerianPendidikandanKebudayaan','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1382">Budidaya,PengolahandanPemasaranCoklat</a>',nat:'TumpalH.S.SiregarSlametRiyadiLaeliNuraeni',typing:['PTPenebarSwadaya','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1380">MengenalEkspordanImpor</a>',nat:'AgungFeryanto',typing:['PenerbitCempakaPutih','Klaten]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1378">PelayaranNusantara</a>',nat:'ArimKamandaka',typing:['PenerbitSIC','Surabaya]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1377">Salesmanship:IlmudanSeniMenjadiPenjualyangSukses</a>',nat:'SotarBaduaraSabarMartinSirait',typing:['PenerbitBumiAksara','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1376">FluBurungdiManusia</a>',nat:'TjandraYogaAditama',typing:['PenerbitUniversitasIndonesia','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1375">ReparasiMotorBensindanDiesel</a>',nat:'Soedjono',typing:['PenerbitTitianIlmu','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1374">TerampilBerbahasaArab</a>',nat:'ZuhriM.Thoha',typing:['PTPustakaInsanMadani','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1372">RahasiaDibalikBilangan?</a>',nat:'JanuIsmadi',typing:['PenerbitNobelEdumedia','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1371">EpilogKudetaG30S/PKISiapaMelawanSiapa""</a>',nat:'HusnuMufid',typing:['PenerbitJPBooks','Surabaya]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1368">ManajemenKeuangan</a>',nat:'Abdrachim',typing:['NoberEdumedia','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1367">KumpulanCeritaRakyarNusantara2</a>',nat:'AdeSoekirnoSSP',typing:['GramediaWidiasaranaIndonesia','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1365">PolaPelaksanaanPendidikanKecakapanHidupMelaluiPendekatanPendidikanBerbasisLuas</a>',nat:'TimBroadBasedEducationDepdiknas',typing:['SurabayaIntellectualClub','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1363">SeriKetrampilanMemanfaatkanBarangBekas:MembuatAnekaPigura</a>',nat:'BagasShinugi',typing:['PTMediantaraSemesta','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1362">EnglishEverywhere</a>',nat:'ErnaFitriniRatihSumiratingratri',typing:['CahayaPustakaRaga','Bekasi]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1357">StandarKompetisidanSertifikasiGuru</a>',nat:'Mulyasa',typing:['PTRemajaRosdakarya','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1351">KenakalanRemajadanPenanggulangannya</a>',nat:'VinaDwiLaning',typing:['PenerbitCempakaPutih','Klaten]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1350">Negara,CivilSocietydanDemokrasi</a>',nat:'LuthfiJ.Kurniawan',typing:['In-TransPublishing','Malang]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1349">AyoTerusSekolah</a>',nat:'SugengWaluyo',typing:['PenerbitSIC','Surabaya]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1873">HisLastBow:SalamPerpisahan</a>',nat:'SirArthurConanDoyle',typing:['PenerbitIndoliterasi','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1960">EnsiklopediAnakNasional6</a>',nat:'Prof.Dr.ConnyR.Semiawan',typing:['PTDeltaPamungkas','Bogor]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1961">BudidayaMinaAyam</a>',nat:'Sunarno,B.Sc.',typing:['PTBalaiPustaka','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1962">IndonesiaBagianDariDunia</a>',nat:'DeviAndriana',typing:['PTMitraAkasaraPanaitan','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1963">MengenalAntartikadanArktika</a>',nat:'Winarti',typing:['PenerbitCempakaPutih','Klaten]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2017">99PercobaanSehari-hariBereksperimendenganBahan-BahanSederhanaSeri5</a>',nat:'Prof.Dr.Wahyudin',typing:['PenerbitArmandeltaSelaras',']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2016">MenentukanPosisidanMengolahData</a>',nat:'DidikDjunaedi',typing:['PTGadingIntiPrima','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2043">MengenalLingkunganSekitarKita</a>',nat:'HerlinaRahmawati',typing:['PenerbitNobelEdumedia','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2041">HimpunanPeraturanPerundang-UndangantentangWajibBelajar</a>',nat:'TimRedaksiFokusmedia',typing:['PenerbitFokusMedia','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2051">SeriPahlawanNasional:PanglimaBesarJenderalSoedirman</a>',nat:'B.A.Saleh',typing:['CVCitraPraya','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2057">AlamSekitarKita</a>',nat:'E.SpeareL.Colvin',typing:['PTGadingIntiPrima','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2049">EnsiklopediaPahlawanNasionalIndonesia</a>',nat:'NurAsiah',typing:['PTMediantaraSemesta','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2021">MengungkapdanMengenalBudayaJawa</a>',nat:'ThomasWiyasaBratawijaya',typing:['PenerbitPradnyaParamita','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2022">Kisah-KisahdalamAl-Qur'an(4)</a>',nat:'MiftahF',typing:['CVMegahJaya','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2024">KorespondensiBahasaIndonesia:Dasar,Teori,danAplikasi</a>',nat:'AfraTienSotyaningrum,Dra.,M.Si',typing:['PenerbitAmaraBooks','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2026">BentengRemajaMenolakNarkoba</a>',nat:'R.W.Dodo,S.Pd.I',typing:['PenerbitNobelEdumedia','JakartaTimur]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2027">AktivitasPramukauntukPenggalangTerap</a>',nat:'EllySumarsihAnthoniusDaudHongkySiteja',typing:['PenerbitErlangga','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2028">RahasiadiBalikTelevisi</a>',nat:'JohnBassett',typing:['PenerbitPakarRaya','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2033">AdaApaDenganNarkoba</a>',nat:'Winarto,S.S',typing:['PenerbitAnekaIlmu','Semarang]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2034">NarkobaPerlukahMengenalnya?</a>',nat:'IdaListyariniHandoyo,S.Si.,M.Si.',typing:['PenerbitPakarRaya','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2035">PromosidanPenjualanBagiUsahaKecil</a>',nat:'ArdiGautamaLeman',typing:['PTBalaiBahasa','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2036">SeriBencanaAlam:LetusanGunungBerapi</a>',nat:'WeniR',typing:['PTIntanSejatiKlaten','Klaten]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2037">MengenalPenyairDuniadanIndonesia</a>',nat:'IwanHendrawan',typing:['PTMusiPerkasaUtama','JakartaBarat]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1983">FiqhulHaidh:KajianTentangFiqh</a>',nat:'MuhammadbinAbdilQohar',typing:['CVMegahJaya','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1982">QishahAl-Mi'raj:KajiantentangSejarahKebudayaanIslam</a>',nat:'NajmudinAlGhaity',typing:['PTAliansiBelajarMandiri','JakartaBarat]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1730">SejarahIndonesia6:ZamanPendudukanJepangdanKemerdekaanIndonesia</a>',nat:'EkoPraptanto',typing:['PTBinaSumberDayaMIPA','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1895">90KerajinanTangan1</a>',nat:'AnitaVanSaan',typing:['PenerbitTigaSerangkaiPustakaMandiri','Solo]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1383">SeriPustakaSains:HewanLiar</a>',nat:'SteveParker',typing:['MilesKellyPublishing','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1979">WaspadaiKekerasandiSekitarKita</a>',nat:'TammiPrastowo,S.Sos.',typing:['PTMaragaBorneoTarigas','KalimantanBarat]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2002">FisikadalamKehidupanKita</a>',nat:'TaufikRamlan',typing:['PenerbitIpaAbong','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1698">ElektronikdiRumahKita</a>',nat:'HadiKaryantoSigitGiriPurwana',typing:['PenerbitPakarRayaPustaka','Klaten]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2015">BioteknologidiSekitarKita</a>',nat:'ReniMulyati',typing:['PTIntanPariwara','Klaten]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2000">MariBereksperimendenganSains</a>',nat:'R.Nurfadilah',typing:['PTMusiPerkasaUtama','JakartaBarat]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1999">EnsiklopediaMatematika(R-Z)</a>',nat:'HadiLesmana',typing:['PTIndahjayaAdipratama','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1998">SeriPenemu:BidangTeknologi</a>',nat:'Ardani',typing:['PenerbitInsanCendekia','JawaTimur]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1997">SejarahIndonesia2:ZamanSejarahKuna</a>',nat:'EkoPraptanto',typing:['PTBinaSumberDayaMIPA','JakartaSelatan]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2003">ReferensiMatematikaDalamKehidupanManusia3</a>',nat:'Wahyudin',typing:['PenerbitIpaAbong','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1994">SopanSantunBerlaluLintas</a>',nat:'AlnurrizkiMuthfisari',typing:['PTMaragaBorneoTarigas','KalimantanBarat]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1978">MenjelajahLautan</a>',nat:'DewiYulianaAstuti',typing:['PTSaranaPancaKaryaNusa','Bandung]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1980">MenembusBelantaraIrianBarat</a>',nat:'Drs.DanielAgusMaryanto',typing:['PTCitraAjiParama','Yogyakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1984">Adabul'AlimWalMuta'allim:KajiantentangAkhlaq</a>',nat:'SyeikhHasyimAsy\'ari',typing:['CVMegahJaya','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1986">MabadiAwwaliyyah:KajiantentangFiqh</a>',nat:'AbdulHamidHakim',typing:['CVMegahJaya','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1987">TuhfatulAhwadzi:KajiantentangShalatBerjamaah</a>',nat:'AlImamAlHafizhAbul\'UlaMuhammadAbdurrahmanbinAbdurrahimAlMubarakfuri',typing:['PTAliansiBelajarMandiri','JakartaBarat]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1988">TuhfatulAhwadzi:KajiantentangAdzan</a>',nat:'AlImamAlHafizhAbul\'UlaMuhammadAbdurrahmanbinAbdurrahimAlMubarakfuri',typing:['PTAliansiBelajarMandiri','JakartaBarat]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1989">SeriSainsDasar2:MengenalKeseimbangan</a>',nat:'DaryantoNurhidayat',typing:['PTAliansiBelajarMandiri','JakartaBarat]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1991">Atom,Ion,danMolekulBesertaAplikasinya</a>',nat:'Suntari',typing:['PTIntanPariwara','Klaten]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=1993">KekayaanSumberDayaIndonesia(MasalahdanPengelolaannya)</a>',nat:'HeriSucitro.S.Pd',typing:['PTEraPustakaUtama','Surakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2004">ReferensiMatematikaDalamKehidupanManusia2</a>',nat:'Wahyudin',typing:['PenerbitIpaAbong','Jakarta]},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2005">EnsiklopediatentangGeografi(SeriA-K)</a>',nat:'L.TsagitaAriani',typing:['PTIndahjayaAdipratama','Bandung']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2006">SainsUntukPemula7:MariBermainListrikStatis</a>',nat:'Drs.SuhendianaNoorDra.IdaKaniawati,M.Si',typing:['PTSetiaPurnaInves','Bandung']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2007">SeriSainsDasar1:MengenalGerak</a>',nat:'CandraHermanto',typing:['PTAliansiBelajarMandiri','JakartaBarat']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2008">SainsuntukPemula6:MariBermainCahaya</a>',nat:'Drs.SuhendianaNoorDra.IdaKaniawati,M.Si',typing:['PTSetiaPurnaInves','Bandung']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2009">SainsuntukPemula4:MariBermainPesawatSederhana</a>',nat:'Drs.SuhendianaNoorDra.IdaKaniawati,M.Si',typing:['PTSetiaPurnaInves','Bandung']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2010">SainsuntukPemula3:MariBermainKelembamandanGesekan</a>',nat:'Drs.SuhendianaNoorDra.IdaKaniawati,M.Si',typing:['PTSetiaPurnaInves','Bandung']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2011">SainsuntukPemula9:MariBermainElektromagnet</a>',nat:'Drs.SuhendianaNoorDra.IdaKaniawati,M.Si',typing:['PTSetiaPurnaInves','Bandung']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2012">Undang-UndangPemberantasanTindakPidanaKorupsi</a>',nat:'RedaksiGrhatama',typing:['PenerbitPustakaGrhatama','Yogyakarta']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2013">TafsirJuz'amma1:SuratAn-Naas-SuratAt-Takaatsur</a>',nat:'MuhammadMuslih',typing:['PTTigaSerangkai','Solo']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2014">SejarahIndonesia5:ZamanKebangkitanNasional</a>',nat:'EkoPraptanto',typing:['PTBinaSumberDayaMIPA','JakartaSelatan']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2374">PengajaranyangKreatifdanMenarik:CaraMembangkitkanMinatSiswamelaluiPemikiran</a>',nat:'LouAnneJohnson',typing:['PTIndeks','']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2375">Tambelo(MenitiHaridiOttakwa)</a>',nat:'RedhiteKurniawan',typing:['PTEraAdicitraIntermedia','Surakarta']},
{name:'<ahref="http://smpn21purworejo.sch.id/library/app.php?p=show_detail&id=2376">Model-ModelPembelajaranInovatif</a>',nat:'HendyHermawan',typing:['CVCitraPraya','Bandung']},


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
