import java.util.*;
public class Prac {
    public static boolean check(int[] arr, int k) {
		for(int val : arr) {
			if(val != 0 && val != k) return false;
		}
		return true;
	}
	
	public static int perfectSubstring(String s, int k) {
		int res = 0;
		for(int i=0; i<s.length(); i++) {
			int[] arr = new int[10];
			for(int j = i; j<s.length(); j++) {
				if(j > i + (10*k)) break;
				char ch = s.charAt(j);
				arr[ch-'0']++;
				if(check(arr, k)) res++;
			}
		}
		return res;
	}
    public static void main(String[] args) {
        String s = "1102021222"; // expected 2
        int k = 2;
        System.out.println(perfectSubstring(s, k));
    
        s = "12221122";
        k = 2; // expected 2
        
        System.out.println(perfectSubstring(s, k));

        s = "02210111000220111212202001022122201021001221220121122110122221012210201112120121202211010021202200001001210001001110011000102010211220121202101010221122110020112020010010022021002001201020002000212211212121212122112220020110221221021020001220000122201120011120001220200202001211211100200010010022000012021000112120002022111022210100022000102010000222212010002020100212202112002202020101002202010220100200001021022020100100210101221121020010020220221112222000110000221220010200000210000120120211220110202202222012122222220";
        k = 20;  // expected 2

        System.out.println(perfectSubstring(s, k));
    }
}
