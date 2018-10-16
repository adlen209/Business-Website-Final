//Jobs Javascript//
        var diaporama = 1;
        affichage(diaporama);

        function boutons(n) {
            affichage(diaporama += n);
        }

        function actifIndic(n) {
            affichage(diaporama = n);
        }

        function affichage(n) {
            var i;
            var diapoImg = document.getElementsByClassName("diapo");
            var indic = document.getElementsByClassName("demo");
            if (n > diapoImg.length) {
                diaporama = 1
            }
            if (n < 1) {
                diaporama = diapoImg.length
            }
            for (i = 0; i < diapoImg.length; i++) {

                diapoImg[i].style.opacity = "0";
            }
            for (i = 0; i < indic.length; i++) {
                indic[i].className = indic[i].className.replace(" numeros", "");
            }
            diapoImg[diaporama - 1].style.opacity = "1";
            indic[diaporama - 1].className += " numeros";
        }


<script type="text/javascript">
window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
</script>


<!-- $(document).ready(function() {
    $('h2').click(function() {
        $('h2').fadeOut(4000);
    });
});
*/ -->


<!-- <script type="text/javascript">
$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
})
</script> -->
