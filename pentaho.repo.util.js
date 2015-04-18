/**
 *  pentaho.repo.util.js contains convenient methods and classes.
 *  Author:  Bill Back
 *  Tested against Pentaho 5.3
 *
 *  Copyright 2015 William D. Back
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License and
 *  GNU Lesser General Public License along with this program.
 *  If not, see <http://www.gnu.org/licenses/>.
 *
 *  This program is a personal, independent project and in no way supported 
 *  or maintained by Pentaho.  
 */

var pentaho.repo.util = (function () {

/***** Class to make calls to a repository. ************/

/**
 * General call class.
 *   URL:          The full URL to call.
 *   method:       The method to use, e.g. GET, POST, etc.
 *   parameterMap: A JavaScript object.  Parameters will be added as name/value pairs.
 */
var Call = new function (URL, method, parameterMap) {
  this.URL          = URL;
  this.method       = method;
  this.parameterMap = parameterMap;
}

/**
 * Makes a call using the populated info.
 *   onCallComplete:  If provided, this will be called when the function completes.  This
 *     provides support for asynchronous calls.
 *   onError: Called if there is an error.
 */
Call.prototype.makeCall (onCallComplete, onError) {
}

/** Return initializers. */
return {
  newCall       : function (URL, method, parameterMap) { return new Call(URL, method, parameterMap); }
  newGetCall    : function (URL, parameterMap) { return new Call(URL, "GET", parameterMap); }
  newPostCall   : function (URL, parameterMap) { return new Call(URL, "POST", parameterMap); }
  newDeleteCall : function (URL, parameterMap) { return new Call(URL, "DELETE", parameterMap); }
};

}()); // end pentaho.repo and init the module.

