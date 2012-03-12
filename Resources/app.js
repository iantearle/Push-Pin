var win = Ti.UI.createWindow({
	backgroundColor: '#fff',
	fullscreen: false,
	exitOnClose: true
});
var menu = require('/path').createMenu({
	iconList: [
		{ image: 'images/sm/share.png', id: 'Share' },
		{ image: 'images/sm/permalink.png', id: 'Permalink' },
		{ image: 'images/sm/expand.png', id: 'Expand' },
		{ image: 'images/sm/search.png', id: 'Search' },
		{ image: 'images/sm/rate.png', id: 'Rate' },
		{ image: 'images/sm/post.png', id: 'Post' },
		{ image: 'images/sm/location.png', id: 'Location' },
		{ image: 'images/sm/flag.png', id: 'Flag' },
		{ image: 'images/sm/privacy.png', id: 'Privacy' },
		{ image: 'images/sm/rescue.png', id: 'Rescue' },
		{ image: 'images/sm/refresh.png', id: 'Refresh' },
		{ image: 'images/sm/favourite.png', id: 'Favourite' }

	]
});
var label = Ti.UI.createLabel({
	text: 'index: ???\nid: ???',
	color: '#222',
	font: {
		fontSize: 24,
		fontWeight: 'bold'	
	},
	textAlign: 'center'
});

menu.addEventListener('iconClick', function(e) {
	Ti.API.info(e.source);
	Ti.API.info(e.index);
	Ti.API.info(e.id);
	label.text = 'index: ' + e.index + '\nid: ' + (e.id ? e.id : 'undefined');
});

var button = Ti.UI.createButton({
	title: 'reset menu',
	width: 120,
	height: 40,
	top: 20
});
button.addEventListener('click', function(e) {
	menu.initMenu();
	label.text = 'index: ???\nid: ???';
});

win.addEventListener('longpress', function(e) {
	Ti.App.fireEvent('animate_open');
});

win.add(menu);
win.add(label);
win.add(button);

win.open();