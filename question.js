class Question{
    constructor(){
        this.input=createInput("enter your name")
        this.button = createButton("Start")
        this.greeting=createElement("h3")
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title=createElement("h2")
        title.html("myquiz")
        title.position(130,0)
      
        this.input.position(130,160)
       
       this. button.position(250,200)
       

     this.button.mousePressed(()=>{
           this.input.hide() 
           this.button.hide()
         contestant.name = this.input.value()
           contestant+=1;
           contestant.index=contestantCount
           contestant.updateCount(contestantCount)
          this. greeting.html("hello " +contestant.name)
           this.greeting.position(130,160)
           contestant.update()
           
        })
    }
}