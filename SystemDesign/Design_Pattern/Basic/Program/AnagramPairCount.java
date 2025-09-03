package SystemDesign.Design_Pattern.Basic.Program;
import java.util.Scanner;

public class AnagramPairCount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int maxFreq = countNonEmptySubstr(str);
        System.out.println(maxFreq);
        sc.close();
    }
    static int countNonEmptySubstr(String str) 
    { 
        int n = str.length(); 
        return n * (n + 1) / 2; 
    } 
}


