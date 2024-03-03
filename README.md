# SVG-LOGO-10

## Overview

The SVG Logo Maker is a Node.js command-line application that allows users to generate a simple logo for their projects. It prompts the user to select a color and shape, provide text for the log, and saves the generated SVG to a .svg file.

## Instructions

To get started with the SVG Logo Maker, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running 'npm install'.
3. Run the application using 'node index.js'.

## Usage

Upon running the application, you will be prompted to enter details for your logo, including text, shape, and colors. Follow the on-screen instructions to complete the process. After entering all required information, an SVG file named 'logo.svg' will be generated in the root directroy.

## Shape Classes

The 'shapes.js' file contains classes for the different shapes, including Circles, Triangle, and Square. These classes inherit from a parent Shape class and implement a 'render()' method to generate SVG code for each shape.

## Testing

The 'shapes.test.js' file contains Jest test for the shapes classes. These test ensure that the shapes render correctly with the provided colors.

## Walkthrough

Coming Soon!
