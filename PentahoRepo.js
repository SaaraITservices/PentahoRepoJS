/**
 *  PentahoRepo.js is a class that is designed to make interacting with the Pentaho Repository easier to use.
 *  Author:  Bill Back
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

/** URLs for interacting with the repository. */
var SECURITY_CHECK = "j_spring_security_check";

/** 
 * Creates a new Pentaho File object.
 */
function File () {
	
}

/** 
 * Creates a new PentahoRepo object.
 * @param pentahoURL The source URL to the Pentaho server, e.g. http://localhost:8080/pentaho.
 * @param authenticator The authentication interface to use to authenticate against Pentaho.
 */
function PentahoRepo (penatahoURL, authenticator) {
	console.assert(pentahoURL != null, "No pentahoURL provided.");

	this.pentahoURL = pentahoURL;
	this.username   = username;
	this.password   = password;
	
	this.authenticate();
	this.refresh();
}

/**
 * Authenticates with the Pentaho repository to get a cookie.  Note that this only works
 * for standard repository approaches.  If some other authentication method, such as SSO
 * is being used, then a different authentication method will need to be provided.  
 */
PentahoRepo.authenticate () {
	
}

/**
 * Refresh the repository tree from the Pentaho repository.  This function is called automatically
 * when the object is created or when some change is made to the repository.  I can also be called
 * manually in case soething external may have changed the repository.
 */
PentahoRepo.refresh() = function {
	
}