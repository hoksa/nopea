# Nopea
Boilerplate to get quickly up and running with prototyping frontend work.

![Be quick about it](http://i61.tinypic.com/1z2es2a.jpg)

## Install

1. [Download the package](https://github.com/hoksa/nopea/archive/master.zip) **or** clone the repository:

	```
	git clone git@github.com:hoksa/nopea.git
	```

2. Install dependencies:

	```
	yarn
	```

## Usage

To start developing run:

```
gulp
```

This will start a development server that will listen to any files and automatically refresh the browser.

## CSS

This boilerplate is barebones by design, however it does come with [PostCSS-cssnext](http://cssnext.io/) included. The plugin allows you to safely use latest CSS syntax safely, for example automatic vendor prefixing and storing commonly used values to variables, and much more.

For more information [check the plugin website](http://cssnext.io/).

**Important!** Make sure you write and/or include your styles in `src/precss/styles.css`. This is the source file the processors use for compiling.
