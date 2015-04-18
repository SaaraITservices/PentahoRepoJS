# PentahoRepoJS

This goal of this project is to create a JavaScript class that makes interacting with the Pentaho repository from a web application easier by calling JavaScript methods instead of worrying about web service calls and parsing XML or JSON.  

This project is developed against Pentaho 5.3, but should work with earlier (and hopefully later) versions of Pentaho 5.x.

The PentahoRepository class will have the following abilities:
* Retrieve the repository tree.
* Refresh the repository tree.
* Retrieve children of a directory node.
* Get information about files.
* Get parameters for reports.
* Create a new folder.
* Delete folders and files.
* Get URLs to view or edit files (if they permit either).

## Disclaimer
This program is a personal, independant project and in no way supported or mainted by Pentaho.

## License
Copyright 2015 William D. Back

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU General Public License and
GNU Lesser General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
