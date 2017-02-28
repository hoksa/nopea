# Nopea
Boilerplate to get quickly up and running with prototyping frontend work.

## Install

1. [Download the package](https://github.com/hoksa/nopea/archive/master.zip) **or** clone the repository:

	```
	git clone --bare git@github.com:hoksa/nopea.git
	```

	The `--bare` allows you to make an independent copy of the repository without tracking the original master.

2. Install dependencies:

	```
	npm install
	```

## Usage

To start developing run:

```
gulp
```

This will start a development server that will listen to any files and automatically refresh the browser.

## CSS

This boilerplate is barebones by design, however it does come with a few CSS processors to get up and running quickly.

- [Autoprefixer](https://github.com/postcss/autoprefixer) allows you to write your CSS rules without vendor prefixes.
- [PreCSS](https://github.com/jonathantneal/precss) allows you to use Sass-like markup in your CSS files, such as variables and mixins.

**Important!** Make sure you write and/or include your styles in `src/precss/styles.css`. This is the source file the processors use for compiling.
