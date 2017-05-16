/*!
 * NOTICE - T20170107
 * 
 * The "xeno-common-javascript" is free software, licensed under the Apache License, Version 2.0.
 * Commercial and non-commercial use are permitted in compliance with this license.
 * You may obtain a copy of the license at: "http://www.apache.org/licenses/LICENSE-2.0".
 * In addition, a copy of the license is included with this distribution.
 * 
 * Copyright (c) 2017 Kai Feng, All rights reserved.
 * The source code is available at: "https://github.com/kfeng2015/xeno-common-javascript".
 */

/**
 * @ignore
 */
var xc_global_ensure = function(result, message) {

	if(result !== true) {
		throw new Error(message);
	}
};

(function() {

	window.xeno = {
		common: {
			lang: {},
			text: {},
			util: {}
		}
	};

	xeno.common.onCompleteCallbacks = [];

})();

/**
 * @class
 * <p>
 * A class provides functions to test data types.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 */
xeno.common.lang.Data = (function () {
	var Data = null;

	xeno.common.onCompleteCallbacks.push(function() {
		Data = xeno.common.lang.Data;
	});

	return {

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is undefined or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isUndefined: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			return typeof(data) === "undefined";
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is null or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isNull: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			return data === null;
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is undefined, null or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isUndefinedOrNull: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			return Data.isUndefined(data) || Data.isNull(data);
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is a string or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isString: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			try {
				return typeof(data) === "string" || data.constructor === String;

			} catch(err) {
				return false;
			}
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is a number or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isNumber: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			return !Data.isString(data) && !isNaN(parseFloat(data)) && isFinite(data);
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is a boolean or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isBoolean: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			try {
				return typeof(data) === "boolean" || data.constructor === Boolean;

			} catch(err) {
				return false;
			}
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is an array or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isArray: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			try {
				return data.constructor === Array;

			} catch(err) {
				return false;
			}
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is a date or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isDate: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			try {
				return data.constructor === Date;

			} catch(err) {
				return false;
			}
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is a regular expression or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isRegExp: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			try {
				return data.constructor === RegExp;

			} catch(err) {
				return false;
			}
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "data" is a function or not.
		 * </p>
		 * 
		 * @param data
		 * 			The data to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isFunction: function(data) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'data', index: 0");

			try {
				return typeof(data) === "function" || data.constructor === Function;

			} catch(err) {
				return false;
			}
		}

	};

})();

/**
 * @class
 * <p>
 * This class allows you register event listeners and fire them when need.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 */
xeno.common.lang.EventDispatcher = function() {
	var Data = xeno.common.lang.Data;

	/**
	 * @description
	 * <p>
	 * Regisiters an event callback function for this instance.
	 * </p>
	 * 
	 * @param type
	 * 			The event type.
	 * @param func
	 * 			The callback function.
	 */
	this.addEventListener = function(type, func) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'type', index: 0");
		xc_global_ensure(arguments.length > 1, "Missing required argument 'func', index: 1");
		xc_global_ensure(Data.isString(type), "The argument 'type' is not a string");
		xc_global_ensure(Data.isFunction(func), "The argument 'func' is not a function");

		var items = dict[type];

		if(Data.isUndefined(items)) {
			dict[type] = [];
			items = dict[type];
		}

		if(items.indexOf(func) < 0) {
			items.push(func);
		}
	};

	/**
	 * @description
	 * <p>
	 * Unregisiters an event callback function from this instance.
	 * </p>
	 * 
	 * @param type
	 * 			The event type.
	 * @param func
	 * 			The callback function.
	 */
	this.removeEventListener = function(type, func) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'type', index: 0");
		xc_global_ensure(arguments.length > 1, "Missing required argument 'func', index: 1");
		xc_global_ensure(Data.isString(type), "The argument 'type' is not a string");
		xc_global_ensure(Data.isFunction(func), "The argument 'func' is not a function");

		var items = dict[type];

		if(!Data.isUndefined(items)) {
			var index = items.indexOf(func);

			if(index >= 0) {
				items.splice(index, 1);

				if(items.length === 0) {
					delete dict[type];
				}
			}
		}
	};

	/**
	 * @description
	 * <p>
	 * Checkes whether there is a certain event callback function regisitered in this instance.
	 * </p>
	 * 
	 * @param type
	 * 			The event type.
	 * @param func
	 * 			The callback function.
	 * 
	 * @return The boolean.
	 */
	this.hasEventListener = function(type, func) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'type', index: 0");
		xc_global_ensure(arguments.length > 1, "Missing required argument 'func', index: 1");
		xc_global_ensure(Data.isString(type), "The argument 'type' is not a string");
		xc_global_ensure(Data.isFunction(func), "The argument 'func' is not a function");

		var items = dict[type];

		try {
			return items.indexOf(func) >= 0;

		} catch(err) {
			return false;
		}
	};

	/**
	 * @description
	 * <p>
	 * Dispatches a certain event, registered callbacks will be fired.
	 * </p>
	 * 
	 * @param type
	 * 			The event type.
	 * @param target
	 * 			The target object of dispatching this event.
	 * @param data
	 * 			The carry on data, optional.<br/>
	 * 			The default value is: undefined.
	 */
	this.dispatchEvent = function(type, target, data) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'type', index: 0");
		xc_global_ensure(arguments.length > 1, "Missing required argument 'target', index: 1");
		xc_global_ensure(Data.isString(type), "The argument 'type' is not a string");

		var items = dict[type];

		try {

			for(var i = 0; i < items.length; i += 1) {

				try {

					items[i]({
						type: type,
						target: target,
						data: data
					});

				} catch(err) {
					// Does nothing.
				}
			}

		} catch(err) {
			// Does nothing.
		}
	};

	/**
	 * @ignore
	 */
	this.findEventListeners = function(type) {
		return dict[type];
	};

	var dict = {};
};

/**
 * @class
 * <p>
 * This class has implemented the globally unique identifier (GUID) generation.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 */
xeno.common.lang.GUID = (function () {

	return {

		/**
		 * @description
		 * <p>
		 * Generates and returns a GUID value in "########-####-4###-Y###-############" (lowercase) format.
		 * </p>
		 * <ul>
		 * 	<li>Bits 12-15 of the "time_hi_and_version" field to 0010.</li>
		 * 	<li>Bits 6-7 of the "clock_seq_hi_and_reserved" field to 01.</li>
		 * </ul>
		 * 
		 * @return
		 * 			The string.
		 */
		nextValue: function() {

			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
				var r = Math.random() * 16 | 0;
				var v = (c === "x") ? r : (r & 0x3 | 0x8);

				return v.toString(16);
			});
		}

	};

})();

/**
 * @class
 * <p>
 * The class is designed for handling pagination calculations.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 * 
 * @param dataTotal
 * 			The total data count.
 * @param pageSize
 * 			The page size.
 * @param pageNum
 * 			The current page number.
 */
