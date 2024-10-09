import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 地址
const AddressModel = sequelize.define('AddressModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	userid: {
		type: DataTypes.BIGINT,
		defaultValue: 0,
		allowNull: true,
		comment: '用户id'
	},
	address: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '地址'
	},
	name: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '收货人'
	},
	phone: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '电话'
	},
	isdefault: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '是否默认地址[是/否]'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'address'
})

export default AddressModel
