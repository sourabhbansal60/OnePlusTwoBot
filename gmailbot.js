//get the response from this first

//get request to the html
//get the mail id
var https=require('https');

var apikey="Your API KEy";
var oneplusId="Your one plus token";
mailPart="your mail id";//ex:newkid@gmail.com->mailpart=>newkid
mailDomain="Mail id domain";//maildomain=>@gmail.com
function getRandomIntInclusive(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var count=1;
var x=function(){ 
	setTimeout(function () {
		times=getRandomIntInclusive(1,10);
		var mailId='';
		var index=mailPart.indexOf('.');
		for (var i = 0; i< mailPart.length; i++) {
			mailId+=mailPart.substring(i,i+1);
			len=getRandomIntInclusive(0,1);

			if(len!=0 && i!=mailPart.length-1 && i!=index && i!=index-1)
				mailId+='.';
		};
		mailId+=mailDomain;
		https.get("https://invites.oneplus.net/index.php?r=share/signup&success_jsonpCallback=success_jsonpCallback&email="+mailId+"&koid="+oneplusId,function(res1){


			var data;
			res1.on('data',function(d){
				data+=d;
			});
			res1.on('end',function(e){
				if(data.indexOf('success_jsonpCallback')!=-1){
					console.log(mailId+' with counter value '+count);	
					count++;
				}else{
					console.log('randomising');
				}
				x();
			});

		});

	}, 0);
	
}
x();



//https://api.mailinator.com/api/inbox?to=hsdars@mailinator.com&token=203ea3b4ac404f70989f840c025b232f
