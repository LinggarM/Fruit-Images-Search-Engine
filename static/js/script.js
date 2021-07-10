function alertsaya() {
	alert("File harus berformat gambar (png/jpg/jpeg/gif)");
};
var btnUpload = $("#upload_file"),
	btnUpload.on("change", function(e){
		var ext = btnUpload.val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			alert("File harus berformat gambar (png/jpg/jpeg/gif)");
		} else {
			var uploadedFile = URL.createObjectURL(e.target.files[0]);
			setTimeout(function(){
				$("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show");
			},3500);
		}
	});