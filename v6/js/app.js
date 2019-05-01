// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var literasiView = app.views.create('#view-literasi', {
  url: '/literasi/'
});
var settingsView = app.views.create('#view-biblio', {
  url: '/biblio/'
});


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});



var thehours = new Date().getHours();
	var themessage;
	var dini = ('Selamat dini hari,');
	var pagi = ('Selamat pagi,');
	var siang = ('Selamat siang,');
	var sore = ('Selamat sore,');
	var malam = ('Selamat malam,');

	if (thehours >= 0 && thehours < 5) {
		themessage = dini;

	} else if (thehours >= 5 && thehours < 10) {
		themessage = pagi;

	} else if (thehours >= 10 && thehours < 14) {
		themessage = siang;

	} else if (thehours >= 14 && thehours < 19) {
		themessage = sore;

	} else if (thehours >= 19 && thehours < 24) {
		themessage = malam;
	}

	$('.greeting').append(themessage);



/* Detect browser can use web storage */
if (!typeof(Storage) !== 'undefined') {
  $('#yay').fadeIn('slow');
} else {
  $('#ooh').fadeIn('slow');
}

/* set it */
$('#set').click(function() {
  var test = $('#text').val();
  localStorage.setItem("Pemustaka", test);
});

/* get it */
$('#get').click(function() {
  $('#val').text(localStorage.getItem("Pemustaka"));
});

/* get it */
$('#get').click(function() {
  $('#val2').text(localStorage.getItem("Pemustaka"));
});

/* remove it */
$('#remove').click(function() {
  localStorage.removeItem("Pemustaka");
});

$('#val').text(localStorage.getItem("Pemustaka"));
$('#val2').text(localStorage.getItem("Pemustaka"));
