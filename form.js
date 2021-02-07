class Form {

    constructor() {
      this.doctorbutton = createButton('Doctor');
      this.patientbutton = createButton('Patient')
      this.image = loadImage("patient.jpg");
      this.image2 = loadImage("doctor.jpg");
      this.image3 = loadImage("in-patient.webp");
      
    }

    display(){
     // background("pink");
    textSize(50);
    text("In-Patient Care", displayWidth/2-150, 150);

    
    image(this.image, 500,300, 150,150);
    image(this.image2, 900,300, 150, 150);
    image(this.image3, 700,0, 300, 150);
   
    
    
    this.doctorbutton.position(displayWidth/2 + 200, displayHeight/2+150);
    this.patientbutton.position(displayWidth/2-200, displayHeight/2+150);

    push();
    this.patientbutton.mousePressed(()=>{
      this.doctorbutton.hide();
      this.patientbutton.hide();
      
      //tint(255,0);
      image(this.image, 500,300, 150,150);
      image(this.image2, 900,300, 150, 150);
      image(this.image3, 700,0, 300, 150);
      
      var reg = new Regform();
      reg.display();
      
      
    })
    pop();

    
    this.doctorbutton.mousePressed(()=>{
      this.doctorbutton.hide();
      this.patientbutton.hide();

      var docmenu = new Docmenu();
      docmenu.display();
    })
  
   
   
   

  }
  

}
