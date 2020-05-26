// Initialize Global Variables
var $htmlArea = $("#htmlText");
var $editTheme = $("#editTheme");
var $editSyntax = $("#editSyntax");
var $htmlTheme = $("#htmlTheme");
var textValue;
var html;
var converter = new showdown.Converter();
var editor = ace.edit("editor");
editor.setTheme("ace/theme/github");
editor.session.setMode("ace/mode/");

// Event Handler
editor.session.on("change", function () {
  textValue = editor.getValue();
  console.log(typeof textValue);
  html = converter.makeHtml(textValue);
  console.log(html);
  $htmlArea.html(html);
});

$editTheme.change(function () {
  editor.setTheme("ace/theme/" + $editTheme.val());
});

$editSyntax.change(function () {
  console.log($editSyntax.val());
  if ($editSyntax.val() === "") {
    console.log("hi");
    editor.session.setMode("ace/mode/markdown");
  } else {
    console.log("bye");
    editor.session.setMode("ace/mode/" + $editSyntax.val());
  }
});

$htmlTheme.change(function () {
  console.log($htmlTheme.val());
  if ($htmlTheme.val() == "regular") {
    $htmlArea.css("background-color", "white");
    $htmlArea.css("color", "black");
  } else {
    $htmlArea.css("background-color", "black");
    $htmlArea.css("color", "white");
  }
});
