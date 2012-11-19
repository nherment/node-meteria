function Timer() {
    var started = false
    var stopped = false
    
    var startDate
    var endDate
    
    var delay
    
    var self = this
    
    this.start = function() {
        if(started) {
            throw new Error("Timer already started")
        }
        started = true
        startDate = new Date()
        
        return self
    }
    
    this.stop = function() {
        if(!started) {
            throw new Error("Start the timer before stopping it")
        }
        
        if(stopped) {
            throw new Error("Timer already stopped")
        }
        
        stopped = true
        endDate = new Date()
        
        return self
    }
    
    /**
     * @return the delay in millisecs, undefined if not available
     */
    this.delay = function() {
        if(!stopped) {
            return undefined
        }
        return endDate.getTime() - startDate.getTime()
    }
}

Timer.prototype.start = function() {
    return new Timer().start()
}

module.exports = Timer