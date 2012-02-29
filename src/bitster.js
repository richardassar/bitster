//
var bitster = {};

//
bitster.Int8 = {};
bitster.Int16 = {};
bitster.Int16_LE = {};
bitster.Int32 = {};
bitster.Int32_LE = {};
bitster.UInt8 = {};
bitster.UInt16 = {};
bitster.UInt16_LE = {};
bitster.UInt32 = {};
bitster.UInt32_LE = {};

//
bitster.UInt8.String = {};
bitster.UInt16.String = {};
bitster.UInt16_LE.String = {};
bitster.UInt32.String = {};
bitster.UInt32_LE.String = {};

bitster.UInt8.Array = {};
bitster.UInt16.Array = {};
bitster.UInt16_LE.Array = {};
bitster.UInt32.Array = {};
bitster.UInt32_LE.Array = {};

bitster.Int8.Number = {};
bitster.Int16.Number = {};
bitster.Int16_LE.Number = {};
bitster.Int32.Number = {};
bitster.Int32_LE.Number = {};

bitster.UInt8.Number = {};
bitster.UInt16.Number = {};
bitster.UInt16_LE.Number = {};
bitster.UInt32.Number = {};
bitster.UInt32_LE.Number = {};

//
bitster.UInt8.String.from = {};
bitster.UInt16.String.from = {};
bitster.UInt16_LE.String.from = {};
bitster.UInt32.String.from = {};
bitster.UInt32_LE.String.from = {};

bitster.UInt8.Array.from = {};
bitster.UInt16.Array.from = {};
bitster.UInt16_LE.Array.from = {};
bitster.UInt32.Array.from = {};
bitster.UInt32_LE.Array.from = {};

bitster.Int8.Number.from = {};
bitster.Int16.Number.from = {};
bitster.Int16_LE.Number.from = {};
bitster.Int32.Number.from = {};
bitster.Int32_LE.Number.from = {};

bitster.UInt8.Number.from = {};
bitster.UInt16.Number.from = {};
bitster.UInt16_LE.Number.from = {};
bitster.UInt32.Number.from = {};
bitster.UInt32_LE.Number.from = {};

//
bitster.UInt8.String.Stream = {};
bitster.UInt16.String.Stream = {};
bitster.UInt16_LE.String.Stream = {};
bitster.UInt32.String.Stream = {};
bitster.UInt32_LE.String.Stream = {};

bitster.UInt8.Array.Stream = {};
bitster.UInt16.Array.Stream = {};
bitster.UInt16_LE.Array.Stream = {};
bitster.UInt32.Array.Stream = {};
bitster.UInt32_LE.Array.Stream = {};

bitster.Int8.Number.Stream = {};
bitster.Int16.Number.Stream = {};
bitster.Int16_LE.Number.Stream = {};
bitster.Int32.Number.Stream = {};
bitster.Int32_LE.Number.Stream = {};

bitster.UInt8.Number.Stream = {};
bitster.UInt16.Number.Stream = {};
bitster.UInt16_LE.Number.Stream = {};
bitster.UInt32.Number.Stream = {};
bitster.UInt32_LE.Number.Stream = {};

//
bitster.UInt8.String.Stream.from = {};
bitster.UInt16.String.Stream.from = {};
bitster.UInt16_LE.String.Stream.from = {};
bitster.UInt32.String.Stream.from = {};
bitster.UInt32_LE.String.Stream.from = {};

bitster.UInt8.Array.Stream.from = {};
bitster.UInt16.Array.Stream.from = {};
bitster.UInt16_LE.Array.Stream.from = {};
bitster.UInt32.Array.Stream.from = {};
bitster.UInt32_LE.Array.Stream.from = {};

bitster.Int8.Number.Stream.from = {};
bitster.Int16.Number.Stream.from = {};
bitster.Int16_LE.Number.Stream.from = {};
bitster.Int32.Number.Stream.from = {};
bitster.Int32_LE.Number.Stream.from = {};

bitster.UInt8.Number.Stream.from = {};
bitster.UInt16.Number.Stream.from = {};
bitster.UInt16_LE.Number.Stream.from = {};
bitster.UInt32.Number.Stream.from = {};
bitster.UInt32_LE.Number.Stream.from = {};

//
bitster.UInt32.String.from.Number    = function(number) { return String.fromCharCode(number >> 24 & 0xFF, number >> 16 & 0xFF, number >> 8 & 0xFF, number & 0xFF); };
bitster.UInt32_LE.String.from.Number = function(number) { return String.fromCharCode(number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF); };
bitster.UInt16.String.from.Number    = function(number) { return String.fromCharCode(number >> 8 & 0xFF, number & 0xFF); };
bitster.UInt16_LE.String.from.Number = function(number) { return String.fromCharCode(number & 0xFF, number >> 8 & 0xFF); };
bitster.UInt8.String.from.Number     = function(number) { return String.fromCharCode(number & 0xFF); };

