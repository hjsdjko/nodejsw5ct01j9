import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YuangongController from './Yuangong'
import YonghuController from './Yonghu'
import CaipinleixingController from './Caipinleixing'
import CaipinxinxiController from './Caipinxinxi'
import PeisongdingdanController from './Peisongdingdan'
import PeisongxinxiController from './Peisongxinxi'
import CartController from './Cart'
import OrdersController from './Orders'
import AddressController from './Address'
import NewstypeController from './Newstype'
import NewsController from './News'
import StoreupController from './Storeup'
import AboutusController from './Aboutus'
import SystemintroController from './Systemintro'
import DiscusscaipinxinxiController from './Discusscaipinxinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yuangong', YuangongController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/caipinleixing', CaipinleixingController({ config, db }))

	api.use('/caipinxinxi', CaipinxinxiController({ config, db }))

	api.use('/peisongdingdan', PeisongdingdanController({ config, db }))

	api.use('/peisongxinxi', PeisongxinxiController({ config, db }))

	api.use('/cart', CartController({ config, db }))

	api.use('/orders', OrdersController({ config, db }))

	api.use('/address', AddressController({ config, db }))

	api.use('/newstype', NewstypeController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/aboutus', AboutusController({ config, db }))

	api.use('/systemintro', SystemintroController({ config, db }))

	api.use('/discusscaipinxinxi', DiscusscaipinxinxiController({ config, db }))

	return api
}
