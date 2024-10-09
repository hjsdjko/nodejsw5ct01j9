import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 菜品信息
const CaipinxinxiModel = sequelize.define('CaipinxinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	caipinbianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '菜品编号'
	},
	caipinmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '菜品名称'
	},
	caipinleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '菜品类型'
	},
	caipinzhaopian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '菜品照片'
	},
	caipinkouwei: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '菜品口味'
	},
	shicaipeiliao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '食材配料'
	},
	caipinxiangqing: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '菜品详情'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '最近点击时间'
	},
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
	},
	discussnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '评论数'
	},
	price: {
		type: DataTypes.DOUBLE,
		defaultValue: 0,
		allowNull: true,
		comment: '价格'
	},
	storeupnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '收藏数'
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
	tableName: 'caipinxinxi'
})

export default CaipinxinxiModel
