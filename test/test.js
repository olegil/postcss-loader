var expect = require('chai').expect;

describe('postcss-loader', function() {

    it('processes CSS with default plugins', function () {
        var css = require('!raw-loader!../!./cases/style.css');
        expect(css).to.eql('a { color: red }\n');
    });

    it('processes CSS with custom plugins', function () {
        var css = require('!raw-loader!../?pack=blues!./cases/style.css');
        expect(css).to.eql('a { color: blue }\n');
    });

    it('processes CSS in safe mode', function () {
        var css = require('!raw-loader!../?safe=1!./cases/broken.css');
        expect(css).to.eql('a { one color: red }\n');
    });

});
