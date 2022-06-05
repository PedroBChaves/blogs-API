const PostCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  },{
    timestamps: false,
  });

  postCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'blogPosts',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });

    Category.belongsToMany(BlogPost, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  }

  return postCategory;
};

module.exports = PostCategory;