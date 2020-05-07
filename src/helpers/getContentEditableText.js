import $ from 'jquery';

export default function getContentEditableText(id) {
    var ce = $("<pre />").html($("#" + id).html());
    if ($.browser.webkit)
      ce.find("div").replaceWith(function() { return "\n" + this.innerHTML; });
    if ($.browser.msie)
      ce.find("p").replaceWith(function() { return this.innerHTML + "<br>"; });
    if ($.browser.mozilla || $.browser.opera || $.browser.msie)
      ce.find("br").replaceWith("\n");

    return ce.text();
}