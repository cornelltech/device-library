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
    date: new Date(2015, 9, 12)
}, {
    name: "Miwa Takaki (MBA'15)",
    donations: "$500",
    date: new Date(2015, 1, 12)
}, {
    name: "Yang Hu (CS'16)",
    donations: "iPhone 4",
    date: new Date(2015, 9, 21)
}, {
    name: "Omri Sass (CM'17)",
    donations: "2 x Google Cardboards",
    date: new Date(2015, 9, 21)
}, {
    name: "Steve Wall (MBA'15)",
    donations: "$500",
    date: new Date(2015, 1, 12)
}]

donors = donors.map(function(datum) {
    return new Donor(datum)
});

var categories = [{
    name: 'Wearables'
}, {
    name: 'Robots'
}, {
    name: 'Virtual Reality'
}, {
    name: 'Connected Home'
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
    description: '<p><i>Thanks Yang Hu (CS\'16) for donating it!</i></p><p>Specifications:<ul><li>GSM</li><li>8GB storage</li><li>White</li><li>3.5 inches</li><li>640 x 960 pixels (~330 ppi pixel density)</li><li>5MP camera</li><li>720p video</li><li>512MB RAM</li><li>Apple A4</li><li>Sensors: accelerometer, gyro, proximity, compass</li></ul></p>'
}, {
    name: 'Samsung Gear Live',
    brand: 'Samsung',
    categories: [categories[0]],
    image: 'http://cdn1.knowyourmobile.com/sites/knowyourmobilecom/files/styles/gallery_wide/public/0/19/gear-live_black-2-1280x852.jpg?itok=ESJ4WchNg',
    description: '<p>Gear Live is compatible with any smartphone with Android™ 4.3, Jelly Bean or higher, so your app notifications and personal information come with you, like flight status and messages. And when you say “OK Google,” you can ask a question about anything, from turn-by-turn navigation steps to team stats—even find out your heart rate.</p><p>Specifications:<ul><li>Black Strap</li><li>1.63” Super AMOLED</li><li>Metal Body</li><li>IP 67 Certified Dust and Water Resistant</li><li>Compass, Accelerometer, Gyroscope, Heart Rate Sensor</li><li>Powered by Android Wear Support</li><li>Typical 1 day, Low 2 days</li><li>Bluetooth 4.0 LE</li></ul></p>'
}, {
    name: 'Samsung Galaxy S5',
    brand: 'Samsung',
    categories: [categories[5]],
    image: 'http://melita.com/wp-content/uploads/2014/09/Samsung_Galaxy_S5_Front.jpg',
    description: '<p>The Samsung Galaxy S5 can be defined by one word: evolution.<p><p>The camera has evolved to give clearer, faster snaps. The fitness-tracking abilities of the S5 are enhanced over the Galaxy S4 by packing in a more powerful S Health app and a dedicated heart rate monitor on the rear. A fingerprint scanner adds to the most secure Galaxy phone ever made.</p><p>The battery is larger, the screen bigger and brighter, the processor quicker and the design altered.</p><p>The spec sheet certainly doesn\'t let it down: a 2.5GHz quad-core CPU, 2GB of RAM, a 2800mAh (removable) battery, 16 / 32GB of memory (with up to 128GB extra through microSD), one of the world\'s most vibrant screens that\'s been extended to 5.1-inches and added biometrics.</p>',
    favorite: 3
}, {
    name: 'Google Nexus 9 Tablet',
    brand: 'Google',
    categories: [categories[7]],
    image: 'http://elementalx.org/wp-content/uploads/2014/11/nexus9.png',
    description: '<p>Website: <a href="https://www.google.com/nexus/9/">https://www.google.com/nexus/9/</a></p>Specifications:<ul><li>Indigo Black</li><li>16 GB Flash Memory, 2 GB RAM Memory</li><li>Wi-Fi</li><li>Android™ 5.0 Lollipop</li><li>8.9 " IPS LCD QXGA (2048x1536)</li><li>1.6 MP Front Camera; 8 MP Rear Camera</li></ul>'
}, {
    name: 'Google Nexus Player',
    brand: 'Google',
    categories: [categories[3]],
    image: 'http://image.itdonga.com/files/2014/10/16/004_Ukwvilr.JPG',
    description: '<p>Entertainment tailored for you</p><p>Apps, games and more, now for your TV</p><p>Website: <a href="https://www.google.com/nexus/player/">https://www.google.com/nexus/player/</a></p><p>Specifications:<ul><li>1.8GHz Quad Core, Intel® Atom™</li><li>802.11ac 2x2 (MIMO)</li><li>HDMI out</li></ul></p><p>In-box:<ul><li>Nexus Player</li><li>Remote with voice search</li><li>Power adapter</li><li>2 AAA batteries</li><li>Quick-start guide</li><li>Warranty, Safety and Regulatory booklet</li></ul></p><p>Requirements<ul><li>TV with HDMI input & HDMI cable</li><li>Internet connectivity (Wi-Fi only)</li></ul></p>'
}, {
    name: 'HTC One',
    brand: 'HTC',
    categories: [categories[5]],
    image: 'http://cdn.thedroidguy.com/wp-content/uploads/2015/01/htconem7blue.jpeg',
    description: '<p>With a sleek aluminum body, a live home screen that streams all of your favorite content, a photo gallery that comes to life, and dual frontal stereo speakers, the new HTC One is ready to reshape your smartphone experience.</p><p>Website: http://www.htc.com/us/smartphones/htc-one-m7/</p><p>Specifications:<ul><li>4.7 inch, Full HD 1080p, 468 PPI</li><li>Qualcomm® Snapdragon™ 600, quad-core, 1.7GHz</li><li>Silver</li><li>32GB</li><li>RAM 2GB DDR2</li><li>GSM/LTE (UL)</li></ul></p>'
}, {
    name: 'LG G3',
    brand: 'LG',
    categories: [categories[5]],
    image: 'http://masijee.com/wp-content/uploads/2015/05/Recovery-Mode-on-LG-G3.jpg',
    description: '<p>Website: <a href="http://www.lg.com/us/mobile-phones/g3">http://www.lg.com/us/mobile-phones/g3</a></p><p>Specifications:<ul><li>Metallic Black</li><li>Qualcomm® Snapdragon™ 801 Quad-Core Processor up to 2.5 GHz</li><li>Android 4.4.2 KitKat</li><li>5.5" Quad HD (2560 X 1440) IPS</li><li>13MP Optical Image Stabilization+ with Laser Auto Focus</li><li>Dual Flash</li><li>Front-Facing Camera 2.1 MP</li><li>1W Speaker with Boost Amp</li><li>3GB RAM / 16GB Memory</li></ul></p>'
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
    image: 'https://9to5toys.files.wordpress.com/2014/11/belkin-wemo-possibilites.jpg',
    description: '<p>WeMo Maker lets you control low-voltage electronics devices with a smartphone or tablet. Perfect for inventors and tinkerers, it\'s easy to use and works over your own home\'s Wi-Fi network. Turn things on and off, put them on schedules, or connect them to sensors that let you do even more. Like program your sprinklers to stay off when rain is forecast, or set watering schedules when you go out of town.</p><p>Website: <a href="http://www.belkin.com/us/F7C043/p/P-F7C043/">http://www.belkin.com/us/F7C043/p/P-F7C043/</a></p>'
}, {
    name: 'WeMo® LED Lighting Starter Set',
    brand: 'Belkin',
    categories: [categories[3]],
    image: 'http://www.belkin.com/images/productmt/820000/372.jpg',
    description: '<p>The WeMo LED Lighting Starter Set lets you access and control your WeMo Smart LED Bulbs from anywhere, using your existing home Wi-Fi network and mobile internet. Dim lights, turn them on or off, or create a custom schedule that works for your family. You can also set your lights to turn on automatically at sunset, dim them to watch a movie, or turn them off after you leave home, all from your smart device.</p><p>Website: <a href="http://www.belkin.com/us/p/P-F5Z0489/">http://www.belkin.com/us/p/P-F5Z0489/</a></p><p>Package Includes:<ul><li>Two WeMo Smart LED Bulbs</li><li>WeMo Link</li><li>Quick Install Guide</li></ul></p>'
}, {
    name: 'Mattel Mindflex Game',
    brand: 'Mattel',
    categories: [categories[6]],
    image: 'http://www.mindtecstore.com/images/stories/virtuemart/product/mindflex_7.jpg',
    description: '<p>The power of the mind will make a small foam ball levitate on a slight stream of air. This MindFlex brain game uses technology coupled with focused concentration to produce the outcome. The mind game includes a light-weight headset that contains sensors. These sensors read the brain waves, and help players move the ball through the various obstacle courses. Players can remain challenged by reconfiguring the obstacle courses into almost limitless possibilities. This mental acuity game challenges players to use focus, determination, and stamina to move the ball through the obstacles.</p><ul><li>For ages 8 and up</li><li>Requires 4 C and 2 AAA batteries</li></ul><p>How to Hack Toy EEGs (<a href="http://www.frontiernerds.com/brain-hack">http://www.frontiernerds.com/brain-hack</a>)</p>'
}, {
    name: '94Fifty Smart Basketball',
    brand: '94Fifty',
    categories: [categories[8]],
    image: 'http://www.sportsfeelgoodstories.com/wp-content/uploads/2014/01/Screen-shot-2014-01-12-at-5.30.20-PM.png',
    description: '<p>The word’s first smart basketball measures any forces applied to it – spin, acceleration, you name it. A full 360 degree view of the ball – and the player that moves it. The ball is going to give you data and feedback to your device that is smart, actionable and precise.</p><p>Price: $180</p><p>Size: 7</p><p>Website: <a href="http://www.94fifty.com/learn-more/smart-basketball/">http://www.94fifty.com/learn-more/smart-basketball/</a></p><p><a href="https://itunes.apple.com/us/app/94fifty-basketball/id724955707?mt=8&ign-mpt=uo%3D4">iOS app</a></p><p><a href="https://play.google.com/store/apps/details?id=com.spectrumdt.ist">Android app</a></p><p><a href="https://glass.google.com/glassware/12291182233126993074">Glass</a></p>'
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
    description: '<p><i>Donated</i><p><p>The iPad is a 9.7 inch touch screen tablet PC made by Apple. The iPad is basically a netbook without a keyboard. It has a multi-touch LED-backlit 9.7 x 7.5 inch front display and weighs 1.5 pounds, with a battery that lasts up to ten hours.</p>'
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
    description: '<p>Apple Watch is unlike any device we’ve ever made. But we wanted interacting with it to be just as easy and intuitive as using your iPhone or working on a Mac. So we invented all-new ways to select, navigate, and input that are ideally suited to a smaller device worn on the wrist.</p><p>Price: $350</p><p>Website: <a href="https://www.apple.com/watch/apple-watch-sport/silver-aluminum-case-white-sport-band/">https://www.apple.com/watch/apple-watch-sport/silver-aluminum-case-white-sport-band/</a></p><p>Specifications: <ul><li>38 mm Case</li> <li>7000 Series Silver Aluminum </li><li>Ion-X Glass Retina Dsipaly</li> <li>Composite Back <li>White</li> <li>Sport Band </li><li>316 L Stainless Steel Pin</li> </li></p>'
}, {
    name: 'Canary',
    brand: 'Canary',
    categories: [categories[3]],
    image: 'http://photos2.appleinsidercdn.com/canary-130722-2.jpg',
    description: '<p><i>Donated by Canary</i></p><p>Canary is the only all-in-one home security system that lets you see what’s happening at home and take action. From HD video to motion-activated alerts to a 90+ decibel siren, Canary gives you everything you need to keep your home safe.</p><p>Price: $250</p><p>Website: <a href="https://canary.is/">https://canary.is/</a></p><p>Camera<ul><li>1080p HD camera</li><li>147° Wide-angle lens</li><li>Automatic night vision</li><li>Motion detection</li></ul></p><p>Sensors<ul><li>3-axis accelerometer</li><li>Ambient light</li><li>Capacitive touch</li></ul></p><p>HomeHealth Technology™<ul><li>Temperature</li><li>Humidity</li><li>Air quality</li></ul><p>Audio & Siren<ul><li>High-quality microphone</li><li>Built-in speaker</li><li>90+ dB siren</li></ul></p>Connectivity<ul><li>2.4GHz Wi-Fi (802.11 b/g/n)</li><li>Wired Ethernet</li></ul></p><p>Size & Weight<ul><li>Height: 6 in (152.4 mm)</li><li>Diameter: 3 in (76.2 mm)</li><li>Weight: 0.87 lb (396 g)</li></ul></p><p>Power<ul><li>100-240v power supply</li></ul></p>'
}, {
    name: 'HP® Sprout',
    brand: 'HP',
    categories: [categories[9]],
    image: 'http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/13/14/HP-sprout.jpg',
    description: '<i>Donated by HP</i><p>Sprout is a revolutionary all-in-one computer that makes it easier than ever to get creative. By blurring the line between physical and digital, sprout lets you bring your creativity to life, instantly.</p><p>Website: <a href="http://www8.hp.com/us/en/sprout/home.html">http://www8.hp.com/us/en/sprout/home.html</a></p><p>Apps: <a href="http://www8.hp.com/us/en/sprout/apps.html">http://www8.hp.com/us/en/sprout/apps.html</a></p><p>Developers: <a href="https://sprout-developers.rssx.hp.com/">https://sprout-developers.rssx.hp.com/</a></p>'
}, {
    name: 'Narrative Clip',
    brand: 'Narrative',
    categories: [categories[6]],
    image: 'http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2014/02/The-Narrative-Clip.png',
    description: '<p>The Narrative Clip is a tiny, automatic camera and app that gives you a searchable and shareable photographic memory.</p><p>Price: $150</p><p>Website: <a href="http://getnarrative.com/">http://getnarrative.com/</a></p><p><a href="https://itunes.apple.com/app/narrative/id722804868?ls=1&mt=8">iOS app</a></p><p><a href="https://play.google.com/store/apps/details?id=com.narrative.main">Android app</a></p><p><a href="http://dl.getnarrative.com/appcast/installers/NarrativeUploader.dmg">Mac app</a></p>'
}, {
    name: 'Oculus Rift DK2',
    brand: 'Oculus',
    categories: [categories[2]],
    image: 'https://dbvc4uanumi2d.cloudfront.net/cdn/4.5.18/wp-content/themes/oculus/img/order/dk2-product.jpg',
    description: '<p>Next-generation virtual reality</p><p>Rift is unlike anything you’ve ever experienced. Whether you’re stepping into your favorite game, watching an immersive VR movie, jumping to a destination on the other side of the world, or just spending time with friends in VR, you’ll feel like you’re really there.</p><p>Rift uses state of the art displays and optics designed specifically for VR. Its high refresh rate and low-persistence display work together with its custom optics system to provide incredible visual fidelity and an immersive, wide field of view.</p><p>Website: <a href="https://www.oculus.com/en-us/dk2/">https://www.oculus.com/en-us/dk2/</a></p><p>Price: $350</p>'
}, {
    name: 'Parrot Bebop Drone',
    brand: 'Parrot',
    categories: [categories[4]],
    image: 'http://media.bestofmicro.com/3/S/470584/original/Parrot-Bebop-01.jpg',
    description: '<p><i>Donated by Parrot</i></p><p>Parrot Bebop Drone is a lightweight yet robust quadricopter with 14 megapixel Full HD 1080p "fisheye" Camera and 3-axes image stabilization</p><p>Website: https://www.parrot.com/usa/products/bebop-drone/</p><p>Price: $500</p><p>Specifications:<ul><li>App-Controlled</li><li>Wi-Fi Built-in</li><li>Integrated GPS</li><li>Integrated Camera</li><li>Video Resolution 1920 x 1080</li><li>No 3D Capture</li><li>14 megapixels</li><li>30 frames per second</li><li>Image File Format(s) DNG, RAW</li><li>Recommended Minimum Age: 14 years</li><li>Color Yellow</li></ul></p>'
}, {
    name: 'Polaroid Cube',
    brand: 'Polaroid',
    categories: [categories[6]],
    image: 'https://www.polaroidcube.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/polaroidcube-black_1_.png',
    description: '<p>World\'s Funnest, Cutest Lifestyle Action Camera in Tiny Cubic Package.</p><p>The Polaroid CUBE HD lifestyle action video camera is weatherproof/splash proof, mountable and built to handle everything you can imagine.</p><p>Price: $100</p><p>Website: <a href="https://www.polaroidcube.com/">https://www.polaroidcube.com/</a></p><p>Specifications:<ul><li>Records HD 1080p/720p video</li><li>Professional 6MP Still Photos</li><li>124º viewing angle</li><li>Weatherproof/splash proof</li><li>LED Indicator</li><li>Microphone</li><li>Built in high capacity battery, records up to 90 minutes</li><li>Black</li></ul></p>'
}, {
    name: 'Ring™ Video Doorbell',
    brand: 'Ring™',
    categories: [categories[3]],
    image: 'http://www.thegreenhead.com/imgs/ring-video-smart-doorbell-1.jpg',
    description: '<p><i>Donated by Ring</i></p><p>The Ring™ Video Doorbell lets you answer the door from anywhere using your smartphone. It features an HD camera with night vision, providing a clear view from your front door, day and night.</p><p>Price: $180</p><p>Website: <a href="https://ring.com/">https://ring.com/</a></p>'
}, {
    name: 'SmartThings Smart Home Starter Kit',
    brand: 'SmartThings',
    categories: [categories[3]],
    image: 'http://static3.businessinsider.com/image/52f7aa2869bedd582a35704b-480/smartthings-starter-kit.jpg',
    description: '<p><i>Donated by SmartThings</i></p><p>*See An Nguyen</p><p>The Smart Home Starter Kit lets you easily see what’s happening at home from wherever you are. Secure your home to protect family and property; stay connected to loved ones by getting notifications when people, pets, and cars come and go; and create a safer, smarter home in the palm of your hand.</p><p>Price: $200</p><p>Website: <a href="https://shop.smartthings.com/#!/kits/smart-home-starter-kit">https://shop.smartthings.com/#!/kits/smart-home-starter-kit</a></p><a href="https://itunes.apple.com/us/app/smartthings-mobile/id590800740">iOS app</a><a href="https://play.google.com/store/apps/details?id=com.smartthings.android#?t=W251bGwsMSwxLDIxMiwiY29tLnNtYXJ0dGhpbmdzLmFuZHJvaWQiXQ..">Android app</a><p>In-box:<ul><li>SmartThings Hub</li><li>SmartPower Outlet</li><li>SmartSense Motion Sensor</li><li>SmartSense Presence Sensor</li><li>SmartSense Open/Closed Sensor</li>SmartSense Moisture Sensor</li><li>SmartSense Multi Sensor</li><li>SmartSense Temp/Humidity Sensor</li><li></ul></p>'
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
    image: 'https://greensportsblog.files.wordpress.com/2014/05/pulse-ii.png',
    description: '<p>The PULSE is a portable, emergency battery charging jump rope designed to promote physical activity and spread awareness about the global energy problem.</p><p>The PULSE is a jump rope, just like any other. However, what makes the PULSE so unique is that it also acts as a portable battery charger—plug it in to your wall or laptop, charge it up and take it with you. You can also charge up your PULSE simply by using it as a jump rope. So when you need a little more power and you aren’t near an outlet, you have the option to play!</p><p>Price: $100</p>'
}, {
    name: 'Uncharted Play SOCCKET II',
    brand: 'Uncharted Play',
    categories: [categories[8]],
    image: 'http://cdn.shopify.com/s/files/1/0704/0421/products/UnchartedPlay_SOCCKET_008.jpg?v=1423243730',
    description: '<p>The SOCCKET is a portable, power generating soccer ball designed to promote physical activity and spread awareness about the global energy problem.</p><p>The SOCCKET gets charged up during normal game play. The more the ball rolls, the more power that\'s generated. The SOCCKET is designed to power our energy efficient, 3-LED lamp. To access the power, pull back the rubber stopper, and plug the lamp down into the center of the ball.</p><p>Price: $100</p>'
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
}, {
    email: 'rz258@cornell.edu',
    password: '123',
    name: 'Joanna Zhang',
    checkedout: [{
        device: devices[1]._id,
        borrowedDate: new Date(2015, 10, 12),
        dueDate: new Date(2015, 10, 24)
    }, {
        device: devices[3]._id,
        borrowedDate: new Date(2015, 8, 24),
        dueDate: new Date(2015, 9, 2)
    }],
    holds: [{
        device: devices[8]._id,
        queueDate: new Date(2015, 9, 9),
        availableDate: new Date(2015, 10, 9)
    }, {
        device: devices[9]._id,
        queueDate: new Date(2015, 10, 9),
        availableDate: new Date(2015, 11, 9)
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
    favs: [devices[1]._id, devices[2]._id, devices[3]._id]
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