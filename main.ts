// varibles
let GRAVITY = 100
let JUMPSPEED = -100
let numberofjumps = 2
// creating player sprite
let myCat = sprites.create(assets.image`tommy`, SpriteKind.Player)
controller.moveSprite(myCat, 100, 0)
myCat.ay = GRAVITY
// tilemaps
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(myCat)
tiles.placeOnTile(myCat, tiles.getTileLocation(2, 46))
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myCat.vy = JUMPSPEED
})