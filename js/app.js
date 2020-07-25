var context = {
    "name": "Holly Blues",
    "occupation": "developer"
}

var templateScript = Handlebars.templates.header(context);

$(document.body).append(templateScript);