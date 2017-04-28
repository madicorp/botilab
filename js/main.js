$(document).ready(function() {
    $('#firststep').sparkline([65,25,15], {
        type: "pie",
        // Map the offset in the list of values to a name to use in the tooltip
        height:154,
        sliceColors:['#336799','#ECA928', '#A8BED4']
    });

    $('#secondstep').sparkline([55,25,15,10], {
        type: "pie",
        // Map the offset in the list of values to a name to use in the tooltip
        height:154,
        sliceColors:['#336799','#ECA928','#A8BED4','#5DA4AA']
    });

    $('#thirdstep').sparkline([60,20,10], {
        type: "pie",
        // Map the offset in the list of values to a name to use in the tooltip
        height:154,
        sliceColors:['#336799','#ECA928', '#A8BED4']
    });
});