xeno.common.lang.Paging = function(dataTotal, pageSize, pageNum) {
	var NumberUtils = xeno.common.util.NumberUtils;

	xc_global_ensure(arguments.length > 0, "Missing required argument 'dataTotal', index: 0");
	xc_global_ensure(arguments.length > 1, "Missing required argument 'pageSize', index: 1");
	xc_global_ensure(arguments.length > 2, "Missing required argument 'pageNum', index: 2");
	xc_global_ensure(NumberUtils.isInt(dataTotal), "The argument 'dataTotal' is not an integer number");
	xc_global_ensure(NumberUtils.isInt(pageSize), "The argument 'pageSize' is not an integer number");
	xc_global_ensure(NumberUtils.isInt(pageNum), "The argument 'pageNum' is not an integer number");

	/**
	 * @description
	 * <p>
	 * Returns the current page number.
	 * </p>
	 * 
	 * @return The number.
	 */
	this.getPageNum = function() {
		return pageNum;
	}

	/**
	 * @description
	 * <p>
	 * Returns the total page count.
	 * </p>
	 * 
	 * @return The number.
	 */
	this.getPageTotal = function() {
		return pageTotal;
	}

	/**
	 * @description
	 * <p>
	 * Returns the page size.
	 * </p>
	 * 
	 * @return The number.
	 */
	this.getPageSize = function() {
		return pageSize;
	}

	/**
	 * @description
	 * <p>
	 * Returns the total data count.
	 * </p>
	 * 
	 * @return The number.
	 */
	this.getDataTotal = function() {
		return dataTotal;
	}

	/**
	 * @ignore
	 */
	var calculatePageTotal = function(dataTotal, pageSize) {

		if (dataTotal === MIN_DATA_TOTAL) {
			return MIN_PAGE_NUM;
		}

		return Math.ceil(dataTotal / pageSize);
	};

	/**
	 * @ignore
	 */
	var calculatePageNum = function(pageTotal, pageNum) {

		if (pageTotal === MIN_PAGE_NUM) {
			return MIN_PAGE_NUM;
		}

		if (pageNum <= MIN_PAGE_NUM) {
			return MIN_PAGE_NUM + 1;
		}

		if (pageNum >= pageTotal) {
			return pageTotal;
		}

		return pageNum;
	};

	var MIN_PAGE_NUM = 0;
	var MIN_PAGE_SIZE = 1;
	var MIN_DATA_TOTAL = 0;

	var dataTotal = dataTotal < MIN_DATA_TOTAL ? MIN_DATA_TOTAL : dataTotal;
	var pageSize = pageSize < MIN_PAGE_SIZE ? MIN_PAGE_SIZE : pageSize;
	var pageTotal = calculatePageTotal(dataTotal, pageSize);
	var pageNum = calculatePageNum(pageTotal, pageNum);
};

/**
 * @class
 * <p>
 * The timer class (extends from {@link xeno.common.lang.EventDispatcher}) let you run code on a specified time sequence.
 * Use the {@link xeno.common.lang.Timer#start} function to start a timer.
 * Add an event listener for the timer event to set up code to be run on the timer interval.
 * </p>
 * <p>
 * You can create timer objects to run once or repeat at specified intervals to execute code on a schedule.
 * Depending on available memory and other factors, the runtime may dispatch events at slightly offset intervals, memory-intensive scripts may also offset the events.
 * </p>
 * <p>
 * Because JavaScript uses single thread to execute code, the interval of each progress executed depends on the time of callbacks execution.
 * For an example, if we create a timer with 3000 millisecond interval and 2 repeat count, then add a "progress" event callback on it, then start it.
 * The first time to fire the callback will after 3000 millisecond, but the next time of firing this callback will depend on how long the callback executed and plus another 3000 millisecond.
 * If the callback takes 1000 millisecond to finish the execution, then you will wait 4000 millisecond to get the callback to be fired again.
 * Further more, if multi-callbacks have been registered on it, the time of execution will be added up.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 * 
 * @example
 * <b>Examples</b>
 * 
 * var timerProgressHandler = function(evt) {
 * 
 * 	[evt]
 * 	This object contains data from the dispatched timer instance.
 * 	--------------------------------------------------
 * 	|	"evt": {
 * 	|		"type": The string, refers to the event type, the possible value is: "progress".
 * 	|		"target": The target timer instance of this event to be dispatched.
 * 	|		"data": {
 * 	|			"running": The boolean, the timer's current state.
 * 	|			"delay": The number, the delay interval between timer events, in milliseconds.
 * 	|			"currentCount": The number, the total number of times the timer has fired since it started.
 * 	|			"repeatCount": The number, specifies the number of repetitions.
 * 	|		}
 * 	|	}
 * 	--------------------------------------------------
 * };
 * 
 * var timerCompleteHandler = function(evt) {
 * 
 * 	[evt]
 * 	This object contains data from the dispatched timer instance.
 * 	--------------------------------------------------
 * 	|	"evt": {
 * 	|		"type": The string, refers to the event type, the possible value is: "complete".
 * 	|		"target": The target timer instance of this event to be dispatched.
 * 	|		"data": {
 * 	|			"running": The boolean, the timer's current state.
 * 	|			"delay": The number, the delay interval between timer events, in milliseconds.
 * 	|			"currentCount": The number, the total number of times the timer has fired since it started.
 * 	|			"repeatCount": The number, specifies the number of repetitions.
 * 	|		}
 * 	|	}
 * 	--------------------------------------------------
 * };
 * 
 * var timer = xeno.common.lang.Timer(5000, 3);
 * timer.addEventListener("progress", timerProgressHandler);
 * timer.addEventListener("complete", timerCompleteHandler);
 * timer.start();
 * 
 * @param delay
 * 			The delay interval between timer events, in milliseconds.<br/>
 * 			An interval lower than 20 milliseconds is not recommended, so it will be converted into 20 automatically.
 * @param repeatCount
 * 			Specifies the number of repetitions, optional.<br/>
 * 			A negative value means the timer repeats indefinitely.<br/>
 * 			Otherwise, the timer runs the specified number of times and then stops and the "complete" event will be dispatched.<br/>
 * 			The default value is: -1.
 */
xeno.common.lang.Timer = function(delay, repeatCount) {
	var EventDispatcher = xeno.common.lang.EventDispatcher;
	var NumberUtils = xeno.common.util.NumberUtils;

	xc_global_ensure(arguments.length > 0, "Missing required argument 'delay', index: 0");
	xc_global_ensure(NumberUtils.isInt(delay), "The argument 'delay' is not an integer number");
	xc_global_ensure(arguments.length > 1 ? NumberUtils.isInt(repeatCount) : true, "The argument 'repeatCount' is not an integer number");

	EventDispatcher.call(this);

	/**
	 * @description
	 * <p>
	 * Starts the timer, if it is not running and within the repeat range.
	 * Otherwise, does nothing.
	 * A "progress" event will be dispatched out during each interval calling.
	 * And the "complete" event will be dispatched out when the timer complete and stop.
	 * </p>
	 */
	this.start = function() {

		if(running === false && finished === false) {
			running = true;
			doTask();
		}
	};

	/**
	 * @description
	 * <p>
	 * Stops the timer, if it is running.
	 * Otherwise, does nothing.
	 * </p>
	 */
	this.stop = function() {

		try {
			clearTimeout(progress);

		} catch(err) {
			// Does nothing.
		}

		progress = null;
		running = false;
	};

	/**
	 * @description
	 * <p>
	 * Stops the timer, if it is running, and sets current count back to 0, like the reset button of a stopwatch.
	 * Then, when {@link xeno.common.lang.Timer#start} is called, the timer instance runs for the specified number of repetitions.
	 * </p>
	 */
	this.reset = function() {
		instance.stop();
		currentCount = 0;
		finished = false;
	};

	/**
	 * @description
	 * <p>
	 * Returns the timer's current state.
	 * </p>
	 * 
	 * @return The boolean.
	 */
	this.isRunning = function() {
		return running;
	};

	/**
	 * @description
	 * <p>
	 * Returns the delay interval between timer events, in milliseconds.
	 * </p>
	 * 
	 * @return The number.
	 */
	this.getDelay = function() {
		return fixedDelay;
	};

	/**
	 * @description
	 * <p>
	 * Returns the total number of times the timer has fired since it started.
	 * </p>
	 * 
	 * @return The number.
	 */
	this.getCurrentCount = function() {
		return currentCount;
	};

	/**
	 * @description
	 * <p>
	 * Returns the specified the number of repetitions.
	 * A negative value means the timer repeats indefinitely.
	 * </p>
	 * 
	 * @return The number.
	 */
	this.getRepeatCount = function() {
		return fixedRepeatCount;
	};

	/**
	 * @ignore
	 */
	var doTask = function() {

		if(fixedRepeatCount >= 0 && currentCount >= fixedRepeatCount) {
			instance.stop();
			finished = true;

			instance.dispatchEvent("complete", instance, {
				running: running,
				delay: fixedDelay,
				currentCount: currentCount,
				repeatCount: fixedRepeatCount
			});

		} else {

			progress = setTimeout(function() {
				progress = null;
				currentCount += 1;

				instance.dispatchEvent("progress", instance, {
					running: running,
					delay: fixedDelay,
					currentCount: currentCount,
					repeatCount: fixedRepeatCount
				});

				if(running === true && finished === false) {
					doTask();
				}

			}, fixedDelay);
		}
	};

	var fixedDelay = delay < 20 ? 20 : delay;
	var fixedRepeatCount = arguments.length < 2 ? -1 : (repeatCount < 0 ? -1 : repeatCount);

	var instance = this;
	var currentCount = 0;
	var progress = null;
	var running = false;
	var finished = false;
};

