package Java;

public class AbstractionExp {
    public static void main(String[] args) {
        TransformData myObj = new TransformData();
        myObj.animalSound();
        myObj.sleep();
    }
}

abstract class AbsT {
  public abstract void animalSound();
  public void sleep() {
    System.out.println("Nice, How are you doing ?");
  }
}

// Subclass (inherit from AbsT)
class TransformData extends AbsT {
    public void animalSound() {
      // The body of animalSound() is provided here
      System.out.println("How are you doing: wee wee");
    }
}
  
