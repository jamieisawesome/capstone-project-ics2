// creating player sprite
let myTommy = sprites.create(assets.image`tommy`, SpriteKind.Player)
controller.moveSprite(myTommy)
// tilemaps
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(myTommy)