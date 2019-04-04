import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Main
{
    public static HttpURLConnection conn=null;
    
	public static void main(String[] args) {
	    URL url=null;
	    try{
	        url = new URL("http://webhacking.kr/challenge/web/web-08/index.php");
	        conn=(HttpURLConnection)url.openConnection();
	        conn.setRequestProperty("User-Agent","delete");
 	        conn.setRequestProperty("Cookie","PHPSESSID=");
           conn.connect();
           
           /* 서버로부터 반환된 html문서 읽어오기 */
           InputStream is = conn.getInputStream();
           BufferedReader in = new BufferedReader(new InputStreamReader(is));
           String result="";
           while(true){
            String line=in.readline();
            if(line==null)break;
            result+=line;
           }
           if(result.contains("Secret")){
              answer+=(char)j;
              break;
	        }
	    }
	}
}catch(Exception e){
  e.printStackTrace();
  }
  System.out.println(answer);
  }
  }
