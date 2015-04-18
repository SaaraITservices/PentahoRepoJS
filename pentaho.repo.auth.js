/**
 *  pentaho.repo.auth.js is constains pre-built authentication techniques that
 *  can be used to authenticate with the repository.
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

var pentaho.repo.auth = (function () {

/**
 * Authenticators, should you choose to create your own, contain two 
 * (optional) methods.  The repository class will check for these methods
 * and use them if they exist.  The methods are:
 *   onUnauth - called before the first call to authenticate and then 
 *              called again if there is an authentication error.
 *   onCall   - called prior to each call.  This is useful for modifying the URL.
 */

/***** Generic authenticator that adds parameters to the URL. ************/

/**
 * Adds parameters to the URL of the call. 
 *   parameterMap: A JavaScript object.  Parameters will be added as name/value pairs.
 */
var ParameterBased = new function (parameterMap) {
  this.parameterMap = parameterMap;
}

/**
 * Called when a call is about to be made to the server and adds the parameters.
 *   call: A pentaho.repo.util.Call.  This adds additional parameters.
 * TODO - make a bit more robust.
 */
ParameterBased.prototype.onCall = function (call) {
  if (call.parameterMap === null) {
    call.parameterMap = this.parameterMap;
  }
  else { // seems like this could be easier.
    for (k in this.parameterMap) {
      if (call.parameterMap[k]) {
        log.error('Attempting to add a ' + k ' + ' parameter to a call that already has the same parameter.');
      } 
      else {
        call.parameterMap[k] = this.parameterMap[k];
      }
    }
  }

  return call;
}

/** Return initializers. */
return {

  newParameterBased      : function (parameterMap)     { return new ParameterBased(parameterMap); }
  newUserIdPasswordBased : function (userid, password) { 
    return new ParameterBased({ 'userid' : userid, 'password' : password); 
  }
  newTokenBased          : function (tokenName, value) { return new ParameterBased({ tokenName : token }); }

};

}()); // end pentaho.repo and init the module.

