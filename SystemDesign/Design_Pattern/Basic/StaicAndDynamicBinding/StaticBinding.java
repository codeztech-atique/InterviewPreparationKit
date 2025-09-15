package SystemDesign.Design_Pattern.Basic.StaicAndDynamicBinding;

public class StaticBinding extends Human{
    public static void walk(){
        System.out.println("Boy walks");
    }
    public static void main( String args[]) {
        /* Reference is of Human type and object is
         * Boy type
         */
        Human obj = new StaticBinding();
        /* Reference is of HUman type and object is
         * of Human type.
         */
        Human obj2 = new Human();
        obj.walk();
        obj2.walk();
    }   
}

class Human {
    public static void walk()
    {
        System.out.println("Human walks");
    }
}