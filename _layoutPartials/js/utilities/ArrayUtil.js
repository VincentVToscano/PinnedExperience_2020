/**
 * @author:     Vincent V. Toscano
 * @version:    1.1
 * @date:       10/22/12
 * @time:       2:10 PM
 * ArrayUtil --- Utility designed to make working with Array's easier. Use like a static class.
 */
var ArrayUtil = (function () {
	/**
	 * rmByID --- Remove object from array by ID.
	 * @param arr   Source array
	 * @param id    ID to search for
	 */
    function rmByID (arr, id) {
		var len = arr.length;
		while(len--) {
			if(arr[len].id == id) {
				arr.splice(len, 1);
				break;
			}
		}
    }

	/**
	 * rmByValue --- Remove array element with the matching value.
	 * @param arr   Source array
	 * @param val   Value to search for
	 */
    function rmByValue(arr, val) {
	    var len = arr.length;
	    while(len--) {
		    if(arr[len] == val) {
			    arr.splice(len, 1);
			    break;
		    }
	    }
    }

	/**
	 * rmByIndex --- Remove array element by index number.
	 * @param arr   Source array
	 * @param arrIndex Array index
	 */
    function rmByIndex(arr, arrIndex) {
        arr.splice(arrIndex, 1);
    }

	/**
	 * fdByID --- Find object in array by ID.
	 * @param arr   Source array
	 * @param id    ID to search for
	 * @returns {*} If found, returns an array  [ array element, element's index in source array] if not found returns false.
	 */
    function fdByID (arr, id) {
	    var len = arr.length;
	    while(len--) {
		    if(arr[len].id == id) {
			    arr.splice(len, 1);
			    return [arr[len],len];
			    break;
		    }
	    }
        return false;
    }

	/**
	 * shiftLeft --- Shift all elements of array to the left.  Wrap index[0] around to the end.
	 * @param arr
	 */
	function shiftLeft(arr) {
		var removed = arr.splice(arr.length - 1, 1);
		arr.unshift(removed[0]);
	}

	/**
	 * shiftRight --- Shift all elements of array to the right. Wrap last index to index[0].
	 * @param arr
	 */
	function shiftRight(arr) {
		arr.push(arr.shift())
	}

	/**
	 *
	 * @param arr   Source array
	 * @param from Original index
	 * @param to Destination index
	 * @usage ArrayUtil.move(0,2);//["b", "c", "a", "d", "e"]
	 * @returns {*}
	 */
	function move(arr, from,to){
		return arr.splice(to,0,arr.splice(from,1)[0]);
	}

    return {
        removeByID: rmByID,
        removeByValue: rmByValue,
        removeByIndex: rmByIndex,
        findByID: fdByID,
	    shiftLeft: shiftLeft,
	    shiftRight: shiftRight,
	    move:move
    };
})();