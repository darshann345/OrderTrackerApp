const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orderItems: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        deliveryAddress: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('Placed', 'Packed', 'Shipped', 'Delivered'),
            defaultValue: 'Placed',
            allowNull: false
        }
    }, {
        tableName: 'orders',
        timestamps: true
    });

    return Order;
};