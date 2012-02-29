var Binary = {};

//
Binary.UInt8 = {};
Binary.UInt16 = {};
Binary.UInt16_LE = {};
Binary.UInt32 = {};
Binary.UInt32_LE = {};

//
Binary.UInt8.String = {};
Binary.UInt16.String = {};
Binary.UInt16_LE.String = {};
Binary.UInt32.String = {};
Binary.UInt32_LE.String = {};

Binary.UInt8.Array = {};
Binary.UInt16.Array = {};
Binary.UInt16_LE.Array = {};
Binary.UInt32.Array = {};
Binary.UInt32_LE.Array = {};

Binary.UInt8.Number = {};
Binary.UInt16.Number = {};
Binary.UInt16_LE.Number = {};
Binary.UInt32.Number = {};
Binary.UInt32_LE.Number = {};

//
Binary.UInt8.String.from = {};
Binary.UInt16.String.from = {};
Binary.UInt16_LE.String.from = {};
Binary.UInt32.String.from = {};
Binary.UInt32_LE.String.from = {};

Binary.UInt8.Array.from = {};
Binary.UInt16.Array.from = {};
Binary.UInt16_LE.Array.from = {};
Binary.UInt32.Array.from = {};
Binary.UInt32_LE.Array.from = {};

Binary.UInt8.Number.from = {};
Binary.UInt16.Number.from = {};
Binary.UInt16_LE.Number.from = {};
Binary.UInt32.Number.from = {};
Binary.UInt32_LE.Number.from = {};

//
Binary.UInt8.String.Stream = {};
Binary.UInt16.String.Stream = {};
Binary.UInt16_LE.String.Stream = {};
Binary.UInt32.String.Stream = {};
Binary.UInt32_LE.String.Stream = {};

Binary.UInt8.Array.Stream = {};
Binary.UInt16.Array.Stream = {};
Binary.UInt16_LE.Array.Stream = {};
Binary.UInt32.Array.Stream = {};
Binary.UInt32_LE.Array.Stream = {};

Binary.UInt8.Number.Stream = {};
Binary.UInt16.Number.Stream = {};
Binary.UInt16_LE.Number.Stream = {};
Binary.UInt32.Number.Stream = {};
Binary.UInt32_LE.Number.Stream = {};

//
Binary.UInt8.String.Stream.from = {};
Binary.UInt16.String.Stream.from = {};
Binary.UInt16_LE.String.Stream.from = {};
Binary.UInt32.String.Stream.from = {};
Binary.UInt32_LE.String.Stream.from = {};

Binary.UInt8.Array.Stream.from = {};
Binary.UInt16.Array.Stream.from = {};
Binary.UInt16_LE.Array.Stream.from = {};
Binary.UInt32.Array.Stream.from = {};
Binary.UInt32_LE.Array.Stream.from = {};

Binary.UInt8.Number.Stream.from = {};
Binary.UInt16.Number.Stream.from = {};
Binary.UInt16_LE.Number.Stream.from = {};
Binary.UInt32.Number.Stream.from = {};
Binary.UInt32_LE.Number.Stream.from = {};

//
Binary.UInt32.String.from.Number    = function(number) { return String.fromCharCode(number >> 24 & 0xFF, number >> 16 & 0xFF, number >> 8 & 0xFF, number & 0xFF); };
Binary.UInt32_LE.String.from.Number = function(number) { return String.fromCharCode(number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF); };
Binary.UInt16.String.from.Number    = function(number) { return String.fromCharCode(number >> 8 & 0xFF, number & 0xFF); };
Binary.UInt16_LE.String.from.Number = function(number) { return String.fromCharCode(number & 0xFF, number >> 8 & 0xFF); };
Binary.UInt8.String.from.Number     = function(number) { return String.fromCharCode(number & 0xFF); };

//
Binary.UInt32.String.from.Array    = function(number) { return String.fromCharCode(array[0] & 0xFF, array[1] & 0xFF, array[2] & 0xFF, array[3] & 0xFF); };
Binary.UInt32_LE.String.from.Array = function(number) { return String.fromCharCode(array[3] & 0xFF, array[2] & 0xFF, array[1] & 0xFF, array[0] & 0xFF); };
Binary.UInt16.String.from.Array    = function(number) { return String.fromCharCode(array[0] & 0xFF, array[1] & 0xFF); };
Binary.UInt16_LE.String.from.Array = function(number) { return String.fromCharCode(array[1] & 0xFF, array[0] & 0xFF); };
Binary.UInt8.String.from.Array     = function(number) { return String.fromCharCode(array[0] & 0xFF); };

