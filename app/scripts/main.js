var reactionButtons = document.querySelectorAll('button[aria-label="Add your reaction"]');
reactionButtons.forEach(function(button) {
	button.addEventListener("click", function(){
		var element = document.querySelector('button[data-reaction-label="-1"]');
		element.parentNode.removeChild(element);
		});
});
