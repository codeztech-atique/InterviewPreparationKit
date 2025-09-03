package SystemDesign.Design_Pattern.Basic.Program;
import java.util.Arrays;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class Distinct {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCases = sc.nextInt();
        for(int i=0;i<testCases;i++) {
            int arrSize = sc.nextInt();
            String arr[] = new String[arrSize];
            for(int x=0;x<arrSize;x++) {
                arr[x] = sc.next();
            }

            // Find the distinct element in Java using Set
            Set<String> uniqKeys = new TreeSet<String>();
            uniqKeys.addAll(Arrays.asList(arr));
            //System.out.println("uniqKeys: " + uniqKeys);
            //System.out.println("uniqKeys: " + uniqKeys.size());
            System.out.println(uniqKeys.size());
        }
        sc.close();       
    }
}
