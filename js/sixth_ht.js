window.onload=func;  // 在页面加载的时候就可以调用了
function func(){ 
div=document.getElementById("myDiv");
div.innerText = "asaddddddddddddddddddd";

var btn = document.getElementById("myButton");
/*DOM0*/
// btn.onclick = function(){
//     console.log("又对了");
//     console.log(this.id);
// }
// btn.onclick = null;        // 删除事件处理程序

/*DOM2 - eg.1*/
// btn.addEventListener("click", function(){
//     alert("DOM2冒泡阶段被触发");},false);
// var mo = null;
// btn.addEventListener("click", mo = function(){
//     alert("DOM2捕捉阶段被触发");
// }, true);

//匿名函数将无法移除
// btn.removeEventListener("click", function(){
//     alert("DOM2冒泡阶段被触发");},false);
// btn.removeEventListener("click", mo, true);

//处理多个事件, 传入参数event, 利用
var handler = function(event){
    switch(event.type){
        case "click":console.log("clicked");
        break;
        case "mouseover":console.log('mouseover');
        break;
        case "mouseout":event.target.style.backgroundColor = "red";
        break;
    }
}
// btn.addEventListener("click", handler, false);
// btn.addEventListener("mouseover", handler, false);
// btn.addEventListener("mouseout", handler, false);
btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;


}