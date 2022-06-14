module.exports = (sequelize, Datatypes) => {
    const Todo = sequelize.define("Todo", {
        text: {
            type: Datatypes.STRING,
            allowNull: false,
        }
    });
    return Todo;
};