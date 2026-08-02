// Structured-data helpers (schema.org JSON-LD) for richer Google results.
// injectBreadcrumbs([{name,url}]) → BreadcrumbList (breadcrumb trail in search).
// injectArticle({headline,description,url,image}) → Article (rich article signals).
// Call from a page's render() once the title/description are known.
(function () {
  function emit(data) {
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  window.injectBreadcrumbs = function (items) {
    if (!items || !items.length) return;
    emit({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map(function (it, i) {
        return { '@type': 'ListItem', position: i + 1, name: it.name, item: it.url };
      })
    });
  };

  window.injectArticle = function (o) {
    if (!o || !o.headline) return;
    var data = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: o.headline,
      description: o.description || '',
      inLanguage: 'en',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Beyond Outcomes', url: 'https://www.beyondoutcomes.in/' },
      publisher: {
        '@type': 'Organization',
        name: 'Beyond Outcomes',
        logo: { '@type': 'ImageObject', url: 'https://www.beyondoutcomes.in/images/og/guna-sattva.png' }
      },
      mainEntityOfPage: o.url
    };
    if (o.image) data.image = o.image;
    emit(data);
  };
})();
