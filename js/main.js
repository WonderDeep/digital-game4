var game = new Phaser.Game(400, 400, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles-1', 'assets/tiles-1.png');
    game.load.image('cat', 'assets/cat.png');
}

var map;
var tileset;
var layer;
var player;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    map = game.add.tilemap('level1');
    map.addTilesetImage('tiles-1');
    map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
    layer = map.createLayer('Tile Layer 1');
    //Un-comment this on to see the collision tiles
    //layer.debug = true;

    layer.resizeWorld();   
    
 /*   //the cat
    player = game.add.sprite(40, 935, 'cat');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.bounce.x = 0.2;
    player.body.collideWorldBounds = true;
    player.body.setSize(20, 32, 5, 16);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();*/
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function update() {

  /*  game.physics.arcade.collide(player, layer);

    player.body.velocity.x = 0;

    //the player moving left
    if (this.wasd.left.isDown)
    {
        player.body.velocity.x = -150;
    }
    
    //the player moving right
    else if (this.wasd.right.isDown)
    {
        player.body.velocity.x = 150;
    }
     //the player moving up
    if (this.wasd.up.isDown)
    {
        player.body.velocity.y = -150;
    }
    
    //the player moving down
    else if (this.wasd.down.isDown)
    {
        player.body.velocity.x = 150;
    } */
}

function render () {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    // game.debug.body(player);
     //game.debug.bodyInfo(player, 16, 24);

}


