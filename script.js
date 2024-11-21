let splitText;

function runSplit() {
  if (window.innerWidth > 767) {
    splitText = new SplitType("[dd-split]", {
      types: "words, chars"
    });
  }
}

function initSplitText() {
  runSplit();

  let windowWidth = $(window).innerWidth();
  window.addEventListener("resize", function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      splitText.revert();
      runSplit();
    }
  });

  if (window.innerWidth > 768) {
    $("[dd-split]").each(function (index) {
      gsap.from($(this).find(".char"), {
        yPercent: 120,
        duration: 1,
        stagger: { each: 0.04 },
      });
    });
  }
}