/**
 * @class
 * <p>
 * The class is designed for handling URL constructions.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 * 
 * @param baseURL
 * 			The base URL without parameters and anchor.
 */
xeno.common.lang.URL = function(baseURL) {
	var Data = xeno.common.lang.Data;

	xc_global_ensure(arguments.length > 0, "Missing required argument 'baseURL', index: 0");
	xc_global_ensure(Data.isString(baseURL), "The argument 'baseURL' is not a string");

	/**
	 * @description
	 * <p>
	 * Returns the URL parameter by name.
	 * </p>
	 * 
	 * @return The string.
	 */
	this.getParam = function(name) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'name', index: 0");
		xc_global_ensure(Data.isString(name), "The argument 'name' is not a string");

		var found = params[name];

		return Data.isUndefined(found) ? null : found;
	};

	/**
	 * @description
	 * <p>
	 * Sets the URL parameter, if the named parameter exists, replaced by current setting name-value pair one.
	 * The "Object.toString()" will be used to convert the value to a string.
	 * </p>
	 * 
	 * @param name
	 * 			The name.
	 * @param value
	 * 			The value.
	 */
	this.setParam = function(name, value) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'name', index: 0");
		xc_global_ensure(arguments.length > 1, "Missing required argument 'value', index: 1");
		xc_global_ensure(Data.isString(name), "The argument 'name' is not a string");

		params[name] = "" + value;
	};

	/**
	 * @description
	 * <p>
	 * Removes the URL parameter by name.
	 * </p>
	 * 
	 * @param name
	 * 			The name.
	 */
	this.removeParam = function(name) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'name', index: 0");
		xc_global_ensure(Data.isString(name), "The argument 'name' is not a string");

		delete params[name];
	};

	/**
	 * @description
	 * <p>
	 * Returns the URL anchor.
	 * </p>
	 * 
	 * @return The string.
	 */
	this.getAnchor = function() {
		return anchor;
	};

	/**
	 * @description
	 * <p>
	 * Sets the URL anchor.
	 * </p>
	 * 
	 * @param name
	 * 			The name.
	 */
	this.setAnchor = function(name) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'name', index: 0");
		xc_global_ensure(Data.isString(name), "The argument 'name' is not a string");

		anchor = name;
	};

	/**
	 * @description
	 * <p>
	 * Removes the URL anchor.
	 * </p>
	 */
	this.removeAnchor = function() {
		anchor = null;
	};

	/**
	 * <p>
	 * Returns the URL with the string.
	 * If any parameters and anchor exist, names and values of them will be encoded by using "encodeURIComponent".
	 * </p>
	 * 
	 * @return The string.
	 */
	this.toURL = function() {

		return buildURL(function(item) {
			return encodeURIComponent(item);
		});
	};

	/**
	 * @ignore
	 */
	this.toString = function() {

		return buildURL(function(item) {
			return item;
		});
	};

	/**
	 * @ignore
	 */
	var buildURL = function(callback) {
		var queryParams = [];
		var queryAnchor = "";

		for(var i in params) {
			queryParams.push(callback(i) + "=" + callback(params[i]));
		}

		if(anchor !== null) {
			queryAnchor = callback(anchor);
		}

		var pageParams = queryParams.length > 0 ? ("?" + queryParams.join("&")) : "";
		var pageAnchor = queryAnchor.length > 0 ? ("#" + queryAnchor) : "";

		return baseURL + pageParams + pageAnchor;
	};

	var params = {};
	var anchor = null;
};

/**
 * @class
 * <p>
 * The class is designed for converting a date into a readable format by the pattern provides.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 * 
 * @example
 * <b>Examples</b>
 * 
 * Assumes the "pattern" is: "yyyy-MM-dd"
 * Assumes the "date" is: new Date(2000, 9, 1, 2, 3, 4, 5)
 * 
 * new xeno.common.text.DateFormat(pattern).format(date) = "2000-10-01"
 * 
 * @example
 * <b>Patterns</b>
 * 
 * yy: short year value (e.g., 09)
 * yyyy: full year value (e.g., 2009)
 * M: month value (1 - 12)
 * MM: month value (01 - 12)
 * d: date value (1 - 31)
 * dd: date value (01 - 31)
 * h: hour value (1 - 12)
 * hh: hour value (01 - 12)
 * H: hour value (0 - 23)
 * HH: hour value (00 - 23)
 * m: minute value (0 - 59)
 * mm: minute value (00 - 59)
 * s: second value (0 - 59)
 * ss: second value (00 - 59)
 * S: millisecond value (0 - 999)
 * SSS: millisecond value (000 - 999)
 * a: maker (am / pm)
 * A: maker (AM / PM)
 * E: day in week value (1 - 7, 1 means Monday & 7 means Sunday according to ISO-8601 definition)
 * 
 * @param pattern
 * 			The pattern to be used.
 */
xeno.common.text.DateFormat = function(pattern) {
	var Data = xeno.common.lang.Data;
	var NumberFormat = xeno.common.text.NumberFormat;
	var DateUtils = xeno.common.util.DateUtils;

	xc_global_ensure(arguments.length > 0, "Missing required argument 'pattern', index: 0");
	xc_global_ensure(Data.isString(pattern), "The argument 'pattern' is not a string");

	/**
	 * @description
	 * <p>
	 * Formats the date.
	 * </p>
	 * 
	 * @param date
	 * 			The date to be formatted.
	 * 
	 * @return
	 * 			The string.
	 */
	this.format = function(date) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'date', index: 0");
		xc_global_ensure(Data.isDate(date), "The argument 'date' is not a date");

		var year = date.getFullYear().toString();
		var shortYear = year.substring(2);
		var month = date.getMonth();
		var day = date.getDate();
		var hour24 = date.getHours();
		var hour12 = hour24 < 12 ? hour24 : hour24 - 12;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		var millisecond = date.getMilliseconds();
		var dayOfWeek = DateUtils.getDayOfWeek(date);
		var marker = getMarker(hour24, minute, second, millisecond);

		return pattern.replace(/yyyy/g, year)
			.replace(/yy/g, shortYear)
			.replace(/MM/g, to2Digit.format(month + 1))
			.replace(/M/g, (month + 1))
			.replace(/dd/g, to2Digit.format(day))
			.replace(/d/g, day)
			.replace(/hh/g, to2Digit.format(hour12))
			.replace(/h/g, hour12)
			.replace(/HH/g, to2Digit.format(hour24))
			.replace(/H/g, hour24)
			.replace(/mm/g, to2Digit.format(minute))
			.replace(/m/g, minute)
			.replace(/ss/g, to2Digit.format(second))
			.replace(/s/g, second)
			.replace(/SSS/g, to3Digit.format(millisecond))
			.replace(/S/g, millisecond)
			.replace(/a/g, marker)
			.replace(/A/g, marker.toUpperCase())
			.replace(/E/g, dayOfWeek);
	};

	/**
	 * @ignore
	 */
	var getMarker = function(hour, minute, second, millisecond) {

		if(hour < 12 || (hour === 12 && minute === 0 && second === 0 && millisecond === 0)) {
			return MARKERS[0];
		}

		return MARKERS[1];
	};

	var MARKERS = ["am", "pm"];

	var to2Digit = new NumberFormat("00");
	var to3Digit = new NumberFormat("000");
};

