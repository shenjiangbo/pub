var language = navigator.browserLanguage?navigator.browserLanguage:navigator.language; 
if (language.indexOf('en') > -1) document.location.href = '/pub/en/'; 
else if (language.indexOf('CN') > -1) document.location.href = '/pub/cn/'; 
if (language.indexOf('HK') > -1||language.indexOf('MO') > -1||language.indexOf('TW') > -1) document.location.href = '/pub/tw/'; 
