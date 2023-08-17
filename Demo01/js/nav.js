$(function () {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 991) {
        $(".MenuIcon").click(() => {
            $(".MenuIcon").toggleClass("dispear");
            $(".navbar").toggleClass("Sticky", 800);
        });
    } else {
        $(".MenuIcon").click(() => {
            $(".MenuIcon").addClass("dispear");
            $(".navbar").addClass("Sticky", 800);
        });
        $(".navbar").mouseleave(() => {
            $(".MenuIcon").removeClass("dispear");
            $(".navbar").removeClass("Sticky", 800);
        });
    }
})