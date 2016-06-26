var fs = require('fs');

function mergeValues(values, content) {
  //Cycle over the keys
  for(var key in values) {
    //Replace all keys with the values from the value object
    content = content.replace('{{' + key + '}}', values[key]);
  }
  
  //return merged content
  return content
}

function view(templateName, values, response) {
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: 'UTF8'});
  //Insert values to the content
  fileContents = mergeValues(values, fileContents);
  //Write out the contents to the response
  response.write(fileContents);
}

module.exports.view = view;