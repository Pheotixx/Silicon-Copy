class Docmenu{
    constructor(){
        //this.title = createElement('h1');
        this.title2 = createElement('h3');
        this.title3 = createElement('h3');
        this.title4 = createElement('h3');
        this.title5 = createElement('h3');

        this.button = createButton('Patient1');
        this.button2 = createButton('Patient2');
        this.button3 = createButton('Patient3');
        this.button4 = createButton('Patient4');
        this.home = createButton("Home");
    }

    display(){
       // this.title.html("In-PatientCare");
       // this.title.position(displayWidth/2 - 50, 100);

        this.button.position(displayWidth/2, displayHeight/2-60);
        this.button2.position(displayWidth/2, displayHeight/2-30);
        this.button3.position(displayWidth/2, displayHeight/2+30);
        this.button4.position(displayWidth/2, displayHeight/2+60);
        this.home.position(displayWidth/2, 50);


        this.button.mousePressed(()=>{
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();

            var docpatientmenu = new Docpatientmenu();
            docpatientmenu.display();
            
        })

        this.home.mousePressed(()=>{
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();

            var form1 = new Form();
            form1.display();
            this.home.hide();
        })
    }

}