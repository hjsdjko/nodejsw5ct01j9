import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 配送信息
const PeisongxinxiModel = sequelize.define('PeisongxinxiModel', {
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
	peisongshijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('peisongshijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '配送时间'
	},
	peisongdizhi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '配送地址'
	},
	peisongzhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '配送状态'
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
	peisongbeizhu: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '配送备注'
	},
	yuangongzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '员工账号'
	},
	yuangongxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '员工姓名'
	},
	yuangongdianhua: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '员工电话'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '回复内容'
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
	tableName: 'peisongxinxi'
})

export default PeisongxinxiModel
