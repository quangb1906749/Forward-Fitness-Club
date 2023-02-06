/* Nguyễn Thanh Quang - B1906749
30/05/2021
My Function List
*/

// Hàm giúp thêm event listener
function addEvent (el, event, callback) {
  if ('addEventListener' in el) {                  // Nếu addEventListener được hỗ trợ
    el.addEventListener(event, callback, false);   // Sử dụng addEventListener
  } else {                                         
    el['e' + event + callback] = callback;         // Ngược lại sử dụng attachEvent
    el[event + callback] = function () {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]);
  }
}

// Helper function to remove an event listener
function removeEvent(el, event, callback) {
  if ('removeEventListener' in el) {                      // If removeEventListener works
    el.removeEventListener(event, callback, false);       // Use it 
  } else {                                                // Otherwise
    el.detachEvent('on' + event, el[event + callback]);   // Create IE fallback
    el[event + callback] = null;
    el['e' + event + callback] = null;
  }
}

