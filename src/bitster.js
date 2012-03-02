// Dont fsck with the bit$ter
var bitster = {Number:{from:{Long:{String:{},Array:{}},LE:{Long:{String:{},Array:{}},Short:{String:{},Array:{}},Unsigned:{Long:{String:{},Array:{}},Short:{String:{},Array:{}}}},Short:{String:{},Array:{}},Byte:{String:{},Array:{}},Unsigned:{Long:{String:{},Array:{}},Short:{String:{},Array:{}},Byte:{String:{},Array:{}}}},Stream:{from:{Byte:{String:{Stream:{}}},Unsigned:{Byte:{String:{Stream:{}}},Short:{String:{Stream:{}}},Long:{String:{Stream:{}}}},Short:{String:{Stream:{}}},LE:{Short:{String:{Stream:{}}},Unsigned:{Short:{String:{Stream:{}}},Long:{String:{Stream:{}}}},Long:{String:{Stream:{}}}},Long:{String:{Stream:{}}}}}},Long:{String:{from:{Number:{},Array:{}},Stream:{from:{Array:{Stream:{}}}}},Array:{from:{Number:{},String:{}},Stream:{from:{String:{Stream:{}}}}}},LE:{Long:{String:{from:{Number:{},Array:{},LE:{Long:{Array:{}}}},Stream:{from:{Array:{Stream:{}},LE:{Array:{Stream:{}}}}}},Array:{from:{Number:{},String:{},LE:{Long:{String:{}}}},Stream:{from:{String:{Stream:{}}}}}},Short:{String:{from:{Number:{},Array:{},LE:{Short:{Array:{}}}},Stream:{from:{Array:{Stream:{}},LE:{Array:{Stream:{}}}}}},Array:{from:{Number:{},String:{},LE:{Short:{String:{}}}},Stream:{from:{String:{Stream:{}}}}}}},Short:{String:{from:{Number:{},Array:{}},Stream:{from:{Array:{Stream:{}}}}},Array:{from:{Number:{},String:{}},Stream:{from:{String:{Stream:{}}}}}},Byte:{String:{from:{Number:{},Array:{}},Stream:{from:{Array:{Stream:{}}}}},Array:{from:{Number:{},String:{}},Stream:{from:{String:{Stream:{}}}}}},Raw:{String:{Stream:{from:{Array:{}}}},Array:{Stream:{from:{String:{}}}}}}

