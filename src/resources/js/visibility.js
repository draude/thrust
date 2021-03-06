function setupVisibility(hideConfig, showConfig) {
    $.each(hideConfig, function (panel_id, visibility) {
        setupFormFieldVisibility(panel_id, visibility, 'hide');
    });
    $.each(showConfig, function (panel_id, visibility) {
        setupFormFieldVisibility(panel_id, visibility, 'show');
    });
}

function setupFormFieldVisibility(panel_id, visibility, type) {
    showOrHideFormVisibility(panel_id, visibility, false, type);
    $("#" + visibility["field"]).change(function (event) {
        showOrHideFormVisibility(panel_id, visibility, true, type);
    });
}

function showOrHideFormVisibility(panel_id, visibility, animated, type) {
    var animationSpeed = animated ? 'fast' : 0;
    if ($("#" + visibility["field"]).val() == visibility["value"]) {
        if (type == 'show') {
            $("#panel_" + panel_id).show(animationSpeed);
            $("#panel_" + panel_id + " :input").removeAttr("disabled");
        } else {
            $("#panel_" + panel_id).hide(animationSpeed);
            $("#panel_" + panel_id + " :input").attr("disabled", "true");
        }
    } else {
        if (type == 'show') {
            $("#panel_" + panel_id).hide(animationSpeed);
            $("#panel_" + panel_id + " :input").attr("disabled", "true");
        } else {
            $("#panel_" + panel_id).show(animationSpeed);
            $("#panel_" + panel_id + " :input").removeAttr("disabled");
        }
    }
}