function open() {
    $("#nav-mobile, .js-nav-mobile-open").addClass("active");
    $("#header").addClass("header--no-bg");
    $("body").addClass("page__locked");
}

function toggle() {
    const isActive = $("#nav-mobile").hasClass("active");
    isActive ? close() : open();
}

function close() {
    $("#nav-mobile, .js-nav-mobile-open").removeClass("active");
    $("#header").removeClass("header--no-bg");
    $("body").removeClass("page__locked");
}

$(function () {
    $(document).on("click", ".js-nav-mobile-open", (e) => {
        e.preventDefault();
        toggle();
    });

    $(document).on("click", ".js-nav-mobile-close", (e) => {
        e.preventDefault();
        close();
    });

    $(document).on("click", "#nav-mobile a", (e) => {
        close();
    });
});

export default {
    open,
    toggle,
    close,
};
