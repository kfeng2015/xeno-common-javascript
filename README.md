# Brief

The standard JavaScript library fail to provide enough functions for manipulation of its core classes. Just like Apache Commons Lang for Java does, the "xeno-common-javascript" (the "XCJ") library provides much needed additions to it. Very generic, very reusable components for everyday using.

This library could work well in most modern standard browsers with ECMAScript 5 features. All unit tests have been tested and passed on this kind of browsers, and all expected results are consistent.

# License

The XCJ is free software, licensed under the Apache License, Version 2.0. Commercial and non-commercial use are permitted in compliance with this license. You may obtain a copy of the license at: "http://www.apache.org/licenses/LICENSE-2.0". In addition, a copy of the license is included with this distribution.

The source code is available at: "https://github.com/kfeng2015/xeno-common-javascript".

# Installation

Unzip the distributed ZIP to any directory. You will get a directory named "xeno-common-javascript-x.x.x", and the "x.x.x" is the version of this library you have chosen to download. Each release comes with below structure:

        <xeno-common-javascript-x.x.x>
                <docs> - The API & source code documents folder.
                LICENSE - The license document.
                xeno-common-javascript-x.x.x.js - The all combined together file with readable code format and comments.
                xeno-common-javascript-x.x.x.min.js - The all combined together file in minified code format.
                xeno-common-javascript-x.x.x-lite.js - Same as "xeno-common-javascript-x.x.x.js" file except there is no pass in arguments checking in each function.
                xeno-common-javascript-x.x.x-lite.min.js - Same as "xeno-common-javascript-x.x.x.min.js" file except there is no pass in arguments checking in each function.

The "*.js" is the only file you should add it into your pages like:

        <script type="text/javascript" src="./xeno-common-javascript-x.x.x.min.js"></script>

Normally, in the XCJ, each function will check pass in arguments about their count, data type and even some conditions to ensure you have passed correct arguments. In most cases, you would pass in correct arguments, if so, we recommend you to use the "*-lite.js" to reduce file size of the network transmission and improve function calling performance.

# Getting Started

Before you begin to use it, it's a good time to introduce some classes in this library, they provide certain useful functions in your daily coding works.

- Utilities

The XR provides some utilities like: StringUtils, ArrayUtils, DateUtils, and so on. Below code snippet just list some of them you might be interested in.

        // Truncates string content by defined length and displays "...".
        xeno.common.util.StringUtils.abbreviate("abcdefg", 5) = "ab..."

        // Similar to the "String#substring" function, but this is for arrays.
        xeno.common.util.ArrayUtils.subarray([1, 2, 3, 4], 2) = [3, 4]
        xeno.common.util.ArrayUtils.subarray([1, 2, 3, 4], 1, 3) = [2, 3]

        // Calculates the week of year according to the ISO-8601 definition.
        xeno.common.util.DateUtils.getWeekOfYear(new Date(2015, 6, 31)) = 31

- GUID

Do you still in trouble in generating a globally unique identifier? This one could help you.

        // A possible result.
        xeno.common.lang.GUID.nextValue() = "077dd84a-2449-b18e-95bd-55d207ca8bef"

- Formatter

Like Java or other languages provide formatter to format dates and numbers, now in the XCJ, we also implemented this.

        // Date formatter.
        new xeno.common.text.DateFormat("yyyy-MM-dd").format(new Date(2000, 9, 1, 2, 3, 4, 5)) = "2000-10-01"
        new xeno.common.text.DateFormat("MM/dd/yy h:m:s A").format(new Date(2009, 10, 19, 17, 29, 33, 456)) = "11/19/09 5:29:33 PM"

        // Number formatter.
        new xeno.common.text.NumberFormat("00000.##").format(1000.2) = "01000.2"
        new xeno.common.text.NumberFormat("00.00").format(1.235) = "01.24"

# Summary

There are other useful classes in this library, please find them and know how to use by the API document included in the release package.
