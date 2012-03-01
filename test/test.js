var 
	bitster = require("../"),
	chai = require('chai'),
	assert = chai.assert;

// TODO: Move into proto project
Array.prototype.equals = function(val) { 
	if(this.length != val.length) {
		return false;
	}

	for(var i = 0, len = this.length; i < len; ++i) {
		if(this[i] != val[i]) {
			return false;
		}
	}
	
	return true;
};

suite("Array", function() {
	test("equals", function() {
		assert.ok([1,2,3].equals([1,2,3]));
		assert.ok(![1,2,4].equals([1,2,3]));
		assert.ok(![1,2,4].equals(undefined));
		assert.ok(![1,2,4].equals(null));
	});	
});

//
suite("bitster", function() {
	suite("single values", function() {
		suite("expected values", function() {
			suite("String", function() {						
				test("UInt8", function() { assert.ok(bitster.UInt8.String.from.Number(123) == String.fromCharCode(0x7B), "Unexpected value returned"); });
				test("UInt16", function() { assert.ok(bitster.UInt16.String.from.Number(12345) == String.fromCharCode(0x30, 0x39), "Unexpected value returned"); });
				test("UInt16_LE", function() { assert.ok(bitster.UInt16_LE.String.from.Number(12345) == String.fromCharCode(0x39, 0x30), "Unexpected value returned"); });
				test("UInt32", function() { assert.ok(bitster.UInt32.String.from.Number(2309737967) == String.fromCharCode(0x89, 0xAB, 0xCD, 0xEF), "Unexpected value returned"); });
				test("UInt32_LE", function() { assert.ok(bitster.UInt32_LE.String.from.Number(2309737967) == String.fromCharCode(0xEF, 0xCD, 0xAB, 0x89), "Unexpected value returned"); });
			});

			suite("Array", function() {			
				test("UInt8", function() { assert.ok(bitster.UInt8.Array.from.Number(123).equals([0x7B]), "Unexpected value returned"); });
				test("UInt16", function() { assert.ok(bitster.UInt16.Array.from.Number(12345).equals([0x30, 0x39]), "Unexpected value returned"); });
				test("UInt16_LE", function() { assert.ok(bitster.UInt16_LE.Array.from.Number(12345).equals([0x39, 0x30]), "Unexpected value returned"); });
				test("UInt32", function() { assert.ok(bitster.UInt32.Array.from.Number(2309737967).equals([0x89, 0xAB, 0xCD, 0xEF]), "Unexpected value returned"); });
				test("UInt32_LE", function() { assert.ok(bitster.UInt32_LE.Array.from.Number(2309737967).equals([0xEF, 0xCD, 0xAB, 0x89]), "Unexpected value returned"); });
			});

			suite("Number", function() {
				suite("Unsigned", function() {
					test("UInt8", function() { assert.ok(bitster.UInt8.Number.from.String(String.fromCharCode(0x80)) == 128, "Unexpected value returned"); });
					test("UInt16", function() { assert.ok(bitster.UInt16.Number.from.String(String.fromCharCode(0x80, 0x00)) == 32768, "Unexpected value returned"); });
					test("UInt16_LE", function() { assert.ok(bitster.UInt16_LE.Number.from.String(String.fromCharCode(0x00, 0x80)) == 32768, "Unexpected value returned"); });
					test("UInt32", function() { assert.ok(bitster.UInt32.Number.from.String(String.fromCharCode(0x80, 0x00, 0x00, 0x00)) == 2147483648, "Unexpected value returned"); });
					test("UInt32_LE", function() { assert.ok(bitster.UInt32_LE.Number.from.String(String.fromCharCode(0x00, 0x00, 0x00, 0x80)) == 2147483648, "Unexpected value returned"); });
				});

				suite("Signed", function() {
					test("Int8", function() { assert.ok(bitster.Int8.Number.from.String(String.fromCharCode(0x80)) == -128, "Unexpected value returned"); });
					test("Int16", function() { assert.ok(bitster.Int16.Number.from.String(String.fromCharCode(0x80, 0x00)) == -32768, "Unexpected value returned"); });
					test("Int16_LE", function() { assert.ok(bitster.Int16_LE.Number.from.String(String.fromCharCode(0x00, 0x80)) == -32768, "Unexpected value returned"); });
					test("Int32", function() { assert.ok(bitster.Int32.Number.from.String(String.fromCharCode(0x80, 0x00, 0x00, 0x00)) == -2147483648, "Unexpected value returned"); });
					test("Int32_LE", function() { assert.ok(bitster.Int32_LE.Number.from.String(String.fromCharCode(0x00, 0x00, 0x00, 0x80)) == -2147483648, "Unexpected value returned"); });
				});
			});
		});

		suite("identity functions", function() {
			suite("String <-> Number", function() {	
				suite("unsigned values", function() {
					test("UInt8", function() { assert.ok(bitster.UInt8.Number.from.String(bitster.UInt8.String.from.Number(123)) == 123, "Unexpected value returned"); });
					test("UInt16", function() { assert.ok(bitster.UInt16.Number.from.String(bitster.UInt16.String.from.Number(12345)) == 12345, "Unexpected value returned"); });
					test("UInt16_LE", function() { assert.ok(bitster.UInt16_LE.Number.from.String(bitster.UInt16_LE.String.from.Number(12345)) == 12345, "Unexpected value returned"); });
					test("UInt32", function() { assert.ok(bitster.UInt32.Number.from.String(bitster.UInt32.String.from.Number(2309737967)) == 2309737967, "Unexpected value returned"); });
					test("UInt32_LE", function() { assert.ok(bitster.UInt32_LE.Number.from.String(bitster.UInt32_LE.String.from.Number(2309737967)) == 2309737967, "Unexpected value returned"); });
				});

				suite("signed values", function() {				
					test("Int8", function() { assert.ok(bitster.Int8.Number.from.String(bitster.UInt8.String.from.Number(-123)) == -123, "Unexpected value returned"); });
					test("Int16", function() { assert.ok(bitster.Int16.Number.from.String(bitster.UInt16.String.from.Number(-12345)) == -12345, "Unexpected value returned"); });
					test("Int16_LE", function() { assert.ok(bitster.Int16_LE.Number.from.String(bitster.UInt16_LE.String.from.Number(-12345)) == -12345, "Unexpected value returned"); });
					test("Int32", function() { assert.ok(bitster.Int32.Number.from.String(bitster.UInt32.String.from.Number(-2147483647)) == -2147483647, "Unexpected value returned"); });
					test("Int32_LE", function() { assert.ok(bitster.Int32_LE.Number.from.String(bitster.UInt32_LE.String.from.Number(-2147483647)) == -2147483647, "Unexpected value returned"); });

					test("Int8 != Int8", function() { assert.ok(bitster.Int8.Number.from.String(bitster.UInt8.String.from.Number(130)) != bitster.UInt8.Number.from.String(bitster.UInt8.String.from.Number(130)), "Unexpected value returned"); });
				});
			});

			suite("Array <-> Number", function() {	
				suite("unsigned values", function() {
					test("UInt8", function() { assert.ok(bitster.UInt8.Number.from.Array(bitster.UInt8.Array.from.Number(123)) == 123, "Unexpected value returned"); });
					test("UInt16", function() { assert.ok(bitster.UInt16.Number.from.Array(bitster.UInt16.Array.from.Number(12345)) == 12345, "Unexpected value returned"); });
					test("UInt16_LE", function() { assert.ok(bitster.UInt16_LE.Number.from.Array(bitster.UInt16_LE.Array.from.Number(12345)) == 12345, "Unexpected value returned"); });
					test("UInt32", function() { assert.ok(bitster.UInt32.Number.from.Array(bitster.UInt32.Array.from.Number(2309737967)) == 2309737967, "Unexpected value returned"); });
					test("UInt32_LE", function() { assert.ok(bitster.UInt32_LE.Number.from.Array(bitster.UInt32_LE.Array.from.Number(2309737967)) == 2309737967, "Unexpected value returned"); });
				});

				suite("signed values", function() {				
					test("Int8", function() { assert.ok(bitster.Int8.Number.from.Array(bitster.UInt8.Array.from.Number(-123)) == -123, "Unexpected value returned"); });
					test("Int16", function() { assert.ok(bitster.Int16.Number.from.Array(bitster.UInt16.Array.from.Number(-12345)) == -12345, "Unexpected value returned"); });
					test("Int16_LE", function() { assert.ok(bitster.Int16_LE.Number.from.Array(bitster.UInt16_LE.Array.from.Number(-12345)) == -12345, "Unexpected value returned"); });
					test("Int32", function() { assert.ok(bitster.Int32.Number.from.Array(bitster.UInt32.Array.from.Number(-2147483647)) == -2147483647, "Unexpected value returned"); });
					test("Int32_LE", function() { assert.ok(bitster.Int32_LE.Number.from.Array(bitster.UInt32_LE.Array.from.Number(-2147483647)) == -2147483647, "Unexpected value returned"); });

					test("UInt8 != Int8", function() { assert.ok(bitster.Int8.Number.from.Array(bitster.UInt8.Array.from.Number(130)) != bitster.UInt8.Number.from.String(bitster.UInt8.String.from.Number(130)), "Unexpected value returned"); });
				});
			});

			suite("Array <-> String", function() {	
				suite("unsigned values", function() {
					test("UInt8", function() { assert.ok(bitster.UInt8.Array.from.String(bitster.UInt8.String.from.Array([0xFE])).equals([0xFE]), "Unexpected value returned"); });
					test("UInt16", function() { assert.ok(bitster.UInt16.Array.from.String(bitster.UInt16.String.from.Array([0xFE, 0xED])).equals([0xFE, 0xED]), "Unexpected value returned"); });
					test("UInt16_LE", function() { assert.ok(bitster.UInt16_LE.Array.from.String(bitster.UInt16_LE.String.from.Array([0xFE, 0xED])).equals([0xFE, 0xED]), "Unexpected value returned"); });
					test("UInt32", function() { assert.ok(bitster.UInt32.Array.from.String(bitster.UInt32.String.from.Array([0xFE, 0xED, 0xFA, 0xCE])).equals([0xFE, 0xED, 0xFA, 0xCE]), "Unexpected value returned"); });
					test("UInt32_LE", function() { assert.ok(bitster.UInt32_LE.Array.from.String(bitster.UInt32_LE.String.from.Array([0xFE, 0xED, 0xFA, 0xCE])).equals([0xFE, 0xED, 0xFA, 0xCE]), "Unexpected value returned"); });
				});
			});
		});
	});
});
