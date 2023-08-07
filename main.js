var req = new XMLHttpRequest();

req.open("get", "log.csv", true);
req.send(null);

req.onload = () => {
  var rows = req.responseText.split("\n");
  var entities = "";

  for (var rowNumber = 1; rowNumber < rows.length - 1; ++rowNumber) {
    if (rowNumber % 100 == 0) {
      var row = rows[rowNumber];
      var columns = row.split(",");

      var latitude = columns[85];
      var longitude = columns[86];
      var altitude = columns[87];

      entities += `<a-entity material="color: red" geometry="primitive: sphere; radius: 5" position="0 ${altitude} 0" gps-new-entity-place="latitude: ${latitude}; longitude: ${longitude}"></a-entity>`;
    }
  }

  console.log(entities);
  alert("loaded");
};