/**
 * @class
 * <p>
 * The class is designed for converting a number into a readable format by the pattern provides.
 * The number could be rounded to the specified number of decimal places by the "pattern" provides, the "Number.toFixed(n)" action will be processed.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 * 
 * @example
 * <b>Examples</b>
 * 
 * new xeno.common.text.NumberFormat("00000.##").format(1000.2) = "01000.2"
 * new xeno.common.text.NumberFormat("00.00").format(1.235) = "01.24"
 * 
 * @example
 * <b>Patterns</b>
 * 
 * 0: digit
 * #: digit, zero shows as absent
 * .: decimal separator (should appear only once and not start or end with)
 * 
 * @param pattern
 * 			The pattern to be used.
 */
xeno.common.text.NumberFormat = function(pattern) {
	var Data = xeno.common.lang.Data;
	var StringUtils = xeno.common.util.StringUtils;

	xc_global_ensure(arguments.length > 0, "Missing required argument 'pattern', index: 0");
	xc_global_ensure(Data.isString(pattern), "The argument 'pattern' is not a string");
	xc_global_ensure(/^((0+)|(#+0*))(\.((#+)|(0+#*)))?$/.test(pattern), "Invalid number pattern: " + pattern);

	/**
	 * @description
	 * <p>
	 * Formats the number.
	 * </p>
	 * 
	 * @param num
	 * 			The number to be formatted.
	 * 
	 * @return
	 * 			The string.
	 */
	this.format = function(num) {
		xc_global_ensure(arguments.length > 0, "Missing required argument 'num', index: 0");
		xc_global_ensure(Data.isNumber(num), "The argument 'num' is not a number");

		var currentItems = StringUtils.removeStart(num.toFixed(decimalMasks.length), "-").split(".");
		var integerItems = currentItems[0].split("").reverse();
		var decimalItems = currentItems.length > 1 ? currentItems[1].split("") : [];

		var integerParts = [];
		var decimalParts = [];

		if(integerItems.length >= integerMasks.length) {
			integerParts = integerItems.concat([]);

		} else {
			match(integerMasks, integerItems, integerParts);
		}

		match(decimalMasks, decimalItems, decimalParts);

		var integerValue = integerParts.reverse().join("");
		var decimalValue = StringUtils.removeEnd("." + decimalParts.join(""), ".");

		return (num < 0 ? "-" : "") + integerValue + decimalValue;
	};

	/**
	 * @ignore
	 */
	var match = function(masks, items, parts) {

		for(var i = 0; i < masks.length; i += 1) {
			var mask = masks[i];
			var item = items[i];
			var pass = Data.isUndefined(item) || item === "0";

			if(mask === "#" && pass) {
				parts.push("");

			} else if(mask === "0" && pass) {
				parts.push("0");

			} else {
				parts.push(item);
			}
		}
	};

	var patternMasks = pattern.split(".");
	var integerMasks = patternMasks[0].split("").reverse();
	var decimalMasks = patternMasks.length > 1 ? patternMasks[1].split("") : [];
};

/**
 * @class
 * <p>
 * A set of utilities for array operations.
 * </p>
 * <p>
 * When you use this class for some certain functions which have return values, a new array instance will be created and return.
 * The original array passes in will not be edited, but elements references in the new array will be the same as their in the original array.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 */
xeno.common.util.ArrayUtils = (function () {
	var Data = null;
	var NumberUtils = null;

	xeno.common.onCompleteCallbacks.push(function() {
		Data = xeno.common.lang.Data;
		NumberUtils = xeno.common.util.NumberUtils;
	});

	return {

		/**
		 * @description
		 * <p>
		 * Checks whether the "arr" contains an "item" or not.
		 * </p>
		 * <p>
		 * The rule of compare data's equal in the array is the same to JavaScript.
		 * Complex objects will compare their references, while others like number or string and so on, will just compare their values.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * Assumes the "obj" is: { id: 1, name: "eric" }
		 * Assumes the "newObj" is: { id: 1, name: "eric" }
		 * Assumes the "arr" is: ["1", null, undefined, obj, "5", undefined, 6, true, obj]
		 * 
		 * xeno.common.util.ArrayUtils.contains(arr, "11") = false
		 * xeno.common.util.ArrayUtils.contains(arr, "1") = true
		 * xeno.common.util.ArrayUtils.contains(arr, null) = true
		 * xeno.common.util.ArrayUtils.contains(arr, undefined) = true
		 * xeno.common.util.ArrayUtils.contains(arr, obj) = true
		 * xeno.common.util.ArrayUtils.contains(arr, newObj) = false
		 * 
		 * @param arr
		 * 			The array to be checked.
		 * @param item
		 * 			The item in the array to be found.
		 * 
		 * @return
		 * 			The boolean.
		 */
		contains: function(arr, item) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'arr', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'item', index: 1");
			xc_global_ensure(Data.isArray(arr), "The argument 'arr' is not an array");

			return arr.indexOf(item) >= 0;
		},

		/**
		 * @description
		 * <p>
		 * Inserts a certain "item" into the "arr" and returns it with a new array instance.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * Assumes the "obj" is: { id: 1, name: "eric" }
		 * Assumes the "arr" is: ["1", "2", "3", "4", "5"]
		 * 
		 * xeno.common.util.ArrayUtils.insert(arr, "6") = ["1", "2", "3", "4", "5", "6"]
		 * xeno.common.util.ArrayUtils.insert(arr, "6", 0) = ["6", "1", "2", "3", "4", "5"]
		 * xeno.common.util.ArrayUtils.insert(arr, obj, 3) = ["1", "2", "3", obj, "4", "5"]
		 * xeno.common.util.ArrayUtils.insert(arr, "6", 5) = ["1", "2", "3", "4", "5", "6"]
		 * xeno.common.util.ArrayUtils.insert(arr, "6", 6) = ["1", "2", "3", "4", "5", "6"]
		 * 
		 * @param arr
		 * 			The array to be handled.
		 * @param item
		 * 			The item to be inserted into.
		 * @param index
		 * 			The position to be inserted at, optional.<br/>
		 * 			If this value is out of the array's range, the "item" will be inserted at the last position.<br/>
		 * 			The default value is: Number.MAX_VALUE.
		 * 
		 * @return
		 * 			The array.
		 */
		insert: function(arr, item, index) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'arr', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'item', index: 1");
			xc_global_ensure(Data.isArray(arr), "The argument 'arr' is not an array");

			var fixedIndex = Number.MAX_VALUE;

			if(arguments.length > 2) {
				xc_global_ensure(NumberUtils.isInt(index), "The argument 'index' is not an integer number");
				xc_global_ensure(index >= 0, "The argument 'index' is negative");

				fixedIndex = index;
			}

			var items = arr.concat([]);
			items.splice(fixedIndex, 0, item);

			return items;
		},

		/**
		 * @description
		 * <p>
		 * Removes a certain data from the "arr" by its index in it and returns a new array instance.
		 * </p>
		 * <p>
		 * This function also safe handling the "index" passes in which is out of range, it will not take effects and return the same array with different reference according to the "arr".
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.ArrayUtils.remove(["a", 7, false], 1) = ["a", false]
		 * xeno.common.util.ArrayUtils.remove(["a", 7, false], 3) = ["a", 7, false]
		 * 
		 * @param arr
		 * 			The array to be handled.
		 * @param index
		 * 			The position to be removed at.
		 * 
		 * @return
		 * 			The array.
		 */
		remove: function(arr, index) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'arr', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'index', index: 1");
			xc_global_ensure(Data.isArray(arr), "The argument 'arr' is not an array");
			xc_global_ensure(NumberUtils.isInt(index), "The argument 'index' is not an integer number");
			xc_global_ensure(index >= 0, "The argument 'index' is negative");

			var items = arr.concat([]);
			items.splice(index, 1);

			return items;
		},

		/**
		 * @description
		 * <p>
		 * Returns a new sub array from the "arr", the returned sub array starts with the data in the begin position and ends before the end position, and all position counting is zero-based.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * Assumes the "arr" is: [1, 2, 3, 4]
		 * 
		 * xeno.common.util.ArrayUtils.subarray([], 0) = []
		 * xeno.common.util.ArrayUtils.subarray([], 1) = []
		 * xeno.common.util.ArrayUtils.subarray(arr, 0) = [1, 2, 3, 4]
		 * xeno.common.util.ArrayUtils.subarray(arr, 2) = [3, 4]
		 * xeno.common.util.ArrayUtils.subarray(arr, 3) = [4]
		 * xeno.common.util.ArrayUtils.subarray(arr, 4) = []
		 * xeno.common.util.ArrayUtils.subarray(arr, 1, 3) = [2, 3]
		 * xeno.common.util.ArrayUtils.subarray(arr, 1, 4) = [2, 3, 4]
		 * xeno.common.util.ArrayUtils.subarray(arr, 1, 5) = [2, 3, 4]
		 * 
		 * @param arr
		 * 			The array to get the sub array from.
		 * @param beginIndex
		 * 			The position to start from.
		 * @param endIndex
		 * 			The position to end at (exclusive), optional.<br/>
		 * 			The default value is: Number.MAX_VALUE.
		 * 
		 * @return
		 * 			The array.
		 */
		subarray: function(arr, beginIndex, endIndex) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'arr', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'beginIndex', index: 1");
			xc_global_ensure(Data.isArray(arr), "The argument 'arr' is not an array");
			xc_global_ensure(NumberUtils.isInt(beginIndex), "The argument 'beginIndex' is not an integer number");
			xc_global_ensure(beginIndex >= 0, "The argument 'beginIndex' is negative");

			var fixedEndIndex = Number.MAX_VALUE;

			if(arguments.length > 2) {
				xc_global_ensure(NumberUtils.isInt(endIndex), "The argument 'endIndex' is not an integer number");
				xc_global_ensure(beginIndex <= endIndex, "The argument 'beginIndex' is greater than the argument 'endIndex'");

				fixedEndIndex = endIndex;
			}

			return arr.concat([]).slice(beginIndex, fixedEndIndex);
		}

	};

})();