//
bitster.Number.from.Long.String     = function(string) { return (string.charCodeAt(0) & 0xFF) << 24 | (string.charCodeAt(1) & 0xFF) << 16 | (string.charCodeAt(2) & 0xFF) << 8 | string.charCodeAt(3) & 0xFF; };
bitster.Number.from.LE.Long.String  = function(string) { return (string.charCodeAt(3) & 0xFF) << 24 | (string.charCodeAt(2) & 0xFF) << 16 | (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
bitster.Number.from.Short.String    = function(string) { return ((string.charCodeAt(0) & 0xFF) << 8 | string.charCodeAt(1) & 0xFF) << 16 >> 16; };
bitster.Number.from.LE.Short.String = function(string) { return ((string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF) << 16 >> 16; };
bitster.Number.from.Byte.String     = function(string) { return (string.charCodeAt(0) & 0xFF) << 24 >> 24; };


bitster.Number.from.Unsigned.Long.String     = function(string) { return ((string.charCodeAt(0) & 0xFF) << 24 | (string.charCodeAt(1) & 0xFF) << 16 | (string.charCodeAt(2) & 0xFF) << 8 | string.charCodeAt(3) & 0xFF) >>> 0; };
bitster.Number.from.LE.Unsigned.Long.String  = function(string) { return ((string.charCodeAt(3) & 0xFF) << 24 | (string.charCodeAt(2) & 0xFF) << 16 | (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF) >>> 0; };
bitster.Number.from.Unsigned.Short.String    = function(string) { return (string.charCodeAt(0) & 0xFF) << 8 | string.charCodeAt(1) & 0xFF; };
bitster.Number.from.LE.Unsigned.Short.String = function(string) { return (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
bitster.Number.from.Unsigned.Byte.String     = function(string) { return string.charCodeAt(0) & 0xFF; };

bitster.Number.from.Long.Array     = function(array) { return (array[0] & 0xFF) << 24 | (array[1] & 0xFF) << 16 | (array[2] & 0xFF) << 8 | array[3] & 0xFF; };
bitster.Number.from.LE.Long.Array  = function(array) { return (array[3] & 0xFF) << 24 | (array[2] & 0xFF) << 16 | (array[1] & 0xFF) << 8 | array[0] & 0xFF; };
bitster.Number.from.Short.Array    = function(array) { return ((array[0] & 0xFF) << 8 | array[1] & 0xFF) << 16 >> 16; };
bitster.Number.from.LE.Short.Array = function(array) { return ((array[1] & 0xFF) << 8 | array[0] & 0xFF) << 16 >> 16; };
bitster.Number.from.Byte.Array     = function(array) { return (array[0] & 0xFF) << 24 >> 24; };

bitster.Number.from.Unsigned.Long.Array     = function(array) { return ((array[0] & 0xFF) << 24 | (array[1] & 0xFF) << 16 | (array[2] & 0xFF) << 8 | array[3] & 0xFF) >>> 0; };
bitster.Number.from.LE.Unsigned.Long.Array  = function(array) { return ((array[3] & 0xFF) << 24 | (array[2] & 0xFF) << 16 | (array[1] & 0xFF) << 8 | array[0] & 0xFF) >>> 0; };
bitster.Number.from.Unsigned.Short.Array    = function(array) { return (array[0] & 0xFF) << 8 | array[1] & 0xFF; };
bitster.Number.from.LE.Unsigned.Short.Array = function(array) { return (array[1] & 0xFF) << 8 | array[0] & 0xFF; };
bitster.Number.from.Unsigned.Byte.Array     = function(array) { return array[0] & 0xFF; };

//
bitster.Long.String.from.Number     = function(number) { return String.fromCharCode(number >> 24 & 0xFF, number >> 16 & 0xFF, number >> 8 & 0xFF, number & 0xFF); };
bitster.LE.Long.String.from.Number  = function(number) { return String.fromCharCode(number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF); };
bitster.Short.String.from.Number    = function(number) { return String.fromCharCode(number >> 8 & 0xFF, number & 0xFF); };
bitster.LE.Short.String.from.Number = function(number) { return String.fromCharCode(number & 0xFF, number >> 8 & 0xFF); };
bitster.Byte.String.from.Number     = function(number) { return String.fromCharCode(number & 0xFF); };

//
bitster.Long.String.from.Array     = function(array) { return String.fromCharCode(array[0] & 0xFF, array[1] & 0xFF, array[2] & 0xFF, array[3] & 0xFF); };
bitster.LE.Long.String.from.Array  = function(array) { return String.fromCharCode(array[3] & 0xFF, array[2] & 0xFF, array[1] & 0xFF, array[0] & 0xFF); };
bitster.Short.String.from.Array    = function(array) { return String.fromCharCode(array[0] & 0xFF, array[1] & 0xFF); };
bitster.LE.Short.String.from.Array = function(array) { return String.fromCharCode(array[1] & 0xFF, array[0] & 0xFF); };
bitster.Byte.String.from.Array     = function(array) { return String.fromCharCode(array[0] & 0xFF); };

bitster.LE.Long.String.from.LE.Long.Array   = bitster.Long.String.from.Array;
bitster.LE.Short.String.from.LE.Short.Array = bitster.Short.String.from.Array;

//
bitster.Long.Array.from.Number     = function(number) { return [number >> 24 & 0xFF, number >> 16 & 0xFF, number >> 8 & 0xFF, number & 0xFF]; };
bitster.LE.Long.Array.from.Number  = function(number) { return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF]; };
bitster.Short.Array.from.Number    = function(number) { return [number >> 8 & 0xFF, number & 0xFF]; };
bitster.LE.Short.Array.from.Number = function(number) { return [number & 0xFF, number >> 8 & 0xFF]; };
bitster.Byte.Array.from.Number     = function(number) { return [number & 0xFF]; };

//
bitster.Long.Array.from.String     = function(string) { return [string.charCodeAt(0) & 0xFF, string.charCodeAt(1) & 0xFF, string.charCodeAt(2) & 0xFF, string.charCodeAt(3) & 0xFF]; };
bitster.LE.Long.Array.from.String  = function(string) { return [string.charCodeAt(3) & 0xFF, string.charCodeAt(2) & 0xFF, string.charCodeAt(1) & 0xFF, string.charCodeAt(0) & 0xFF]; };
bitster.Short.Array.from.String    = function(string) { return [string.charCodeAt(0) & 0xFF, string.charCodeAt(1) & 0xFF]; };
bitster.LE.Short.Array.from.String = function(string) { return [string.charCodeAt(1) & 0xFF, string.charCodeAt(0) & 0xFF]; };
bitster.Byte.Array.from.String     = function(string) { return [string.charCodeAt(0) & 0xFF]; };

bitster.LE.Long.Array.from.LE.Long.String   = bitster.Long.Array.from.String;
bitster.LE.Short.Array.from.LE.Short.String = bitster.Short.Array.from.String;

//
bitster.Number.Stream.from.Byte.String.Stream = function(string) {
	var array = new Array(string.length);	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		array[i] = (string.charCodeAt(i) & 0xFF) << 24 >> 24;
	}

	return array;
};

bitster.Number.Stream.from.Unsigned.Byte.String.Stream = function(string) {
	var array = new Array(string.length);	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		array[i] = string.charCodeAt(i) & 0xFF;
	}

	return array;
};

//
bitster.Number.Stream.from.Short.String.Stream = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = ((string.charCodeAt(i) & 0xFF) << 8 | string.charCodeAt(i + 1) & 0xFF) << 16 >> 16;
	}

	return array;
};

bitster.Number.Stream.from.LE.Short.String.Stream = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = ((string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF) << 16 >> 16;
	}

	return array;
};

