# bit$ter

!["Stick 'em up!"](http://gangster-movies.com/wp-content/uploads/2010/01/gangster-movies-scarface-1932.jpg "Stick 'em up!")

> "As far back as I can remember, I always wanted to be a gangster."

## About

bit$ter traffics shipments of binary data between native JavaScript data-types.

Packing and unpacking data can be slow and painful. bit$ter attempts to alleviate that pain with a shotgun... hold it... **tommy gun**, approach.

It has been written with both speed and ease of use in mind. Say what you want, how you want it, what input you will provide and bit$ter will provide the goods.

## Examples

Converting single values:

* `bitster.Unsigned.Number.from.Long.String(stringData)` means "Unpack me an unsigned Number from a Long (32-bit) integer ".
* `bitster.Short.String.from.Number(number)` means "Pack me a Short (16-bit) integer into string format from a Number".

Converting streams:

* `bitster.Byte.Array.Stream.from.Byte.String.Stream` means "Convert a Byte stream in String representation to a Byte Array stream".

For more examples see the examples/ directory. [**TODO**]

## Installation

Install bit$ter through **npm**

`npm install bitster`

and bundle with **Browserify**.

`browserify example.js -o bundle.js`

Alternatively add bit$ter to your **Ender** bundle

`ender build bitster`

## Tests

Install the devDependancies ...

`npm install -d`

and run ...

`make test`

sorted.

## Representation

Bit$ter converts binary data between String, Array and Number representations.

They look like this ...

* A is the low byte (0x00 -> 0xFF)
* D is the high byte (0x00 -> 0xFF)

**String**

* "DCBA" - Big-endian Long
* "ABCD" - Little-endian Long
* "BA" - Big-endian Short
* "AB" - Little-endian Short

**Array**

* [D, C, B, A] - Big-endian Long
* [A, B, C, D] - Little-endian Long
* [B, A] - Big-endian Short
* [A, B] - Little-endian Short

**Number**

Numbers are a direct numerical representation of the binary data, they can be **signed** or **unsigned**.

**Streams**

Streams are sequences of values represented as arrays. Each element of a stream is either a packed value (in String or Array type) or a Number. 

A Long Array stream looks like this: 

`[[A, B, C, D], [A, B, C, D], [A, B, C, D]]`

A Long String stream looks like this:

`['ABCD', 'ABCD', 'ABCD', 'ABCD']`

**Raw streams**

Raw streams break bytes into separate elements.

A Raw Long Array stream looks like this: 

`[A, B, C, D, A, B, C, D, A, B, C, D]`

A Raw Long String stream looks like this:

`'ABCDABCDABCDABCD'`

Raw strings can be build with simple append/push operations, but support for formatted binary stream building is coming... soon...

## TODO

* Stream.printf - formatted binary stream building.
* Benchmarks