import $ from 'jquery'
$(document).ready(()=>{
    $('.btn-submit').click(()=>{
        $('.my-modal').slideDown(400);
    })

    $('.modal-close').click(()=>{
        $('.my-modal').slideUp(400);
    })
    $('#btn-them-back').click(()=>{
        $(".them-dia-chi-card").slideDown(500); 
    });

    $(".btn-them").click(() => {
        $(".my-modal").slideDown(400);
    })
    $(".btn-them-back").click(() => {
        $(".my-modal").slideDown(400);
    })
    $('[data-spy="scroll"]').each(function () {
      })
      $(window).on('scroll',function(){
        $('.pekora').each(function(){
  if(($(this).offset().top - $(window).scrollTop()) < 10){
          
        $('.nav-pills li').removeClass('ngoc-active');
                
        $('#myScrollspy').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('ngoc-active');
      }
  });
    })
}) 
