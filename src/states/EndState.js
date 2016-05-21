/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts" />

class EndState extends Phaser.State {
    setScore(playerToScoreMap) {
        this.score = playerToScoreMap;
    }
    
    create() {
        console.log("EndState:");
        this.game.add.tileSprite(0, 0, 960, 640, 'background-menu');
        let center = { x: this.game.world.centerX, y: this.game.world.centerY };
        
        let maxPts = Math.max.apply(null, Array.from(this.score.values()));
        console.log(maxPts);

         // test data
         //let winners = new Map();
         //winners.set([[{info: {color: "#ffff00", id: 1}}, 100]];
         
        let winners = Array.prototype.filter.call(Array.from(this.score.entries()), ([player, score]) => score == maxPts);
        
        
        
        let winnerIdx = 1;
        this.game.add.text( center.x - 150, center.y - 150, 'Winners:', { font: "48px Arial"});
        for (let [player, score] of winners) {
            this.game.add.text( center.x - 120, center.y - 150 + winnerIdx * 60, 'Player ' + (player.info.id  + 1)+ ' score: ' + score, { font: "48px Arial", fill: player.info.colorStr });
            winnerIdx++;
        }
    }
}

export default EndState;
