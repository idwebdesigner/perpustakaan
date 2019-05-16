      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart()
      {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Fiksi',     175],
          ['Non Fiksi',      678],
          ['Buku pelajaran',  37],
          ['Referensi', 153],
        ]);

        var options = {
          title: 'Tipe Koleksi (berdasarkan judul)',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('tipekoleksi'));
        chart.draw(data, options);
      }

      {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Fiksi',     388],
          ['Non Fiksi',      1478],
          ['Buku pelajaran',  86],
          ['Referensi', 270],
        ]);

        var options = {
          title: 'Tipe Koleksi (berdasarkan jumlah eksemplar)',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('tipekoleksieksemplar'));
        chart.draw(data, options);
      }

      {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Indonesia',     1071],
          ['Inggris',      9],
        ]);

        var options = {
          title: 'Tipe Koleksi (berdasarkan bahasa)',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('tipekoleksibahasa'));
        chart.draw(data, options);
      }

      {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Total Eksemplar Dipinjam',     3101],
          ['Total Eksemplar Dalam Koleksi',      7335],
        ]);

        var options = {
          title: 'Total Eksemplar Dipinjam	',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('dipinjam'));
        chart.draw(data, options);
      }

      {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Fiksi',     344],
          ['Non Fiksi',      206],
          ['Buku pelajaran',  40],
          ['Referensi', 6],
        ]);

        var options = {
          title: 'Total Eksemplar Dipinjam Menurut Jenis Koleksi',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('koleksi'));
        chart.draw(data, options);
      }

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Siswa Kelas 7',     160],
          ['Siswa Kelas 8',      159],
          ['Siswa Kelas 9',  155],
          ['Guru/Karyawan', 32],
        ]);

        var options = {
          title: 'Jumlah Anggota Menurut Jenis Keanggotaan',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('anggota'));
        chart.draw(data, options);
      }

      {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Anggota Yang Meminjam',     492],
          ['Anggota Belum Pernah Meminjam',      14],
        ]);

        var options = {
          title: 'Aktivitas Anggota',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('anggotapinjam'));
        chart.draw(data, options);
      }

        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['City', 'Total Kunjungan',],
        ['Juli', 36],
        ['Agustus', 395],
        ['September', 102],
        ['Oktober', 873],
        ['November', 395],
        ['Desember', 602],
        ['Januari', 710],
        ['Februari', 250],
        ['Maret', 121],
        ['April', 505],
        ['Mei', 285]
      ]);

      var options = {
        title: 'Total Kunjungan Tahun 2018/2019',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Pemustaka',
          minValue: 0
        },
        vAxis: {
          title: ''
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('totalkunjungan'));

      chart.draw(data, options);
    }

        {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Guru/Karyawan', 'Siswa kelas 7', 'Siswa kelas 8', 'Siswa kelas 9'],
        ['Januari', 15, 208, 300, 183],
        ['Februari', 9, 60, 115, 65],
        ['Maret', 6, 62, 30, 23],
        ['April', 6, 57, 47, 385],
        ['Mei', 1, 87, 50, 147],
      ]);

      var options = {
        title: 'Total Kunjungan berdasarkan Tipe Keanggotaan (Semester II)',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Pemustaka',
          minValue: 0,
          textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
          titleTextStyle: {
            bold: true,
            fontSize: 18,
            color: '#4d4d4d'
          }
        },
        vAxis: {
          title: '',
          textStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          },
          titleTextStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          }
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('totaltipekunjungan'));
      chart.draw(data, options);
    }

        {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Guru/Karyawan', 'Siswa kelas 7', 'Siswa kelas 8', 'Siswa kelas 9'],
        ['Juli', 0, 0, 35, 0],
        ['Agustus', 0, 0, 337, 58],
        ['September', 0, 0, 1, 101],
        ['Oktober', 7, 246, 179, 441],
        ['November', 12, 174, 164, 201],
        ['Desember', 1, 186, 201, 210],
      ]);

      var options = {
        title: 'Total Kunjungan berdasarkan Tipe Keanggotaan (semester I)',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Pemustaka',
          minValue: 0,
          textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
          titleTextStyle: {
            bold: true,
            fontSize: 18,
            color: '#4d4d4d'
          }
        },
        vAxis: {
          title: '',
          textStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          },
          titleTextStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          }
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('totaltipekunjungan2'));
      chart.draw(data, options);
    }
