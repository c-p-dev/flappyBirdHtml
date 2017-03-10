var game = new Phaser.Game(640,360, Phaser.Auto);

var space;
Pipes = new Object();

// var Pipes = {
//     pipeUp:{
//         position:{
//             x:0,
//             y:0
//         },
//         heigth:0,
//         width:0,
//         scale:0,
//         scaleY:-1,
//         anchor:0.5
//     },
//     pipeDown:{
//         position:{
//             x:0,
//             y:0
//         },
//         heigth:0,
//         width:0,
//         scale:0,
//         scaleY:0,
//         anchor:0.5
//     }
//
// };

function Pipes(name, gradingareas, finalgrade) {
    this.name = name;
    this.gradingareas = gradingareas;
    this.finalgrade = finalgrade;
}
// console.log(pipes);


var GameState = {
    preload: function(){
        this.load.image('background','assets/images/background.png');
        this.load.image('robot','assets/images/robot.png');
        this.load.image('bird','assets/images/moving_bird.gif');
        this.load.image('pipe','assets/images/pipe.png');

    },

    create: function(){
        this.background = this.game.add.tileSprite(0,0 , 160,160,'background');
        this.background.scale.setTo(2.3);
        this.background.width = 640;
        this.background.height = 360;

        generatePipes(this.game);
        // this.pipe = this.game.add.sprite(this.game.world.centerX,230,'pipe');
        // this.pipe.anchor.setTo(0.5);
        // this.pipe.scale.setTo(0.7);
        //
        //
        // this.pipe2 = this.game.add.sprite(this.game.world.centerX,20,'pipe');
        //
        // this.pipe2.scale.setTo(0.7);
        // this.pipe2.scale.y =-1 ;
        // this.pipe2.anchor.setTo(0.5);


        // console.log(this.game.world);
        var centerX  = this.game.world.centerX;
        var centerY = this.game.world.centerY;
        this.bird = this.game.add.sprite(centerX - 80, centerY - 20, 'bird');
        this.bird.anchor.setTo(0.5);
        this.bird.scale.setTo(0.3);
        console.log(this.bird);

        this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);





    },
    update: function(){


        // move(this.bird);
        // this.background.tilePosition.x -= 1;
        if(this.space.isDown){
            jump(this.bird);
        }else{
            falling(this.bird);
        }
        background_move(this.background);
        // pipe_move(this.pipe);
        // pipe_move(this.pipe2);
    }



};
function falling(obj){
    // this.x.y += 2.9;
    // this.x.rotation.setTo(18);
    // console.log(x.rotation.setTo(18);
    obj.angle = 30;
    obj.position.y +=2.2;

};

function move(obj){
    obj.position.x += 1;
}

function jump(obj){
    obj.position.y -= 8.0;
    obj.angle = -30;
}

function background_move(obj){

    obj.tilePosition.x -= 1.4;
    // console.log(obj.tilePosition.x);
}

function pipe_move(obj){
    obj.position.x -= 2.5;
    // console.log(obj.position.y);
    // console.log(obj.position.x);
}

function generatePipes(world){
    var interval = 10;

    var a =
    console.log(world.world.centerX);
    console.log(world.world.centerY);
}

game.state.add('GameState', GameState);
game.state.start('GameState');
