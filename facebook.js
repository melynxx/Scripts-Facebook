var buttons;
buttons = document.getElementsByClassName('_42ft');
for (var i = 0; i < buttons.length; i++) {
	if(buttons[i].getAttribute('ajaxify') != null){
		if(buttons[i].getAttribute('ajaxify').indexOf('invite') != -1){
			buttons[i].click();
		}
	}
}
//by melynxx 