//
Binary.UInt32.Number.from.String    = function(string) { return (string.charCodeAt(0) & 0xFF) << 24 | (string.charCodeAt(1) & 0xFF) << 16 | (string.charCodeAt(2) & 0xFF) << 8 | string.charCodeAt(3) & 0xFF; };
Binary.UInt32_LE.Number.from.String = function(string) { return (string.charCodeAt(3) & 0xFF) << 24 | (string.charCodeAt(2) & 0xFF) << 16 | (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
Binary.UInt16.Number.from.String    = function(string) { return (string.charCodeAt(0) & 0xFF) << 8 | string.charCodeAt(1) & 0xFF; };
Binary.UInt16_LE.Number.from.String = function(string) { return (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
Binary.UInt8.Number.from.String     = function(string) { return string.charCodeAt(0) & 0xFF; };

//
Binary.UInt32.Number.from.Array    = function(array) { return (array[0] & 0xFF) << 24 | (array[1] & 0xFF) << 16 | (array[2] & 0xFF) << 8 | array[3] & 0xFF; };
Binary.UInt32_LE.Number.from.Array = function(array) { return (array[3] & 0xFF) << 24 | (array[2] & 0xFF) << 16 | (array[1] & 0xFF) << 8 | array[0] & 0xFF; };
Binary.UInt16.Number.from.Array    = function(array) { return (array[0] & 0xFF) << 8 | array[1] & 0xFF; };
Binary.UInt16_LE.Number.from.Array = function(array) { return (array[1] & 0xFF) << 8 | array[0] & 0xFF; };
Binary.UInt8.Number.from.Array     = function(array) { return (array[0] & 0xFF); };


//
Binary.UInt32.Array.from.Number    = function(number) { return [number >> 24 & 0xFF, number >> 16 & 0xFF, number >> 8 & 0xFF, number & 0xFF]; };
Binary.UInt32_LE.Array.from.Number = function(number) { return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF]; };
Binary.UInt16.Array.from.Number    = function(number) { return [number >> 8 & 0xFF, number & 0xFF]; };
Binary.UInt16_LE.Array.from.Number = function(number) { return [number & 0xFF, number >> 8 & 0xFF]; };
Binary.UInt8.Array.from.Number     = function(number) { return [number & 0xFF]; };

//
Binary.UInt32.Array.from.String    = function(string) { return (string.charCodeAt(0) & 0xFF) << 24 | (string.charCodeAt(1) & 0xFF) << 16 | (string.charCodeAt(2) & 0xFF) << 8 | string.charCodeAt(3) & 0xFF; };
Binary.UInt32_LE.Array.from.String = function(string) { return (string.charCodeAt(3) & 0xFF) << 24 | (string.charCodeAt(2) & 0xFF) << 16 | (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
Binary.UInt16.Array.from.String    = function(string) { return (string.charCodeAt(0) & 0xFF) << 8 | string.charCodeAt(1) & 0xFF; };
Binary.UInt16_LE.Array.from.String = function(string) { return (string.charCodeAt(1) & 0xFF) << 8 | string.charCodeAt(0) & 0xFF; };
Binary.UInt8.Array.from.String     = function(string) { return string.charCodeAt(0) & 0xFF; };

//
Binary.UInt8.Number.Stream.from.String = function(string) {
	var array = new Array(string.length);	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		array[i] = string.charCodeAt(i) & 0xFF;
	}

	return array;
};

//
Binary.UInt16.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j] = (string.charCodeAt(i) & 0xFF) << 8 | string.charCodeAt(i + 1) & 0xFF;
	}

	return array;
};

Binary.UInt16_LE.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = (string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF;
	}

	return array;
};

//
Binary.UInt32.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		console.log(j, i);
		array[j++] = (string.charCodeAt(i) & 0xFF) << 24 | (string.charCodeAt(i + 1) & 0xFF) << 16 | (string.charCodeAt(i + 2) & 0xFF) << 8 | string.charCodeAt(i + 3) & 0xFF;
	}

	return array;
};

Binary.UInt32_LE.Number.Stream.from.String = function(string) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = (string.charCodeAt(i + 3) & 0xFF) << 24 | (string.charCodeAt(i + 2) & 0xFF) << 16 | (string.charCodeAt(i + 1) & 0xFF) << 8 | string.charCodeAt(i) & 0xFF;
	}

	return array;
};

//
Binary.UInt8.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; ++i) {
		string += String.fromCharCode(array[i] & 0xFF);
	}

	return string;
};

//
Binary.UInt16.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 2) {
		string += String.fromCharCode(array[i] & 0xFF) + string.fromCharCode(array[i + 1] & 0xFF) ;
	}

	return string;
};

Binary.UInt16_LE.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 2) {
		string += String.fromCharCode(array[i + 1] & 0xFF) + string.fromCharCode(array[i] & 0xFF) ;
	}

	return string;
};

//
Binary.UInt32.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 4) {
		string += String.fromCharCode(array[i] & 0xFF) + string.fromCharCode(array[i + 1] & 0xFF) + string.fromCharCode(array[i + 2] & 0xFF) + string.fromCharCode(array[i + 3] & 0xFF);
	}

	return string;
};

Binary.UInt32_LE.String.Stream.from.Array = function(array) {
	var string = '';	
	
	for(var i = 0, len = array.length; i < len; i += 4) {
		string += String.fromCharCode(array[i + 3] & 0xFF) + string.fromCharCode(array[i + 2] & 0xFF) + string.fromCharCode(array[i + 1] & 0xFF) + string.fromCharCode(array[i] & 0xFF);
	}

	return string;
};

//
Binary.UInt16.Array.Stream.from.String = function(array) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = [(string.charCodeAt(i) & 0xFF) << 8, string.charCodeAt(i + 1) & 0xFF];
	}

	return array;
};

Binary.UInt16_LE.Array.Stream.from.String = function(array) {
	var array = new Array(string.length / 2);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 2) {
		array[j++] = [(string.charCodeAt(i + 1) & 0xFF) << 8, string.charCodeAt(i) & 0xFF];
	}

	return array;
};

//
Binary.UInt32.Array.Stream.from.String = function(array) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = [(string.charCodeAt(i) & 0xFF) << 24, (string.charCodeAt(i + 1) & 0xFF) << 16, (string.charCodeAt(i + 2) & 0xFF) << 8, string.charCodeAt(i + 3) & 0xFF];
	}

	return array;
};

Binary.UInt32_LE.Array.Stream.from.String = function(array) {
	var array = new Array(string.length / 4);	
	
	for(var i = 0, j = 0, len = array.length; j < len; i += 4) {
		array[j++] = [(string.charCodeAt(i + 3) & 0xFF) << 24, (string.charCodeAt(i + 2) & 0xFF) << 16, (string.charCodeAt(i + 1) & 0xFF) << 8, string.charCodeAt(i + 0) & 0xFF];
	}

	return array;
};

module.exports = Binary;
