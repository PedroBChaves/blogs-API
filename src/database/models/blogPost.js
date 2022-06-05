const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    timestamps: false
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey:'userId',
      as: 'user'
    })
  }

  return blogPost;
};

module.exports = BlogPost;