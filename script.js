let header = "<tr><th>Material</th><th>Type</th><th>min RH</th><th>max RH</th></tr>";
// $("#table").append(header);

let createTable = function(rh) {
  let tableRows = '';
  for (let i = 0; i < materials.length; i = i + 1) {
    let color;
    let row = materials[i];
    color = "table-warning";
    if (rh < row.minRH || row.maxRH < rh) {
      color = "table-danger";
    }
    if (rh > row.minRH && rh < row.maxRH) {
      color = "table-success";
    }
    let rowHTML = `
   <tr class=\"` + color + `\">
   <td>` + row.name + `</td>
   <td>` + row.type + `</td>
   <td>` + row.minRH + `%</td>
   <td>` + row.maxRH + `%</td>
   </tr>`;
    tableRows = tableRows + rowHTML;
  }
  $("#yourRH").html("Your reported relative humidity is " + rh + "%");
  $("#table").html(header + tableRows);
};


let zxc = function(abc) {
  $("#table").append("<tr><td>" + abc + "</td></tr>");
};

$("#form").submit(function(e) {
  e.preventDefault();
  let userRH = Number($("#rh").val());
  console.log("User input is " + userRH);
  createTable(userRH);
});
