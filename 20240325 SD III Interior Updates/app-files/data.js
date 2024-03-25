var APP_DATA = {
  "scenes": [
    {
      "id": "0-cabin",
      "name": "Cabin",
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
        "yaw": 0.9678244368951532,
        "pitch": 0.2642203881252634,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.635823181191518,
          "pitch": 0.6067050346911422,
          "rotation": 3.141592653589793,
          "target": "1-seated-fwd"
        },
        {
          "yaw": -2.933032522862046,
          "pitch": 0.14273227522327048,
          "rotation": 0,
          "target": "2-head"
        },
        {
          "yaw": -1.6664539261625766,
          "pitch": 0.7016136339752244,
          "rotation": 3.141592653589793,
          "target": "3-mid-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-seated-fwd",
      "name": "Seated FWD",
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
        "yaw": 2.0641908093876014,
        "pitch": 0.0003533131115140975,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.9540869776343257,
          "pitch": 0.05085949380545429,
          "rotation": 4.71238898038469,
          "target": "2-head"
        },
        {
          "yaw": 2.0710466169379824,
          "pitch": 0.32799569320755495,
          "rotation": 3.141592653589793,
          "target": "3-mid-berth"
        },
        {
          "yaw": 2.0556729544080614,
          "pitch": 0.5743058871736721,
          "rotation": 9.42477796076938,
          "target": "0-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-head",
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
        "yaw": 1.6393703693779536,
        "pitch": 0.6914353777553437,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.0292196734526833,
          "pitch": 0.6235360307186504,
          "rotation": 0,
          "target": "0-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-mid-berth",
      "name": "Mid Berth",
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
        "yaw": 1.5881702861670242,
        "pitch": 0.24355050487434937,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.5652336462917038,
          "pitch": -0.010107742427322819,
          "rotation": 3.141592653589793,
          "target": "1-seated-fwd"
        },
        {
          "yaw": 1.5365519948180806,
          "pitch": 0.26866191094574177,
          "rotation": 3.141592653589793,
          "target": "0-cabin"
        },
        {
          "yaw": 1.6783876958290662,
          "pitch": -0.2743139676146118,
          "rotation": 1.5707963267948966,
          "target": "2-head"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20240325 SDIII Interior",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
