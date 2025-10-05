// 键盘左键上一页
keyboard$.subscribe(function (key) {
  if (key.mode === "global" && key.type === "ArrowLeft") {
    var elements = document.getElementsByClassName("md-pagination__link");
    if (elements.length && elements[0].innerHTML.length > 5 && elements[1].innerHTML.length > 5) {
      elements[1].click();
      key.claim();
      return;
    }
    var elements = document.getElementsByClassName(
      "md-footer__link md-footer__link--prev"
    );
    if (elements.length) elements[0].click();
    key.claim();
  }
});

// 键盘右键下一页
keyboard$.subscribe(function (key) {
  if (key.mode === "global" && key.type === "ArrowRight") {
    var elements = document.getElementsByClassName("md-pagination__link");
    if (elements.length && elements[elements.length - 1].innerHTML.length > 5 && elements[elements.length - 2].innerHTML.length > 5) {
      elements[elements.length - 2].click();
      key.claim();
      return;
    }
    var elements = document.getElementsByClassName(
      "md-footer__link md-footer__link--next"
    );
    if (elements.length) elements[0].click();
    key.claim();
  }
});