//
bitster.UInt32.String.from.Array    = function(number) { return String.fromCharCode(array[0] & 0xFF, array[1] & 0xFF, array[2] & 0xFF, array[3] & 0xFF); };
bitster.UInt32_LE.String.from.Array = function(number) { return String.fromCharCode(array[3] & 0xFF, array[2] & 0xFF, array[1] & 0xFF, array[0] & 0xFF); };
bitster.UInt16.String.from.Array    = function(number) { return String.fromCharCode(array[0] & 0xFF, array[1] & 0xFF); };
bitster.UInt16_LE.String.from.Array = function(number) { return String.fromCharCode(array[1] & 0xFF, array[0] & 0xFF); };
bitster.UInt8.String.from.Array     = function(number) { return String.fromCharCode(array[0] & 0xFF); };

//
bitster.Int32.Number.from.String    = function(string) { return (string.charCodeAt(0) & 0xFF) << 24 | (string.charCodeAt(1) & 0xFF) << 16 | (string.charCodeAt(2) & 0xFF) << 8 | string.charCodeAt(3) & 0xFF; };
bitster.Int32_LE.Number.from.String = function(string) { return (string.charCodeAt(3) & 0xFF) << 24 | (string.charCodeAt(2) & 0xFF) << 16 | (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
bitster.Int16.Number.from.String    = function(string) { return ((string.charCodeAt(0) & 0xFF) << 8 | string.charCodeAt(1) & 0xFF) << 16 >> 16; };
bitster.Int16_LE.Number.from.String = function(string) { return ((string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF) << 16 >> 16; };
bitster.Int8.Number.from.String     = function(string) { return (string.charCodeAt(0) & 0xFF) << 24 >> 24; };

bitster.UInt32.Number.from.String    = function(string) { return ((string.charCodeAt(0) & 0xFF) << 24 | (string.charCodeAt(1) & 0xFF) << 16 | (string.charCodeAt(2) & 0xFF) << 8 | string.charCodeAt(3) & 0xFF) >>> 0; };
bitster.UInt32_LE.Number.from.String = function(string) { return ((string.charCodeAt(3) & 0xFF) << 24 | (string.charCodeAt(2) & 0xFF) << 16 | (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF) >>> 0; };
bitster.UInt16.Number.from.String    = function(string) { return (string.charCodeAt(0) & 0xFF) << 8 | string.charCodeAt(1) & 0xFF; };
bitster.UInt16_LE.Number.from.String = function(string) { return (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
bitster.UInt8.Number.from.String     = function(string) { return string.charCodeAt(0) & 0xFF; };

//
bitster.Int32.Number.from.Array    = function(array) { return (array[0] & 0xFF) << 24 | (array[1] & 0xFF) << 16 | (array[2] & 0xFF) << 8 | array[3] & 0xFF; };
bitster.Int32_LE.Number.from.Array = function(array) { return (array[3] & 0xFF) << 24 | (array[2] & 0xFF) << 16 | (array[1] & 0xFF) << 8 | array[0] & 0xFF; };
bitster.Int16.Number.from.Array    = function(array) { return ((array[0] & 0xFF) << 8 | array[1] & 0xFF) << 16 >> 16; };
bitster.Int16_LE.Number.from.Array = function(array) { return ((array[1] & 0xFF) << 8 | array[0] & 0xFF) << 16 >> 16; };
bitster.Int8.Number.from.Array     = function(array) { return (array[0] & 0xFF) << 24 >> 24; };

bitster.UInt32.Number.from.Array    = function(array) { return ((array[0] & 0xFF) << 24 | (array[1] & 0xFF) << 16 | (array[2] & 0xFF) << 8 | array[3] & 0xFF) >>> 0; };
bitster.UInt32_LE.Number.from.Array = function(array) { return ((array[3] & 0xFF) << 24 | (array[2] & 0xFF) << 16 | (array[1] & 0xFF) << 8 | array[0] & 0xFF) >>> 0; };
bitster.UInt16.Number.from.Array    = function(array) { return (array[0] & 0xFF) << 8 | array[1] & 0xFF; };
bitster.UInt16_LE.Number.from.Array = function(array) { return (array[1] & 0xFF) << 8 | array[0] & 0xFF; };
bitster.UInt8.Number.from.Array     = function(array) { return (array[0] & 0xFF); };

//
bitster.UInt32.Array.from.Number    = function(number) { return [number >> 24 & 0xFF, number >> 16 & 0xFF, number >> 8 & 0xFF, number & 0xFF]; };
bitster.UInt32_LE.Array.from.Number = function(number) { return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF]; };
bitster.UInt16.Array.from.Number    = function(number) { return [number >> 8 & 0xFF, number & 0xFF]; };
bitster.UInt16_LE.Array.from.Number = function(number) { return [number & 0xFF, number >> 8 & 0xFF]; };
bitster.UInt8.Array.from.Number     = function(number) { return [number & 0xFF]; };

//
bitster.UInt32.Array.from.String    = function(string) { return (string.charCodeAt(0) & 0xFF) << 24 | (string.charCodeAt(1) & 0xFF) << 16 | (string.charCodeAt(2) & 0xFF) << 8 | string.charCodeAt(3) & 0xFF; };
bitster.UInt32_LE.Array.from.String = function(string) { return (string.charCodeAt(3) & 0xFF) << 24 | (string.charCodeAt(2) & 0xFF) << 16 | (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
bitster.UInt16.Array.from.String    = function(string) { return (string.charCodeAt(0) & 0xFF) << 8 | string.charCodeAt(1) & 0xFF; };
bitster.UInt16_LE.Array.from.String = function(string) { return (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
bitster.UInt8.Array.from.String     = function(string) { return string.charCodeAt(0) & 0xFF; };

//
bitster.Int8.Number.Stream.from.String = function(string) {
	var array = new Array(string.length);	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		array[i] = (string.charCodeAt(i) & 0xFF) << 24 >> 24;
	}

	return array;
};

bitster.UInt8.Number.Stream.from.String = function(string) {
	var array = new Array(string.length);	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		array[i] = string.charCodeAt(i) & 0xFF;
	}

	return array;
};

//
bitster.Int16.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = ((string.charCodeAt(i) & 0xFF) << 8 | string.charCodeAt(i + 1) & 0xFF) << 16 >> 16;
	}

	return array;
};

bitster.Int16_LE.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = ((string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF) << 16 >> 16;
	}

	return array;
};

bitster.UInt16.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = (string.charCodeAt(i) & 0xFF) << 8 | string.charCodeAt(i + 1) & 0xFF;
	}

	return array;
};

bitster.UInt16_LE.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = (string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF;
	}

	return array;
};

//
bitster.Int32.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = (string.charCodeAt(i) & 0xFF) << 24 | (string.charCodeAt(i + 1) & 0xFF) << 16 | (string.charCodeAt(i + 2) & 0xFF) << 8 | string.charCodeAt(i + 3) & 0xFF;
	}

	return array;
};

