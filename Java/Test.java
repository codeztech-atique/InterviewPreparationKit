class AbstructionExample {
    public static void main(String[] args) {
        Part2 ps = new Part2();
        ps.test();
    }
}


abstract class Part1 {
   abstract public void test();
}

class Part2 extends Part1 {
    public void test () {
        System.out.println("Test working fine.");
    }
}