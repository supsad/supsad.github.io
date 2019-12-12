if(document.location.hash && document.location.hash.indexOf('url=') > -1)document.location = new String(document.location.hash).replace('#url=','');

var gurl = '', bi = setInterval(function(){
 if(document.location.hash.replace('#url=','') != gurl){
 
  ajaxx(document.location.hash.replace('#url=',''));
}},200);

function bstart(){
 document.body.innerHTML=obr(document.body.innerHTML);
}

function banim(){
//воспроизведение анимации, без таймаута не идет.
 document.getElementById('1').style.display='none';
 setTimeout(function(){
  document.getElementById('1').style.display='block';
 },50);
}

function backobr(qt){
//while(qt.indexOf('..')>-1)qt=qt.replace(/..{2,}/g, '');
while(qt.indexOf('//')>-1)qt=qt.replace(/[/]{2,}/g, '/');
var qt=qt.split('/'), a=qt.length, qm=[];
 for(var q=0;q<a;q++){
 if(qt[q]=='..'){
  if(qm)qm.pop();
 }else if(qt[q])qm.push(qt[q]);
  }
 return qm.join('/');
}

function obr(t){
 var qm=t.split('<a href="'), qt;
 for(var q=1;q<qm.length;q++){
  qm[q] = qm[q].split('"');
  qt=gurl+'/'+qm[q][0];
  qt=backobr(qt);
  while(qt.indexOf('//')>-1)qt=qt.replace(/[/]{2,}/g, '/');
   qm[q][0]='#url='+qt+'" onclick="ajaxx(\''+qt+'\');';
   qm[q]=qm[q].join('"');
 }
 return qm.join('<a href="');
}

function ie(){
 try{return new XMLHttpRequest();}catch(e){
 try{return new ActiveXObject("Mcxml2.XMLHTTP");}catch(e){
 try{return new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}}}

function ajaxx(url) {
 var xmlhttp=ie(), data='';
 if(!xmlhttp){alert("No ajax!");}else{
 try{
  xmlhttp.onreadystatechange=function(){
  if(xmlhttp.readyState==4){
   var xstat=xmlhttp.status;
   if(xstat==200){
     var t=xmlhttp.responseText;
    if(t){
if(t.indexOf("<bo"+"dy onload='bstart()'>")>-1){
  t = obr(t.split("<bo"+"dy onload='bstart()'>")[1]);
}else{
 t = obr(t.split('<bo'+'dy>')[1]);
}

if(t.indexOf('<scr'+'ipt src="')>-1){
 t=t.split('<scr'+'ipt src="');
 var q = t[1].split('"')[0].split('..');q=q[q.length-1];
 t=t[0];
}else q='';

document.body.innerHTML = t;
banim();

if(q){
include(q);
}

}}else alert("Network error: #"+xstat);
   }}
 gurl=url;
 if(!gurl)gurl='';
 xmlhttp.open("GET",gurl);
 xmlhttp.send(data);
 }catch(e){alert(e);}}}

function include(url) {
 var script = document.createElement('script');
 script.src = url;
 document.getElementsByTagName('head')[0].appendChild(script);
 }