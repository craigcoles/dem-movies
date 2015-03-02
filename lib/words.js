var me = {};

me.getList = function (num) { 
	var words = [ 'lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipisicing', 'elit', 'ed', 'voluptatem' ];

	return words.slice(0,num);
};

module.exports = me;