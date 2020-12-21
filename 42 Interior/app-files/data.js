var APP_DATA = {
  "scenes": [
    {
      "id": "0-master-berth",
      "name": "Master Berth",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.652220307485985,
        "pitch": 0.30084090268936237,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.9845218258285158,
          "pitch": 0.3815196358161721,
          "rotation": 0,
          "target": "1-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-head",
      "name": "Head",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.0315744980374113,
        "pitch": 0.6273990697249854,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.9269260058691504,
          "pitch": 0.4034639576904482,
          "rotation": 1.5707963267948966,
          "target": "0-master-berth"
        },
        {
          "yaw": -1.5713330863471224,
          "pitch": 0.7716329522472343,
          "rotation": 0,
          "target": "2-refreshment"
        },
        {
          "yaw": -2.0679785328505584,
          "pitch": 0.3693288725545365,
          "rotation": 4.71238898038469,
          "target": "3-aft-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-refreshment",
      "name": "Refreshment",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5600902797703675,
        "pitch": 0.36212610795645617,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.20589289115237008,
          "pitch": 0.7023379921401514,
          "rotation": 0,
          "target": "3-aft-berth"
        },
        {
          "yaw": -3.045509215500097,
          "pitch": 0.8874411140338445,
          "rotation": 0,
          "target": "0-master-berth"
        },
        {
          "yaw": -1.902418227712122,
          "pitch": 0.8069793428822614,
          "rotation": 0,
          "target": "1-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-aft-berth",
      "name": "Aft Berth",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6443534990495223,
        "pitch": 0.43332374884490577,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.09887393196937921,
          "pitch": 0.13399296882307965,
          "rotation": 0,
          "target": "2-refreshment"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Concept - Island Time",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
