$(document).ready(()=>{
	console.log()
	$('#my-coll').hide();
	$('#btnXemThem').text('Xem thêm')
	$('#my-comment').hide();
	$('#my-comment2').hide();
})

$('#my-binh-luan-coll').click(()=>{
	$('#my-comment').slideToggle(400);
})
$('#my-binh-luan-coll2').click(()=>{
	$('#my-comment2').slideToggle(400);
})

$('#btnXemThem').click(()=>{
	$('#my-coll').slideToggle(400);
	let text = $('#btnXemThem').text(); 
	if(text=="Xem thêm"){ 
		$('#btnXemThem').text("Thu gọn"); 
	}
	else{ 
		$('#btnXemThem').text('Xem thêm');  
	}
	
})