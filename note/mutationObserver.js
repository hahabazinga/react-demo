const mb = new mutationObserver(callback);
mb.observe(domNode, {
    childList: true
})