class Regform{
    constructor(){
        this.input = createInput('Registration Number');
       // this.title = createElement('h1');
        this.button = createButton("Submit");
        this.home = createButton("Home");
    }

    display(){
        //this.title.html("In-PatientCare");
        //this.title.position(displayWidth/2 - 50, 100);
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2+5, displayHeight/2-50);
        this.home.position(displayWidth/2, 50);        

        image(this.image4,10,0,100,100);

        this.button.mousePressed(()=>{

            if(this.input.value!==null){
            this.input.hide();
            this.button.hide();
            //tint(255,0);
            var menu = new Menu();
            menu.display();
        }
          })

          this.home.mousePressed(()=>{
              this.input.hide();
              this.button.hide();
              
              var form1 = new Form();
              //tint(255,255);
              form1.display();
              
              this.home.hide();
          })
    }
}