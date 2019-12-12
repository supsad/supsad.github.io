var m=[], ajaxrsp, n, ok, uy, un, msl, mok;
ajax('');

function on(){ //ajax уже подгрузил тест и внес его в ajaxrsp.
var qm=randomArray(ajaxrsp.split("\n\n"));
 for(var t=0;t<qm.length;t++){
m[t]=qm[t].split('\n —');}

 n=0;uy=0;un=0;msl=[];mok=[];
 $('text').innerHTML="<a href='javascript:void(0);' onclick='start()'>Начать тест</a>";
}

function start(){ //начало теста:
 anim();
 test('1/15<br>');
}

function test(tx){
if(n<m.length){
 var qm=m[n].slice(),
 qw=m[n][0],
 qok=m[n][1];
 qm.shift();
 qm=randomArray(qm);
 m[n]=qm.slice();
 m[n].unshift(qw);

/***m[n] - [вопрос, варианты], qw - вопрос, qm - массив вариантов, qok - текст правильного варианта, а ok - номер.***/

for(ok=1;ok<m[n].length;ok++){
 if(qok===m[n][ok])break;
}
 mok[n]=ok;
 $('text').innerHTML="<b style='color:#ff0;'>"+qw+"</b><p>"+bu(qm,"onc(q);")+tx+(n+1)+" из "+m.length;
}else{
 a="";
 for(var q=0;q<m.length;q++){
  a+="<b style='color:#ff0;'>"+m[q][0]+"</b><p>1) "+m[q][1]+"<br>2) "+m[q][2]+"<br>3) "+m[q][3]+"<br>4) "+m[q][4]+"<p><i style='color:";
  if(msl[q]==mok[q])a+="#0f0"; else a+="#f00";

  a+=";'>Ваш ответ: "+(msl[q])+") "+m[q][msl[q]]+"<br>Правильный ответ: "+(mok[q])+") "+m[q][mok[q]]+"</i><p><hr><p>";
}
 $('text').innerHTML=tx+"<br><b style='color:#09f;'>Тест окончен.</b><p><hr><p>"+a+"<p><a href='javascript:void(0);' onclick='on()'>Пройти снова?</button>";
}}

function onc(q){
 anim();
 q++;
 msl[n]=q;
 n++;
 /***uy - кол-во правильных, un - неправельных***/
 if(ok==q)uy++; else un++;
 var a="<br>+"+uy+" -"+un+" ("+Math.round((uy/m.length)*100)+"%)<br>"; //процент правильных.
 if(ok==q){
  test("<i style='color:#9f9;'>Верно!<br>"+m[n-1][0]+"<br>Ваш ответ: "+m[n-1][ok]+"</i><p>"+a);
 }else{
  test("<i style='color:#f33;'>Неверно.<br>"+m[n-1][0]+"<br>Ваш ответ: "+m[n-1][q]+"<br>Правильный ответ: "+m[n-1][ok]+"</i><p>"+a);
}}

function anim(){
//воспроизведение анимации, без таймаута не идет.
 $('text').style.display='none';
 setTimeout(function(){
  $('text').style.display='block';
 },50);
}

function bu(qm,qjs,qbr){
 if(!qbr)qbr="<p>";
 var a='';
  for(var q=0;q<qm.length;q++){
   a+='<button onclick="var q='+q+';'+qjs+'">'+qm[q]+'</button>'+qbr;}
 return a;
}

function ie7(){
 try{return new XMLHttpRequest();}catch(e){
 try{return new ActiveXObject("Mcxml2.XMLHTTP");}catch(e){
 try{return new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}}}

function ajax(url) {
 var xmlhttp=ie7();
 if(!xmlhttp){alert("No ajax!");}else{
 try{
  xmlhttp.onreadystatechange=function(){
  if(xmlhttp.readyState==4){
   var xstat=xmlhttp.status;
   if(xstat==200){
    var q=xmlhttp.responseText;
    if(q){
     ajaxrsp=q;
     on();
    }
   }}}
   if(!document.location.hash){
 xmlhttp.open("GET",'../test.txt',true);
 }else{
 xmlhttp.open("GET", document.location.hash.replace('#url=','')+'/../test.txt',true);
 }
 xmlhttp.send(url);
 }catch(e){alert(e);}}}
function rnd(q){
return Math.round(Math.random()*q);}

function $(q){
return document.getElementById(q);}

function randomArray(array) {
for (var i = array.length - 1; i > 0; i--) {
 var j = Math.floor(Math.random() * (i + 1));
 var temp = array[i];
 array[i] = array[j];
 array[j] = temp;
}
return array;
}