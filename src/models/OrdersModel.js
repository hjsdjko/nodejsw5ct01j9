import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 订单
const OrdersModel = sequelize.define('OrdersModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	orderid: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '订单编号'
	},
	tablename: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '商品表名'
	},
	userid: {
		type: DataTypes.BIGINT,
		defaultValue: 0,
		allowNull: true,
		comment: '用户id'
	},
	goodid: {
		type: DataTypes.BIGINT,
		defaultValue: 0,
		allowNull: true,
		comment: '商品id'
	},
	goodname: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '商品名称'
	},
	picture: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '商品图片'
	},
	buynumber: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '购买数量'
	},
	price: {
		type: DataTypes.DOUBLE,
		defaultValue: 0,
		allowNull: true,
		comment: '价格'
	},
	total: {
		type: DataTypes.DOUBLE,
		defaultValue: 0,
		allowNull: true,
		comment: '总价格'
	},
	type: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '支付类型'
	},
	status: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '状态'
	},
	address: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '地址'
	},
	tel: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '电话'
	},
	consignee: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '收货人'
	},
	logistics: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '物流'
	},
	remark: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '备注'
	},
	sfsh: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '是否审核'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '审核回复'
	},
	role: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户角色'
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
	tableName: 'orders'
})

export default OrdersModel
