class Docpatientmenu{
    constructor(){
        this.reports = createButton("Reports");
        this.patient = createButton("Patient Connect");
        this.emergency = createButton("Patient Emergency");
        this.home = createButton("Home");
        this.back = createButton("Back");

        this.title = createElement('h3')
        this.title2 = createElement('h3');
        this.title3 = createElement('h3');
    }

    display(){
        this.patient.position(windowWidth/2-250, windowHeight/2);
        this.reports.position(windowWidth/2, windowHeight/2);
        this.emergency.position(windowWidth/2+250, windowHeight/2);

        this.home.position(displayWidth/2, 50);

        this.patient.mousePressed(()=>{
            this.patient.hide();
            this.reports.hide();
            this.emergency.hide();

            this.title.html("Here doctor can provide his comments, notings and prescriptions which can be seen by patient and patient's relatives and reply to relatives' queries");
            this.title.position(windowWidth/2-350, windowHeight/2);

            this.back.position(displayWidth/4-100, 0);

            this.back.mousePressed(()=>{
                this.title.hide();
                this.title2.hide();
                this.title3.hide();

                this.back.hide();

                var backmenu = new Docpatientbackmenu();
                backmenu.display();

            })
        })

        this.reports.mousePressed(()=>{
            this.patient.hide();
            this.reports.hide();
            this.emergency.hide();

            this.title2.html("Here the doctor can view the results of the medical tests uploaded by the hospital staff to avoid physical visits");
            this.title2.position(windowWidth/2-250, windowHeight/2);           
            
            this.back.position(displayWidth/4-100, 0);

            this.back.mousePressed(()=>{
                this.title.hide();
                this.title2.hide();
                this.title3.hide();

                this.back.hide();

                var backmenu = new Docpatientbackmenu();
                backmenu.display();

            })
        })

        this.emergency.mousePressed(()=>{
            this.patient.hide();
            this.reports.hide();
            this.emergency.hide();

            this.title3.html("Here the doctor will be notified in case of an emergency made by the patient and attend to it");
            this.title3.position(windowWidth/2-250, windowHeight/2);

            this.back.position(displayWidth/4-100, 0);

            this.back.mousePressed(()=>{
                this.title.hide();
                this.title2.hide();
                this.title3.hide();

                this.back.hide();

                var backmenu = new Docpatientbackmenu();
                backmenu.display();

            })
        })

        this.home.mousePressed(()=>{
            this.patient.hide();
            this.reports.hide();
            this.emergency.hide();

            this.title.hide();
            this.title2.hide();
            this.title3.hide();

            var form1 = new Form();
            form1.display();
        })
    }

}