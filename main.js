/**
 * FILENAME : main.js
 * 
 * PURPOSE  : This is just a simple tool for us to use internally
 *            on our projects to display markdown pages in the 
 *            browser. Feel free to use it as you need.
 *            Have a nice day. 
 *            -- @hasidicdevs/Staff
 * 
 * EXAMPLE  : const render = require('hdg-md')
 *            render('README.md')
 *
 * @__author__     = "Yosi Leyid, https://github.com/yosileyid"
 * @__contact__    = "github@hasidic.dev"
 * @__copyright__  = "Copyright 2023, $HASIDIC.DEV"
 * @__credits__    = ["@yosileyid", "@hasidicdevs"]
 * @__date__       = "2023/02/23"
 * @__deprecated__ = False
 * @__email__      = "yosi@hasidic.dev"
 * @__license__    = "MPLv2.0"
 * @__maintainer__ = "Yosi Leyid"
 * @__status__     = "Beta"
 * @__version__    = "1.0.1"
 *
 */


const marked = require('marked');
const fs = require('fs');

function render(filename) {
  const markdown = fs.readFileSync(filename, 'utf-8');
  const html = marked.parse(markdown);
  return html;
}

module.exports = {
  render: render
};
