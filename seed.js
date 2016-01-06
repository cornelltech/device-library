/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var async = require('async');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Category = Promise.promisifyAll(mongoose.model('Category'));
var Device = Promise.promisifyAll(mongoose.model('Device'));
var Donor = Promise.promisifyAll(mongoose.model('Donor'));

var donors = [{
    name: "Google",
    donations: "HTC phone, Nexus 9, Nexus Player",
    date: new Date(2015, 11, 12)
}, {
    name: "Miwa (MBA'15)",
    donations: "$2000",
    date: new Date(2015, 12, 12)
}]

donors = donors.map(function(datum) {
    return new Donor(datum)
});

var categories = [{
    name: 'Wearables',
    image: ''
}, {
    name: 'Robots',
    image: ''
}, {
    name: 'Virtual Reality',
    image: ''
}, {
    name: 'Connected Home',
    image: ''
}, {
    name: 'Drones'
}, {
    name: 'Mobile & Accessories'
}, {
    name: 'Entertainment'
}, {
    name: 'Tablets & Accessories'
}, {
    name: 'Sports'
}, {
    name: 'Computers & Accessories'
}]


categories = categories.map(function(datum) {
    return new Category(datum)
});

var devices = [{
    name: 'Google Cardboard',
    brand: 'Google',
    categories: [categories[2]],
    image: 'https://developers.google.com/cardboard/images/one-cardboard.png',
    description: '<p><i>Thanks Omri Sass (CM\'17) for donating them!</i></p><p>Quantity: 2</p><p>Website: <a href="https://www.google.com/get/cardboard/apps/">https://www.google.com/get/cardboard/apps/</a></p><p>SDKs & APIs: <a href="https://developers.google.com/cardboard/?hl=en">https://developers.google.com/cardboard/?hl=en</a></p><h2> Android apps</h2><ul><li><a href="https://play.google.com/store/apps/collection/promotion_3001011_cardboard_featured_apps">Google Play Store Cardboard page</a></li><li><a href="https://play.google.com/store/apps/details?id=com.google.samples.apps.cardboarddemo">Official Cardboard App</a></li><li><a href="https://www.youtube.com/360">Youtube cardboard mode</a></li><li><a href="">StreetView cardboard mode</a></li></ul><h3>Games</h3><ul><li><a href="https://play.google.com/store/apps/details?id=com.ZeroTransform.ProtonPulse">Proton pulse</a></li><li><a href="https://play.google.com/store/apps/details?id=com.vrbits.nighttimeterrorcardboard">Nighttime terror</a> (<a href="https://play.google.com/store/apps/details?id=com.vrbits.nighttimeterrorcardboarddemo">free demo</a>)</li><li><a href="https://play.google.com/store/apps/details?id=com.ZeroTransform.VanguardV">Vanguard V</a></li><li><a href="https://play.google.com/store/apps/details?id=com.Sidekick.AgeOfDiamonds">Age of diamonds]()</a></li><li><a href="https://play.google.com/store/apps/details?id=com.otherworld.robobliterationfull">RoboBliteration</a> (<a href="https://play.google.com/store/apps/details?id=com.otherworld.robobliteration">free demo</a>)</li><li><a href="https://play.google.com/store/apps/details?id=com.archiactinteractive.LfGC">Lamper</a></li></ul><h3>Experiences</h3><ul><li><a href="https://play.google.com/store/apps/details?id=com.drashvr.titansofspacecb">Titan of space</a></li><li><a href="https://play.google.com/store/apps/details?id=com.Cosmic.rollercoaster">VR cosmic rollercoaster</a></li><li><a href="https://play.google.com/store/apps/details?id=com.jauntvr.preview.mccartney">Paul McCartney</a></li></ul><h2> iOS apps</h2><ul><li><a href="https://itunes.apple.com/us/app/google-cardboard/id987962261?mt=8">Cardboard App</a></li><li><a href="https://itunes.apple.com/us/app/proton-pulse-for-google-cardboard/id1002739417?mt=8">Proton Pulse</a></li></ul>',
    favorite: 5
}, {
    name: 'iPhone 4',
    brand: 'Apple',
    categories: [categories[5]],
    image: 'http://i.ebayimg.com/images/i/330629123334-0-1/s-l1000.jpg',
    description: ''
}, {
    name: 'Samsung Gear Live',
    brand: 'Samsung',
    categories: [categories[0]],
    image: 'http://cdn1.knowyourmobile.com/sites/knowyourmobilecom/files/styles/gallery_wide/public/0/19/gear-live_black-2-1280x852.jpg?itok=ESJ4WchNg',
    description: ''
}, {
    name: 'Samsung Galaxy S5',
    brand: 'Samsung',
    categories: [categories[5]],
    image: 'http://melita.com/wp-content/uploads/2014/09/Samsung_Galaxy_S5_Front.jpg',
    description: '',
    favorite: 3
}, {
    name: 'Google Nexus 9',
    brand: 'Google',
    categories: [categories[7]],
    image: 'http://elementalx.org/wp-content/uploads/2014/11/nexus9.png',
    description: ''
}, {
    name: 'Google Nexus Player',
    brand: 'Google',
    categories: [categories[3]],
    image: 'http://image.itdonga.com/files/2014/10/16/004_Ukwvilr.JPG',
    description: ''
}, {
    name: 'HTC One M7 UL',
    brand: 'HTC',
    categories: [categories[5]],
    image: 'http://cdn.thedroidguy.com/wp-content/uploads/2015/01/htconem7blue.jpeg',
    description: ''
}, {
    name: 'LG G3',
    brand: 'LG',
    categories: [categories[5]],
    image: 'http://masijee.com/wp-content/uploads/2015/05/Recovery-Mode-on-LG-G3.jpg',
    description: ''
}, {
    name: 'WeMo® Insight Switch',
    brand: 'Belkin',
    categories: [categories[3]],
    image: 'http://the-gadgeteer.com/wp-content/uploads/2013/10/wemo-insight-switch.jpg',
    description: '<p>The Wi-Fi enabled WeMo Insight Switch connects your home appliances and electronic devices to your Wi-Fi network, allowing you to turn devices on or off, program customized notifications and change device status - from anywhere. WeMo Insight Switch can monitor your electronics and will send information about the device’s energy usage directly to your smartphone or tablet. Perfect to pair with space heaters, wall A/C units, TVs, washers, dryers, fans, lights and more.</p><p>Website: <a href="http://www.belkin.com/us/F7C029/p/P-F7C029/">http://www.belkin.com/us/F7C029/p/P-F7C029/</a></p>'
}, {
    name: 'WeMo® Light Switch',
    brand: 'Belkin',
    categories: [categories[3]],
    image: 'http://main.designyoutrust.netdna-cdn.com/wp-content/uploads/2013/08/wemo-light-switch-large-650x444.jpg',
    description: '<p>The Wi-Fi® enabled WeMo Light Switch allows you to turn lights on and off from anywhere--from across the house, from the backyard, or from the other side of the world. WeMo Light Switch replaces a standard light switch in your home and can be controlled remotely with an Android smartphone or tablet, iPhone, iPad, or iPod touch. It works with your existing Wi-Fi® network and anywhere your smartphone or tablet has an Internet connection (3G or 4G LTE). Easy for most Do It Yourselfers.</p><p>Website: <a href="http://www.belkin.com/us/F7C030/p/P-F7C030/">http://www.belkin.com/us/F7C030/p/P-F7C030/</a></p>'
}, {
    name: 'WeMo® Maker',
    brand: 'Belkin',
    categories: [categories[3]],
    image: 'https://camo.githubusercontent.com/a320a9e07a28154df4df7b246c9e57266eb60f72/68747470733a2f2f39746f35746f79732e66696c65732e776f726470726573732e636f6d2f323031342f31312f62656c6b696e2d77656d6f2d706f73736962696c697465732e6a7067',
    description: '<p>WeMo Maker lets you control low-voltage electronics devices with a smartphone or tablet. Perfect for inventors and tinkerers, it\'s easy to use and works over your own home\'s Wi-Fi network. Turn things on and off, put them on schedules, or connect them to sensors that let you do even more. Like program your sprinklers to stay off when rain is forecast, or set watering schedules when you go out of town.</p><p>Website: <a href="http://www.belkin.com/us/F7C043/p/P-F7C043/">http://www.belkin.com/us/F7C043/p/P-F7C043/</a></p>'
}, {
    name: 'WeMo® LED Lighting Starter Set',
    brand: 'Belkin',
    categories: [categories[3]],
    image: 'https://camo.githubusercontent.com/c5f6534c46f598e6817f99863a00104b36c30a95/687474703a2f2f7777772e62656c6b696e2e636f6d2f696d616765732f70726f647563746d742f3832303030302f3337322e6a7067',
    description: '<p>The WeMo LED Lighting Starter Set lets you access and control your WeMo Smart LED Bulbs from anywhere, using your existing home Wi-Fi network and mobile internet. Dim lights, turn them on or off, or create a custom schedule that works for your family. You can also set your lights to turn on automatically at sunset, dim them to watch a movie, or turn them off after you leave home, all from your smart device.</p><p>Website: <a href="http://www.belkin.com/us/p/P-F5Z0489/">http://www.belkin.com/us/p/P-F5Z0489/</a></p><p>Package Includes:<ul><li>Two WeMo Smart LED Bulbs</li><li>WeMo Link</li><li>Quick Install Guide</li></ul></p>'
}, {
    name: 'Mattel Mindflex Game',
    brand: 'Mattel',
    categories: [categories[6]],
    image: 'https://camo.githubusercontent.com/b1fe9a7db416c5824ea4ff14b2dc3620487fccc2/687474703a2f2f7777772e6d696e6474656373746f72652e636f6d2f696d616765732f73746f726965732f7669727475656d6172742f70726f647563742f6d696e64666c65785f372e6a7067',
    description: '<p>The power of the mind will make a small foam ball levitate on a slight stream of air. This MindFlex brain game uses technology coupled with focused concentration to produce the outcome. The mind game includes a light-weight headset that contains sensors. These sensors read the brain waves, and help players move the ball through the various obstacle courses. Players can remain challenged by reconfiguring the obstacle courses into almost limitless possibilities. This mental acuity game challenges players to use focus, determination, and stamina to move the ball through the obstacles.</p><ul><li>For ages 8 and up</li><li>Requires 4 C and 2 AAA batteries</li></ul><p>How to Hack Toy EEGs (<a href="http://www.frontiernerds.com/brain-hack">http://www.frontiernerds.com/brain-hack</a>)</p>'
}, {
    name: '94Fifty Smart Basketball',
    brand: '94Fifty',
    categories: [categories[8]],
    image: 'http://www.sportsfeelgoodstories.com/wp-content/uploads/2014/01/Screen-shot-2014-01-12-at-5.30.20-PM.png',
    description: '<p>The word’s first smart basketball measures any forces applied to it – spin, acceleration, you name it. A full 360 degree view of the ball – and the player that moves it. The ball is going to give you data and feedback to your device that is smart, actionable and precise.</p><p>Price: $180</p><p>Size: 7</p><p>Website: <a href="http://www.94fifty.com/learn-more/smart-basketball/">http://www.94fifty.com/learn-more/smart-basketball/</a></p><p><a href="https://itunes.apple.com/us/app/94fifty-basketball/id724955707?mt=8&ign-mpt=uo%3D4">iOS app</a></p><p><a href="https://play.google.com/store/apps/details?id=com.spectrumdt.ist">Android app</a></p><p><a herf="https://glass.google.com/glassware/12291182233126993074">Glass</a></p>'
}, {
    name: 'Adidas miCoach Soccer Ball',
    brand: 'Adidas',
    categories: [categories[8]],
    image: 'http://micoach.adidascdn.com/loassets/images/smartball/features.png?v9',
    description: '<p>The miCoach Smart Ball’s unique sensor construction lets you fine-tune your dead-ball kicking technique with instant feedback on power, spin, strike and trajectory, along with exclusive tips and guidance to help you get the most from your game. Integrated sensor inside the ball detects speed, spin, strike and flight path data and instantly relays kick data to the miCoach app on your Apple device running iOS 7 or higher via Bluetooth 4.0</p><p>Price: $200</p><p>Size: 5</p><p>Website: <a href="http://micoach.adidas.com/smartball/">http://micoach.adidas.com/smartball/</a></p><p><a href="https://itunes.apple.com/us/app/micoach-smart-ball/id876887276?mt=8">iOS app</a></p><p><a href="https://play.google.com/store/apps/details?id=com.adidas.smartball">Android app</a></p>'
}, {
    name: 'Adobe Ink & Slide',
    brand: 'Adobe',
    categories: [categories[7]],
    image: 'http://cdn.studiodaily.com/wp-content/uploads/2014/06/1920_adobe-ink-slide.jpg',
    description: '<p>Introducing creative hardware that makes sketching and drawing more natural and fluid. Designed to be used with the iPad, Adobe Ink is a fine-tip, pressure-sensitive pen built using Adonit Pixelpoint technology to give you greater creative control and unprecedented precision. </p><p>Price: $125</p><p>Website: <a href="http://www.adobe.com/products/ink-and-slide.html">http://www.adobe.com/products/ink-and-slide.html</a></p>'
}, {
    name: 'Apple iPad',
    brand: 'Apple',
    categories: [categories[7]],
    image: 'http://www.zonablack.com/pictures/items/2/1/32.20120420070519967.1.large.png',
    description: '<p><i>Donated</i>The iPad is a 9.7 inch touch screen tablet PC made by Apple . The iPad is basically a netbook without a keyboard. It has a multi-touch LED-backlit 9.7 x 7.5 inch front display and weighs 1.5 pounds, with a battery that lasts up to ten hours.</p>'
}, {
    name: 'Amazon Echo',
    brand: 'Amazon',
    categories: [categories[3]],
    image: 'http://www.damngeeky.com/wp-content/uploads/2014/11/Amazon-Echo-bluetooth-speaker_2.jpg',
    description: '<p>Amazon Echo is designed around your voice. It\'s always on - just ask for information, music, news, weather, and more. Echo begins working as soon as it detects the wake word. You can pick Alexa or Amazon as your wake word. Echo is also an expertly tuned speaker that can fill any room with immersive sound.</p><p>Price: $200</p><p>Website: <a href="http://www.amazon.com/Amazon-SK705DI-Echo/dp/B00X4WHP5E">http://www.amazon.com/Amazon-SK705DI-Echo/dp/B00X4WHP5E</a></p>'
}, {
    name: 'Apple Watch',
    brand: 'Apple',
    categories: [categories[0]],
    image: 'http://appdesignvault.s3.amazonaws.com/watch-post/Apple-Watch.psd_-1024x875.png',
    description: '<p>Apple Watch is unlike any device we’ve ever made. But we wanted interacting with it to be just as easy and intuitive as using your iPhone or working on a Mac. So we invented all-new ways to select, navigate, and input that are ideally suited to a smaller device worn on the wrist.</p><p>Price: $350</p><p>Website: <a href="https://www.apple.com/watch/apple-watch-sport/silver-aluminum-case-white-sport-band/">https://www.apple.com/watch/apple-watch-sport/silver-aluminum-case-white-sport-band/</a></p><p>Specifications <ul><li>38 mm Case</li> <li>7000 Series Silver Aluminum </li><li>Ion-X Glass Retina Dsipaly</li> <li>Composite Back <li>White</li> <li>Sport Band </li><li>316 L Stainless Steel Pin</li> </li></p>'
}, {
    name: 'Canary',
    brand: 'Canary',
    categories: [categories[3]],
    image: 'https://camo.githubusercontent.com/ce3ac773d27e8904e86cdd5438fe7608683abc11/687474703a2f2f70686f746f73322e6170706c65696e736964657263646e2e636f6d2f63616e6172792d3133303732322d322e6a7067',
    description: ''
}, {
    name: 'HP® Sprout',
    brand: 'HP',
    categories: [categories[9]],
    image: 'https://camo.githubusercontent.com/16d32f0d4029e569a75dd329931b47e2bda58141/68747470733a2f2f7370726f75742e68702e636f6d2f75732f77702d636f6e74656e742f75706c6f6164732f73697465732f34332f323031352f30332f70726f647563745370726f75742e706e67',
    description: ''
}, {
    name: 'Narrative Clip',
    brand: 'Narrative',
    categories: [categories[6]],
    image: 'http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2014/02/The-Narrative-Clip.png',
    description: '<p>The Narrative Clip is a tiny, automatic camera and app that gives you a searchable and shareable photographic memory.</p><p>Price: $150</p><p>Website: <a href="http://getnarrative.com/">http://getnarrative.com/</a></p><p><a href="https://itunes.apple.com/app/narrative/id722804868?ls=1&mt=8">iOS app</a></p><p><a href="https://play.google.com/store/apps/details?id=com.narrative.main">Android app</a></p><p><a href="http://dl.getnarrative.com/appcast/installers/NarrativeUploader.dmg">Mac app</a></p>'
}, {
    name: 'Occulus DK2',
    brand: 'Occulus',
    categories: [categories[2]],
    image: 'https://camo.githubusercontent.com/ad0f29518fa29c56720e88b95938b0bfcc6d76c2/68747470733a2f2f646276633475616e756d6932642e636c6f756466726f6e742e6e65742f63646e2f342e352e31382f77702d636f6e74656e742f7468656d65732f6f63756c75732f696d672f6f726465722f646b322d70726f647563742e6a7067',
    description: ''
}, {
    name: 'Parrot Bebop Drone',
    brand: 'Parrot',
    categories: [categories[4]],
    image: 'https://camo.githubusercontent.com/14de148a3d6aa94058ae70544de308a712ddff3b/687474703a2f2f6d656469612e626573746f666d6963726f2e636f6d2f332f532f3437303538342f6f726967696e616c2f506172726f742d4265626f702d30312e6a7067',
    description: ''
}, {
    name: 'Polaroid Cube',
    brand: 'Polaroid',
    categories: [categories[6]],
    image: 'https://www.polaroidcube.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/polaroidcube-black_1_.png',
    description: ''
}, {
    name: 'Ring™ Video Doorbell',
    brand: 'Ring™',
    categories: [categories[3]],
    image: 'http://www.thegreenhead.com/imgs/ring-video-smart-doorbell-1.jpg',
    description: '<p><i>Donated by company</i></p><p>The Ring™ Video Doorbell lets you answer the door from anywhere using your smartphone. It features an HD camera with night vision, providing a clear view from your front door, day and night.</p><p>Website: <a href="https://ring.com/">https://ring.com/</a></p>'
}, {
    name: 'SmartThings Smart Home Starter Kit',
    brand: 'SmartThings',
    categories: [categories[3]],
    image: 'https://camo.githubusercontent.com/42644a7dae2e67058d462f58c53e6c12fdb778f1/687474703a2f2f737461746963332e627573696e657373696e73696465722e636f6d2f696d6167652f3532663761613238363962656464353832613335373034622d3438302f736d6172747468696e67732d737461727465722d6b69742e6a7067',
    description: ''
}, {
    name: 'Sphero Ollie',
    brand: 'Sphero',
    categories: [categories[1]],
    image: 'http://cdn.shopify.com/s/files/1/0170/5178/files/productpackagingrender_option1_infosheet_grande.png?6016',
    description: '<p>Ollie is the app-controlled robot engineered for speed, programmed for tricks, and customized by you. Launch over the competition at floor-warping speeds. Spin, drift, and flip with app-powered tricks. Then switch up your ride with custom tires and hubcaps.</p><p>Price: $100</p><p>Website: <a href="http://www.sphero.com/ollie">http://www.sphero.com/ollie</a></p><p>SDKs & APIs: <a href="http://sdk.sphero.com/">http://sdk.sphero.com/</a></p><p><a href="https://play.google.com/store/apps/details?id=com.orbotix.olliebysphero&hl=en">Android app</a></p><p><a href="https://itunes.apple.com/us/app/ollie-app/id908850579?mt=8">iOS app</a></p>'
}, {
    name: 'SYMA Quadcopter with Camera',
    brand: 'SYMA',
    categories: [categories[4]],
    image: 'http://ecx.images-amazon.com/images/I/61yasO5d0OL._SL1492_.jpg',
    description: '<p>Price: $50</p><p>Website: <a href="http://www.amazon.com/Syma-Explorers-6-Axis-Quadcopter-Camera/dp/B00MNG37C2">http://www.amazon.com/Syma-Explorers-6-Axis-Quadcopter-Camera/dp/B00MNG37C2</a></p><p>SYMA X5C W 4CH 2.4G Quadcopter with Camera<ul><li>Equipped with HD camera and 2GB Micro SD card</li><li>Perform flips at the press of a button with 360 degree eversion</li><li>Various control options for those piloting the X5C. Up, Down, Left, Right, Forward, Backward, Leftward flight, Rightward flight</li><li>Wind resistant and can be flown indoors or outdoors</li><li>6-axis Gyro stabilization system ensures maximum stability during flight</li><li>7 Minute flight time and 100 minute charge time.</li></ul></p>'
}, {
    name: 'Tile',
    brand: 'Tile',
    categories: [categories[5]],
    image: 'https://www.thetileapp.com//images/phone-with-tile.jpg',
    description: '<p>When you attach Tile to an item (like your keys), you\'re really tethering them both to your phone. So when your stuff gets lost, it has a buddy that knows what to do. Tile casts a Bluetooth signal up to 100 feet, making short work of any haystacks you lose your needles in. And since every phone with Tile helps find your stuff, your search range is potentially limitless. </p><p>Price: $180</p><p>Website: <a href="https://www.thetileapp.com/">https://www.thetileapp.com/</a></p><p><a href="https://play.google.com/store/apps/details?id=com.thetileapp.tile">Android app</a></p><p><a href="https://itunes.apple.com/app/id664939913">iOS app</a></p>'
}, {
    name: 'PULSE Jump Rope',
    brand: 'Uncharted Play',
    categories: [categories[8]],
    image: 'https://camo.githubusercontent.com/05e33fc05218c006e7d87c4579e25aefa1830816/68747470733a2f2f677265656e73706f727473626c6f672e66696c65732e776f726470726573732e636f6d2f323031342f30352f70756c73652d69692e706e67',
    description: ''
}, {
    name: 'Uncharted Play SOCCKET II',
    brand: 'Uncharted Play',
    categories: [categories[8]],
    image: 'https://camo.githubusercontent.com/29dfaf00878458172d88bdadc06a1ddb931a2229/687474703a2f2f63646e2e73686f706966792e636f6d2f732f66696c65732f312f303730342f303432312f70726f64756374732f556e63686172746564506c61795f534f43434b45545f3030382e6a70673f763d31343233323433373330',
    description: ''
}]

