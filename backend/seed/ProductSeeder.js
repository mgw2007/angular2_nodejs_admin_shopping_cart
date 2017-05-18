var mongoose = require('mongoose');
var configs = require('./../config/configs');
mongoose.connect(configs.database);

var Product = require('../models/product');

var products = [
    new Product({
        imagePath: '1',
        title: 'Melodies in Motion: Danube Musical Wall Clock',
        description: 'On the hour, the clock plays one of 18 hi-fi melodies with motion. Three sets of melodies are available for selection in the control panel:Popular Selection: Ain’t Nothing Like The Real Thing; How Sweet It Is (To Be Loved By You); Stop In The Name Of Love; You’re In My Heart',
        price: 10
    }),
    new Product({
        imagePath: '2',
        title: 'Minimals Wall Clock',
        description: 'Silver-tone metallic case; Quiet sweep second hand; One “AA” battery required Dimensions: 11 1/2” diameter x 2”',
        price: 15
    }),
    new Product({
        imagePath: '3',
        title: 'Easton Musical Wall Clock',
        description: 'Description:On the hour, the clock plays one of 18 Hi-Fi melodies.Three sets of melodies are available for selection on thecontrol panel.Popular selection: Ain’t Nothing Like The Real Thing, How Sweet It Is (To Be Loved By You), Stop In The Name Of Love, You’re In My Heart “The Final Acclaim”, Touch Me In The Morning, Weekend In New England',
        price: 20
    }),
    new Product({
        imagePath: '4',
        title: 'Dillon Musical Wall Clock',
        description: 'On the hour, the clock plays one of 18 Hi-Fi melodies.Three sets of melodies are available for selection on thecontrol panel. Popular selection: Ain’t Nothing Like The Real Thing, How Sweet It Is (To Be Loved By You), Stop In The Name Of Love, You’re In My Heart “The Final Acclaim”, Touch Me In The Morning, Weekend In New England',
        price: 25
    }),
    new Product({
        imagePath: '5',
        title: 'Dawson Musical Wall Clock',
        description: 'Description:On the hour, the clock plays one of 12 Hi-Fi melodies or chime. Two sets of melodies plus chime are available for selection on the control panel: Classic Selection: The Four Seasons “Spring”, Kanon, Eine Kleine Nachmusik, Symphony No. 6 “Pastoral”, Morning From Peer Gynt, La Traviata “Drinking Song”',
        price: 30
    }),
    new Product({
        imagePath: '6',
        title: 'Melodies in Motion: Danube Musical Wall Clock',
        description: 'Description On the hour, the clock plays one of 18 hi-fi melodies with motion. Three sets of melodies are available for selection in the control panel',
        price: 30
    })
];
Product.remove({}, function (err, result) {
    if (err) throw err;
    console.log('admis collection removed')
    var done = 0;
    for (var i = 0; i < products.length; i++) {
        products[i].save(function () {
            done++;
            if (done == products.length) {
                exit();
            }
        });
    }
});

function exit() {
    mongoose.disconnect();
}
