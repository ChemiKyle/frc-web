$.getJSON("https://redcap.ctsi.ufl.edu/redcap/api/?type=module&prefix=redcap_webservices&page=plugins%2Fendpoint&NOAUTH&query_id=FRCOVID_appointments&project_id=8258", function(data) {
    let tbl_body = "";
    let i = 0;
    $.each(data.data, function() {
        let tbl_row = "";
        $.each(this, function(k , v) {
            tbl_row += "<td>"+v+"</td>";
        });
        tbl_body += "<tr>"+tbl_row+"</tr>";
    });
    $("#appointment_table tbody").html(tbl_body);
});
