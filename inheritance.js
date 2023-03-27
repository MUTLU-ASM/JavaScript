class Insan{
    constructor(firstName="Asım"){
        this.firstName=firstName;
    } 

    write(){
        console.log("Personel class'ı "+this.firstName);
    }
}

class Student extends Insan{ //! extends ile miras alınır.Insan sınıfındaki özellikleri vs. alır.Ortak olanları tekrar yazmayız.
    write(){
        console.log("Student class'ı "+this.firstName);
        super.write() //! super ile miras aldığımız yere gider.
    }
}

class Teacher extends Insan{

    constructor(firstName="Asım",lastName){//! Ekstra bir değişken tanımlamak istersek.
        super(firstName="Asım") 
        this.lastName=lastName;
    }
    write(){
        console.log(`Teacher class'ı ${this.firstName} , ${this.lastName}`);
    }
}


const person = new Insan();
person.write();

const student = new Student();
student.write();

const teacher = new Teacher("Kemal","Seçkin");
teacher.write();