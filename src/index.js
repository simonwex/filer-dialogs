/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


module.exports = {
  // Function definition borrowed from https://github.com/adobe/brackets/blob/master/src/filesystem/FileSystem.js#L619
  /**
   * Show an "Open" dialog and return the file(s)/directories selected by the user.
   *
   * @param {boolean} allowMultipleSelection Allows selecting more than one file at a time
   * @param {boolean} chooseDirectories Allows directories to be opened
   * @param {string} title The title of the dialog
   * @param {string} initialPath The folder opened inside the window initially. If initialPath
   *                          is not set, or it doesn't exist, the window would show the last
   *                          browsed folder depending on the OS preferences
   * @param {?Array.<string>} fileTypes
   *                          List of extensions that are allowed to be opened, without leading ".".
   *                          Null or empty array allows all files to be selected. Not applicable
   *                          when chooseDirectories = true.
   * @param {function (?string, Array.<string>=)} callback Callback resolved with a FileSystemError
   *                          string or the selected file(s)/directories. If the user cancels the
   *                          open dialog, the error will be falsy and the file/directory array will
   *                          be empty.
   */
  showOpenDialog: function(allowMultipleSelection,
                           chooseDirectories,
                           title,
                           initialPath,
                           fileTypes,
                           callback) {

  }
}
