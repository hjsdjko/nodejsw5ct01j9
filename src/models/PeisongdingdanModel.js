import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 配送订单
const PeisongdingdanModel = sequelize.define('PeisongdingdanModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	dingdanbianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '订单编号'
	},
	caipinmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '菜品名称'
	},
	caipinzhaopian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '菜品照片'
	},
	dingdanshijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('dingdanshijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '订单时间'
	},
	dingdanzhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '订单状态'
	},
	yonghuzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户账号'
	},
	yonghuxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户姓名'
	},
	yonghudianhua: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户电话'
	},
	peisongdizhi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '配送地址'
	},
	dingdanbeizhu: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '订单备注'
	},
	yuangongzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '员工账号'
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
	tableName: 'peisongdingdan'
})

export default PeisongdingdanModel
