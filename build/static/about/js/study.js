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
   xstat=xmlhttp.status;
   if(xstat==200){
    var q=xmlhttp.responseText;
    if(q){
$('text').innerHTML=q.replace(/[\n]/g,'<br>');
    }
   }}}
   if(!document.location.hash){
 xmlhttp.open("GET",'../study.txt',true);
 }else{
 xmlhttp.open("GET", document.location.hash.replace('#url=','')+'/../study.txt',true);
 }
 xmlhttp.send(url);
 }catch(e){alert(e);}}}
function $(q){
return document.getElementById(q);}

ajax('');