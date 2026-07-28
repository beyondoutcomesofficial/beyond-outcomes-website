// VideoObject structured data for YouTube videos referenced on a page.
// Call injectVideoSchema({ id | url, name, description, date }) wherever a video
// (iframe embed or a Short link-card) is rendered. It emits schema.org/VideoObject
// JSON-LD into <head> so Google can index the video with a thumbnail — resolving the
// Search Console "No thumbnail URL provided" reason and making the page eligible for
// video rich results.
//
//  • Pass `id` (11-char YouTube id) OR `url` (watch / youtu.be / shorts / embed) —
//    the id is parsed from the url when `id` is absent.
//  • `date` is optional but recommended: the publish date as 'YYYY-MM-DD'. Google
//    needs uploadDate for full video-rich-result eligibility; without it the schema
//    is still valid and the thumbnail warning is resolved.
window.injectVideoSchema = function (v) {
  if (!v) return;
  var id = v.id;
  if (!id && v.url) {
    var m = v.url.match(/(?:shorts\/|watch\?v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
    id = m ? m[1] : null;
  }
  if (!id) return;
  var data = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.name || 'Beyond Outcomes',
    description: v.description || v.name || 'Beyond Outcomes — timeless wisdom for modern life.',
    thumbnailUrl: 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/' + id,
    contentUrl: v.url || ('https://www.youtube.com/watch?v=' + id)
  };
  if (v.date) data.uploadDate = v.date;
  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
};
