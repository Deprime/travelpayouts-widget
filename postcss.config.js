module.exports = {
  	plugins: {
	    'postcss-focus': {},
	    'postcss-pxtorem': {},
	    'postcss-cssnext': {
	      	browsers: ['last 2 versions', '> 5%'],
	      	compress: true,
	    },
  	}
}