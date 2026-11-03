$(document).ready(function () {
  console.log("jQuery is ready!");

  // Task 1: Selectors and CSS
  $("#changeText").click(function () {
    $("#welcome").text("The text was changed with .text()!");
  });

  $("#changeHtml").click(function () {
    $(".description").html("This text now contains <strong>HTML</strong> added with .html().");
  });

  $("#changeCss").click(function () {
    $("p").css("color", "#4166a8");
  });

  // Task 2: Visibility methods
  $("#hideBtn").click(function () { $("#visibilityText").hide(); });
  $("#showBtn").click(function () { $("#visibilityText").show(); });
  $("#toggleBtn").click(function () { $("#visibilityText").toggle(); });

  // Task 3: Fade methods
  $("#fadeInBtn").click(function () { $("#fadeImage").fadeIn(600); });
  $("#fadeOutBtn").click(function () { $("#fadeImage").fadeOut(600); });
  $("#fadeToggleBtn").click(function () { $("#fadeImage").fadeToggle(600); });

  // Task 4: Slide methods
  $("#slideDownBtn").click(function () { $("#slidePanel").slideDown(500); });
  $("#slideUpBtn").click(function () { $("#slidePanel").slideUp(500); });
  $("#slideToggleBtn").click(function () { $("#slidePanel").slideToggle(500); });

  // Task 5: Add and remove elements
  let itemNumber = 2;
  $("#appendBtn").click(function () {
    itemNumber++;
    $("#itemList").append("<li>New item " + itemNumber + "</li>");
  });
  $("#prependBtn").click(function () {
    itemNumber++;
    $("#itemList").prepend("<li>New first item " + itemNumber + "</li>");
  });
  $("#removeBtn").click(function () {
    $("#itemList li:last").remove();
  });

  // Task 6: Change attributes
  $("#changeImageBtn").click(function () {
    $("#attributeImage").attr("src", "https://picsum.photos/id/1039/500/250");
    $("#attributeImage").attr("alt", "A new landscape");
  });
  $("#changeLinkBtn").click(function () {
    $("#demoLink").attr("href", "https://www.wikipedia.org");
    $("#demoLink").text("Wikipedia");
  });

  // Task 7: Live form interaction
  $("#nameInput").on("input", function () {
    $("#nameOutput").text($(this).val() || "Your name will appear here");
  });
  $("#emailInput").on("input", function () {
    $("#emailOutput").text($(this).val() || "Your email will appear here");
  });
  $("#profileForm").submit(function (event) { event.preventDefault(); });

  // Task 8: Basic animation
  $("#basicAnimateBtn").click(function () {
    $("#basicBox").stop(true).animate({
      width: "90px", height: "90px", left: "180px"
    }, 700);
  });

  // Task 9: Sequential animations
  $("#sequenceBtn").click(function () {
    $("#sequenceBox").stop(true, true).css({
      left: "0px", top: "0px", width: "55px", height: "55px"
    }).animate({ left: "220px" }, 500)
      .animate({ top: "100px" }, 500)
      .animate({ width: "25px", height: "25px" }, 500)
      .animate({ left: "0px", top: "0px", width: "55px", height: "55px" }, 500);
  });

  // Task 10: Combined animation
  $("#combinedBtn").click(function () {
    $("#combinedBox").stop(true).css({ opacity: 1, left: "0px", width: "55px", height: "55px" })
      .animate({ opacity: 0.35, left: "220px", width: "90px", height: "90px" }, 900);
  });

  // Task 11: Accordion menu mini project
  $(".accordion-header").click(function () {
    // close the other sections
    $(".accordion-content").not($(this).next()).slideUp(300);
    $(".accordion-header").not(this).removeClass("active");
    // open or close the clicked section
    $(this).toggleClass("active");
    $(this).next(".accordion-content").slideToggle(300);
  });
});
