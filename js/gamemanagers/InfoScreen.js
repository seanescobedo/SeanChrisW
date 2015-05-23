game.InfoScreen = Object.extend({
    init:  function(x, y, settings){
      this.now = new Date().getTime();
        this.lastBuy = new Date().getTime();
        this.updateWhenPaused = true;
        this.paused = false;
        this.alwaysUpdate = true;
        this.buying = false;
    }, 
    
    update: function(){
        this.now = new Date().getTime();
        if(me.input.isKeyPressed("info")){
            console.log(this.now-this.lastBuy);
        }
        if(me.input.isKeyPressed("info") && this.now-this.lastBuy >= 1000){
            console.log(this.buying);
            this.lastBuy = this.now;
            if(!this.buying){
                this.startBuying();
            }else{
                this.stopBuying();
            }
            
        }
        
        
        return true;
    },
    
    startBuying: function(){
        this.buying = true;
        game.data.pausePos = me.game.viewport.localToWorld(0, 0);
        game.data.buyscreen = new me.Sprite(game.data.pausePos.x, game.data.pausePos.y, me.loader.getImage('info-screen'));
        game.data.buyscreen.updateWhenPaused = true;
        game.data.buyscreen.setOpacity(0.8);
        me.game.world.addChild(game.data.buyscreen, 34);
        game.data.player.body.setVelocity(0, 0);
        me.state.pause(me.state.PLAY);
        this.setBuyText();
        
    },
    
    setBuyText: function(){
        game.data.buytext = new (me.Renderable.extend({
                   init: function(){
                       this._super(me.Renderable, 'init', [game.data.pausePos.x, game.data.pausePos.y, 1, 1]);
                       this.font = new me.Font("Arial", 46, "white");
                       this.updateWhenPaused = true;
                       this.alwaysUpdate = true;
                   },
                   
                   draw: function(renderer){
                       this.font.draw(renderer.getContext(), "* Battle Royale C]:{ *" , this.pos.x, this.pos.y);
                       this.font.draw(renderer.getContext(), "Current Gold: "+ game.data.gold, this.pos.x + 700, this.pos.y);
                       this.font.draw(renderer.getContext(), "Damage ~ " + "Cost: "+ ((game.data.skill1)* 10) , this.pos.x + 320, this.pos.y + 80);
                       this.font.draw(renderer.getContext(), "Speed ~ "+ "Cost: "+ ((game.data.skill2)* 10), this.pos.x + 320, this.pos.y + 160);
                       this.font.draw(renderer.getContext(), "Health ~ "+ "Cost: "+ ((game.data.skill3)* 10), this.pos.x + 320, this.pos.y + 240);
                       this.font.draw(renderer.getContext(), "U ~ Speed Burst ~ "+ "Cost: "+ ((game.data.ability1)*10), this.pos.x + 320, this.pos.y + 320);
                       this.font.draw(renderer.getContext(), "I ~ Eat Creep ~ " + "Cost: "+ ((game.data.ability2)* 10), this.pos.x + 320, this.pos.y+ 400);
                       this.font.draw(renderer.getContext(), "O ~ Throw Spear ~ "+ "Cost: "+ ((game.data.ability3)* 10), this.pos.x + 320, this.pos.y + 480);
                       
                      
                       
                   }
                   
                
               }));
               
               me.game.world.addChild(game.data.buytext, 35);
    },
    
    stopBuying: function(){
        this.buying = false;
        me.state.resume(me.state.PLAY);
        game.data.player.body.setVelocity(game.data.playerMoveSpeed, 20);
        me.game.world.removeChild(game.data.buyscreen);
        
        me.game.world.removeChild(game.data.buytext);
    }
    });


