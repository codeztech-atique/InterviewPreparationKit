package SystemDesign.Design_Pattern.Basic.Program;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class KattisFS {
    public static void main(String[] args) throws IOException {
        BufferedReader stdin = new BufferedReader(new InputStreamReader(System.in)); 
        List<String> list=new ArrayList<String>(); 
        String line; int index = 0;
        
        while ((line = stdin.readLine()) != null && line.length() != 0) {
            String[] lines = line.split(" ");
            for (int i = 0; i < lines.length; i++) {
                list.add(lines[i]);
            }
        }
        for (String ab : list) {
            String strStar = ""; int strLen = ab.length(); String str = "";
            
            for (int x = 0; x < ab.length(); x++) {
                if (ab.charAt(x) == '*') {
                    strStar += "*";
                }
            }

            int calculation = index == 0 ? strLen - (strStar.length()): index - strStar.length();
            int start = calculation;
            int end = index == 0 ? strLen : index;
            //System.out.println(start+ " "+ end);
            // Creat String with dot 
            for (int x = 0; x < ab.length(); x++) {
                str+='.';
            }

            StringBuffer res = new StringBuffer(str);
            if(start < end) {
                res = res.replace(start, end, strStar); 
                index = start;
                System.out.println(res);
            } else {
                System.out.println(str);
            }
            // String res = str.substring(0, calculation) + strStar;
            // System.out.println(res);
        }
    }
}
