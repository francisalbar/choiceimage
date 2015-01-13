# Image Resize and Optimization

Resampling with GraphicsMagick and Optimization with ImageMin. This takes a target image, resamples them to 320, 480, 800, 1280, 1600, 2048 widths without upscaling, then optimizes.

## Prerequisites

1. Install [GraphicsMagick](http://www.graphicsmagick.org/INSTALL-unix.html)
2. Install [Node.js](http://nodejs.org/download/)

## Running

1. Clone the repository
2. Run `npm install` from the root of the repository
3. Run `gulp` to optimize the example images (default outputs to `/build`)

## Running with specific image

``gulp --srcimage PATH/TO/image.jpg --targetpath PATH/TO/TARGET/FOLDER``