bitster.Int32_LE.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = (string.charCodeAt(i + 3) & 0xFF) << 24 | (string.charCodeAt(i + 2) & 0xFF) << 16 | (string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF;
	}

	return array;
};

bitster.UInt32.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = ((string.charCodeAt(i) & 0xFF) << 24 | (string.charCodeAt(i + 1) & 0xFF) << 16 | (string.charCodeAt(i + 2) & 0xFF) << 8 | string.charCodeAt(i + 3) & 0xFF) >>> 0;
	}

	return array;
};

bitster.UInt32_LE.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = ((string.charCodeAt(i + 3) & 0xFF) << 24 | (string.charCodeAt(i + 2) & 0xFF) << 16 | (string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF) >>> 0;
	}

	return array;
};

//
bitster.UInt8.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		string += String.fromCharCode(array[i] & 0xFF);
	}

	return string;
};

//
bitster.UInt16.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 2) {
		string += String.fromCharCode(array[i] & 0xFF) + string.fromCharCode(array[i + 1] & 0xFF) ;
	}

	return string;
};

bitster.UInt16_LE.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 2) {
		string += String.fromCharCode(array[i + 1] & 0xFF) + string.fromCharCode(array[i] & 0xFF) ;
	}

	return string;
};

//
bitster.UInt32.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 4) {
		string += String.fromCharCode(array[i] & 0xFF) + string.fromCharCode(array[i + 1] & 0xFF) + string.fromCharCode(array[i + 2] & 0xFF) + string.fromCharCode(array[i + 3] & 0xFF);
	}

	return string;
};

bitster.UInt32_LE.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 4) {
		string += String.fromCharCode(array[i + 3] & 0xFF) + string.fromCharCode(array[i + 2] & 0xFF) + string.fromCharCode(array[i + 1] & 0xFF) + string.fromCharCode(array[i] & 0xFF);
	}

	return string;
};

//
bitster.UInt16.Array.Stream.from.String = function(array) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = [(string.charCodeAt(i) & 0xFF) << 8, string.charCodeAt(i + 1) & 0xFF];
	}

	return array;
};

bitster.UInt16_LE.Array.Stream.from.String = function(array) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = [(string.charCodeAt(i + 1) & 0xFF) << 8, string.charCodeAt(i) & 0xFF];
	}

	return array;
};

//
bitster.UInt32.Array.Stream.from.String = function(array) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = [(string.charCodeAt(i) & 0xFF) << 24, (string.charCodeAt(i + 1) & 0xFF) << 16, (string.charCodeAt(i + 2) & 0xFF) << 8, string.charCodeAt(i + 3) & 0xFF];
	}

	return array;
};

bitster.UInt32_LE.Array.Stream.from.String = function(array) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = [(string.charCodeAt(i + 3) & 0xFF) << 24, (string.charCodeAt(i + 2) & 0xFF) << 16, (string.charCodeAt(i + 1) & 0xFF) << 8, string.charCodeAt(i + 0) & 0xFF];
	}

	return array;
};
