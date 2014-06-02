filer-dialogs
=============

A set of web-native dialogs for selecting files and directories. It relies on [js-platform/filer](https://github.com/js-platform/filer) for an in-browser filesystem and replaces the native file and directory dialogs with cross-browser ones.

API Reference
=============



FilerDialog.showOpenDialog(...)
-------------------------------

Show an "Open" dialog and return the file(s)/directories selected by the user

Arguments:
<dl>
  <dt>allowMultipleSelection</dt>
  <dd>Allows selecting more than one file at a time</dd>
  <dt>chooseDirectories</dt>
  <dd>Allows directories to be opened</dd>
  <dt>title</dt>
  <dd>The title of the dialog</dd>
  <dt>initialPath</dt>
  <dd>
    The folder opened inside the window initially. If initialPath
    is not set, or it doesn't exist, the window would show the last
    browsed folder depending on the OS preferences
  </dd>
  <dt>fileTypes</dt>
  <dd>
    List of extensions that are allowed to be opened, without leading ".".
    Null or empty array allows all files to be selected. Not applicable
    when chooseDirectories = true.
  </dd>
  <dt>callback</dt>
  <dd>
    Callback resolved with a FileSystemError
    string or the selected file(s)/directories. If the user cancels the
    open dialog, the error will be falsy and the file/directory array will
    be empty.
  </dd>
</dl>


