# JSS
# 대화 상자   
>## alet()   
>```
>	alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");   
>```
>경고창   
   
>## confirm()   
>```
>function confirmDialogBox() {   
>var str;
>			if (confirm("확인이나 취소를 눌러주세요!") == true) {
>				str = "당신은 확인을 눌렀습니다!";
>			} else {
>				str = "당신은 취소을 눌렀습니다!";
>			}
>			document.getElementById("text").innerHTML = str;
>		}
>```
>확인/취소   

>## prompt()   
>```
>	var inputStr = prompt("당신의 이름을 입력해 주세요 : ", "홍길동");   
>```
>입력창   

# DOM 요소   
>## 요소선택
>### 태그
>```
>  var selectedItem = document.getElementsByTagName("li");
>```
>### id
>```
>var selectedItem = document.getElementById("even"); 
>```
>### class
>```
>  var selectedItem = document.getElementsByClassName("odd");
>```
>### name
>```
>  var selectedItem = document.getElementsByName("first");
>```
>### css
>```
>  var selectedItem = document.querySelectorAll("li.odd");
>```
>### HTML 객체집합
>```
>  var title = document.title;
>```


>## innerHTML   
>```
>  link.href = "http://tcpschool.com/javascript/intro";	// 해당 요소의 href 속성값을 변경함.
>	link.innerHTML = "자바스크립트 수업 바로 가기!";		// 해당 요소의 내용을 변경함. 
>```
>HTML 내용 변경

>## style.   
>```
>	str.style.color = "black";  
>```
>style 내용 변경

># 콘솔출력
>```
>   console.log(4 * 5);
>```
>콘솔창 출력(F12)

>#  localStorage   
> 클라이언트에 정보 저장   
> 쿠키와 달리 만료기간이 없음
>```
>  localStorage.setItem("inputString", value);
>~~~~~~~~~
>  localStorage.removeItem("inputString");


># querySelector   
>getElementBy와 달리 하나만 가져옴   
>CSS 셀럭터를 사용함   <br><br>
>id #   
>```
>document.querySelector("#idSelc");   
>```
>name .   
>```
>document.querySelector(".classSelc");
>```

># setInterval    
>ms마다 실행   
>```
>setInterval(getClock,1000);
>```

># padStart(padEnd)   
>String의 char가 n보다 짧으면 0을 앞(padStart) 또는 뒤(padEnd)에 붙임   
>```
>padStart(n,"0")
>```

># Geolocation   
> 브라우져로부터 좌표를 받아옴
>```
>navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
>```