/**
 * @class
 * <p>
 * A set of utilities for date operations.
 * </p>
 * <p>
 * When you use this class for some certain functions which have return values, a new date instance will be created and return.
 * The original date passes in will not be edited.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 */
xeno.common.util.DateUtils = (function () {
	var Data = null;
	var DateUtils = null;
	var NumberUtils = null;

	xeno.common.onCompleteCallbacks.push(function() {
		Data = xeno.common.lang.Data;
		DateUtils = xeno.common.util.DateUtils;
		NumberUtils = xeno.common.util.NumberUtils;
	});

	var MILLISECOND_OF_DAY = 86400000;

	return {

		/**
		 * @description
		 * <p>
		 * Tests whether the "year" is a leap year or not.
		 * </p>
		 * 
		 * @param year
		 * 			The year to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isLeapYear: function(year) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'year', index: 0");
			xc_global_ensure(NumberUtils.isInt(year), "The argument 'year' is not an integer number");
			xc_global_ensure(year >= 0, "The argument 'year' is negative");

			if(year % 400 === 0) {
				return true;
			}

			if(year % 4 === 0 && year % 100 !== 0) {
				return true;
			}

			return false;
		},

		/**
		 * @description
		 * <p>
		 * Returns the day sequence of the year.
		 * </p>
		 * 
		 * @param date
		 * 			The date.
		 * 
		 * @return
		 * 			The number.
		 */
		getDayOfYear: function(date) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'date', index: 0");
			xc_global_ensure(Data.isDate(date), "The argument 'date' is not a date");

			var fixedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
			var firstDate = new Date(date.getFullYear(), 0, 1);

			return (fixedDate.getTime() - firstDate.getTime()) / MILLISECOND_OF_DAY + 1;
		},

		/**
		 * @description
		 * <p>
		 * Returns the day sequence of the month.
		 * </p>
		 * 
		 * @param date
		 * 			The date.
		 * 
		 * @return
		 * 			The number.
		 */
		getDayOfMonth: function(date) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'date', index: 0");
			xc_global_ensure(Data.isDate(date), "The argument 'date' is not a date");

			return date.getDate();
		},

		/**
		 * @description
		 * <p>
		 * Returns the day sequence of the week according to ISO-8601 definition.
		 * </p>
		 * <ul>
		 * 	<li>1: Monday</li>
		 * 	<li>2: Tuesday</li>
		 * 	<li>3: Wednesday</li>
		 * 	<li>4: Thursday</li>
		 * 	<li>5: Friday</li>
		 * 	<li>6: Saturday</li>
		 * 	<li>7: Sunday</li>
		 * </ul>
		 * 
		 * @param date
		 * 			The date.
		 * 
		 * @return
		 * 			The number.
		 */
		getDayOfWeek: function(date) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'date', index: 0");
			xc_global_ensure(Data.isDate(date), "The argument 'date' is not a date");

			// return date.getDay() || 7;

			var day = date.getDay();

			return day === 0 ? 7 : day;
		},

		/**
		 * @description
		 * <p>
		 * Returns the month sequence of the year.
		 * </p>
		 * <ul>
		 * 	<li>1: January</li>
		 * 	<li>2: February</li>
		 * 	<li>3: March</li>
		 * 	<li>4: April</li>
		 * 	<li>5: May</li>
		 * 	<li>6: June</li>
		 * 	<li>7: July</li>
		 * 	<li>8: August</li>
		 * 	<li>9: September</li>
		 * 	<li>10: October</li>
		 * 	<li>11: November</li>
		 * 	<li>12: December</li>
		 * </ul>
		 * 
		 * @param date
		 * 			The date.
		 * 
		 * @return
		 * 			The number.
		 */
		getMonthOfYear: function(date) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'date', index: 0");
			xc_global_ensure(Data.isDate(date), "The argument 'date' is not a date");

			return date.getMonth() + 1;
		},

		/**
		 * @description
		 * <p>
		 * Returns the week sequence of the year.
		 * The default calculation follows the ISO-8601 definition - the week starts on Monday, the first week of the year contains the first Thursday of the year.
		 * This means that some days from one year may be placed into weeks "belonging" to another year.
		 * </p>
		 * 
		 * @param date
		 * 			The date.
		 * 
		 * @return
		 * 			The number.
		 */
		getWeekOfYear: function(date) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'date', index: 0");
			xc_global_ensure(Data.isDate(date), "The argument 'date' is not a date");

			var fixedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 4 - DateUtils.getDayOfWeek(date));
			var firstDate = new Date(fixedDate.getFullYear(), 0, 1);

			return Math.ceil((((fixedDate.getTime() - firstDate.getTime()) / MILLISECOND_OF_DAY) + 1) / 7);
		}

	};

})();

