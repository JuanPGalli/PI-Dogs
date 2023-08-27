const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dogs",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        /* validate: {
          isUrl: {
            msg: "It must be a valid URL",
          },
        }, */
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [2, 20],
            msg: "The name must contain in between 2 and 20 characters",
          },
        },
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
