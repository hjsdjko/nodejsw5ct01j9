import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 菜品类型
const CaipinleixingModel = sequelize.define('CaipinleixingModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	caipinleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '菜品类型'
	},
	image: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: 'image'
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
	tableName: 'caipinleixing'
})

export default CaipinleixingModel
