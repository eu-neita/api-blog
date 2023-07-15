const postBlogController = require('../controllers/postBlog');

module.exports = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const mkPostBlogsObj = {
    title,
    content,
    userId: req.userId,
    updated: new Date(),
    published: new Date(),
  };
  const response = await postBlogController(mkPostBlogsObj, categoryIds);
  return res.status(response[0].status).json(response[1]);
};