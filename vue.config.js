module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				//脚手架3创建的项目中，默认@就是项目的src文件夹
				'assets': '@/assets',
				'common': '@/common',
				'network': '@/network',
				'views': '@/views',
				'components':'@/components'
				
			}
		}
	}
}