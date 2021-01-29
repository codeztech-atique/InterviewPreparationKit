class Test extends Thread {
    public static void main(String[] args){
        Test t = new Test();
        t.start();
        System.out.println("One!!");
        t.start();
        System.out.println("Two!!");
    }
    public void run() {
        System.out.println("Thread!!");
    }
}