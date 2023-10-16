function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YxMmsVJhgr":
        Script1();
        break;
  }
}

function Script1()
{
  if (/_html5.html/.test(window.location.href)) {
 if (!window.changeFocusColor){
 var sheet = document.createElement('style');
 sheet.innerHTML = ".tab-focus-box{border: 3px solid #FFFFFF !important; outline: solid 3px #262626  !important;}";
 document.body.appendChild(sheet);
 window.changeFocusColor = true;
 }
}

}

