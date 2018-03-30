/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home',
    articles: [
      { name: 'foo', id: 1 },
      { name: 'bar', id: 2 },
      { name: 'bax', id: 3 },
      { name: 'bo', id: 4 }
    ]
  });
};
