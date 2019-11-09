routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/antologi/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/antologi.html',
  },
  {
    path: '/biblio/',
    url: './pages/biblio.html',
  },
  {
    path: '/biblio-text/',
    url: './pages/biblio-text.html',
  },
  {
    path: '/biblio-anggota/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/biblio-anggota.html',
  },
 {
    path: '/chat/',
    url: './pages/chat.html',
  },
 {
    path: '/jam/',
    url: './pages/jam.html',
  },
 {
    path: '/literasi/',
    url: './pages/literasi.html',
  },
  {
    path: '/edu/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/edu.html',
  },
  {
    path: '/berita/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/berita.html',
  },
  {
    path: '/galeri-kartu/',
    url: './pages/galeri-kartu.html',
  },
  {
    path: '/istilah/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/istilah.html',
  },
  {
    path: '/kalender/',
    url: './pages/kalender.html',
  },
  {
    path: '/one/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/one.html',
  },
  {
    path: '/profil/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/profil.html',
  },
  {
    path: '/pustakawan/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/pustakawan.html',
  },
  {
    path: '/statistik/',
    url: './pages/statistik.html',
  },
  {
    path: '/blank1/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft1.html',
  },
  {
    path: '/blank2/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft2.html',
  },
  {
    path: '/blank3/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft3.html',
  },
  {
    path: '/blank4/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft4.html',
  },
  {
    path: '/blank5/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft5.html',
  },
  {
    path: '/blank6/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft6.html',
  },
  {
    path: '/blank7/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft7.html',
  },
  {
    path: '/blank8/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft8.html',
  },
  {
    path: '/blank9/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft9.html',
  },
  {
    path: '/blank10/',
    url: 'http://app.smpn21purworejo.sch.id/v7/draft/draft10.html',
  },

  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