/**
 * @class
 * <p>
 * A set of utilities for HTML string operations.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 */
xeno.common.util.HtmlStringUtils = (function () {
	var Data = null;

	xeno.common.onCompleteCallbacks.push(function() {
		Data = xeno.common.lang.Data;
	});

	return {

		/**
		 * @description
		 * <p>
		 * Encodes the HTML string to the normal string.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.HtmlStringUtils.encode("&") = "&amp;"
		 * xeno.common.util.HtmlStringUtils.encode("'") = "&#39;"
		 * xeno.common.util.HtmlStringUtils.encode("a<b>b</b>c") = "a&lt;b&gt;b&lt;/b&gt;c"
		 * 
		 * @param str
		 * 			The string to be encoded.
		 * 
		 * @return
		 * 			The string.
		 */
		encode: function(str) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");

			return str.replace(/[<>&'"\s]/g, function(c) {

				return {
					"<": "&lt;",
					">": "&gt;",
					"&": "&amp;",
					"'": "&#39;",
					"\"": "&quot;",
					" ": "&nbsp;"
				}[c];
			});
		},

		/**
		 * @description
		 * <p>
		 * Decodes the normal string to the HTML string.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.HtmlStringUtils.decode("&amp;") = "&"
		 * xeno.common.util.HtmlStringUtils.decode("&#39;") = "'"
		 * xeno.common.util.HtmlStringUtils.decode("a&lt;b&gt;b&lt;/b&gt;c") = "a<b>b</b>c"
		 * 
		 * @param str
		 * 			The string to be decoded.
		 * 
		 * @return
		 * 			The string.
		 */
		decode: function(str) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");

			return str.replace(/(&lt;)|(&gt;)|(&amp;)|(&#39;)|(&quot;)|(&nbsp;)/g, function(w) {

				return {
					"&lt;": "<",
					"&gt;": ">",
					"&amp;": "&",
					"&#39;": "'",
					"&quot;": "\"",
					"&nbsp;": " "
				}[w];
			});
		}

	};

})();

/**
 * @class
 * <p>
 * A set of utilities for number operations.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 */
