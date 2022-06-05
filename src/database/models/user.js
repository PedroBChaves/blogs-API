const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },{
    timestamps: false,
  });

  User.associate = (model) => {
    User.hasMany(model.BlogPost, {
      foreignKey: 'userId',
      as:'blogPost'
    })
  }

  return User;
};

module.exports = User;