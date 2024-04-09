exports.getNotFoundPage = (req, res) => {
    res.status(404).render('NotFound', { title: 'Not found', heading: 'Page doesn’t exist' });
  };
  