devices = devices.map(function(datum) {
    return new Device(datum)
});

var users = [{
    email: 'devicelibrary@cornell.edu',
    password: 'admin',
    name: 'Admin',
    isAdmin: true,
    checkedout: [{
        device: devices[0]._id,
        borrowedDate: new Date(2015, 10, 12),
        dueDate: new Date(2015, 10, 24)
    }, {
        device: devices[2]._id,
        borrowedDate: new Date(2015, 8, 24),
        dueDate: new Date(2015, 9, 2)
    }, {
        device: devices[4]._id,
        borrowedDate: new Date(2015, 12, 12),
        dueDate: new Date(2016, 1, 2)
    }],
    holds: [{
        device: devices[1]._id,
        queueDate: new Date(2015, 9, 9),
        availableDate: new Date(2015, 10, 9)
    }, {
        device: devices[3]._id,
        queueDate: new Date(2015, 10, 9),
        availableDate: new Date(2015, 11, 9)
    }, {
        device: devices[5]._id,
        queueDate: new Date(2015, 8, 9),
        availableDate: new Date(2016, 1, 9)
    }],
    returned: [{
        device: devices[6]._id,
        borrowedDate: new Date(2015, 10, 12),
        returnedDate: new Date(2015, 10, 26)
    }, {
        device: devices[7]._id,
        borrowedDate: new Date(2015, 11, 15),
        returnedDate: new Date(2015, 11, 16)
    }],
    favs: [devices[7]._id, devices[0]._id, devices[2]._id]
}]

users = users.map(function(datum) {
    return new User(datum);
});

categories[0].staffPick = devices[18]
categories[1].staffPick = devices[27]
categories[2].staffPick = devices[22]
categories[3].staffPick = devices[19]
categories[4].staffPick = devices[23]
categories[5].staffPick = devices[3]
categories[6].staffPick = devices[12]
categories[7].staffPick = devices[15]
categories[8].staffPick = devices[14]
categories[9].staffPick = devices[20]

var all = categories.concat(devices, users, donors);
var models = [Category, Device, User, Donor];

console.log('-removing-');
async.each(models,
    function(model, done) {
        model.remove({}, done);
    },
    function(err) {
        if (err) return console.error('error while removing documents', err);
        console.log('-done removing-');
        console.log('-saving-');
        async.each(all,
            function(doc, done) {
                doc.save(done);
            },
            function(err) {
                if (err) console.error('seed error', err);
                else console.log('-done saving-');
                console.log('---done seeding---');
                process.exit();
            }
        );
    }
);