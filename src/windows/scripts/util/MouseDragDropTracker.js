﻿// constructor: MouseDragDropTracker
function MouseDragDropTracker() {
    var self = this;

    // Drag-drop session.
    // The session is started from the function start.
    // null = no active session.
    self.session = null;

    // Handle the mouse down event
    // e:
    //    document mousedown event arguments.
    // events:
    //    {
    //       init: function (session) { ... },
    //       transform: function (session, dx, dy, x, y, first, completed) { ... }
    //    }    
    self.start = function (e, events) {
        // Create the drag-drop session
        var session = {
            target: e.target,
            initialPageX: e.pageX,
            initialPageY: e.pageY,
            first: true,            
            transform: events.transform,
        };

        // Initialize the session
        events.init(session);

        // Store the session
        self.session = session;

        // Add the event listener for mouse-move and mouse-up
        window.addEventListener('mousemove', self.moveHandler, true);
        window.addEventListener('mouseup', self.moveUpHandler, false);

        // Prevent text selection
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    };

    // Get if any drag-drop session is active
    self.hasSession = function () {
        return self.session !== null;
    }

    // Mouse move handler    
    self.moveHandler = function (e) {
        // Calculate the x and y difference between the session start and now.
        var dx = e.pageX - self.session.initialPageX;
        var dy = e.pageY - self.session.initialPageY;

        // Invoke the transform function
        self.session.transform(self.session, dx, dy, e.pageX, e.pageY, self.session.first, false);

        // Reset the first-flag
        self.session.first = false;

        // Prevent text selection
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    };

    // Mouse up handler   
    self.moveUpHandler = function (e) {
        // Remove the event listeners for mouse move and mouse up
        window.removeEventListener('mousemove', self.moveHandler, true);
        window.removeEventListener('mouseup', self.moveUpHandler, false);

        // Calculate the x and y difference between the session start and now.
        var dx = e.pageX - self.session.initialPageX;
        var dy = e.pageY - self.session.initialPageY;

        // Invoke the transform function
        self.session.transform(self.session, dx, dy, e.pageX, e.pageY, self.session.first, true);

        // Destroy the drag session
        self.session = null;
    };    
}
