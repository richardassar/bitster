# bitster

!["Stick 'em up!"](http://gangster-movies.com/wp-content/uploads/2010/01/gangster-movies-scarface-1932.jpg "Stick 'em up!")

> So what do you want?! How do you want it?! How much you gonna' give me?!

## About

bitster is a binary transcoding utility module which converts binary data between native JavaScript data-types and supports single values and streams.

Say what data type you want, how you want it, what input data type you will be providing and bitster will do the rest.

That's... 

* What do you want? ... `bitster.UInt32` 
* How you want it? ... `bitster.UInt32.Number` 
* What you gonna give me? ... `bitster.UInt32.Number.from.String`

Simple.

## Example usage

Converting single values:

`bitster.UInt16.Number.from.String(stringData)` means "Give me an unsigned int16 in Number format from a String".
`bitster.Int32_LE.String.from.Array(arrayData)` means "Give me an signed little-endian int32 in Array format from a String".

Converting streams:

`bitster.UInt32.Array.Stream.from.String(stringData)` means "Give me an unsigned int32 Stream in Array format from a String.

## Types

* Int8 - Signed int8 (char)
* Int16 - Signed int16 (short)
* Int16_LE - Signed little-endian int16 (short)
* Int32 - Signed int32 (int)
* Int32_LE - Signed little-endian int32 (int)
* UInt8 - Unsigned int8 (char)
* UInt16 - Unsigned int16 (short)
* UInt16_LE - Unsigned little-endian int16 (short)
* UInt32 - Unsigned int32 (int)
* UInt32_LE - Unsigned little-endian int32 (int)

## TODO

* Unit tests
* Benchmarking
