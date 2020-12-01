package Java;

public class InheritanceExp extends Employee{
    int bonus=10000;  
    public static void main(String args[]){  
       InheritanceExp p = new InheritanceExp();  
       System.out.println("Programmer salary is:"+p.salary);  
       System.out.println("Bonus of Programmer is:"+p.bonus);  
    }  
}

class Employee {  
    float salary = 40000;  
}  
