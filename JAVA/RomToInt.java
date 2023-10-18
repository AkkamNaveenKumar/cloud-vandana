import java.util.Scanner;

public class RomToInt {

	public static int romToInt(String s) {
        int result = 0;
        int prevVal = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            
            int currVal = getValue(s.charAt(i));
            if (currVal < prevVal) {
                result -= currVal;
            }
            
            else {
                result += currVal;
            }
            prevVal = currVal;
        }

        return result;
    }

    
    private static int getValue(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }

    public static void main(String[] args) {
    	Scanner scan = new Scanner(System.in);
    	System.out.println("Enter the Roman Number");
        String romNum = scan.nextLine();
        int result = romToInt(romNum);
        System.out.println(result);
    }

}