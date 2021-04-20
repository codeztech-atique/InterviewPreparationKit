import java.util.*;

public class Test {
    public static void main(String[] args) {
        //String inputString = "12,3,4,5,5,4,3,2,2,21,23,40,7,6,4,7";
        Scanner scan = new Scanner(System.in);
        //string containing comma separated numbers
        String inputString = scan.nextLine();
        scan.close();
        
        /* Enter your code here. Print the lonely prime number to STDOUT */
        System.out.println(inputString);
        
        String[] arr = inputString.split(",");
        // int primeNumber = 0;
        int[] arrSplit = new int[arr.length];
        for(int i=0;i<arr.length;i++) {
            arrSplit[i] = Integer.parseInt(arr[i]);
        }
        int[] sortedArray = Arrays.stream(arrSplit)
        .boxed()
        .sorted(Comparator.reverseOrder())
        .mapToInt(Integer::intValue)
        .toArray();
        Set<Integer> singleSet = new HashSet<>();

        Set<Integer> repeatedSet = new HashSet<>();

        for (int e : sortedArray) {
            if (repeatedSet.contains(e)) {
                continue;
            }
            if (singleSet.contains(e)) {
                singleSet.remove(e);
                repeatedSet.add(e);
            } else {
                singleSet.add(e);
            }
        }

        for (int e : sortedArray) {
            if (singleSet.contains(e)) {
                //System.out.println(e);
                if(checkPrime(e)) {
                   System.out.println(e);
                   break;
                }
            }
        }
    }

    public static boolean checkPrime(int number) {
        for (int i = 2; i < number; i++) {
            if (number % i == 0)
                return false;
        }
        return true;
    }
}