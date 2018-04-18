/**
 * Weeak Maps
 * 1) Hold's weak refs Key and wms are GC'ed if no refs found. values are also gc'ed when key is GC'ed
 * 2) can't be iterated
 * 3) uses: - a) extending an object without attaching property to it. useful for frozen objects.
 *            b) holding private data associated to an object
 */

 require('./testVar')

//  console.log('unexcpectedGlobal ==>', unexpectedGlobal)

//  console.log('unexcpectedGlobal ==>', global.gen)
