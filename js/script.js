

/* 리셋 버튼 */
$(function() {
	$('#reset').click(function() {
		$('#write_reply').find('textarea').val('').focus();
	});

	$('.pw_btn').click(function() {
		$(this).siblings('.reply_pw').fadeIn();
	});
});