xeno.common.util.NumberUtils = (function () {
	var Data = null;

	xeno.common.onCompleteCallbacks.push(function() {
		Data = xeno.common.lang.Data;
	});

	return {

		/**
		 * @description
		 * <p>
		 * Tests whether the "num" is an integer or not.
		 * </p>
		 * <p>
		 * To test whether the "num" is a number or not, please see {@link xeno.common.lang.Data.isNumber} for more details.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.NumberUtils.isInt(undefined) = false
		 * xeno.common.util.NumberUtils.isInt(null) = false
		 * xeno.common.util.NumberUtils.isInt("1") = false
		 * xeno.common.util.NumberUtils.isInt({}) = false
		 * xeno.common.util.NumberUtils.isInt(0) = true
		 * xeno.common.util.NumberUtils.isInt(1.0) = true
		 * xeno.common.util.NumberUtils.isInt(0.01) = false
		 * xeno.common.util.NumberUtils.isInt(1.234E4) = true
		 * xeno.common.util.NumberUtils.isInt(1.234E2) = false
		 * 
		 * @param num
		 * 			The number to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isInt: function(num) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'num', index: 0");

			if(Data.isNumber(num)) {
				return num.toString().indexOf(".") < 0;
			}

			return false;
		},

		/**
		 * @description
		 * <p>
		 * Tests whether the "num" is a float or not.
		 * </p>
		 * <p>
		 * To test whether the "num" is a number or not, please see {@link xeno.common.lang.Data.isNumber} for more details.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.NumberUtils.isFloat(undefined) = false
		 * xeno.common.util.NumberUtils.isFloat(null) = false
		 * xeno.common.util.NumberUtils.isFloat("1") = false
		 * xeno.common.util.NumberUtils.isFloat({}) = false
		 * xeno.common.util.NumberUtils.isFloat(0) = false
		 * xeno.common.util.NumberUtils.isFloat(1.0) = false
		 * xeno.common.util.NumberUtils.isFloat(0.01) = true
		 * xeno.common.util.NumberUtils.isFloat(1.234E4) = false
		 * xeno.common.util.NumberUtils.isFloat(1.234E2) = true
		 * 
		 * @param num
		 * 			The number to be tested.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isFloat: function(num) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'num', index: 0");

			if(Data.isNumber(num)) {
				return num.toString().indexOf(".") > 0;
			}

			return false;
		}

	};

})();

/**
 * @class
 * <p>
 * A set of utilities for random operations.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 */
xeno.common.util.RandomUtils = (function () {
	var NumberUtils = null;

	xeno.common.onCompleteCallbacks.push(function() {
		NumberUtils = xeno.common.util.NumberUtils;
	});

	return {

		/**
		 * @description
		 * <p>
		 * Generates and returns an integer number between (inclusive) the "min" and "max" in randomly.
		 * </p>
		 * 
		 * @param min
		 * 			The integer minimum value.
		 * @param max
		 * 			The integer maximum value.
		 * 
		 * @return
		 * 			The integer number.
		 */
		generateInt: function(min, max) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'min', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'max', index: 1");
			xc_global_ensure(NumberUtils.isInt(min), "The argument 'min' is not an integer number");
			xc_global_ensure(NumberUtils.isInt(max), "The argument 'max' is not an integer number");
			xc_global_ensure(min <= max, "The argument 'min' is greater than the argument 'max'");

			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	};

})();

/**
 * @class
 * <p>
 * A set of utilities for string operations. We have defined some certain words related to the string handling:
 * </p>
 * <ul>
 * 	<li>empty: a zero-length string ("")</li>
 * 	<li>blank: empty or a string is only contains whitespace characters</li>
 * </ul>
 * <p>
 * When you use this class which have return values, a new string instance will be created and return.
 * The original string passes in will not be edited.
 * </p>
 * 
 * @description
 * <p>
 * The class constructor.
 * </p>
 */
xeno.common.util.StringUtils = (function () {
	var Data = null;
	var NumberUtils = null;
	var StringUtils = null;

	xeno.common.onCompleteCallbacks.push(function() {
		Data = xeno.common.lang.Data;
		NumberUtils = xeno.common.util.NumberUtils;
		StringUtils = xeno.common.util.StringUtils;
	});

	/**
	 * @ignore
	 */
	var lookup = function(str, text, newText, items) {
		var index = str.indexOf(text);

		if(index >= 0) {
			var left = str.substring(0, index);
			var right = str.substring(index + text.length);

			items.push(left + newText);
			lookup(right, text, newText, items);

		} else {
			items.push(str);
		}
	};

	return {

		/**
		 * @description
		 * <p>
		 * Removes empty strings and control characters (char ASCII less than or equals to 32) from both ends of the "str" and return a new string instance.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.trim("") = ""
		 * xeno.common.util.StringUtils.trim(" ") = ""
		 * xeno.common.util.StringUtils.trim(" aBc ") = "aBc"
		 * xeno.common.util.StringUtils.trim(" a c ") = "a c"
		 * xeno.common.util.StringUtils.trim("\n") = ""
		 * xeno.common.util.StringUtils.trim("\n\n") = ""
		 * xeno.common.util.StringUtils.trim("\na\n") = "a"
		 * 
		 * @param str
		 * 			The string to be trimmed.
		 * 
		 * @return
		 * 			The string.
		 */
		trim: function(str) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");

			return str.replace(/(^\s*)|(\s*$)/g, "");
		},

		/**
		 * @description
		 * <p>
		 * Compares two strings whether they have the same value and return the result.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.equals("", "") = true
		 * xeno.common.util.StringUtils.equals("", " ") = false
		 * xeno.common.util.StringUtils.equals("a", "a") = true
		 * xeno.common.util.StringUtils.equals("a", "A") = false
		 * xeno.common.util.StringUtils.equals("ab", "ab") = true
		 * xeno.common.util.StringUtils.equals("ab", "Ab") = false
		 * xeno.common.util.StringUtils.equals("ab", "ac") = false
		 * 
		 * @param left
		 * 			The left string to be compared.
		 * @param right
		 * 			The right string to be compared.
		 * 
		 * @return
		 * 			The boolean.
		 */
		equals: function(left, right) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'left', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'right', index: 1");
			xc_global_ensure(Data.isString(left), "The argument 'left' is not a string");
			xc_global_ensure(Data.isString(right), "The argument 'right' is not a string");

			return left === right;
		},

		/**
		 * @description
		 * <p>
		 * Please see {@link xeno.common.util.StringUtils.equal}, but the comparison is case insensitive.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.equalsIgnoreCase("", "") = true
		 * xeno.common.util.StringUtils.equalsIgnoreCase("", " ") = false
		 * xeno.common.util.StringUtils.equalsIgnoreCase("a", "a") = true
		 * xeno.common.util.StringUtils.equalsIgnoreCase("a", "A") = true
		 * xeno.common.util.StringUtils.equalsIgnoreCase("ab", "ab") = true
		 * xeno.common.util.StringUtils.equalsIgnoreCase("ab", "Ab") = true
		 * xeno.common.util.StringUtils.equalsIgnoreCase("ab", "ac") = false
		 * 
		 * @param left
		 * 			The left string to be compared.
		 * @param right
		 * 			The right string to be compared.
		 * 
		 * @return
		 * 			The boolean.
		 */
		equalsIgnoreCase: function(left, right) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'left', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'right', index: 1");
			xc_global_ensure(Data.isString(left), "The argument 'left' is not a string");
			xc_global_ensure(Data.isString(right), "The argument 'right' is not a string");

			return left.toUpperCase() === right.toUpperCase();
		},

		/**
		 * @description
		 * <p>
		 * Checks whether the "str" is empty or not.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.isEmpty("") = true
		 * xeno.common.util.StringUtils.isEmpty(" ") = false
		 * xeno.common.util.StringUtils.isEmpty("aBc") = false
		 * xeno.common.util.StringUtils.isEmpty("\n") = false
		 * xeno.common.util.StringUtils.isEmpty("\n\n") = false
		 * xeno.common.util.StringUtils.isEmpty("\na\n") = false
		 * 
		 * @param str
		 * 			The string to be checked.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isEmpty: function(str) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");

			return str.length === 0;
		},

		/**
		 * @description
		 * <p>
		 * Checks whether the "str" is blank or not.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.isBlank("") = true
		 * xeno.common.util.StringUtils.isBlank(" ") = true
		 * xeno.common.util.StringUtils.isBlank("aBc") = false
		 * xeno.common.util.StringUtils.isBlank("\n") = true
		 * xeno.common.util.StringUtils.isBlank("\n\n") = true
		 * xeno.common.util.StringUtils.isBlank("\na\n") = false
		 * 
		 * @param str
		 * 			The string to be checked.
		 * 
		 * @return
		 * 			The boolean.
		 */
		isBlank: function(str) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");

			return StringUtils.trim(str).length === 0;
		},

		/**
		 * @description
		 * <p>
		 * Checks whether the "str" contains the "text" or not.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.contains("", "a") = false
		 * xeno.common.util.StringUtils.contains("maya", "a") = true
		 * xeno.common.util.StringUtils.contains("maya", "ay") = true
		 * xeno.common.util.StringUtils.contains("maya", "aa") = false
		 * xeno.common.util.StringUtils.contains("maya", "") = true
		 * xeno.common.util.StringUtils.contains("", "") = true
		 * xeno.common.util.StringUtils.contains("m y ", " ") = true
		 * xeno.common.util.StringUtils.contains("ma\nya\na", "\n") = true
		 * xeno.common.util.StringUtils.contains("ma\nya\na", "a\n") = true
		 * 
		 * @param str
		 * 			The string to be checked.
		 * @param text
		 * 			The element of the string to be found.
		 * 
		 * @return
		 * 			The boolean.
		 */
		contains: function(str, text) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'text', index: 1");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");
			xc_global_ensure(Data.isString(text), "The argument 'text' is not a string");

			return str.indexOf(text) >= 0;
		},

		/**
		 * @description
		 * <p>
		 * Determines whether the "str" starts with the specified prefix or not.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.startsWith("", "") = true
		 * xeno.common.util.StringUtils.startsWith("abc", "a") = true
		 * xeno.common.util.StringUtils.startsWith("abc", "") = true
		 * xeno.common.util.StringUtils.startsWith("abc", "ab") = true
		 * xeno.common.util.StringUtils.startsWith("abc", "b") = false
		 * xeno.common.util.StringUtils.startsWith("\nabc", "\n") = true
		 * 
		 * @param str
		 * 			The string to be checked.
		 * @param text
		 * 			The element of the string to be found.
		 * 
		 * @return
		 * 			The boolean.
		 */
		startsWith: function(str, text) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'text', index: 1");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");
			xc_global_ensure(Data.isString(text), "The argument 'text' is not a string");

			return str.indexOf(text) === 0;
		},

		/**
		 * @description
		 * <p>
		 * Determines whether the "str" ends with the specified suffix or not.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.endsWith("", "") = true
		 * xeno.common.util.StringUtils.endsWith("abc", "c") = true
		 * xeno.common.util.StringUtils.endsWith("abc", "") = true
		 * xeno.common.util.StringUtils.endsWith("abc", "bc") = true
		 * xeno.common.util.StringUtils.endsWith("abc", "b") = false
		 * xeno.common.util.StringUtils.endsWith("abc\n", "\n") = true
		 * 
		 * @param str
		 * 			The string to be checked.
		 * @param text
		 * 			The element of the string to be found.
		 * 
		 * @return
		 * 			The boolean.
		 */
		endsWith: function(str, text) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'text', index: 1");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");
			xc_global_ensure(Data.isString(text), "The argument 'text' is not a string");

			var index = str.lastIndexOf(text);

			return index < 0 ? false : text === str.substring(index);
		},

		/**
		 * @description
		 * <p>
		 * Reverses each character in the "str" and returns it with a new string instance.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.reverse("bat") = "tab"
		 * xeno.common.util.StringUtils.reverse(" ba\nt") = "t\nab "
		 * 
		 * @param str
		 * 			The string to be reversed.
		 * 
		 * @return
		 * 			The string.
		 */
		reverse: function(str) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");

			return str.split("").reverse().join("");
		},

		/**
		 * @description
		 * <p>
		 * Returns the "str" with content by the length defined, rest will be truncated and be displayed with "...".
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.abbreviate("", *) = ""
		 * xeno.common.util.StringUtils.abbreviate("abcd", 0) = "..."
		 * xeno.common.util.StringUtils.abbreviate("abcd", 2) = "..."
		 * xeno.common.util.StringUtils.abbreviate("abcd", 3) = "..."
		 * xeno.common.util.StringUtils.abbreviate("abcd", 4) = "abcd"
		 * xeno.common.util.StringUtils.abbreviate("abcd", 5) = "abcd"
		 * xeno.common.util.StringUtils.abbreviate("abcdefg", 5) = "ab..."
		 * 
		 * @param str
		 * 			The string to be abbreviated.
		 * @param length
		 * 			The length of content to remain, the extended content will be truncated and be displayed with "...".
		 * 
		 * @return
		 * 			The string.
		 */
		abbreviate: function(str, length) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'length', index: 1");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");
			xc_global_ensure(NumberUtils.isInt(length), "The argument 'length' is not an integer number");
			xc_global_ensure(length >= 0, "The argument 'length' is negative");

			var count = str.length;
			var delta = length - count;

			if(delta >= 0) {
				return str;
			}

			return str.substring(0, count + delta - 3) + "...";
		},

		/**
		 * @description
		 * <p>
		 * Capitalizes a string, changing the first letter in the "str" to upper case, no other letters is changed.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.capitalize("abc") = "Abc"
		 * xeno.common.util.StringUtils.capitalize("\na") = "\na"
		 * xeno.common.util.StringUtils.capitalize("a\n") = "A\n"
		 * xeno.common.util.StringUtils.capitalize("abc def ghi") = "Abc def ghi"
		 * xeno.common.util.StringUtils.capitalize("\na b\r \tc") = "\na b\r \tc"
		 * xeno.common.util.StringUtils.capitalize("a\n \rb c\t") = "A\n \rb c\t"
		 * 
		 * @param str
		 * 			The string to be capitalized.
		 * 
		 * @return
		 * 			The string.
		 */
		capitalize: function(str) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");

			return str.charAt(0).toUpperCase() + str.substring(1);
		},

		/**
		 * @description
		 * <p>
		 * Uncapitalizes a string, changing the first letter in the "str" to lower case, no other letters is changed.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.uncapitalize("Abc") = "abc"
		 * xeno.common.util.StringUtils.uncapitalize("\nA") = "\nA"
		 * xeno.common.util.StringUtils.uncapitalize("A\n") = "a\n"
		 * xeno.common.util.StringUtils.uncapitalize("ABC DEF GHI") = "aBC DEF GHI"
		 * xeno.common.util.StringUtils.uncapitalize("\nA B\r \tC") = "\nA B\r \tC"
		 * xeno.common.util.StringUtils.uncapitalize("A\n \rB C\t") = "a\n \rB C\t"
		 * 
		 * @param str
		 * 			The string to be uncapitalized.
		 * 
		 * @return
		 * 			The string.
		 */
		uncapitalize: function(str) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");

			return str.charAt(0).toLowerCase() + str.substring(1);
		},

		/**
		 * @description
		 * <p>
		 * Replaces all "text" string in the "str" with the "newText" and return it with a new string instance.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.replace("maya", "a", "b") = "mbyb"
		 * xeno.common.util.StringUtils.replace("maya", "", "b") = "maya"
		 * xeno.common.util.StringUtils.replace("maya", "a", "") = "my"
		 * xeno.common.util.StringUtils.replace("maya", "ay", "c") = "mca"
		 * xeno.common.util.StringUtils.replace("maya", "a", "cd") = "mcdycd"
		 * xeno.common.util.StringUtils.replace("maya", "ay", "cd") = "mcda"
		 * 
		 * @param str
		 * 			The string to be handled.
		 * @param text
		 * 			The element of the string to be replaced.
		 * @param newText
		 * 			The replacement string.
		 * 
		 * @return
		 * 			The string.
		 */
		replace: function(str, text, newText) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'text', index: 1");
			xc_global_ensure(arguments.length > 2, "Missing required argument 'newText', index: 2");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");
			xc_global_ensure(Data.isString(text), "The argument 'text' is not a string");
			xc_global_ensure(Data.isString(newText), "The argument 'newText' is not a string");

			if(text.length > 0) {
				var items = [];

				lookup(str, text, newText, items);

				return items.join("");
			}

			return str;
		},

		/**
		 * @description
		 * <p>
		 * Removes all "text" string in the "str" and returns it with a new string instance.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.remove("maya", "a") = "my"
		 * xeno.common.util.StringUtils.remove("maya", "") = "maya"
		 * xeno.common.util.StringUtils.remove("maya", "ay") = "ma"
		 * xeno.common.util.StringUtils.remove("ma\na", "\n") = "maa"
		 * 
		 * @param str
		 * 			The string to be handled.
		 * @param text
		 * 			The element of the string to be removed.
		 * 
		 * @return
		 * 			The string.
		 */
		remove: function(str, text) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'text', index: 1");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");
			xc_global_ensure(Data.isString(text), "The argument 'text' is not a string");

			return StringUtils.replace(str, text, "");
		},

		/**
		 * @description
		 * <p>
		 * Removes the "text" string starts in the "str" and returns it with a new string instance.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.removeStart("maya", "") = "maya"
		 * xeno.common.util.StringUtils.removeStart("maya", "a") = "maya"
		 * xeno.common.util.StringUtils.removeStart("mayamaya", "m") = "ayamaya"
		 * xeno.common.util.StringUtils.removeStart("mayamaya", "ma") = "yamaya"
		 * xeno.common.util.StringUtils.removeStart("mayamaya", "ya") = "mayamaya"
		 * xeno.common.util.StringUtils.removeStart("\nmaya\n", "\n") = "maya\n"
		 * 
		 * @param str
		 * 			The string to be handled.
		 * @param text
		 * 			The element of the string to be removed.
		 * 
		 * @return
		 * 			The string.
		 */
		removeStart: function(str, text) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'text', index: 1");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");
			xc_global_ensure(Data.isString(text), "The argument 'text' is not a string");

			var index = str.indexOf(text);

			if(index === 0) {
				return str.substring(text.length);
			}

			return str;
		},

		/**
		 * @description
		 * <p>
		 * Removes the "text" string ends in the "str" and returns it with a new string instance.
		 * </p>
		 * 
		 * @example
		 * <b>Examples</b>
		 * 
		 * xeno.common.util.StringUtils.removeEnd("maya", "") = "maya"
		 * xeno.common.util.StringUtils.removeEnd("maya", "a") = "maya"
		 * xeno.common.util.StringUtils.removeEnd("mayamaya", "a") = "mayamay"
		 * xeno.common.util.StringUtils.removeEnd("mayamaya", "ya") = "mayama"
		 * xeno.common.util.StringUtils.removeEnd("mayamaya", "ay") = "mayamaya"
		 * xeno.common.util.StringUtils.removeEnd("\nmaya\n", "\n") = "\nmaya"
		 * 
		 * @param str
		 * 			The string to be handled.
		 * @param text
		 * 			The element of the string to be removed.
		 * 
		 * @return
		 * 			The string.
		 */
		removeEnd: function(str, text) {
			xc_global_ensure(arguments.length > 0, "Missing required argument 'str', index: 0");
			xc_global_ensure(arguments.length > 1, "Missing required argument 'text', index: 1");
			xc_global_ensure(Data.isString(str), "The argument 'str' is not a string");
			xc_global_ensure(Data.isString(text), "The argument 'text' is not a string");

			var index = str.lastIndexOf(text);

			if(index === str.length - text.length) {
				return str.substring(0, index);
			}

			return str;
		}

	};

})();

(function() {
	var callbacks = xeno.common.onCompleteCallbacks;

	for(var i = 0; i < callbacks.length; i += 1) {
		callbacks[i]();
	}

	delete xeno.common.onCompleteCallbacks;

})();
