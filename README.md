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
>## innerHTML   
>```
>	var str = document.getElementById("text");   
>	str.innerHTML = "이 문장으로 바뀌었습니다!";   
>```
>HTML 내용 변경
