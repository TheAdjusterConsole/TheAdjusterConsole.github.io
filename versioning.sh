#!/bin/bash

# Set the version to the current date and time
VERSION=$(date +%Y%m%d%H%M%S)

# Find all HTML files and append the version to CSS and JS files
find . -name '*.html' -exec sed -i "s|\(href=\"CSS/Stable.css\)|\1?v=$VERSION|g; \
                                    s|\(href=\"CSS/Common.css\)|\1?v=$VERSION|g; \
                                    s|\(href=\"CSS/Orig/Buttons.css\)|\1?v=$VERSION|g; \
                                    s|\(href=\"CSS/Neu/Buttons.css\)|\1?v=$VERSION|g; \
                                    s|\(href=\"CSS/contextMenu.css\)|\1?v=$VERSION|g; \
                                    s|\(href=\"CSS/Orig/AppearOpts.css\)|\1?v=$VERSION|g; \
                                    s|\(href=\"CSS/Orig/Resource.css\)|\1?v=$VERSION|g; \
                                    s|\(href=\"CSS/Neu/AppearOpts.css\)|\1?v=$VERSION|g; \
                                    s|\(href=\"CSS/Neu/Resource.css\)|\1?v=$VERSION|g; \
                                    s|\(src=\"JavaScript/Variable.js\)|\1?v=$VERSION|g; \
                                    s|\(src=\"JavaScript/OGLAYOUTJS.js\)|\1?v=$VERSION|g; \
                                    s|\(src=\"JavaScript/ChangeAppearance1.js\)|\1?v=$VERSION|g; \
                                    s|\(src=\"JavaScript/ChangeAppearance2.js\)|\1?v=$VERSION|g; \
                                    s|\(src=\"JavaScript/commonScript.js\)|\1?v=$VERSION|g" {} \;
