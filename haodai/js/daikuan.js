$(function() {
	$("#btn").click(function() {
		$("#box2 ul").css("display", "block");
		$("#btn").addClass("fa fa-caret-up")
		$("#box2 ul li").click(function() {
			$("#btn").addClass("fa fa-caret-down")
			$("#text1").val($(this).html());
			$("#box2 ul").css("display", "none");
		})
	})

	$("#btn1").click(function() {
		$("#box3 ul").css("display", "block");
		$("#btn1").addClass("fa fa-caret-up")
		$("#box3 ul li").click(function() {
			$("#btn1").addClass("fa fa-caret-down")
			$("#text2").val($(this).html());
			$("#box3 ul").css("display", "none");
		})
	})
})