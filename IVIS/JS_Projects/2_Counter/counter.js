//최초 카운트 설정
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {
    btn.addEventListener("click", function(버튼){
        const styles = 버튼.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        else if(count == 0){
            value.style.color = "black";
        }
        else{
            value.style.color = "red";
        }
        value.textContent = count;
    });
});