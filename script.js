elem("#c-grid-elem #tooltip").forEach(el => {
    const wikiAnchor = document.createElement("a");
    wikiAnchor.id = "tooltip-link";
    wikiAnchor.textContent = "Wikipedia";
    wikiAnchor.href = "https://en.wikipedia.org/wiki/" + el.parentElement.getAttribute("data-label").replace(/ /g, "_");
    el.appendChild(wikiAnchor);
});