
function Manager (name,surName,subject,time, salary){
    this.name = name;
    this.surname =surName;
    this.subject = subject;
    this.time = time;
    this.salary= 0;
    let self = this;
    const setSalary =  (params) => {
        console.log (self);
        self.salary = params;
    }
    this.setS = function (params) {
        if(params<750000 || params> 80000){
            console.log("միջին աշխատավարձից ցածր է")
        }else{
            setSalary (params);
        }
    };
        
    }
     

function restaurant(name){
    this.name = name;
    this.Managers = [];
    this.getName=function(){
        return this.name;
    }
this.addManager = function (name,surName){
    const Managers = new Manager (name,surName)
    this.Managers [this.Managers.length] = Manager;
    Managers.setS (300000);
}

}

let restaurants = new restaurant("Տաշիր պիցցա");
restaurants.addManager("Պողոս","Պողոսյան");
restaurants.addManager("Քնարիկ","Սարգսյան");

console.log (restaurants,Manager);

function worker (name,surName,subject, time,salary){
    this.name = name;
    this.surname =surName;
    this.subject = subject;
    this.time = 0;
    this.salary = salary;
    this.worker =[];
    
    if(this.time<09.30 || this.time>09.30  ){
        console.log("ռեստորանը փակ է ")
    }else{
        console.log("ռեստորանը բաց է ")
    }
    this.addworker = function (name,surName,salary){
    const workers = new worker("name","surname","salary")
    this.workers[this.workers.length]= worker;
    }
    restaurants.addworker("Տաթևիկ","Ալեքսանյան");
    restaurants.addworker("Լիանա","Սուքիասյան");
    restaurants.addworker("Աշոտ","Վարդանյան");
    restaurants.addworker("Վալեր","Սարգսյան");
    restaurants.addworker("Վարդան","Մաթևոսյան");
    restaurants.addworker("Կառլեն","Գևորգայան");

}

console.log (restaurants,worker); 