bitster.Number.Stream.from.Unsigned.Short.String.Stream = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = (string.charCodeAt(i) & 0xFF) << 8 | string.charCodeAt(i + 1) & 0xFF;
	}

	return array;
};

bitster.Number.Stream.from.LE.Unsigned.Short.String.Stream = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = (string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF;
	}

	return array;
};

//
bitster.Number.Stream.from.Long.String.Stream = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = (string.charCodeAt(i) & 0xFF) << 24 | (string.charCodeAt(i + 1) & 0xFF) << 16 | (string.charCodeAt(i + 2) & 0xFF) << 8 | string.charCodeAt(i + 3) & 0xFF;
	}

	return array;
};

bitster.Number.Stream.from.LE.Long.String.Stream = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = (string.charCodeAt(i + 3) & 0xFF) << 24 | (string.charCodeAt(i + 2) & 0xFF) << 16 | (string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF;
	}

	return array;
};

bitster.Number.Stream.from.Unsigned.Long.String.Stream = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = ((string.charCodeAt(i) & 0xFF) << 24 | (string.charCodeAt(i + 1) & 0xFF) << 16 | (string.charCodeAt(i + 2) & 0xFF) << 8 | string.charCodeAt(i + 3) & 0xFF) >>> 0;
	}

	return array;
};

bitster.Number.Stream.from.LE.Unsigned.Long.String.Stream = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = ((string.charCodeAt(i + 3) & 0xFF) << 24 | (string.charCodeAt(i + 2) & 0xFF) << 16 | (string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF) >>> 0;
	}

	return array;
};

//
bitster.Byte.String.Stream.from.Array.Stream = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		string += String.fromCharCode(array[i][0] & 0xFF);
	}

	return string;
};

bitster.Short.String.Stream.from.Array.Stream = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 2) {
		string += String.fromCharCode(array[i][0] & 0xFF) + String.fromCharCode(array[i][1] & 0xFF);
	}

	return string;
};

bitster.LE.Short.String.Stream.from.Array.Stream = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 2) {
		string += String.fromCharCode(array[i][1] & 0xFF) + String.fromCharCode(array[i][0] & 0xFF);
	}

	return string;
};

bitster.LE.Short.String.Stream.from.LE.Array.Stream = bitster.Short.String.Stream.from.Array.Stream;

bitster.Long.String.Stream.from.Array.Stream = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 4) {
		string += String.fromCharCode(array[i][0] & 0xFF) + String.fromCharCode(array[i][1] & 0xFF) + String.fromCharCode(array[i][2] & 0xFF) + String.fromCharCode(array[i][3] & 0xFF);
	}

	return string;
};

bitster.LE.Long.String.Stream.from.Array.Stream = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 4) {
		string += String.fromCharCode(array[i][3] & 0xFF) + String.fromCharCode(array[i][2] & 0xFF) + String.fromCharCode(array[i][1] & 0xFF) + String.fromCharCode(array[i][0] & 0xFF);
	}

	return string;
};

bitster.LE.Long.String.Stream.from.LE.Array.Stream = bitster.Long.String.Stream.from.Array.Stream;

//
bitster.Byte.Array.Stream.from.String.Stream = function(string) {
	var array = new Array(string.length);	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		array[i] = [string.charCodeAt(i) & 0xFF];
	}

	return array;
};

bitster.Short.Array.Stream.from.String.Stream = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = [string.charCodeAt(i) & 0xFF, string.charCodeAt(i + 1) & 0xFF];
	}

	return array;
};

bitster.LE.Short.Array.Stream.from.String.Stream = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = [string.charCodeAt(i + 1) & 0xFF, string.charCodeAt(i) & 0xFF];
	}

	return array;
};

bitster.Long.Array.Stream.from.String.Stream = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = [string.charCodeAt(i) & 0xFF, string.charCodeAt(i + 1) & 0xFF, string.charCodeAt(i + 2) & 0xFF, string.charCodeAt(i + 3) & 0xFF];
	}

	return array;
};

bitster.LE.Long.Array.Stream.from.String.Stream = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = [string.charCodeAt(i + 3) & 0xFF, string.charCodeAt(i + 2) & 0xFF, string.charCodeAt(i + 1) & 0xFF, string.charCodeAt(i) & 0xFF];
	}

	return array;
};

//
bitster.Raw.String.Stream.from.Array = function(array) {
	var string = '';
	
	for(var i = 0, len = array.length; i < len; ++i) {
		string += String.fromCharCode(array[i] & 0xFF);
	}

	return string;
};

bitster.Raw.Array.Stream.from.String = function(string) {
	var array = new Array(string.length);	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		array[i] = string.charCodeAt(i) & 0xFF;
	}

	return array;
};
