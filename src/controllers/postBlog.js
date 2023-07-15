const { BlogPost, PostCategory } = require('../models');

module.exports = async (postContent, categoryIds) => {
  const post = await BlogPost.create(postContent);
  categoryIds.forEach(async (goryIds) => {
    await PostCategory
  .create({ postId: post.id, categoryId: goryIds });
});
  return [{ status: 201 }, post];
};