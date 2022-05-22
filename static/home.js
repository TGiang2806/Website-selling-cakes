$(document).ready(function() {
$('noidung').slideup();
$('SPH').on('click',function(event){
    event.preventDefault();
    $(this).next().slideDown();
});
});