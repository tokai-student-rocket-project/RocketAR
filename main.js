var scale = 1;
var decimate = 100;

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

      // レガシー用
      var pitch = columns[39];
      var latitude = columns[85];
      var longitude = columns[86];
      var altitude = columns[87];

      // var pitch = columns[104];
      // var latitude = columns[71];
      // var longitude = columns[72];
      // var altitude = columns[73];

      var entity = document
        .createRange()
        .createContextualFragment(
          `<a-entity material="color: #FF00FF" geometry="primitive: cylinder; height: ${
            1.7 * scale
          }; radius: ${
            0.075 * scale
          }" position="0 ${altitude} 0" gps-new-entity-place="latitude: ${latitude}; longitude: ${longitude}" rotation="${
            pitch - 90
          } 0 0"></a-entity>`
        );

      scene.appendChild(entity);
    }
  }

  alert(
    "H-57の軌道を読み込みました。あなたが現地にいない場合、ブラウザの「位置情報の利用を許可」を切ることで、点火所にいるものとして扱われます。"
  );
};
