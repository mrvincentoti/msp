"use strict";
$("#modeSwitcher").on("click", function (e) { e.preventDefault(), modeSwitch(), location.reload() }),
    $(".collapseSidebar").on("click", function (e) {
        $(".vertical").hasClass("narrow") ? $(".vertical").toggleClass("open") : ($(".vertical").toggleClass("collapsed"),
            $(".vertical").hasClass("hover") && $(".vertical").removeClass("hover")), e.preventDefault()
    }), $(".sidebar-left").hover(function () { $(".vertical").hasClass("collapsed") && $(".vertical").addClass("hover"), $(".narrow").hasClass("open") || $(".vertical").addClass("hover") },
        function () { $(".vertical").hasClass("collapsed") && $(".vertical").removeClass("hover"), $(".narrow").hasClass("open") || $(".vertical").removeClass("hover") }),
    $(".toggle-sidebar").on("click", function () { $(".navbar-slide").toggleClass("show") }),
    function (a) { a(".dropdown-menu a.dropdown-toggle").on("click", function (e) { return a(this).next().hasClass("show") || a(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), a(this).next(".dropdown-menu").toggleClass("show"), a(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function (e) { a(".dropdown-submenu .show").removeClass("show") }), !1 }) }(jQuery), $(".navbar .dropdown").on("hidden.bs.dropdown", function () { $(this).find("li.dropdown").removeClass("show open"), $(this).find("ul.dropdown-menu").removeClass("show open") }), $(".file-panel .card").on("click", function () { $(this).hasClass("selected") ? ($(this).removeClass("selected"), $(this).find("bg-light").removeClass("shadow-lg"), $(".file-container").removeClass("collapsed")) : ($(this).addClass("selected"), $(this).addClass("shadow-lg"), $(".file-panel .card").not(this).removeClass("selected"), $(".file-container").addClass("collapsed")) }), $(".close-info").on("click", function () { $(".file-container").hasClass("collapsed") && ($(".file-container").removeClass("collapsed"), $(".file-panel").find(".selected").removeClass("selected")) }), $(function () { $(".info-content").stickOnScroll({ topOffset: 0, setWidthOnStick: !0 }) });
var basic_wizard = $("#example-basic"); basic_wizard.length && basic_wizard.steps({ headerTag: "h3", bodyTag: "section", transitionEffect: "slideLeft", autoFocus: !0 });
var vertical_wizard = $("#example-vertical"); vertical_wizard.length && vertical_wizard.steps({ headerTag: "h3", bodyTag: "section", transitionEffect: "slideLeft", stepsOrientation: "vertical" });
var form = $("#example-form"); form.length && (form.validate({ errorPlacement: function (e, a) { a.before(e) }, rules: { confirm: { equalTo: "#password" } } }), form.children("div").steps({ headerTag: "h3", bodyTag: "section", transitionEffect: "slideLeft", onStepChanging: function (e, a, o) { return form.validate().settings.ignore = ":disabled,:hidden", form.valid() }, onFinishing: function (e, a) { return form.validate().settings.ignore = ":disabled", form.valid() }, onFinished: function (e, a) { alert("Submitted!") } }));

var ChartOptions = { maintainAspectRatio: !1, responsive: !0, legend: { display: !1 }, scales: { xAxes: [{ gridLines: { display: !1 } }], yAxes: [{ gridLines: { display: !1, color: colors.borderColor, zeroLineColor: colors.borderColor } }] } },
    ChartData = {
        labels: ["North Central", "North West", "South South", "North East", "South East", "South West"],
        legend: {
            position: 'top',
            show: 1,
        },
        datasets: [
            {
                label: "Obi", barThickness: 10, backgroundColor: "#3ad29f", borderColor: "#3ad29f", pointRadius: !1, pointColor: "#3b8bba", pointStrokeColor: "rgba(60,141,188,1)", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(60,141,188,1)",
                data: [100, 48, 900, 400, 1002, 901], fill: "", lineTension: .1
            },
            {
                label: "Tinubu", barThickness: 10, backgroundColor: "#eea303", borderColor: "#eea303", pointRadius: !1, pointColor: "rgba(210, 214, 222, 1)", pointStrokeColor: "#c1c7d1", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(220,220,220,1)",
                data: [230, 150, 200, 520, 210, 1200], fill: "", borderWidth: 2, lineTension: .1
            },
            {
                label: "Atiku", barThickness: 10, backgroundColor: "#dc3545", borderColor: "#dc3545", pointRadius: !1, pointColor: "rgba(210, 214, 222, 1)", pointStrokeColor: "#c1c7d1", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(220,220,220,1)",
                data: [210, 160, 600, 700, 430, 860], fill: "", borderWidth: 2, lineTension: .1
            }
        ]
    },

    barChartjsRegion = document.getElementById("barChartjsRegion");
barChartjsRegion && new Chart(barChartjsRegion, { type: "bar", data: ChartData, options: ChartOptions }); 