    (function() {
        var dataLayer = window.dataLayer || [];
        var lockFlag = 1;
        var selectors = [
            '#app > div.v-application--wrap > main > div > div > section > section:nth-child(5) > ul > li > article > div'
        ];

        function testSelector(selectors) {
            for(select in selectors){
                if(document.querySelector(selectors[select]) !== null){
                    return true;
                };
            }
            return false;
        };  

        try {
            addEventListener('visibilitychange', function(event){	
                if(testSelector(selectors) && lockFlag) {
                    dataLayer.push({
                        "event": "courseSelection",
                    });
                    lockFlag = 0;
                }
            });       
        } catch(e){
            dataLayer.push({
                "event": e
            });
        }    
    })();