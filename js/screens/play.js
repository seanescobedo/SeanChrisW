game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;
                me.levelDirector.loadLevel("level02");
                
                    console.log(game.data.exp);
                    console.log(game.data.exp2);
                
                 this.resetPlayer(0, 420);
                 
                 
                 var gameTimerManager = me.pool.pull("GameTimerManager", 0, 0, {});
                 me.game.world.addChild(gameTimerManager, 0);
                 
                 var heroDeathManager = me.pool.pull("heroDeathManager", 0, 0, {});
                 me.game.world.addChild(heroDeathManager, 0);
                 
                 var experienceManager = me.pool.pull("experienceManager", 0, 0, {});
                 me.game.world.addChild(experienceManager, 0);
                 
                 var spendGold = me.pool.pull("SpendGold", 0, 0, {});
                 me.game.world.addChild(spendGold, 0);
                 
                 var infoScreen = me.pool.pull("InfoScreen", 0, 0, {});
                 me.game.world.addChild(infoScreen, 0);
                 
                 me.input.bindKey(me.input.KEY.I, "info");
                 me.input.bindKey(me.input.KEY.B, "buy");
                 me.input.bindKey(me.input.KEY.CAPSLOCK, "skill1");
                 me.input.bindKey(me.input.KEY.TAB, "skill2");
                 me.input.bindKey(me.input.KEY.SHIFT, "skill3");
                 
                 me.input.bindKey(me.input.KEY.RIGHT, "right");
                 //makes character go to the right\\
                 me.input.bindKey(me.input.KEY.LEFT, 'left');
                //makes the character go to the left ^\\
                me.input.bindKey(me.input.KEY.UP, 'jump');
                //makes the character jump up ^\\
                me.input.bindKey(me.input.KEY.Z, 'attack');
                
                me.input.bindKey(me.input.KEY.D, "right");
                 //makes character go to the right\\
                 me.input.bindKey(me.input.KEY.A, 'left');
                //makes the character go to the left ^\\
                me.input.bindKey(me.input.KEY.W, 'jump');
                //makes the character jump up ^\\
                me.input.bindKey(me.input.KEY.L, 'attack');
                 
		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	},
        
        resetPlayer: function(x,y){
            game.data.player = me.pool.pull("player", x, y, {});
                 me.game.world.addChild(game.data.player, 6);
        }
});
