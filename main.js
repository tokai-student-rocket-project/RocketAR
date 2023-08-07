var scale = 10;
var decimate = 1000;

var scene = document.querySelector("a-scene");

var req = new XMLHttpRequest();
req.open("get", "log.csv", true);
req.send(null);
req.onload = () => {
  var rows = req.responseText.split("\n");

  for (var rowNumber = 0; rowNumber < rows.length - 1; ++rowNumber) {
    if (rowNumber % decimate == 0) {
      rowNumber++;
      var row = rows[rowNumber];
      var columns = row.split(",");

      var pitch = columns[39];
      var latitude = columns[85];
      var longitude = columns[86];
      var altitude = columns[87];

      var entity = document
        .createRange()
        .createContextualFragment(
          `<a-entity material="color: #FF00FF" geometry="primitive: cylinder; height: ${
            2 * scale
          }; radius: ${0.075 * scale}" position="0 ${altitude} 0" rotation="${
            pitch - 90
          } 0 0" gps-new-entity-place="latitude: ${latitude}; longitude: ${longitude}"></a-entity>`
        );

      scene.appendChild(entity);
    }
  }

  alert(
    "H-57の軌道を読み込みました。あなたが現地にいない場合、ブラウザの「位置情報の利用を許可」を切ることで、点火所にいるものとして扱われます。"
  );
};
