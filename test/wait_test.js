require('../wait');
require('should');

describe('wait', function() {
    it('should run the callback after 100 ms (passing a number).', function(done) {
        var me = '',
            cb = function() { me = 'elving'; };

        wait(100, cb);

        setTimeout(function() {
            me.should.equal('elving');
            done();
        }, 100);
    });

    it('should run the callback after 1 second (passing a string).', function(done) {
        var me = '',
            cb = function() { me = 'ELVING'; };

        wait('1 second', cb);

        setTimeout(function() {
            me.should.equal('ELVING');
            done();
        }, 1000);
    });
});

describe('repeat', function() {
    it('should run the callback every 100 ms (passing a number).', function(done) {
        var count = 0,
            interval = '',
            cb = function() { count += 1; };

        interval = repeat(100, cb);

        setTimeout(function() {
            clearInterval(interval);
            count.should.eql(4);
            done();
        }, 500);
    });

    it('should run the callback every second (passing a string).', function(done) {
        var count = 0,
            interval = '',
            cb = function() { count += 1; };

        interval = repeat('1s', cb);

        setTimeout(function() {
            clearInterval(interval);
            count.should.equal(4);
            done();
        }, 5000);
    });

    it('should run the callback immediately and every second (passing a string).', function(done) {
        var count = 0,
            interval = '',
            cb = function() { count += 1; };

        interval = repeat('1s', cb, true);

        setTimeout(function() {
            clearInterval(interval);
            count.should.equal(5);
            done();
        }, 5000);
    });
});