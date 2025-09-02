package Design_Pattern.Basic.Program;

public class Demo {
    public static void main(String[] args) {
       try {
          int a = 5, b = 0;
          int c = a / b;
          System.out.print("A");
       } catch(Exception e) {
          System.out.print("B");
       } finally {
          System.out.println("C");
       }
    }
}